package com.ness.screening.vo;

import java.util.Date;

import com.ness.screening.entity.Client;
import com.ness.screening.entity.User;

// default package
// Generated Dec 22, 2015 3:05:04 PM by Hibernate Tools 3.4.0.CR1



public class JobReqVO implements java.io.Serializable {

	private Integer jobReqId;
	private String jobReqTitle;
	private String jobReqDesc;
	private String jobDuration;
	private String billRate;
	private String jobLocation;
	private Client client;
	private User createdBy;
	private User updatedBy;
	private Date createdDt;
	private Date updatedDt;
	
	
	public Integer getJobReqId() {
		return jobReqId;
	}
	public void setJobReqId(Integer jobReqId) {
		this.jobReqId = jobReqId;
	}
	public String getJobReqTitle() {
		return jobReqTitle;
	}
	public void setJobReqTitle(String jobReqTitle) {
		this.jobReqTitle = jobReqTitle;
	}
	public String getJobReqDesc() {
		return jobReqDesc;
	}
	public void setJobReqDesc(String jobReqDesc) {
		this.jobReqDesc = jobReqDesc;
	}
	public String getJobDuration() {
		return jobDuration;
	}
	public void setJobDuration(String jobDuration) {
		this.jobDuration = jobDuration;
	}
	public String getBillRate() {
		return billRate;
	}
	public void setBillRate(String billRate) {
		this.billRate = billRate;
	}
	public String getJobLocation() {
		return jobLocation;
	}
	public void setJobLocation(String jobLocation) {
		this.jobLocation = jobLocation;
	}
	public Client getClient() {
		return client;
	}
	public void setClient(Client client) {
		this.client = client;
	}
	public User getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(User createdBy) {
		this.createdBy = createdBy;
	}
	public User getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(User updatedBy) {
		this.updatedBy = updatedBy;
	}
	public Date getCreatedDt() {
		return createdDt;
	}
	public void setCreatedDt(Date createdDt) {
		this.createdDt = createdDt;
	}
	public Date getUpdatedDt() {
		return updatedDt;
	}
	public void setUpdatedDt(Date updatedDt) {
		this.updatedDt = updatedDt;
	}
	
	

	

	
}
