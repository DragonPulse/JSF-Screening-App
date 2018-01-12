<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<script type="text/javascript">
var contextPath = '<%=request.getContextPath()%>';
</script>
<c:set var="userRole" value="${model.userVO.role}" />
<c:set var="currentUser" value="${model.userVO}" />

<script type="text/javascript">
	var userRole = "${userRole}";
	$(document).ready(function() {

		$("#footer").constantfooter({ feed: "", showclose: true });
		
		if (userRole != 'ROLE_ADMIN') {
			$("#adminConsole").hide();
			$("#maintainence").hide();
			$("#reports").hide();
			$("#maintainenceLinkId").hide();
			$("#adminLinkId").hide();
			$("#reportsLinkId").hide();
		}
		if(userRole == 'ROLE_ADMIN'){
			$("#mycandidates").hide();
			$("#caniddatesLinkId").hide();
			
		}
		if (userRole == '') {
			$.ajax({
			    type: "POST",
			        url: "/signout.html",
			         	dataType: "json",
			            success: function(data, textStatus) {
			                   if (data.redirect) {
			                               // data.redirect contains the string URL to redirect to
			                                           window.location.href = data.redirect;
			                    }
   				 }
			});

		}

	});
	//alert(userRole);
	// etc.
</script>

</head>
<body>

	<table width="100%" border="0" cellspacing="0" cellpadding="0"
		class="header_table_1">
		<tr>
			<td rowspan="2" class="logo_box"><h3><img src="<%=request.getContextPath()%>/images/ness-logo-icon.png" style="width: 50px;height: 50px;max-width: 45%"  /></td>
			<td colspan="2" class="user_info_box main_right">
				<div class="floatRight">
					<div class="floatLeft">
						<div id="outside">
							<img src="<%=request.getContextPath()%>/images/spacer.gif" />
						</div>
					</div>
					<div class="prefer_box">
						<table border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td>
									<div class="pos_rel">
										<ul id="navigation-1" style="position: relative; top: -6px;">
											<li class="nothing"><span class="userName"
												style="position: relative; top: 5px;">Welcome</span></li>
											<li class="nothing">&nbsp;</li>
											<li class="nothing"><b><span class="userName"
													style="position: relative; top: 5px;">${model.userVO.userName}</span>
											</b></li>
											<li class="bull"><img
												src="<%=request.getContextPath()%>/images/spacer.gif" /></li>
											<li class="nothing"><a
												href="<%=request.getContextPath()%>/signout.html"
												title="Sign out" class="signout" target="_self">Sign Out
											</a></li>
										</ul>
									</div>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td class="tab_box">
				<ul class="top_menu">
					<!--  rendered can be done based on role -->
					<li id="home"><a
						href="<%=request.getContextPath()%>/viewHome.html"
						id="initiateLetter" class="${model.headerBean.homeCss}"><span>HOME</span> </a></li>
					
					<li id="requirements">
						<a	href="<%=request.getContextPath()%>/viewAllRequirements.html"	
						id="requirementsTabId"	class="${model.headerBean.requirementsCss}"><span>REQUIREMENTS </span> </a>
					</li>

					<li id="schedule">
						<a	href="<%=request.getContextPath()%>/viewAllSchedules.html"	
						id="schedulesTabId"	class="${model.headerBean.scheduleCss}"><span>SCHEDULE </span> </a>
					</li>
					
					<li id="mycandidates">
						<a	href="<%=request.getContextPath()%>/viewMyCandidates.html"	
						id="candidatesTabId"	class="${model.headerBean.candidatesCss}"><span>CANDIDATES </span> </a>
					</li>
					
					<li id="vendors">
						<a	href="<%=request.getContextPath()%>/viewAllVendors.html"	
						id="vendorsTabId"	class="${model.headerBean.vendorsCss}"><span>VENDORS </span> </a>
					</li>
					
				
					
					<li id="adminConsole"><a
						href="<%=request.getContextPath()%>/viewAdminConsole.html"
						id="assetMaintenanceHdrTabId"
						class="${model.headerBean.adminLinkCss}"><span>ADMIN
								CONSOLE</span> </a></li>
					<li id="maintainence"><a
						href="<%=request.getContextPath()%>/viewMaintainence.html"
						id="assetMaintenanceHdrTabId"
						class="${model.headerBean.maintaincenceCss}"><span>MAINTAINENCE</span> </a></li>
					<li id="reports"><a
						href="<%=request.getContextPath()%>/viewReports.html"
						id="reportsTabId"
						class="${model.headerBean.reportsLinkCss}"><span>REPORTS</span> </a></li>

				</ul>
			</td>
			<td class="main_search_box">
				<div style="padding-bottom: 2px;">
					<div class="floatRight" id="footer_icons">
						<div class="balloon_links" id="icon_placeholder2">
							<table class="skin_line" cellpadding="0" cellspacing="4"
								border="0">
								<tbody>
									<tr>
										<td style="top: 4px; position: relative"></td>
										<td>
											<div id="switcher"></div></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

				</div>
			</td>
		</tr>
	</table>
	<table width="100%" border="0" cellspacing="0" cellpadding="0"
		class="header_table_2">
		<tr>
			<td class=""></td>
		</tr>
	</table>
</body>