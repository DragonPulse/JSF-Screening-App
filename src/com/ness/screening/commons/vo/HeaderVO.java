package com.ness.screening.commons.vo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class HeaderVO {
	public static final String blankTabCSS = "nothing";

	public static final String selectedTabCss = "current";
	
	public static final String INACTIVE_SUB_TAB_CSS = "level_0_item";
	public static final String INACTIVE_SIB_TAB_CSS = "level_0_item_on";
	
	public Integer currentTab = 0;
	public Integer currentSubTab = 0;
	
	List<String> subLinks = new ArrayList<String>(20);
	
	public HeaderVO(){
		for(int i=0;i<30;i++) subLinks.add(INACTIVE_SUB_TAB_CSS);
	}
	

	private String homeCss = blankTabCSS;
	
	private String maintaincenceCss = blankTabCSS;
	
	private String candidatesCss = blankTabCSS;
	
	private String vendorsCss = blankTabCSS;

	private String adminLinkCss = blankTabCSS;
	
	private String reportsLinkCss = blankTabCSS;
	
	private String requirementsCss = blankTabCSS;
	
	private String scheduleCss= blankTabCSS;

	

	public Integer getCurrentTab() {
		return currentTab;
	}

	public void setCurrentTab(Integer currentTab) {
		this.currentTab = currentTab;
	}

	public Integer getCurrentSubTab() {
		return currentSubTab;
	}

	public void setCurrentSubTab(Integer currentSubTab) {
		this.currentSubTab = currentSubTab;
	}

	public String getHomeCss() {
		return homeCss;
	}

	public void setHomeCss(String homeCss) {
		this.homeCss = homeCss;
	}

	public String getMaintaincenceCss() {
		return maintaincenceCss;
	}

	public void setMaintaincenceCss(String maintaincenceCss) {
		this.maintaincenceCss = maintaincenceCss;
	}

	public String getCandidatesCss() {
		return candidatesCss;
	}

	public void setCandidatesCss(String candidatesCss) {
		this.candidatesCss = candidatesCss;
	}

	public static String getSelectedtabcss() {
		return selectedTabCss;
	}

	public String getAdminLinkCss() {
		return adminLinkCss;
	}

	public void setAdminLinkCss(String adminLinkCss) {
		this.adminLinkCss = adminLinkCss;
	}
	
	

	public String getReportsLinkCss() {
		return reportsLinkCss;
	}

	public void setReportsLinkCss(String reportsLinkCss) {
		this.reportsLinkCss = reportsLinkCss;
	}
	
	

	public String getVendorsCss() {
		return vendorsCss;
	}

	public void setVendorsCss(String vendorsCss) {
		this.vendorsCss = vendorsCss;
	}

	/*public void getAdminTab(Integer subMenuIndex) {
		this.setHomeCss(blankTabCSS);
		this.setCandidatesCss(blankTabCSS);
		this.setMaintaincenceCss(blankTabCSS);
		this.setAdminLinkCss(selectedTabCss);	
		this.setReportsLinkCss(blankTabCSS);
		if(subMenuIndex!=-1){
			Collections.replaceAll(subLinks,INACTIVE_SIB_TAB_CSS,INACTIVE_SUB_TAB_CSS);
			currentSubTab = Integer.parseInt(subMenuIndex.toString());
			subLinks.add(currentSubTab, INACTIVE_SIB_TAB_CSS);			
		}
	}*/

	public void getHomeTab() {
		this.setHomeCss(selectedTabCss);
		this.setVendorsCss(blankTabCSS);
		this.setCandidatesCss(blankTabCSS);
		this.setMaintaincenceCss(blankTabCSS);
		this.setAdminLinkCss(blankTabCSS);	
		this.setReportsLinkCss(blankTabCSS);
		this.setRequirementsCss(blankTabCSS);
		this.setScheduleCss(blankTabCSS);
	}
	
	public void getCandidateTab() {
		this.setHomeCss(blankTabCSS);
		this.setVendorsCss(blankTabCSS);
		this.setCandidatesCss(selectedTabCss);
		this.setMaintaincenceCss(blankTabCSS);
		this.setAdminLinkCss(blankTabCSS);	
		this.setReportsLinkCss(blankTabCSS);
		this.setRequirementsCss(blankTabCSS);
		this.setScheduleCss(blankTabCSS);
	}
	
	public void getVendorsTab() {
		this.setHomeCss(blankTabCSS);
		this.setVendorsCss(selectedTabCss);
		this.setCandidatesCss(blankTabCSS);
		this.setMaintaincenceCss(blankTabCSS);
		this.setAdminLinkCss(blankTabCSS);	
		this.setReportsLinkCss(blankTabCSS);
		this.setRequirementsCss(blankTabCSS);
		this.setScheduleCss(blankTabCSS);
	}

	
	public void getRequirementsTab() {
		this.setHomeCss(blankTabCSS);
		this.setVendorsCss(blankTabCSS);
		this.setCandidatesCss(blankTabCSS);
		this.setMaintaincenceCss(blankTabCSS);
		this.setAdminLinkCss(blankTabCSS);	
		this.setReportsLinkCss(blankTabCSS);
		this.setRequirementsCss(selectedTabCss);
		this.setScheduleCss(blankTabCSS);
	}

	/*public void getMaintainenceTab(Integer subMenuIndex) {
		this.setHomeCss(blankTabCSS);
		this.setCandidatesCss(blankTabCSS);
		this.setMaintaincenceCss(selectedTabCss);
		this.setAdminLinkCss(blankTabCSS);	
		this.setReportsLinkCss(blankTabCSS);
		if(subMenuIndex!=-1){
			Collections.replaceAll(subLinks,INACTIVE_SIB_TAB_CSS,INACTIVE_SUB_TAB_CSS);
			currentSubTab = Integer.parseInt(subMenuIndex.toString());
			subLinks.add(currentSubTab, INACTIVE_SIB_TAB_CSS);			
		}
	}
	*/
	public void getCandidateSubMenuTab(Integer subMenuIndex) {
		this.setHomeCss(blankTabCSS);
		this.setCandidatesCss(selectedTabCss);
		this.setVendorsCss(blankTabCSS);
		this.setMaintaincenceCss(blankTabCSS);
		this.setAdminLinkCss(blankTabCSS);
		this.setReportsLinkCss(blankTabCSS);
		this.setRequirementsCss(blankTabCSS);
		this.setScheduleCss(blankTabCSS);
		if(subMenuIndex!=-1){
			Collections.replaceAll(subLinks,INACTIVE_SIB_TAB_CSS,INACTIVE_SUB_TAB_CSS);
			currentSubTab = Integer.parseInt(subMenuIndex.toString());
			subLinks.add(currentSubTab, INACTIVE_SIB_TAB_CSS);			
		}
	}
	
	public void getVendorsSubMenuTab(Integer subMenuIndex) {
		this.setHomeCss(blankTabCSS);
		this.setCandidatesCss(blankTabCSS);
		this.setVendorsCss(selectedTabCss);
		this.setMaintaincenceCss(blankTabCSS);
		this.setAdminLinkCss(blankTabCSS);
		this.setReportsLinkCss(blankTabCSS);
		this.setRequirementsCss(blankTabCSS);
		this.setScheduleCss(blankTabCSS);
		if(subMenuIndex!=-1){
			Collections.replaceAll(subLinks,INACTIVE_SIB_TAB_CSS,INACTIVE_SUB_TAB_CSS);
			currentSubTab = Integer.parseInt(subMenuIndex.toString());
			subLinks.add(currentSubTab, INACTIVE_SIB_TAB_CSS);			
		}
	}
	
	public void getJobReqSubMenuTab(Integer subMenuIndex) {
		this.setHomeCss(blankTabCSS);
		this.setCandidatesCss(blankTabCSS);
		this.setVendorsCss(blankTabCSS);
		this.setMaintaincenceCss(blankTabCSS);
		this.setAdminLinkCss(blankTabCSS);
		this.setReportsLinkCss(blankTabCSS);
		this.setRequirementsCss(selectedTabCss);
		this.setScheduleCss(blankTabCSS);
		if(subMenuIndex!=-1){
			Collections.replaceAll(subLinks,INACTIVE_SIB_TAB_CSS,INACTIVE_SUB_TAB_CSS);
			currentSubTab = Integer.parseInt(subMenuIndex.toString());
			subLinks.add(currentSubTab, INACTIVE_SIB_TAB_CSS);			
		}
	}
	/*public void getReportsTab(Integer subMenuIndex) {
		this.setHomeCss(blankTabCSS);
		this.setCandidatesCss(blankTabCSS);
		this.setMaintaincenceCss(blankTabCSS);
		this.setAdminLinkCss(blankTabCSS);
		this.setReportsLinkCss(selectedTabCss);		
		if(subMenuIndex!=-1){
			Collections.replaceAll(subLinks,INACTIVE_SIB_TAB_CSS,INACTIVE_SUB_TAB_CSS);
			currentSubTab = Integer.parseInt(subMenuIndex.toString());
			subLinks.add(currentSubTab, INACTIVE_SIB_TAB_CSS);			
		}
	}*/

	private boolean userMenuExpanded;

	private int activeIndex;
	
	

	public boolean isUserMenuExpanded() {
		return userMenuExpanded;
	}

	public void setUserMenuExpanded(boolean userMenuExpanded) {
		this.userMenuExpanded = userMenuExpanded;
	}

	public int getActiveIndex() {
		return activeIndex;
	}

	public void setActiveIndex(int activeIndex) {
		this.activeIndex = activeIndex;
	}

	private String currentLeftMenu;

	public String getCurrentLeftMenu() {
		return currentLeftMenu;
	}

	public void setCurrentLeftMenu(String currentLeftMenu) {
		this.currentLeftMenu = currentLeftMenu;
	}

	public List<String> getSubLinks() {
		return subLinks;
	}

	public void setSubLinks(List<String> subLinks) {
		this.subLinks = subLinks;
	}

	
	public String getRequirementsCss() {
		return requirementsCss;
	}

	public void setRequirementsCss(String requirementsCss) {
		this.requirementsCss = requirementsCss;
	}

	public String getScheduleCss() {
		return scheduleCss;
	}

	public void setScheduleCss(String scheduleCss) {
		this.scheduleCss = scheduleCss;
	}

	

	

	

	
	
	
}
