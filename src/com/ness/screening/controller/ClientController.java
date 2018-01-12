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

import com.ness.screening.commons.logger.aspect.Loggable;
import com.ness.screening.commons.logger.util.LogLevel;
import com.ness.screening.commons.vo.HeaderVO;
import com.ness.screening.entity.Client;
import com.ness.screening.entity.User;
import com.ness.screening.entity.Vendor;
import com.ness.screening.service.ClientService;
import com.ness.screening.util.ScreeningAppHelper;
import com.ness.screening.vo.VendorVO;

@Controller
@SessionAttributes("clientController")
public class ClientController {
	
	Map<String,Object> mapOfObjects = new HashMap<String,Object>();		
	
	
	@Autowired
    private ClientService clientService;
	
	private Vendor loadVendorFromRequest(Vendor vendor,HttpServletRequest request,boolean update){
		
		vendor.setVendorName(request.getParameter("vendorCompTxt"));
		vendor.setVendorContactFirstName(request.getParameter("vendFirstNameTxt"));
		vendor.setVendorContactLastName(request.getParameter("vendLastNameTxt"));
		vendor.setVendorContactNum(request.getParameter("vendContactTxt"));
		vendor.setVendorEmailId(request.getParameter("vendEmailTxt"));
		if(update){
			vendor.setUpdatedBy((User)request.getSession().getAttribute("userVO"));
			vendor.setUpdatedDt(new Date());
		}else{
			vendor.setCreatedBy((User)request.getSession().getAttribute("userVO"));
			vendor.setCreatedDt(new Date());
		}
		
		return vendor;
		
	}
	
	/*@RequestMapping("/updateVendor")
	@Loggable(value = LogLevel.INFO)
	public  ModelAndView updateVendor(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("appController") AppController appController,BindingResult result) {	
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getVendorsTab();
		mapOfObjects.put("userVO", (User)request.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		System.out.println(request.getParameterMap());
		
		try{
			Vendor vendor= vendorService.getVendor(Integer.parseInt(request.getParameter("vendorIdTxt").toString()));
			loadVendorFromRequest(vendor, request, true);
			vendorService.update(vendor);
		}catch(Exception e){
			e.printStackTrace();
		}
		return new ModelAndView("redirect:/viewAllVendors.html","model", mapOfObjects);
	}
	*/
	
	/*@RequestMapping("/saveVendor")
	@Loggable(value = LogLevel.INFO)
	public  ModelAndView saveVendor(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("appController") AppController appController,BindingResult result) {	
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getVendorsTab();
		mapOfObjects.put("userVO", (User)request.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		System.out.println(request.getParameterMap());
		
		Vendor vendor= new Vendor();
		loadVendorFromRequest(vendor, request, false);
		try{
			vendorService.save(vendor);
		}catch(Exception e){
			e.printStackTrace();
		}
		return new ModelAndView("redirect:/viewAllVendors.html","model", mapOfObjects);
	}*/
	
	
	

	/*@RequestMapping("/getAllVendorsList")
	@Loggable(value = LogLevel.INFO)
	public @ResponseBody
	List<String> getAllVendorsList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		List<String> vendorNameList=new ArrayList<String>();
		vendorNameList=ScreeningAppHelper.buildVendorNamesForDropDown(vendorService.getAllVendors());
		return vendorNameList;
	}

	@RequestMapping("/getVendorDetails")
	@Loggable(value = LogLevel.INFO)
	public @ResponseBody
	VendorVO getVendorDetailsByName(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return ScreeningAppHelper.buildVendorNamesFromVendor(vendorService.getVendorByName(request.getParameter("selectedVendor")));
	}
	*/
	
	@RequestMapping("/getAllClientList")
	@Loggable(value = LogLevel.INFO)
	public @ResponseBody
	List<Client> getAllClientList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return clientService.getAllClients();
	}
	
	
	/*@RequestMapping("/addVendor")
	@Loggable(value = LogLevel.INFO)
	public  ModelAndView addVendor(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("appController") AppController appController,BindingResult result) {	
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getVendorsSubMenuTab(3);		
		mapOfObjects.put("userVO", (User)request.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		VendorVO vendorVO= new VendorVO();
		request.getSession().setAttribute("vendorVO",vendorVO);
		mapOfObjects.put("vendorVO", vendorVO);
		return new ModelAndView("addVendor","model", mapOfObjects);
	}*/
	
	/**
	 * method to display the Edit Screen
	 * @param httpRequest
	 * @param httpResponse
	 * @param appController
	 * @param result
	 * @return
	 *//*
	@RequestMapping("/editVendor")
	@Loggable(value = LogLevel.INFO)
	public   ModelAndView  editItem(HttpServletRequest httpRequest, HttpServletResponse httpResponse,@ModelAttribute("appController") AppController appController,BindingResult result) {	
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getVendorsSubMenuTab(3);			
		Vendor vendor=null;
		
		Integer selectedVendorId=(Integer.parseInt(httpRequest.getParameter("selectedVendor").toString()));
		
		try {
			 vendor = vendorService.getVendor(selectedVendorId);
		} catch (ApplicationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		mapOfObjects.put("editFlag", true);
		mapOfObjects.put("vendorVO", vendor);
		mapOfObjects.put("userVO", (User)httpRequest.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		return new ModelAndView("addVendor","model", mapOfObjects);
	}
	*/

	public ClientService getClientService() {
		return clientService;
	}

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}

	
	
}
