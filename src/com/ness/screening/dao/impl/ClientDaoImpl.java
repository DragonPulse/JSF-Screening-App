package com.ness.screening.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.dao.impl.BaseDaoImpl;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.dao.ClientDao;
import com.ness.screening.entity.Client;
import com.ness.screening.entity.Vendor;


@Transactional
public class ClientDaoImpl extends BaseDaoImpl implements ClientDao{

	@Override
	public void save(Client client) throws DataOperationException {
		// TODO Auto-generated method stub
		saveUpdateObject(client);
		
	}

	@Override
	public void update(Client client) throws DataOperationException {
		// TODO Auto-generated method stub
		merge(client);	
	}

	@Override
	public List<Client> getAllClients() throws DataOperationException {
		// TODO Auto-generated method stub
		Criteria criteria = getCurrentSession().createCriteria(Client.class);
		criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
		return (List<Client>)criteria.list();
	}

	
	

	@Override
	public void deleteClient(Client client) throws DataOperationException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Vendor getClient(Integer idClient) throws DataOperationException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Vendor getClientByName(String clientName) throws DataOperationException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<String> getClientNames() throws DataOperationException {
		// TODO Auto-generated method stub
		return null;
	}

	

}
