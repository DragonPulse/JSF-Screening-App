
package com.ness.screening.commons.dataaccess.dao;

import java.io.Serializable;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;

import com.ness.screening.commons.dataaccess.exception.DataIntegrityException;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;



/**
 * Data Access Interface BaseDao Used for performing CRUD operations 
 */
public interface BaseDao {

	/**
	 * Gets the all records.
	 *
	 * @param t the t
	 *
	 * @return the all records
	 *
	 * @throws DataOperationException the data operation exception
	 */
	@SuppressWarnings("unchecked")
	<T> List<T> getAllRecords(Class<T> t, String sortField) throws DataOperationException;	
	 <T> Object getEntity(Integer id,Class<T> t)throws DataOperationException;
	 <T> Object getEntity(String id,Class<T> t) throws DataOperationException;
	/**
	 * Update object.
	 *
	 * @param hibernateObject the hibernate object
	 *
	 * @throws DataOperationException the data operation exception
	 */
	void updateObject(Object hibernateObject) throws DataOperationException;
	
	public void merge(Object o) throws DataOperationException;

	/**
	 * Persist object into DB.
	 *
	 * @param hibernateObject the hibernate object
	 *
	 * @return the serializable
	 *
	 * @throws DataOperationException the data operation exception
	 */
	Serializable saveObject(Object hibernateObject) throws DataOperationException;

	/**
	 * Persist object into DB.
	 *
	 * @param hibernateObject the hibernate object
	 * @param flush the flush
	 *
	 * @return the serializable
	 *
	 * @throws DataOperationException the data operation exception
	 */
	Serializable saveObject(Object hibernateObject, boolean flush)
			throws DataOperationException;

	/**
	 * Gets the current session.
	 *
	 * @return the current session
	 *
	 * @throws HibernateException the hibernate exception
	 */
	Session getCurrentSession() throws HibernateException;

	/**
	 * Flush session.
	 *
	 * @throws DataIntegrityException the data integrity exception
	 * @throws DataOperationException the data operation exception
	 */
	void flushSession() throws  DataIntegrityException,DataOperationException;

	void clearSession() throws  DataOperationException,DataIntegrityException;
	
	public void saveUpdateObject(Object o) throws DataOperationException;
	public Session getNewSession() throws HibernateException;
	public void saveUpdateObjectNonTransactional(Object o, Session s) throws DataOperationException;
	public void deleteObject(Object o) throws DataOperationException;
}