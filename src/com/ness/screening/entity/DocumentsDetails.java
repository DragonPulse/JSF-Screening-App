package com.ness.screening.entity;

// default package
// Generated Dec 22, 2015 3:05:04 PM by Hibernate Tools 3.4.0.CR1

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * DocumentsDetails generated by hbm2java
 */
@Entity
@Table(name = "documents_details", catalog = "Ness_Tech_Screen")
public class DocumentsDetails implements java.io.Serializable {

	private Integer documentsDetailsId;
	private String docName;
	private String docType;
	private User docUploadedBy;
	private Date docUploadDate;
	private Integer docVersion;
	private String documentLocation;
	//private byte[] docContent;
	private Candidate candidate;
	private String docDesc;

	public DocumentsDetails() {
	}

	public DocumentsDetails(String docName, String docType,
			User docUploadedBy, Date docUploadDate, Integer docVersion,
			Candidate candidate) {
		this.docName = docName;
		this.docType = docType;
		this.docUploadedBy = docUploadedBy;
		this.docUploadDate = docUploadDate;
		this.docVersion = docVersion;
		//this.docContent = docContent;
		this.candidate = candidate;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "Documents_Details_Id", unique = true, nullable = false)
	public Integer getDocumentsDetailsId() {
		return this.documentsDetailsId;
	}

	public void setDocumentsDetailsId(Integer documentsDetailsId) {
		this.documentsDetailsId = documentsDetailsId;
	}

	@Column(name = "Doc_Name", length = 45)
	public String getDocName() {
		return this.docName;
	}

	public void setDocName(String docName) {
		this.docName = docName;
	}

	@Column(name = "Doc_Type", length = 45)
	public String getDocType() {
		return this.docType;
	}

	public void setDocType(String docType) {
		this.docType = docType;
	}

	@OneToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
    @JoinColumn(name="Doc_Uploaded_By",insertable=true,
        updatable=true,nullable=true,unique=true)
	public User getDocUploadedBy() {
		return this.docUploadedBy;
	}

	public void setDocUploadedBy(User docUploadedBy) {
		this.docUploadedBy = docUploadedBy;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "Doc_Upload_Date", length = 10)
	public Date getDocUploadDate() {
		return this.docUploadDate;
	}

	public void setDocUploadDate(Date docUploadDate) {
		this.docUploadDate = docUploadDate;
	}

	@Column(name = "Doc_version")
	public Integer getDocVersion() {
		return this.docVersion;
	}

	public void setDocVersion(Integer docVersion) {
		this.docVersion = docVersion;
	}

	/*@Column(name = "Doc_Content")
	public byte[] getDocContent() {
		return this.docContent;
	}

	public void setDocContent(byte[] docContent) {
		this.docContent = docContent;
	}*/

	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "candidate_Id")
	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}

	@Column(name = "Doc_Location")
	public String getDocumentLocation() {
		return documentLocation;
	}

	public void setDocumentLocation(String documentLocation) {
		this.documentLocation = documentLocation;
	}

	@Column(name = "Doc_desc")
	public String getDocDesc() {
		return docDesc;
	}

	public void setDocDesc(String docDesc) {
		this.docDesc = docDesc;
	}

	
	

}
