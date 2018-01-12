package com.ness.screening.dao;

import java.util.List;

import com.ness.screening.commons.dataaccess.dao.BaseDao;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.entity.Vendor;



public interface VendorDao extends BaseDao{
	
	public void save(Vendor vendor) throws DataOperationException;
	public void update(Vendor vendor) throws DataOperationException;
	public List<Vendor> getAllVendors() throws DataOperationException;
	public Vendor getVendor(Integer idVendor) throws DataOperationException;
	public Vendor getVendorByName(String vendorName) throws DataOperationException;
	public void deleteVendor(Vendor vendor) throws DataOperationException;
	
}
