package com.ness.screening.controller;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.commons.logger.aspect.Loggable;
import com.ness.screening.commons.logger.util.LogLevel;
import com.ness.screening.commons.vo.HeaderVO;
import com.ness.screening.constants.TechScreenConstants;
import com.ness.screening.entity.User;
import com.ness.screening.service.AppCodeService;
import com.ness.screening.service.UserService;
import com.ness.screening.service.VendorService;
import com.ness.screening.vo.UserVO;

@Controller
@SessionAttributes("appController")
public class AppController {
	
	Map<String,Object> mapOfObjects = new HashMap<String,Object>();		
	
	@Autowired
    private UserService userService;
	
	@Autowired
    private VendorService vendorService;
	
	@Autowired
    private AppCodeService appCodeService;
	
	
	@RequestMapping("/login")
	@Loggable(value = LogLevel.INFO)
	public ModelAndView showLogin() {		
		return new ModelAndView("login", "command",  new UserVO());
	}
	
	@RequestMapping("/authenticateUser")	
	@Loggable(value = LogLevel.DEBUG)
	public  ModelAndView authenticateUser(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("userVO") UserVO userVO, BindingResult result) {	
		
		User user = null;
		if(request.getParameter("userName")!=null){
			try {
				user= userService.getUser(request.getParameter("userName"), request.getParameter("password"));
			} catch (DataOperationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			if(user!=null){
				HeaderVO headerBean = new HeaderVO();
				headerBean.getHomeTab();
				mapOfObjects.put("userVO", user);				
				mapOfObjects.put("headerBean", headerBean);
				request.getSession().setAttribute("userVO", user);
				request.getSession().setAttribute("appController", this);
				return new ModelAndView("welcome","model", mapOfObjects);
			}else{
				mapOfObjects.put("userVO",userVO);
				mapOfObjects.put("error","Please Enter Proper User Name or Password. IF Problem persists Contact Administrator");
				return new ModelAndView("login","model",mapOfObjects);
			}
		}else{
			mapOfObjects.put("userVO",userVO);
			mapOfObjects.put("error","Please Enter Proper User Name or Password. IF Problem persists Contact Administrator");
			return new ModelAndView("redirect:/login.html","model",mapOfObjects);
		}
		
		
	}

	@RequestMapping("/signout")
	@Loggable(value = LogLevel.INFO)
	public ModelAndView logout(HttpServletRequest request,HttpServletResponse response) {	
		request.getSession().invalidate();
		response.setHeader("Cache-Control","no-cache");
		response.setHeader("Pragma","no-cache");
		response.setDateHeader ("Expires", -1);
		mapOfObjects.put("userVO",new User());
		mapOfObjects.put("error","SignOut SuccessFully.");
		return new ModelAndView("redirect:/login.html","model",mapOfObjects);
	}
	
	
	@RequestMapping("/viewHome")
	@Loggable(value = LogLevel.INFO)
	public  ModelAndView showHome(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("appController") AppController appController,BindingResult result) {	
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getHomeTab();
		mapOfObjects.put("userVO", (User)request.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		return new ModelAndView("welcome","model", mapOfObjects);
	}
	
	@RequestMapping("/viewMyCandidates")
	@Loggable(value = LogLevel.INFO)
	public ModelAndView showUsers(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("appController") AppController appController,BindingResult result) {		
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getCandidateTab();
		mapOfObjects.put("userVO", (User)request.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		return new ModelAndView("mycandidates","model", mapOfObjects);
	}
	
	
	@RequestMapping("/getDocTypeList")
	@Loggable(value = LogLevel.INFO)
	public @ResponseBody
	List<String> getDocTypeList() throws Exception {
		return appCodeService.getAllAppCodes(TechScreenConstants.APP_CODE_CATEGORY_DOC_TYPE);
	}

	@RequestMapping("/viewAllVendors")
	@Loggable(value = LogLevel.INFO)
	public ModelAndView viewAllVendors(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("appController") AppController appController,BindingResult result) {		
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getVendorsTab();
		mapOfObjects.put("userVO", (User)request.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		return new ModelAndView("vendors","model", mapOfObjects);
	}
	
	@RequestMapping("/viewAllRequirements")
	@Loggable(value = LogLevel.INFO)
	public ModelAndView viewAllRequirements(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("appController") AppController appController,BindingResult result) {		
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getRequirementsTab();
		mapOfObjects.put("userVO", (User)request.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		return new ModelAndView("requirements","model", mapOfObjects);
	}
	
	@RequestMapping("/getAllEmploymentType")
	@Loggable(value = LogLevel.INFO)
	public @ResponseBody
	List<String> getAllEmploymentType() throws Exception {
		return appCodeService.getAllAppCodes(TechScreenConstants.APP_CODE_EMPLOYMENT_TYPE);
	}
	
	@RequestMapping("/getAllJoiningTime")
	@Loggable(value = LogLevel.INFO)
	public @ResponseBody
	List<String> getAllRateFromAppCode() throws Exception {
		return appCodeService.getAllAppCodes(TechScreenConstants.APP_CODE_JOINING_TIME);
	}
	
	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public VendorService getVendorService() {
		return vendorService;
	}

	public void setVendorService(VendorService vendorService) {
		this.vendorService = vendorService;
	}

	public AppCodeService getAppCodeService() {
		return appCodeService;
	}

	public void setAppCodeService(AppCodeService appCodeService) {
		this.appCodeService = appCodeService;
	}
	
	
	
}
