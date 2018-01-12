package com.ness.screening.vo;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.CandidateScreenDetails;
import com.ness.screening.entity.User;

public class DocumentDetailsVO implements Serializable {

	private Integer documentsDetailsId;
	private String docName;
	private String docType;
	private String docUploadedBy;
	private String docUploadDate;
	private Integer docVersion;
	private String documentLocation;
	private String uploadedBy;
	
	private String docDesc;

	public Integer getDocumentsDetailsId() {
		return documentsDetailsId;
	}

	public void setDocumentsDetailsId(Integer documentsDetailsId) {
		this.documentsDetailsId = documentsDetailsId;
	}

	public String getDocName() {
		return docName;
	}

	public void setDocName(String docName) {
		this.docName = docName;
	}

	public String getDocType() {
		return docType;
	}

	public void setDocType(String docType) {
		this.docType = docType;
	}

	

	public String getDocUploadedBy() {
		return docUploadedBy;
	}

	public void setDocUploadedBy(String docUploadedBy) {
		this.docUploadedBy = docUploadedBy;
	}

	

	public String getDocUploadDate() {
		return docUploadDate;
	}

	public void setDocUploadDate(String docUploadDate) {
		this.docUploadDate = docUploadDate;
	}

	public Integer getDocVersion() {
		return docVersion;
	}

	public void setDocVersion(Integer docVersion) {
		this.docVersion = docVersion;
	}

	public String getDocumentLocation() {
		return documentLocation;
	}

	public void setDocumentLocation(String documentLocation) {
		this.documentLocation = documentLocation;
	}

	public String getUploadedBy() {
		return uploadedBy;
	}

	public void setUploadedBy(String uploadedBy) {
		this.uploadedBy = uploadedBy;
	}

	public String getDocDesc() {
		return docDesc;
	}

	public void setDocDesc(String docDesc) {
		this.docDesc = docDesc;
	}
	
	
	
}
