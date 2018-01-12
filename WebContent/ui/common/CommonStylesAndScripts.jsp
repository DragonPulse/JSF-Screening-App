<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<head>

<link rel="stylesheet" type="text/css"  href="<%=request.getContextPath()%>/css/login.css" />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/smart_wizard.css" />
<%--<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/wizard_style.css" /> --%>
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/default.css" />
<link rel="stylesheet" type="text/css"  href="<%=request.getContextPath()%>/css/ui.growl.css" />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/jquery-ui-1.8.20.custom.css"	 />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/ui-grid.css"	 />

<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery-1.7.1.min.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery-ui.min.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/i18n/grid.locale-en.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.jqGrid.min.js"></script>
<script src="<%=request.getContextPath()%>/scripts/jquery/block-ui.js"></script>
<script src="<%=request.getContextPath()%>/scripts/jquery/imgPreview.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.print.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.ui.editSelect.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.ui.widget.js.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery-picklist.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.growl.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.i18n.properties.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.constantfooter.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.autocomplete.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.maskedinput.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.smartWizard-2.0.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.easyconfirm.js"></script>

<script	src="<%=request.getContextPath()%>/scripts/appscripts/common.js"></script>





<style type="text/css">
#pimg{position:absolute;display:none;}

.ui-combobox {
	position: relative;
	display: inline-block;
}
.ui-button {
	position: absolute;
	top: 0;
	bottom: 0;
	margin-left: -1px;
	padding: 0;
	/* adjust styles for IE 6/7 */
	*height: 1.7em;
	*top: 0.1em;
}
.ui-autocomplete-input {
	margin: 0;
	padding: 0.3em;
}



</style>	

<style type="text/css">

.stepcarousel{
position: relative; /*leave this value alone*/
border: 10px solid black;
overflow: scroll; /*leave this value alone*/
width: 270px; /*Width of Carousel Viewer itself*/
height: 200px; /*Height should enough to fit largest content's height*/
}

.stepcarousel .belt{
position: absolute; /*leave this value alone*/
left: 0;
top: 0;
}

.stepcarousel .panel{
float: left; /*leave this value alone*/
overflow: hidden; /*clip content that go outside dimensions of holding panel DIV*/
margin: 10px; /*margin around each panel*/
width: 250px; /*Width of each panel holding each content. If removed, widths should be individually defined on each content DIV then. */
}

</style>








</head>