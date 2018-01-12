package com.ness.screening.util;
/**
 * 
 * 
 * @author InCoSer Inc,.
 * 
 * Copyright (c) 2011 InCoSer Inc,
 * All Rights Reserved.
 * 
 * This software contains trade secrets and confidential material of InCoSer inc
 * Company, and its use of disclosure in whole or in part without express
 * written permission of InCoSer is Prohibited.
 */
import org.hibernate.SessionFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ness.screening.commons.logger.aspect.Loggable;
import com.ness.screening.commons.logger.util.LogLevel;
import com.ness.screening.dao.UserDao;



public class DaoRegistry {
	
	private static ApplicationContext ctx;
	

	/**
	 * Private to make this a singleton.
	 */
	private static void DaoRegistry(){
		if(ctx==null){
			ctx = new ClassPathXmlApplicationContext("applicationContext-hibernate.xml");
		}
	}

	/**
	 * method to get SessionFactory from ApplicationCOntext
	 * @return
	 */
	@Loggable(value = LogLevel.INFO)
	public static SessionFactory getSessionFactory(){
		DaoRegistry();
		return (SessionFactory) ctx.getBean("sessionFactory", SessionFactory.class);
	}

	
	@Loggable(value = LogLevel.INFO)
	public static UserDao getUserDao(){
		DaoRegistry();
		return (UserDao)ctx.getBean("userDao");
	}
	
	
}
