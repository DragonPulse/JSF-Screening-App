package com.ness.screening.service;

import java.util.List;

import com.ness.screening.commons.dataaccess.exception.ApplicationException;
import com.ness.screening.entity.Vendor;

public interface VendorService {

	public void save(Vendor vendor) throws ApplicationException;
	public void update(Vendor vendor) throws ApplicationException;
	public List<Vendor> getAllVendors() throws ApplicationException;
	public Vendor getVendor(Integer idVendor) throws ApplicationException;
	public Vendor getVendorByName(String vendorName) throws ApplicationException;
	public void deleteVendor(Vendor vendor) throws ApplicationException;
}
