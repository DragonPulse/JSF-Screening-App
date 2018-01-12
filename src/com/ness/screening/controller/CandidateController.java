package com.ness.screening.controller;



import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.ness.screening.commons.dataaccess.exception.ApplicationException;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.commons.logger.aspect.Loggable;
import com.ness.screening.commons.logger.util.LogLevel;
import com.ness.screening.commons.vo.HeaderVO;
import com.ness.screening.constants.TechScreenConstants;
import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.DocumentsDetails;
import com.ness.screening.entity.User;
import com.ness.screening.entity.Vendor;
import com.ness.screening.json.JsonGridResponse;
import com.ness.screening.service.CandidateService;
import com.ness.screening.service.VendorService;
import com.ness.screening.util.ScreeningAppHelper;
import com.ness.screening.util.ScreeningProperties;
import com.ness.screening.vo.CandidateVO;
import com.ness.screening.vo.MessageVO;

@Controller
@SessionAttributes("candidateController")
public class CandidateController {
	
	Map<String,Object> mapOfObjects = new HashMap<String,Object>();		
	
	@Autowired
    private CandidateService candidateService;
	
	@Autowired
    private VendorService vendorService;
	
	@RequestMapping("/saveCandidate")
	@Loggable(value = LogLevel.INFO)
	public  ModelAndView saveNewCandidate(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("appController") AppController appController,BindingResult result) {	
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getCandidateTab();
		mapOfObjects.put("userVO", (User)request.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		
		Candidate candidate= new Candidate();
		System.out.println(request.getParameterMap());
		
		loadCandidateFromRequest(candidate, request, false);
		setDocumentOfCandidate(candidate, request,false);
		System.out.println("Done Settign the Documents");
		
		
		try {
			candidateService.save(candidate);			
			mapOfObjects.put("message", new MessageVO("Cndidate Saved Successfully","success"));		
		} catch (DataOperationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			mapOfObjects.put("message", new MessageVO("Error Occured.Please Contact Administrator","error"));		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			mapOfObjects.put("message", new MessageVO("Error Occured.Please Contact Administrator","error"));		
		}
		
		
		return new ModelAndView("redirect:/viewMyCandidates.html","model", mapOfObjects);
	}
	
	@RequestMapping("/updateCandidate")
	@Loggable(value = LogLevel.INFO)
	public  ModelAndView updateCandidate(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("appController") AppController appController,BindingResult result) {	
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getCandidateTab();
		mapOfObjects.put("userVO", (User)request.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		
		try{
			Candidate candidate= candidateService.getCandidate(Integer.parseInt(request.getParameter("candidateIdTxt").toString()));
			loadCandidateFromRequest(candidate, request, true);
			setDocumentOfCandidate(candidate, request,true);
			candidateService.update(candidate);
		}catch(Exception e){
			e.printStackTrace();
		}
		return new ModelAndView("redirect:/viewMyCandidates.html","model", mapOfObjects);
	}
	
	private Candidate loadCandidateFromRequest(Candidate candidate,HttpServletRequest request,boolean update){
		candidate.setCandidateEmail(request.getParameter("candEmailTxt"));
		candidate.setCandidateFirstName(request.getParameter("candFirstNameTxt"));
		candidate.setCandidateLastName(request.getParameter("candLastNameTxt"));
		candidate.setCandidateHandeledBy((User)request.getSession().getAttribute("userVO"));
		candidate.setCandidatePhoneNumber(request.getParameter("candContactTxt"));
		if(StringUtils.isNotBlank(request.getParameter("candVendorContNameTxt"))){
			try {
				if(StringUtils.isNotEmpty(request.getParameter("candVendorContNameTxt"))){
					candidate.setVendor(vendorService.getVendorByName(request.getParameter("candVendorContNameTxt")));
				}
			} catch (ApplicationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		if(update){
			candidate.setUpdatedBy((User)request.getSession().getAttribute("userVO"));
			candidate.setUpdatedDt(new Date());
		}else{
			candidate.setCreatedBy((User)request.getSession().getAttribute("userVO"));
			candidate.setCreatedDt(new Date());
		}		
		return candidate;
		
	}

	private void setDocumentOfCandidate(Candidate candidate,HttpServletRequest request,boolean update){
		String candEmailId=candidate.getCandidateEmail();
		if(update){
			Map<String,List<DocumentsDetails>> documMap= (HashMap<String, List<DocumentsDetails>>)request.getSession().getAttribute(TechScreenConstants.SESSION_CANDIDATE_DOC_MAP);
			Set<DocumentsDetails> docDetailsNewSet=new HashSet<DocumentsDetails>();
			if(documMap!=null){
				if(null!=documMap.get(candidate.getCandidateEmail())){
					Set<DocumentsDetails> docsSet = new HashSet<DocumentsDetails>(documMap.get(candEmailId));
					for (DocumentsDetails documentsDetails : docsSet) {
						if(null==documentsDetails.getDocumentsDetailsId()){
							docDetailsNewSet.add(documentsDetails);
						}
					}
					candidate.setDocuments(docDetailsNewSet);
				}
				
			}
		}else{
			Map<String,List<DocumentsDetails>> documMap= (HashMap<String, List<DocumentsDetails>>)request.getSession().getAttribute(TechScreenConstants.SESSION_CANDIDATE_DOC_MAP);
		
			if(documMap!=null){
				if(null!=documMap.get(candEmailId)){
					Set<DocumentsDetails> docsSet = new HashSet<DocumentsDetails>(documMap.get(candEmailId));
					for (DocumentsDetails documentsDetails : docsSet) {
						documentsDetails.setCandidate(candidate);
					}
					candidate.setDocuments(docsSet);
				}
				
			}
		}
		
	}
	
	
	@RequestMapping("/getAllMyCandidates")
	@Loggable(value = LogLevel.INFO)
	public @ResponseBody
	JsonGridResponse getAllMyCandidates(HttpServletRequest request,	HttpServletResponse httpResponse) {
		JsonGridResponse response = new JsonGridResponse();
		try {
			Integer userId=((User)request.getSession().getAttribute("userVO")).getUserId();
			response = ScreeningAppHelper.buildCandidatesVOResponseFromService(candidateService.getAllMyCandidates(userId));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return response;
	}
	
	@RequestMapping("/addCandidate")
	@Loggable(value = LogLevel.INFO)
	public  ModelAndView showNewCandidate(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("appController") AppController appController,BindingResult result) {	
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getCandidateSubMenuTab(1);		
		mapOfObjects.put("userVO", (User)request.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		Candidate candidate= null;
		CandidateVO candidateVO = new CandidateVO();
		request.getSession().setAttribute("candidateVO",candidateVO);
		mapOfObjects.put("candidateVO", candidateVO);
		return new ModelAndView("addCandidate","model", mapOfObjects);
	}
	
	
	/**
	 * method to display the Edit Screen
	 * @param httpRequest
	 * @param httpResponse
	 * @param appController
	 * @param result
	 * @return
	 */
	@RequestMapping("/editCandidate")
	@Loggable(value = LogLevel.INFO)
	public   ModelAndView  editCandidate(HttpServletRequest httpRequest, HttpServletResponse httpResponse,@ModelAttribute("appController") AppController appController,BindingResult result) {	
		Map<String,Object> mapOfObjects = new HashMap<String,Object>();
		HeaderVO headerBean = new HeaderVO();
		headerBean.getCandidateSubMenuTab(1);				
		Candidate candidate=null;
		
		Integer selectedCandidateId=(Integer.parseInt(httpRequest.getParameter("selectedCandidate").toString()));
		
		try {
			candidate = candidateService.getCandidate(selectedCandidateId);
			List<DocumentsDetails> documentsList=candidateService.getDocumentsOfCandidate(selectedCandidateId);
			for(DocumentsDetails documentsDetails: documentsList){
				uploadDocuToSessionMap(candidate.getCandidateEmail(), documentsDetails, httpRequest);
			}
		} catch (ApplicationException e) {
			e.printStackTrace();
		}
		mapOfObjects.put("editFlag", true);
		mapOfObjects.put("candidateVO", candidate);
		mapOfObjects.put("userVO", (User)httpRequest.getSession().getAttribute("userVO"));				
		mapOfObjects.put("headerBean", headerBean);
		return new ModelAndView("editCandidate","model", mapOfObjects);
	}
	
	
	@RequestMapping(value = "/getAllDocsOfCandidate")
	@Loggable(value = LogLevel.DEBUG)
	public @ResponseBody
	JsonGridResponse getAllDocsOfCandidate(HttpServletRequest request,
			HttpServletResponse response) {
		
		Enumeration<String> attr = request.getParameterNames();
		//String chFmId = request.getParameter("cgFmId");
		String contextPath = request.getServletContext().getRealPath(
				"DocUpload");
		String candEmailId=request.getParameter(TechScreenConstants.REUEST_PARAM_CANDIDATE_EMAIL_ID);
		Map<String,List<DocumentsDetails>> documMap= (HashMap<String, List<DocumentsDetails>>)request.getSession().getAttribute(TechScreenConstants.SESSION_CANDIDATE_DOC_MAP);
		if(documMap!=null){
			List<DocumentsDetails> documentsDetails=documMap.get(candEmailId);
			if(documentsDetails!=null){
				return ScreeningAppHelper.buildDocumentVOResponseFromSession(documentsDetails);
			}
		}
		return new JsonGridResponse();
	}
	
	@RequestMapping(value = "/getAllDocsOfCandidateById")
	@Loggable(value = LogLevel.DEBUG)
	public @ResponseBody
	JsonGridResponse getAllDocsOfCandidateById(HttpServletRequest request,
			HttpServletResponse response) {
		
		Enumeration<String> attr = request.getParameterNames();
		//String chFmId = request.getParameter("cgFmId");
		String contextPath = request.getServletContext().getRealPath(
				"DocUpload");
		String candidateId=request.getParameter(TechScreenConstants.REUEST_PARAM_SELECTED_CANDIDATE_ID);
		try{
			List<DocumentsDetails> documentsDetails=candidateService.getDocumentsOfCandidate(Integer.parseInt(candidateId));
			return ScreeningAppHelper.buildDocumentVOResponseFromSession(documentsDetails);
		}catch(Exception e){
			e.printStackTrace();
		}
		
		
		return new JsonGridResponse();
	}
	
	
	
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/uploadFile")
	@Loggable(value = LogLevel.DEBUG)
	public ModelAndView uploadFile(HttpServletRequest request,
			HttpServletResponse response) {
		String contextPath = request.getServletContext().getRealPath(
				"DocUpload");
		String docPathLocation = ScreeningProperties.getInstance().getProperty(TechScreenConstants.PROPERTIES_FILE_DOC_PATH);
		try {

			String docType= null;
			String docDesc= null;
			String fileName = null;
			String filePath= null;
			String candEmailId=null;
			
			List<FileItem> items = new ServletFileUpload(
					new DiskFileItemFactory()).parseRequest(request);
			for (FileItem item : items) {
				InputStream inputStream = null;
				OutputStream outputStream = null;
				if (item.isFormField()) {
					candEmailId = item.getString();
					String ajaxUpdateResult = "";
					if(item.getFieldName().equals("docType")){
						docType=item.getString();
					}
					if(item.getFieldName().equals("desc")){
						docDesc=item.getString();
					}
					if(item.getFieldName().equals("candEmailId")){
						candEmailId=item.getString();
					}
					
					ajaxUpdateResult += "Field " + item.getFieldName()
							+ " with value: " + item.getString()
							+ " is successfully read\n\r";
					System.out.println(ajaxUpdateResult);

				} else {

					fileName = item.getName();
					fileName=StringUtils.replace(fileName, " ","_");

					inputStream = item.getInputStream();

					response.setContentType("text/plain");

					response.setCharacterEncoding("UTF-8");

					try {
						//filePath = contextPath + "\\files\\" + candEmailId + "\\";
						filePath = docPathLocation + candEmailId + "\\";
						
						File saveDir = new File(filePath);
						if (!saveDir.exists()) {
							saveDir.mkdirs();
						}
						outputStream = new FileOutputStream(filePath + fileName);

						IOUtils.copy(inputStream, outputStream);
					} catch (IOException e) {
						e.printStackTrace();
					} finally {
						if (inputStream != null) {
							try {
								inputStream.close();
							} catch (IOException e) {
								e.printStackTrace();
							}
						}
						if (outputStream != null) {
							try {
								outputStream.close();
							} catch (IOException e) {
								e.printStackTrace();
							}

						}
					}
				}
			}
			
			//Create Document Object and Keep in session
			DocumentsDetails documentsDetails=new DocumentsDetails();
			documentsDetails.setDocName(fileName);
			documentsDetails.setDocType(docType);
			documentsDetails.setDocumentLocation(filePath);
			documentsDetails.setDocUploadDate(new Date());
			documentsDetails.setDocUploadedBy((User)request.getSession().getAttribute("userVO"));
			documentsDetails.setDocDesc(docDesc);
			
			uploadDocuToSessionMap(candEmailId, documentsDetails, request);
			
		} catch (FileUploadException e) {
			try {
				throw new ServletException("Parsing file upload failed.", e);
			} catch (ServletException e1) {
				e1.printStackTrace();
			}
		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}

	
	private void uploadDocuToSessionMap(String candEmailId,DocumentsDetails documentsDetails,HttpServletRequest request){
		Map<String,List<DocumentsDetails>> documMap =  new HashMap<String, List<DocumentsDetails>>();
		
		if((HashMap<String, List<DocumentsDetails>>)request.getSession().getAttribute(TechScreenConstants.SESSION_CANDIDATE_DOC_MAP)==null){
			documMap= new HashMap<String, List<DocumentsDetails>>();
			
		}else{
			documMap= (HashMap<String, List<DocumentsDetails>>)request.getSession().getAttribute(TechScreenConstants.SESSION_CANDIDATE_DOC_MAP);
		}
		
		if(documMap.containsKey(candEmailId)){
				List<DocumentsDetails> docsListOfCandidate = documMap.get(candEmailId);
				boolean docAlreadyExists = false;
				for (DocumentsDetails documentsDetails2 : docsListOfCandidate) {
					if(documentsDetails2.getDocName().equals(documentsDetails.getDocName())){
						docAlreadyExists=true;
						break;
					}
				}
				if(!docAlreadyExists){
					docsListOfCandidate.add(documentsDetails);
					documMap.put(candEmailId, docsListOfCandidate);
				}
		}else{
				List<DocumentsDetails> docsListOfCandidate =new ArrayList<DocumentsDetails>();
				docsListOfCandidate.add(documentsDetails);
				documMap.put(candEmailId, docsListOfCandidate);
		}
			
		
		request.getSession().setAttribute(TechScreenConstants.SESSION_CANDIDATE_DOC_MAP, documMap);
		
	}
	
	public CandidateService getCandidateService() {
		return candidateService;
	}

	public void setCandidateService(CandidateService candidateService) {
		this.candidateService = candidateService;
	}


	public VendorService getVendorService() {
		return vendorService;
	}


	public void setVendorService(VendorService vendorService) {
		this.vendorService = vendorService;
	}
	
	@Loggable(value = LogLevel.INFO)
	@RequestMapping(value="/documentDownload.html",method = RequestMethod.GET)
	public void doDownload(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		System.out.println(request.getParameter("docLocation"));
		generateDoc(request, response);

	}
	
	@Loggable(value = LogLevel.INFO)
	private void generateDoc(HttpServletRequest request,HttpServletResponse response) throws IOException{
		File file = new File(request.
				  getParameter("docLocation"));
		response.setHeader("Content-Disposition", "attachment; filename="+file.getName());
		
		response.setContentType("APPLICATION/OCTET-STREAM");
		InputStream inputStream = new FileInputStream(new File(request.
				  getParameter("docLocation"))); //load the file
		IOUtils.copy(inputStream, response.getOutputStream());
		  
			response.setHeader("Expires:", "0"); // eliminates browser caching
			
			OutputStream outStream = response.getOutputStream();
		  response.flushBuffer();
	
	}
	
}
