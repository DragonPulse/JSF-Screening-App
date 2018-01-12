package com.ness.screening.util;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.time.DateFormatUtils;

import com.ness.screening.constants.TechScreenConstants;
import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.CandidateScreenDetails;
import com.ness.screening.entity.DocumentsDetails;
import com.ness.screening.entity.JobRequirements;
import com.ness.screening.entity.Vendor;
import com.ness.screening.json.JsonGridResponse;
import com.ness.screening.vo.CandidateVO;
import com.ness.screening.vo.DocumentDetailsVO;
import com.ness.screening.vo.JobReqVO;
import com.ness.screening.vo.VendorVO;

public class ScreeningAppHelper {

	/*
	 * public static String buildDropDownValues(List<String> values) {
	 * StringBuilder sb = new StringBuilder();
	 * sb.append(InCoSerTravelConstants.TAG_HTML_OPTION_START + " " +
	 * InCoSerTravelConstants.TAG_HTML_VALUE + "' '" +
	 * InCoSerTravelConstants.TAG_HTML_START_END +
	 * InCoSerTravelConstants.TAG_HTML_OPTION_END); for (String value : values)
	 * { sb.append(InCoSerTravelConstants.TAG_HTML_OPTION_START + " " +
	 * InCoSerTravelConstants.TAG_HTML_VALUE + "'" + value + "'" +
	 * InCoSerTravelConstants.TAG_HTML_START_END + value +
	 * InCoSerTravelConstants.TAG_HTML_OPTION_END); } return sb.toString(); }
	 */
	/*
	 * public static BillingResponse buildBillingResponseFromService(
	 * List<Billing> billsList) { BillingResponse response = new
	 * BillingResponse(); response.setTotal(String.valueOf(billsList.size()));
	 * response.setPage("1"); List<Object> objects = new ArrayList<Object>();
	 * for (Billing bill : billsList) { BillingVO billVO = new BillingVO();
	 * billVO.setBillAmount(String.valueOf(bill.getTotalAmount()));
	 * billVO.setBillDate(bill.getBillDate());
	 * billVO.setBillNo(String.valueOf(bill.getBillNo()));
	 * billVO.setCustomerName(bill.getPersonByCustomerId().getFirstName() + " "
	 * +bill.getPersonByCustomerId().getLastName());
	 * billVO.setIdBilling(String.valueOf(bill.getIdBilling()));
	 * billVO.setToPlace(bill.getToPlace());
	 * billVO.setFromPlace(bill.getFromPlace());
	 * 
	 * objects.add(billVO); } response.setRows(objects);
	 * response.setRecords(String.valueOf(billsList.size())); return response; }
	 */

