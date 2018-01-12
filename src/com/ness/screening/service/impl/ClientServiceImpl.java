package com.ness.screening.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.exception.ApplicationException;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.dao.ClientDao;
import com.ness.screening.dao.VendorDao;
import com.ness.screening.entity.Client;
import com.ness.screening.entity.Vendor;
import com.ness.screening.service.ClientService;

@Transactional
public class ClientServiceImpl implements ClientService{
	@Autowired
	private ClientDao clientDao;

	public ClientDao getClientDao() {
		return clientDao;
	}

	public void setClientDao(ClientDao clientDao) {
		this.clientDao = clientDao;
	}

	@Override
	public void save(Client client) throws ApplicationException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update(Client client) throws ApplicationException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Client> getAllClients() throws ApplicationException {
		// TODO Auto-generated method stub
		return clientDao.getAllClients();
	}

	@Override
	public Client getClient(Integer idClient) throws ApplicationException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Client getClientByName(String clientName) throws ApplicationException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteClient(Client client) throws ApplicationException {
		// TODO Auto-generated method stub
		
	}

		
	
	
	

}
