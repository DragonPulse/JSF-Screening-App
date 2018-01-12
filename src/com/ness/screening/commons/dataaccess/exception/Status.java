package com.ness.screening.commons.dataaccess.exception;


public enum Status {

	/** SUCCESS. */
	SUCCESS("Status.SUCCESS", 0),
	/** FAIL. */
	FAIL("Status.FAIL", 99)	;
	/** text. */
	private final String text;

	/** code. */
	private int code;

	/**
	 * Constructor status.
	 * 
	 * @param text
	 *            the text
	 * @param code
	 *            the code
	 */
	Status(String text, int code) {
		this.text = text;
		this.code = code;
	}

	/**
	 * Gets the code.
	 * 
	 * @return the code
	 */
	public int getCode() {
		return code;
	}

	/**
	 * Gets the text.
	 * 
	 * @return the text
	 */
	public String getText() {
		return text;
	}
}