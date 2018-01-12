package com.ness.screening.util;

import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;


public final class ScreeningProperties {

   private static volatile ScreeningProperties screeningProperties;
   private static Map<String, String> mapProperties = new HashMap<String, String>();

   /**
    * This class can not be sub classed .
    */
   private ScreeningProperties() {

   }

   /**
    * 
    * @return
    */
   public static ScreeningProperties getInstance() {
      if (screeningProperties == null) {
    	  screeningProperties = new ScreeningProperties();
      }
      return screeningProperties;
   }

   public static void setProperties(Map<String, String> properties) {
      mapProperties = properties;
   }

   public Map<String, String> getProperties() {
      return mapProperties;
   }

   public Map<String, String> getPropertiesForFileName(String fileName) {
      Map<String, String> propertiesMap = new HashMap<String, String>();

      for (String keyName : mapProperties.keySet()) {
         if (keyName.substring(0, keyName.indexOf("::")).equals(fileName)) {
            propertiesMap.put(keyName, mapProperties.get(keyName));
         }

      }
      return propertiesMap;

   }

   public String getProperty(String propertyName) {
      return mapProperties.get(propertyName);
   }

   public String getPropertyNameWithoutFile(String propertyName) {
      return propertyName.substring(propertyName.indexOf("::") + 2,
            propertyName.length());
   }

   public String getPropertyValueForPropertyName(
         Map<String, String> mapProperties, String properyName) {
      for (Iterator<Entry<String, String>> iterator = mapProperties
            .entrySet().iterator(); iterator.hasNext();) {
         Map.Entry<String, String> entry = (Map.Entry<String, String>) iterator
               .next();
         String keyName = entry.getKey();
         String propName = keyName.substring(keyName.indexOf("::") + 2,
               keyName.length());
         if (propName.equals(properyName)) {
            return entry.getValue();
         }
      }
      return null;
   }

  
   public Map<String, String> loadProperty(String keyName, String propertyValue)
         throws IOException {

      try {
         if (keyName != null && propertyValue != null) {
            mapProperties.put(keyName, propertyValue);
         }

      } catch (Exception e) {
        e.printStackTrace();
      }
      return mapProperties;

   }

}
