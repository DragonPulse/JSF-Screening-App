package com.ness.screening.vo;

import java.io.Serializable;


public class MessageVO implements Serializable{

	private String message;
	private String messageClass;
	
	public MessageVO(String message,String messageClass){
		this.message=message;
		this.messageClass=messageClass;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getMessageClass() {
		return messageClass;
	}
	public void setMessageClass(String messageClass) {
		this.messageClass = messageClass;
	}
	
	
	
}