	/*
	 * public static BillingResponse buildTransactionReportFromService(
	 * List<Billing> billsList) { BillingResponse response = new
	 * BillingResponse(); response.setTotal(String.valueOf(billsList.size()));
	 * response.setPage("1"); List<Object> billingVOObjects = new
	 * ArrayList<Object>(); Set<Integer> uniqueIds = new HashSet<Integer>(); for
	 * (Billing bill : billsList) {
	 * 
	 * BillingVO billVO = new BillingVO();
	 * billVO.setBillAmount(String.valueOf(bill.getTotalAmount()));
	 * billVO.setBillDate(bill.getBillDate());
	 * billVO.setBillNo(String.valueOf(bill.getBillNo()));
	 * billVO.setCustomerName(bill.getPersonByCustomerId().getFirstName() + " "
	 * +bill.getPersonByCustomerId().getLastName());
	 * billVO.setIdBilling(String.valueOf(bill.getIdBilling()));
	 * billVO.setToPlace(bill.getToPlace());
	 * billVO.setFromPlace(bill.getFromPlace()); for(Billitems item :
	 * bill.getBillitemses()){ ItemVO itemVO = new ItemVO();
	 * itemVO.setExtra(item.getExtras());
	 * itemVO.setIdBillItem(item.getIdBillItems());
	 * itemVO.setItemName(item.getItemName());
	 * itemVO.setItemQuantity(item.getItemQty());
	 * itemVO.setRate(item.getItemPrice()); billVO.getItems().add(itemVO); }
	 * if(!uniqueIds.contains(bill.getIdBilling())){
	 * billingVOObjects.add(billVO); } uniqueIds.add(bill.getIdBilling()); }
	 * response.setRows(billingVOObjects);
	 * response.setRecords(String.valueOf(billsList.size())); return response; }
	 * 
	 * public static BillingResponse buildBalanceReport(List<Billing>
	 * billsList){ BillingResponse response = new BillingResponse();
	 * response.setTotal(String.valueOf(billsList.size()));
	 * response.setPage("1"); List<Object> objects = new ArrayList<Object>();
	 * Set<Billitems> itemsSet = new HashSet<Billitems>(); for (Billing bill :
	 * billsList) { itemsSet.addAll(bill.getBillitemses()); } for(Billitems
	 * item:itemsSet){ ItemDetailVO itemVO= new ItemDetailVO();
	 * itemVO.setBillDate(item.getBilling().getBillDate().toString());
	 * itemVO.setBillNo(item.getBilling().getBillNo());
	 * itemVO.setCustomerName(item.getBilling().getPersonByCustomerId().
	 * getFirstName()+" "
	 * +item.getBilling().getPersonByCustomerId().getLastName());
	 * itemVO.setExtra(item.getExtras());
	 * itemVO.setIdBillItem(item.getIdBillItems());
	 * itemVO.setItemName(item.getItemName());
	 * itemVO.setItemQuantity(item.getItemQty());
	 * itemVO.setRate(item.getItemPrice());
	 * itemVO.setFromPlace(item.getBilling().getFromPlace());
	 * itemVO.setToPlace(item.getBilling().getToPlace());
	 * itemVO.setTotalAmount(item.getBilling().getTotalAmount());
	 * itemVO.setLoadingQty(item.getLoadedQuantity()); objects.add(itemVO);
	 * 
	 * } response.setRows(objects);
	 * response.setRecords(String.valueOf(billsList.size())); return response; }
	 * 
	 * public static AdminConsoleResponse buildAppCodeResponseFromService(
	 * List<AppCode> appCodes) { AdminConsoleResponse response = new
	 * AdminConsoleResponse();
	 * response.setTotal(String.valueOf(appCodes.size()));
	 * response.setPage("1"); List<Object> objects = new ArrayList<Object>();
	 * for (AppCode code : appCodes) { AppCodeVO appCodeVO = new AppCodeVO();
	 * appCodeVO.setCateogry(code.getCateogry());
	 * appCodeVO.setDescription(code.getDescription());
	 * appCodeVO.setIdAppcode(code.getIdAppcode());
	 * appCodeVO.setName(code.getName());
	 * appCodeVO.setShortCode(code.getShortCode());
	 * appCodeVO.setStatus(code.getStatus()); objects.add(appCodeVO); }
	 * response.setRows(objects);
	 * response.setRecords(String.valueOf(appCodes.size())); return response; }
	 */

	public static JsonGridResponse buildJobReqVoFromList(List<JobRequirements> jobReqList) {

		JsonGridResponse response = new JsonGridResponse();
		response.setTotal(String.valueOf(jobReqList.size()));
		response.setPage("1");
		List<Object> objectsList = new ArrayList<Object>();
		for(JobRequirements jobReq:jobReqList){
			JobReqVO jobReqVO = new JobReqVO();
			jobReqVO.setBillRate(jobReq.getBillRate());
			jobReqVO.setClient(jobReq.getClient());
			jobReqVO.setCreatedBy(jobReq.getCreatedBy());
			jobReqVO.setCreatedDt(jobReq.getCreatedDt());
			jobReqVO.setJobDuration(jobReq.getJobDuration());
			jobReqVO.setJobLocation(jobReq.getJobLocation());
			jobReqVO.setJobReqDesc(jobReq.getJobReqDesc());
			jobReqVO.setJobReqId(jobReq.getJobReqId());
			jobReqVO.setJobReqTitle(jobReq.getJobReqTitle());
			jobReqVO.setUpdatedBy(jobReq.getUpdatedBy());
			jobReqVO.setUpdatedDt(jobReq.getUpdatedDt());
			objectsList.add(jobReqVO);
		}
		response.setRows(objectsList);
		response.setRecords(String.valueOf(jobReqList.size()));
		return response;
	}

