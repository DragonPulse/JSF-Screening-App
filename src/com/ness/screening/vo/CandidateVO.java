package com.ness.screening.vo;

import java.io.Serializable;

import com.ness.screening.entity.User;
import com.ness.screening.entity.Vendor;

public class CandidateVO implements Serializable {

	private Integer candidateId;
	private String candidateFirstName;
	private String candidateLastName;
	private String candidateMiddleName;
	private String candidatePhoneNumber;
	private User candidateHandeledBy;
	private String candidateVendor;
	
	private String vendorContactName;
	private String vendorContactPhone;
	private String candidateEmail;
	private String candidateScreenedBy;
	
	private Vendor vendor;
	
	public Integer getCandidateId() {
		return candidateId;
	}
	public void setCandidateId(Integer candidateId) {
		this.candidateId = candidateId;
	}
	public String getCandidateFirstName() {
		return candidateFirstName;
	}
	public void setCandidateFirstName(String candidateFirstName) {
		this.candidateFirstName = candidateFirstName;
	}
	public String getCandidateLastName() {
		return candidateLastName;
	}
	public void setCandidateLastName(String candidateLastName) {
		this.candidateLastName = candidateLastName;
	}
	public String getCandidateMiddleName() {
		return candidateMiddleName;
	}
	public void setCandidateMiddleName(String candidateMiddleName) {
		this.candidateMiddleName = candidateMiddleName;
	}
	public String getCandidatePhoneNumber() {
		return candidatePhoneNumber;
	}
	public void setCandidatePhoneNumber(String candidatePhoneNumber) {
		this.candidatePhoneNumber = candidatePhoneNumber;
	}
	public User getCandidateHandeledBy() {
		return candidateHandeledBy;
	}
	public void setCandidateHandeledBy(User candidateHandeledBy) {
		this.candidateHandeledBy = candidateHandeledBy;
	}
	public String getCandidateVendor() {
		return candidateVendor;
	}
	public void setCandidateVendor(String candidateVendor) {
		this.candidateVendor = candidateVendor;
	}
	public String getCandidateEmail() {
		return candidateEmail;
	}
	
	public String getCandidateScreenedBy() {
		return candidateScreenedBy;
	}
	public void setCandidateScreenedBy(String candidateScreenedBy) {
		this.candidateScreenedBy = candidateScreenedBy;
	}
	public void setCandidateEmail(String candidateEmail) {
		this.candidateEmail = candidateEmail;
	}
	public String getVendorContactName() {
		return vendorContactName;
	}
	public void setVendorContactName(String vendorContactName) {
		this.vendorContactName = vendorContactName;
	}
	public String getVendorContactPhone() {
		return vendorContactPhone;
	}
	public void setVendorContactPhone(String vendorContactPhone) {
		this.vendorContactPhone = vendorContactPhone;
	}
	public Vendor getVendor() {
		return vendor;
	}
	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}
	
	
}
