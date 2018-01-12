<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<head>
<script type="text/javascript">
var CONTEXT_ROOT = '<%= request.getContextPath() %>';
</script>

<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/select2.css"	 />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/select2-bootstrap.css"	 />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/datepicker.css"	 />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/jquery.datetimepicker.css"	 />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/bootstrap.css"	 />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/jquery-ui-1.10.0.custom.css"	 />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/fileinput.css"	 />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/TableBarChart.css"	 />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/Chart.css"	 />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/daterangepicker-bs2.css"	 />

<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/jquery-ui-1.10.0.custom.css"	 />
<link rel="stylesheet" type="text/css"  href="<%=request.getContextPath()%>/css/ui.growl.css" />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/ui-grid.css"	 />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/daterangepicker3.css"	 />
<link rel="stylesheet" type="text/css"  href="<%=request.getContextPath()%>/css/select2.css"	>
<link rel="stylesheet" type="text/css"  href="<%=request.getContextPath()%>/css/select2.min.css"	>
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/smart_wizard.css" />
<link rel="stylesheet" type="text/css"  href="<%=request.getContextPath()%>/css/ui.growl.css" />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/default.css" />
<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/fileinput.css"	 />

<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery-1.7.1.min.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery-ui.min.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/bootstrap.min.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/i18n/grid.locale-en.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.jqGrid.min.js"></script>
<script src="<%=request.getContextPath()%>/scripts/jquery/block-ui.js"></script>
<script src="<%=request.getContextPath()%>/scripts/jquery/select2.min.js"></script>
<script src="<%=request.getContextPath()%>/scripts/jquery/moment.js"></script>
<script src="<%=request.getContextPath()%>/scripts/jquery/daterangepicker.js"></script>
<script src="<%=request.getContextPath()%>/scripts/jquery/jquery.growl.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/bootstrap-multiselect.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/appscripts/ajaxloading.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery-jqgrid.fmatter.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.smartWizard-2.0.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.constantfooter.js"></script>
<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery.maskedinput.js"></script>

<script	src="<%=request.getContextPath()%>/scripts/jquery/fileinput.js"></script>
<link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/svg.js/1.0.1/svg.min.js"></script>
 <script src="<%=request.getContextPath()%>/scripts/jquery/flowsvg.min.js"></script>
<script src="<%=request.getContextPath()%>/scripts/jquery/jquery.scrollTo.min.js"></script>

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

#wrapper { background:#fff;}
.container { width:1024px;}
.swMain .stepContainer div.content { width: 100%; border:0; padding:5px !important;}
.header_table_2 { height:5px;}
.top_menu li { background: none !important; border-left:1px solid #ccc;}
.top_menu.nav-pills > li > a { padding:0 5px; margin:0;}
.top_menu li a span { padding: 6 7px;}
.top_menu{ margin-top:10px}
.swMain .stepContainer table td { padding:5px;}
.swMain .stepContainer .StepTitle { margin-bottom:20px;}
.swMain ul.anchor { margin-bottom:20px;}

.footer {
  background: url(<%=request.getContextPath()%>/images/footer_bg.gif) right no-repeat;
  height: 50px;
  padding-top: 70px;
  position: relative;
  margin: 0 auto;
  bottom: -80px;
  float: none;
  width: 1009px;
}
</style>
</head>