	public static JsonGridResponse buildVendorVoFromList(List<Vendor> vendorList) {

		JsonGridResponse response = new JsonGridResponse();
		response.setTotal(String.valueOf(vendorList.size()));
		response.setPage("1");
		List<Object> objectsList = new ArrayList<Object>();
		for (Vendor vendor : vendorList) {
			VendorVO vendorVO = new VendorVO();
			vendorVO.setVendorContactFirstName(vendor.getVendorContactFirstName());
			vendorVO.setVendorContactLastName(vendor.getVendorContactLastName());
			vendorVO.setVendorContactNum(vendor.getVendorContactNum());
			vendorVO.setVendorEmailId(vendor.getVendorEmailId());
			vendorVO.setVendorId(vendor.getVendorId().toString());
			vendorVO.setVendorName(vendor.getVendorName());
			vendorVO.setCreatedBy(
					vendor.getCreatedBy().getUserFirstName() + " " + vendor.getCreatedBy().getUserLastName());
			vendorVO.setUpdatedBy(vendor.getUpdatedBy() != null
					? vendor.getCreatedBy().getUserFirstName() + " " + vendor.getCreatedBy().getUserLastName() : "");
			vendorVO.setCreatedDt(DateFormatUtils.format(vendor.getCreatedDt(), TechScreenConstants.DATE_FORMAT));
			vendorVO.setUpdatedDt((vendor.getUpdatedDt() != null
					? DateFormatUtils.format(vendor.getCreatedDt(), TechScreenConstants.DATE_FORMAT) : ""));
			objectsList.add(vendorVO);
		}
		response.setRows(objectsList);
		response.setRecords(String.valueOf(vendorList.size()));
		return response;
	}

	public static VendorVO buildVendorNamesFromVendor(Vendor vendor) {
		VendorVO vendorVO = new VendorVO();
		if (vendor != null) {
			vendorVO.setVendorContactFirstName(vendor.getVendorContactFirstName());
			vendorVO.setVendorContactLastName(vendor.getVendorContactLastName());
			vendorVO.setVendorContactNum(vendor.getVendorContactNum());
			vendorVO.setVendorEmailId(vendor.getVendorEmailId());
			vendorVO.setVendorId(vendor.getVendorId().toString());
			vendorVO.setVendorName(vendor.getVendorName());
		}
		return vendorVO;
	}

	public static List<String> buildVendorNamesForDropDown(List<Vendor> vendorsList) {
		List<String> vendorNameList = new ArrayList<String>();
		for (Vendor vendor : vendorsList) {
			if (!vendorNameList.contains(vendor.getVendorName())) {
				vendorNameList.add(vendor.getVendorName());
			}

		}
		return vendorNameList;
	}

	public static JsonGridResponse buildCandidatesVOResponseFromService(List<Candidate> candidatesList) {
		JsonGridResponse response = new JsonGridResponse();
		response.setTotal(String.valueOf(candidatesList.size()));
		response.setPage("1");
		List<Object> objectsList = new ArrayList<Object>();
		for (Candidate candidateObj : candidatesList) {
			CandidateVO candVo = new CandidateVO();
			candVo.setCandidateEmail(candidateObj.getCandidateEmail());
			candVo.setCandidateFirstName(candidateObj.getCandidateFirstName());
			candVo.setCandidateHandeledBy(candidateObj.getCandidateHandeledBy());
			candVo.setCandidateId(candidateObj.getCandidateId());
			candVo.setCandidateLastName(candidateObj.getCandidateLastName());
			candVo.setCandidatePhoneNumber(candidateObj.getCandidatePhoneNumber());
			candVo.setCandidateVendor(candidateObj.getVendor() != null ? candidateObj.getVendor().getVendorName() : "");
			candVo.setVendorContactName(
					candidateObj.getVendor() != null ? candidateObj.getVendor().getVendorContactFirstName() + " "
							+ candidateObj.getVendor().getVendorContactLastName() : "");
			candVo.setVendorContactPhone(
					candidateObj.getVendor() != null ? candidateObj.getVendor().getVendorContactNum() : "");
			StringBuilder stingBuilder = new StringBuilder();
			for (CandidateScreenDetails screenDetails : candidateObj.getScreenHistory()) {
				stingBuilder.append(screenDetails.getCandidateScreenedType());
				stingBuilder.append("::");
				stingBuilder.append(screenDetails.getCandidateScreenedBy().getUserFirstName() + "-"
						+ screenDetails.getCandidateScreenedBy().getUserLastName());
				stingBuilder.append("\n");
			}
			candVo.setCandidateScreenedBy(stingBuilder.toString());
			objectsList.add(candVo);
		}

		response.setRows(objectsList);
		response.setRecords(String.valueOf(candidatesList.size()));
		return response;
	}

