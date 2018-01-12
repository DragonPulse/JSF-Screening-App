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
<title><tiles:insertAttribute name="title" ignore="true" />
</title>
<%@ include file="../ui/common/CommonStylesAndScriptsNew.jsp" %>


<script type="text/javascript">
    $(document).ready(function(){
     //Logo Preview
     
    function pimg(){
    	this.xOffset = 180;
    	this.yOffset = 250;
    	$("a.pimg").hover(function (e){
        	this.img_title = this.title;
        	this.title = "";
        	var img_src = $(this).attr('img_src');
        	var desc = (this.img_title != "") ? "<h3>" + this.img_title + "</h3>" : "";
        	var image = (img_src) ? img_src : this.src;
        	
        	$("#step-3").append("<div id='pimg'><img src='" + image + "' alt='Image preview' style='width:150px' />" + desc + "</div>");
        	//$("#pimg").css("top", (e.pageY - xOffset) + "px").css("left", (e.pageX + yOffset) + "px");
        	$("#pimg").fadeIn(700);
    	}, function (){
        	this.title = this.img_title;
        	$("#pimg").remove();
    	});
		$("a.pimg").mousemove(function (e){
		       // $("#pimg").css("top", (e.pageY - xOffset) + "px").css("left", (e.pageX + yOffset) + "px");
	    });
};

pimg();


      
	});
	
	
	
	
	
	

	$(function() {
		
		
		
	});
	
	
	

</script>


</head>

<body>
	<form id="form" name="form" >
		<table border="0" cellpadding="2" cellspacing="2" align="center"	width="100%">
			<tr>
				<td height="10%" colspan="2">
					<tiles:insertAttribute name="header" />
				</td>
			</tr>
			
			<tr>				
				<td width="80%">
					<tiles:insertAttribute name="body" />
				</td>
			</tr>
			<tr>
				<td height="10%" colspan="2">
					<tiles:insertAttribute name="footer" />
				</td>
			</tr>
		</table>
	</form>
</body>
</html>


