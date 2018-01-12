package com.ness.screening.constants;

public class TechScreenConstants {
	
	public static final String ROLE_USER="User";
	public static final String ROLE_CANDIDATE="Candidate";
	public static final String ROLE_HR="HR";
	public static final String ROLE_ADMIN="Admin";
	
	//Columns used by DAO
	public static final String COLUMN_USER_NAME="userName";
	public static final String COLUMN_PASSWORD="password";
	public static final String COLUMN_USER_FIRST_NAME="userFirstName";
	public static final String COLUMN_USER_LAST_NAME="userLastName";
	
	public static final String COLUMN_VENDOR_NAME="vendorName";
	
	//Columns used by Dao for Candidates
	

	//parameters used for reading request
	public static final String REUEST_PARAM_CANDIDATE_EMAIL_ID="candEmailId";
	public static final String REUEST_PARAM_SELECTED_CANDIDATE_ID="selectedCandidateId";
	//Session Attributes name
	public static final String SESSION_CANDIDATE_DOC_MAP="candidateDocuMap";
	public static final String SESSION_VENDOR_NAMES_LIST="vendorNameList";
	
	public static final String DATE_FORMAT="MM-dd-yyyy";
	
	//Properties of File
	public static final String PROPERTIES_FILE_DOC_PATH="TechScreening::doc.path";
	
	//AppCode COnstants
	public static final String APP_CODE_CATEGORY_DOC_TYPE= "DOC_TYPE";
	public static final String APP_CODE_EMPLOYMENT_TYPE= "EMPLT_TYPE";
	public static final String APP_CODE_JOINING_TIME= "JOIN_TIME";
	public static final String APP_CODE_PRIMARY_SKILL= "PRIMARY_SKILL";
	
}