	public static JsonGridResponse buildDocumentVOResponseFromSession(List<DocumentsDetails> documemDetails) {
		JsonGridResponse response = new JsonGridResponse();
		response.setTotal(String.valueOf(documemDetails.size()));
		response.setPage("1");
		List<Object> objectsList = new ArrayList<Object>();
		for (DocumentsDetails docuDetails : documemDetails) {
			DocumentDetailsVO docuDetailsVo = new DocumentDetailsVO();
			docuDetailsVo.setDocDesc(docuDetails.getDocDesc());
			docuDetailsVo.setDocName(docuDetails.getDocName());
			docuDetailsVo.setDocType(docuDetails.getDocType());
			if (docuDetails.getDocumentLocation().endsWith(File.separator)) {
				docuDetailsVo.setDocumentLocation(docuDetails.getDocumentLocation() + docuDetails.getDocName());
			} else {
				docuDetailsVo.setDocumentLocation(
						docuDetails.getDocumentLocation() + File.separator + docuDetails.getDocName());
			}

			docuDetailsVo.setDocUploadDate(
					DateFormatUtils.format(docuDetails.getDocUploadDate(), TechScreenConstants.DATE_FORMAT));
			docuDetailsVo.setDocUploadedBy(docuDetails.getDocUploadedBy().getUserFirstName() + " "
					+ docuDetails.getDocUploadedBy().getUserLastName());
			objectsList.add(docuDetailsVo);
		}
		response.setRows(objectsList);
		response.setRecords(String.valueOf(documemDetails.size()));
		return response;
	}

	/*
	 * public static BillingResponse buildItemResponseFromSession( BillingVO
	 * billingVO) { BillingResponse response = new BillingResponse(); if
	 * (billingVO != null) { Set<ItemVO> itemsList = billingVO.getItems();
	 * response.setTotal(String.valueOf(itemsList.size()));
	 * response.setPage("1"); List<Object> objects = new ArrayList<Object>();
	 * for (ItemVO item : itemsList) { ItemVO itemVO = new ItemVO();
	 * objects.add(itemVO); } response.setRows(objects);
	 * response.setRecords(String.valueOf(itemsList.size())); } return response;
	 * }
	 * 
	 * public static String getCurrentDate() { SimpleDateFormat dateFormat = new
	 * SimpleDateFormat("dd/MM/yyyy"); String date = dateFormat.format(new
	 * Date()); System.out.println("Date:: " + dateFormat.format(new Date()));
	 * return date; }
	 * 
	 * public static BillingResponse buildDetailBillingsFromService(
	 * List<Billing> billsList) { BillingResponse response = new
	 * BillingResponse(); response.setTotal(String.valueOf(billsList.size()));
	 * response.setPage("1"); List<Object> objects = new ArrayList<Object>();
	 * for (Billing bill : billsList) { for (Billitems item :
	 * bill.getBillitemses()) { ItemDetailVO itemVO = new ItemDetailVO();
	 * itemVO.setBillDate(bill.getBillDate().toString());
	 * itemVO.setBillNo(bill.getBillNo());
	 * itemVO.setCustomerName(bill.getPersonByCustomerId() .getFirstName() + " "
	 * + bill.getPersonByCustomerId().getLastName());
	 * itemVO.setExtra(item.getExtras());
	 * itemVO.setIdBillItem(item.getIdBillItems());
	 * itemVO.setItemName(item.getItemName());
	 * itemVO.setItemQuantity(item.getItemQty());
	 * itemVO.setRate(item.getItemPrice());
	 * itemVO.setToPlace(bill.getToPlace());
	 * itemVO.setTotalAmount(bill.getTotalAmount());
	 * itemVO.setLoadingQty(item.getLoadedQuantity()); objects.add(itemVO); } }
	 * response.setRows(objects);
	 * response.setRecords(String.valueOf(billsList.size())); return response; }
	 * 
	 * public static BillingResponse buildLoadingItemsFromService(
	 * Set<Billitems> itemsList) { BillingResponse response = new
	 * BillingResponse(); response.setTotal(String.valueOf(itemsList.size()));
	 * response.setPage("1"); List<Object> objects = new ArrayList<Object>();
	 * for (Billitems item : itemsList) { ItemDetailVO itemVO = new
	 * ItemDetailVO();
	 * itemVO.setBillDate(item.getBilling().getBillDate().toString());
	 * itemVO.setBillNo(item.getBilling().getBillNo());
	 * itemVO.setCustomerName(item.getBilling().getPersonByCustomerId()
	 * .getFirstName() + " " +
	 * item.getBilling().getPersonByCustomerId().getLastName());
	 * itemVO.setExtra(item.getExtras());
	 * itemVO.setIdBillItem(item.getIdBillItems());
	 * itemVO.setItemName(item.getItemName());
	 * itemVO.setItemQuantity(item.getItemQty());
	 * itemVO.setRate(item.getItemPrice());
	 * itemVO.setToPlace(item.getBilling().getToPlace());
	 * itemVO.setTotalAmount(item.getBilling().getTotalAmount());
	 * itemVO.setLoadingQty(item.getLoadedQuantity()); objects.add(itemVO); }
	 * response.setRows(objects);
	 * response.setRecords(String.valueOf(itemsList.size())); return response; }
	 */
}
