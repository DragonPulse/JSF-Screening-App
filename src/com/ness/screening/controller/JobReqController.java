package com.ness.screening.controller;



import java.util.ArrayList;
import java.util.Date;
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

import com.ness.screening.commons.dataaccess.exception.ApplicationException;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.commons.logger.aspect.Loggable;
import com.ness.screening.commons.logger.util.LogLevel;
import com.ness.screening.commons.vo.HeaderVO;
import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.JobRequirements;
import com.ness.screening.entity.User;
import com.ness.screening.entity.Vendor;
import com.ness.screening.json.JsonGridResponse;
import com.ness.screening.service.RequirementService;
import com.ness.screening.service.VendorService;
import com.ness.screening.util.ScreeningAppHelper;
import com.ness.screening.vo.CandidateVO;
import com.ness.screening.vo.VendorVO;

@Controller
@SessionAttributes("jobReqController")
public class JobReqController {
	
	Map<String,Object> mapOfObjects = new HashMap<String,Object>();		
	
	
	@Autowired
    private RequirementService requirementService;
	
	@RequestMapping("/getAllRequirements")
	@Loggable(value = LogLevel.INFO)
	public @ResponseBody
	JsonGridResponse getAllVendorDetails(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return ScreeningAppHelper.buildJobReqVoFromList(requirementService.getAllJobReq());
	}
	
	@RequestMapping("/addJobReq")
	@Loggable(value = LogLevel.INFO)
	public  ModelAndView addJobReq(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("appController") AppController appController,BindingResult result) {	
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getJobReqSubMenuTab(5);		
		mapOfObjects.put("userVO", (User)request.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		JobRequirements jobReq=new JobRequirements();
		request.getSession().setAttribute("jobReqVO",jobReq);
		mapOfObjects.put("jobReqVO", jobReq);
		return new ModelAndView("addJobReq","model", mapOfObjects);
	}
	public RequirementService getRequirementService() {
		return requirementService;
	}

	public void setRequirementService(RequirementService requirementService) {
		this.requirementService = requirementService;
	}

	
	
}
