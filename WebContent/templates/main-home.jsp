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
<script type="text/javascript">


</script>

</head>
<body>
	<form action="" method="post" name="form1">


		<table width="100%">
			<tr>
				<td><tiles:insertAttribute name="header" /></td>
			</tr>
			<tr>
				<%-- <td><tiles:insertAttribute name="menu" /></td> --%>
				<td><tiles:insertAttribute name="body" /></td>
			</tr>
			<tr>
				<td><tiles:insertAttribute name="footer" /></td>
			</tr>
		</table>
	</form>
</body>
</html>
