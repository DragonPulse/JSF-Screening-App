
package com.ness.screening.commons.dataaccess.dao.impl;

import static org.hibernate.criterion.Example.create;

import java.io.Serializable;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.dao.BaseDao;
import com.ness.screening.commons.dataaccess.exception.DataIntegrityException;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.commons.logger.aspect.Loggable;
import com.ness.screening.commons.logger.util.LogLevel;


@Transactional
public class BaseDaoImpl extends HibernateDaoSupport implements BaseDao{

	@SuppressWarnings("unchecked")
	@Loggable(value = LogLevel.INFO)
	public <T> List<T> getAllRecords(Class<T> t, String sortField) throws DataOperationException {
		List<T> list;
		try {
			Criteria criteria = getCurrentSession().createCriteria(t);
			if(sortField!=null) {
				criteria = criteria.addOrder(Order.asc(sortField));
			}
			list = criteria.list();
		} catch (HibernateException e) {
			throw new DataOperationException(e);
		}
		return list;
	}
	

	@Loggable(value = LogLevel.INFO)
	protected <T extends java.io.Serializable> List<T> findAllByName(Class<T> className, String nameLike) throws DataOperationException {
		Criteria criteria = getCurrentSession().createCriteria(className);
		if(StringUtils.isNotEmpty(nameLike)) {
			criteria.add(Restrictions.ilike("name", nameLike, MatchMode.ANYWHERE));
		}			
		List<T> results = criteria.list();			
		return results;
	}


	@Loggable(value = LogLevel.INFO)
	public <T extends java.io.Serializable> List<T> findAllByName(Class<T> className, String columnLookup, String nameLike) throws DataOperationException {
		Criteria criteria = getCurrentSession().createCriteria(className);
		if(StringUtils.isNotEmpty(nameLike)) {
			criteria.add(Restrictions.ilike(columnLookup, nameLike, MatchMode.ANYWHERE));
		}			
		List<T> results = criteria.list();			
		return results;
	}	

	@Loggable(value = LogLevel.INFO)
	public void updateObject(Object o) throws DataOperationException {
		try {
			getCurrentSession().update(o);
		} catch (HibernateException e) {
			throw new DataOperationException(e);
		}
	}

	@Loggable(value = LogLevel.INFO)
	public void merge(Object o) throws DataOperationException {
		try {
			getCurrentSession().merge(o);
		} catch (HibernateException e) {
			throw new DataOperationException(e);
		}
	}

	public void saveUpdateObject(Object o) throws DataOperationException {
		try {
			getCurrentSession().saveOrUpdate(o);
		} catch (HibernateException e) {
			throw new DataOperationException(e);
		}
	}
	
	public Session getNewSession() throws HibernateException{
		return getHibernateTemplate().getSessionFactory().openSession();
	}
		
	@Loggable(value = LogLevel.INFO)
	public void saveUpdateObjectNonTransactional(Object o, Session s) throws DataOperationException {
		try {
			s.beginTransaction();
			s.saveOrUpdate(o);
			s.getTransaction().commit();
		} catch (HibernateException e) {
			throw new DataOperationException(e);
		}
	}	

	@Loggable(value = LogLevel.INFO)
	public void deleteObject(Object o) throws DataOperationException {
		try {
			getCurrentSession().delete(o);
		} catch (HibernateException e) {
			throw new DataOperationException(e);
		}
	}

	
	@Loggable(value = LogLevel.INFO)
	public Serializable saveObject(Object o) throws DataOperationException {
		return saveObject(o, false);
	}


	@Loggable(value = LogLevel.INFO)
	public Serializable saveObject(Object o, boolean flush)
			throws DataOperationException {
		Serializable save = null;
		try {
			save = getCurrentSession().save(o);
			if (flush)
				getCurrentSession().flush();
		} catch (HibernateException e) {
			throw new DataOperationException(e);
		}

		return save;
	}

	@Loggable(value = LogLevel.INFO)
	public Session getCurrentSession() throws HibernateException{	
		return getHibernateTemplate().getSessionFactory().getCurrentSession();
	}


	@Loggable(value = LogLevel.INFO)
	public void flushSession() throws DataOperationException,DataIntegrityException {

		try {
			getCurrentSession().flush();
		}catch(ConstraintViolationException ce ){
			logger.debug("Constraint Violation "+ce.getCause());
			throw new DataIntegrityException(ce);
		}
		catch (HibernateException e) {
			logger.debug("Hibernate exception "+e);
			throw new DataOperationException(e);
		}
		catch(Exception e){
			logger.debug("Flush Exception "+e);
			throw new DataOperationException(e);
		}

	}
	
	@Loggable(value = LogLevel.INFO)
	public void clearSession() throws  DataOperationException,DataIntegrityException{
		flushSession();
		getCurrentSession().clear();
	}


	public <T> Object getEntity(Integer id,Class<T> t) throws DataOperationException{
		Object obj=null;
		try {
			obj=getCurrentSession().get(t, id);
		} catch (Exception e) {
			throw new DataOperationException(e);
		}
		return obj;
	}
	
	public <T> Object getEntity(String id,Class<T> t) throws DataOperationException {
		Object obj=null;
		try {
			obj=getCurrentSession().get(t, id);
		} catch (Exception e) {
			throw new DataOperationException(e);
		}
		return obj;
	}

	public <T>Object findByProperty(Class<T> t, String property, Object value) throws DataOperationException {
		try {
			Object instance = (Object) getCurrentSession()
				.createCriteria(t)
				.add(Restrictions.eq(property, value))
				.uniqueResult();
			return instance;
		} catch (Exception e) {
			throw new DataOperationException(e);
		}
	}

	public <T extends java.io.Serializable> List<T> findByExample(Class<T> instance) throws DataOperationException {
		try {
			List<T> results = (List<T>) getCurrentSession()
					.createCriteria(instance)
					.add(create(instance)).list();
			return results;
		} catch (Exception e) {
			throw new DataOperationException(e);
		}
	}

	
	public static void main(String[] args) {
		
	}
	
}
