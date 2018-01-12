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
<title>
	<tiles:insertAttribute name="title" ignore="true" />
</title>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/login.css" />

<link	href="<%=request.getContextPath()%>/css/jquery-ui-1.8.20.custom.css"	rel="stylesheet" type="text/css" />

<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery-1.7.1.min.js"></script>

<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery-ui.min.js"></script>
	
<script	src="<%=request.getContextPath()%>/scripts/jquery/block-ui.js"></script>
	
</head>
<body style="background: url(<%=request.getContextPath()%>/images/bluebgb.jpg) repeat-x">
	
		<tiles:insertAttribute name="body" />
	
		
</body>
</html>
