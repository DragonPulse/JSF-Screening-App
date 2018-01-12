package com.ness.screening.servlet;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.ness.screening.util.ScreeningProperties;



public class LoadScreeningPropertiesServlet extends HttpServlet {

   private static final String PATH = "PATH ->";
/**
    * 
    */
   private static final long serialVersionUID = 1L;
   private ScreeningProperties properties = ScreeningProperties.getInstance();



   @Override
   public void init(ServletConfig config) throws ServletException {
      super.init(config);

      WebApplicationContext ctx = WebApplicationContextUtils
            .getRequiredWebApplicationContext(getServletContext());

      try {
         String initParams = config.getInitParameter("genericPropertiesList");
         loadProperties(initParams);
        
      } catch (IOException ioe) {
        ioe.printStackTrace();  
      } catch (Exception sche) {
        sche.printStackTrace();
      }

   }
   
  
  
   
   private Map<String, String> loadProperties(String initParams) throws IOException {

      List<String> listProp = null;
      InputStream in = null;
      try {
         if (initParams != null && initParams.length() > 0) {
            listProp = Arrays.asList(initParams.split(","));
         } else {
            return properties.getProperties();
         }      
         
         ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
         for (String prop : listProp) {
            Properties configProp = new Properties();
            // Build a final property key for the final map the value is stored in.
            String keyPropName = prop.substring(0, prop.indexOf(".properties")).concat("::");
            
            // Load the property file
            
            in = classLoader.getResourceAsStream(prop);
            if (in != null) {
               configProp.load(in);
               in.close();
            }
            
            Set<String> keys = configProp.stringPropertyNames();
            for (String keyName : keys) {
               String propertyValue = configProp.getProperty(keyName);
               
               while (propertyValue.indexOf("${") >= 0) {

                  String propValue = propertyValue.substring(
                        propertyValue.lastIndexOf("${") + 2,
                        propertyValue.lastIndexOf('}'));
                  String systemPropValue = null;

                  if (propValue != null) {
                     systemPropValue = System.getProperty(propValue);
                     String concatenatedPropertyValue = "${".concat(propValue).concat("}");
                     
                     // Perform System Variable value replacement of the proeprty string
                     propertyValue = propertyValue.replace(concatenatedPropertyValue, systemPropValue);
                  }

               }
               keyName = keyPropName.concat(keyName);

               properties.getProperties().put(keyName, propertyValue);
            }

         }

      } catch (IOException e) {
        e.printStackTrace();         
         
      }finally{
         if(in!=null){
            in.close();
         }
      }
      return properties.getProperties();

   }

}
