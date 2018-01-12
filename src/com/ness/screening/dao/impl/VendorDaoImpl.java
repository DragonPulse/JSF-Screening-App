package com.ness.screening.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.dao.impl.BaseDaoImpl;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.constants.TechScreenConstants;
import com.ness.screening.dao.VendorDao;
import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.Vendor;


@Transactional
public class VendorDaoImpl extends BaseDaoImpl implements VendorDao{

	@Override
	public void save(Vendor vendor) throws DataOperationException {
		// TODO Auto-generated method stub
		saveUpdateObject(vendor);
		
	}

	@Override
	public void update(Vendor vendor) throws DataOperationException {
		// TODO Auto-generated method stub
		merge(vendor);	
	}

	@Override
	public List<Vendor> getAllVendors() throws DataOperationException {
		// TODO Auto-generated method stub
		Criteria criteria = getCurrentSession().createCriteria(Vendor.class);
		criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
		return (List<Vendor>)criteria.list();
	}

	@Override
	public Vendor getVendor(Integer idVendor) throws DataOperationException {
		// TODO Auto-generated method stub
		Criteria criteria = getCurrentSession().createCriteria(Vendor.class);
		criteria.add(Restrictions.idEq(idVendor));
		return (Vendor) criteria.uniqueResult();
	}

	@Override
	public Vendor getVendorByName(String vendorName)
			throws DataOperationException {
		// TODO Auto-generated method stub
		Criteria criteria = getCurrentSession().createCriteria(Vendor.class);
		criteria.add(Restrictions.ilike(TechScreenConstants.COLUMN_VENDOR_NAME, vendorName));
		return (Vendor)criteria.uniqueResult();
	}

	@Override
	public void deleteVendor(Vendor candidate) throws DataOperationException {
		// TODO Auto-generated method stub
		
	}

	

}
