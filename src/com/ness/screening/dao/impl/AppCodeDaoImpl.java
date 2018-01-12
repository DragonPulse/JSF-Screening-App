package com.ness.screening.dao.impl;


import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.dao.impl.BaseDaoImpl;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.dao.AppCodeDao;
import com.ness.screening.entity.AppCode;

@Transactional
public class AppCodeDaoImpl extends BaseDaoImpl implements AppCodeDao {
	@Override
	public List<AppCode> findAllAppCodes(List<String> categories) throws Exception{
		Session sess = getCurrentSession();
		Criteria criteria = sess.createCriteria(AppCode.class);
		if(categories!=null && categories.size()>0){
			criteria.add(Restrictions.in("cateogry",categories));
		}
		List<AppCode> appCodes = (List<AppCode>) criteria.list();
		return appCodes;
	}

	@Override
	public AppCode findByAppCodeId(Integer id) throws Exception{
		Session sess = getCurrentSession();
		AppCode appCode = (AppCode) sess.get(AppCode.class, id);
		return appCode;
	}

	

	@Override
	public void saveAppCode(AppCode appCode) throws Exception {
		Session sess = getCurrentSession();
		sess.saveOrUpdate(appCode);
	}

	@Override
	public void deleteAppCode(AppCode appCode) throws Exception {
		try{
			deleteObject(appCode);
		}catch(HibernateException e){
			throw new DataOperationException(e);
		}

	}

	@Override
	public List<String> getAllAppCodes(String category) throws Exception {
		// TODO Auto-generated method stub
		Session sess = getCurrentSession();
		Criteria criteria = 
				sess.createCriteria(AppCode.class)
			           .add(Restrictions.ilike("category", category))
			           .setProjection(Projections.distinct(Projections.property("name")));

			List<String> listObj = criteria.list();
			return listObj;
	}

}
