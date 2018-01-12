package com.ness.screening.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.dao.impl.BaseDaoImpl;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.constants.TechScreenConstants;
import com.ness.screening.dao.UserDao;
import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.User;


@Transactional
public class UserDaoImpl extends BaseDaoImpl implements UserDao{
	
	private static final String COLUMN_USER_NAME="userName";
	
	private String userName;

	@Override
	public void save(User user) throws DataOperationException {
		// TODO Auto-generated method stub
		saveUpdateObject(user);
	}

	@Override
	public void update(User user) throws DataOperationException {
		// TODO Auto-generated method stub
		saveUpdateObject(user);
	}

	@Override
	public List<User> getAllUsers() throws DataOperationException {
		// TODO Auto-generated method stub
		Criteria criteria = getCurrentSession().createCriteria(User.class);
		return (List<User>)criteria.list();
	}

	@Override
	public User getUser(String userName, String password)
			throws DataOperationException {
		// TODO Auto-generated method stub
		Criteria criteria = getCurrentSession().createCriteria(User.class);
		criteria.add(Restrictions.ilike(TechScreenConstants.COLUMN_USER_NAME, userName));
		criteria.add(Restrictions.ilike(TechScreenConstants.COLUMN_PASSWORD,password));
		return (User)criteria.uniqueResult();
	}

	@Override
	public User getUser(Integer idUser) throws DataOperationException {
		// TODO Auto-generated method stub
		Criteria criteria = getCurrentSession().createCriteria(User.class);
		criteria.add(Restrictions.idEq(idUser));
		return (User) criteria.uniqueResult();
	}

	@Override
	public User getUserByName(String firstName, String lastName)
			throws DataOperationException {
		Criteria criteria = getCurrentSession().createCriteria(User.class);
		criteria.add(Restrictions.ilike(TechScreenConstants.COLUMN_USER_FIRST_NAME, firstName));
		criteria.add(Restrictions.ilike(TechScreenConstants.COLUMN_USER_LAST_NAME,lastName));
		return (User)criteria.uniqueResult();
	}

	@Override
	public List<User> getAllCandidates() throws DataOperationException {
		Criteria criteria = getCurrentSession().createCriteria(User.class);
		criteria.add(Restrictions.ilike("role", TechScreenConstants.ROLE_CANDIDATE));
		return (List<User>)criteria.list();
	}

	@Override
	public void deleteUser(User user) throws DataOperationException {
		// TODO Auto-generated method stub
		deleteObject(user);
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Override
	public List<Candidate> getAllMyCandidates(Integer userID)
			throws DataOperationException {
		// TODO Auto-generated method stub
		Criteria criteria = getCurrentSession().createCriteria(Candidate.class);
		criteria.add(Restrictions.eq("candidateHandeledBy.userId", userID));
		return (List<Candidate>)criteria.list();
	}
		
	
	

}
