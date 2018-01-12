<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%
response.setHeader("Cache-Control","no-cache");
response.setHeader("Pragma","no-cache");
response.setDateHeader ("Expires", -1);
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><tiles:insertAttribute name="title" ignore="true" /></title>

<%@ include file="../ui/common/CommonStylesAndScriptsNew.jsp" %>
</head>
<body>
<form  name="leftnavform" id="leftnavform">
	
	<table width="100%" border="0" cellspacing="0" cellpadding="0" height="100%">
		<tr>
				<td><tiles:insertAttribute name="header" /></td>
				<table width="100%" border="0" cellspacing="0" cellpadding="0" height="auto">
					<tr>
						<td class="left_box pt_5px"></td>
						<td class="crumb_box"><img src="<%=request.getContextPath()%>/images/spacer.gif" /></td>
						<td class="print_mail align_right"><img src="<%=request.getContextPath()%>/images/spacer.gif" /></td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td style="padding:0 5px">
			<table width="100%" border="0" cellspacing="0" cellpadding="0" height="100%">
					<tr>
						<td class="left_box_td pt_5px">
							<div class="left_box" id="left_box">
								<table width="100%" border="0" cellspacing="0" cellpadding="0" class="left_nav">								
									<tiles:insertAttribute name="leftnav" />
								</table>
							</div>
						</td>
					
						<td class="main_content_box">
							
							<tiles:insertAttribute name="body" />
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td><tiles:insertAttribute name="footer" /></td>
		</tr>
	</table>
	
</form>
	

</html>
