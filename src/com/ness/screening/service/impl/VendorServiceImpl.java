package com.ness.screening.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.exception.ApplicationException;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.dao.VendorDao;
import com.ness.screening.entity.Vendor;
import com.ness.screening.service.VendorService;

@Transactional
public class VendorServiceImpl implements VendorService{
	@Autowired
	private VendorDao vendorDao;

	@Override
	public void save(Vendor vendor) throws ApplicationException {
		// TODO Auto-generated method stub
		try{
			vendorDao.save(vendor);
		}catch(DataOperationException e){
			throw new ApplicationException(e);
		}
	}

	@Override
	public void update(Vendor vendor) throws ApplicationException {
		// TODO Auto-generated method stub
		vendorDao.update(vendor);
	}

	@Override
	public List<Vendor> getAllVendors() throws ApplicationException {
		// TODO Auto-generated method stub
		return vendorDao.getAllVendors();
	}

	@Override
	public Vendor getVendor(Integer idVendor) throws ApplicationException {
		// TODO Auto-generated method stub
		return vendorDao.getVendor(idVendor);
	}

	@Override
	public Vendor getVendorByName(String vendorName)
			throws DataOperationException {
		// TODO Auto-generated method stub
		return vendorDao.getVendorByName(vendorName);
	}

	@Override
	public void deleteVendor(Vendor vendor) throws ApplicationException {
		// TODO Auto-generated method stub
		vendorDao.deleteVendor(vendor);
	}

	public VendorDao getVendorDao() {
		return vendorDao;
	}

	public void setVendorDao(VendorDao vendorDao) {
		this.vendorDao = vendorDao;
	}

	
	
	
	

}
