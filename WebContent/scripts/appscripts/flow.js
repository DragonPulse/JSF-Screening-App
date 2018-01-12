$(function() {
	 
	//search Button Click Function
	//Fucntion to get trigegr on search click
	$('#searchBtn').on(
			'click',
			function() {
				var serverURL="searchFlow.do";
				$("#searchResultsList").jqGrid('setGridParam', {url:serverURL,datatype:'json',page:1}).trigger("reloadGrid");
				return false;
			
			});
	
	
	//declaration for hideLoading
	var hideLoading = function () {
		jQuery("#lui_searchResultsList").hide();
		jQuery("#load_searchResultsList").hide();
 	};	 	
 	
 	
	$('#openDescModal').click(function(event) {
		event.preventDefault();
		$("#detailedDescModal").dialog({					
				width: 600,
				height:400,
				modal: true,
				close: function(event, ui) {
					$("#dialog").remove();
					}
				});
	    }); //close click
	
	var onLoad = function() {
		$('#message').hide();			
	
	};
	
	$('#fileChkbx').click(function() {
	    $("#fileUpload").toggle(this.checked);
	   
	});
	
	onLoad();
	
	//Report Loading
	var handleAjaxError=function (jqXHR, textStatus, errorThrown) {
		alert(jqXHR);
		alert(textStatus);
		alert(errorThrown);
	    // do something
	}

	//Date time picker
	$('#depDateTime').datetimepicker({
		mask:'19/39/9999 29:59',
		format:'m/d/Y H:i',
		step:'30'
	});
	
	
	$("#message").hide();
	
	// Smart Wizard 	
	$('#wizard').smartWizard();
	     
	function onFinishCallback(){
	       $('#wizard').smartWizard('showMessage','Finish Clicked');
	      //alert('Finish Clicked');
	}     
		
	//Jqgrid for Table to display detailed description
	jQuery("#searchResultsList").jqGrid({
		datatype: "json",
	   	colNames:['Change Form ID','Raised By', 'Requested Date', 'Email Id','Jira Ticket','Status'],
	   	colModel:[
	   		{name:'changeFormId',index:'changeFormId'},
	   		{name:'requestedBy',index:'requestedBy'},
	   		{name:'requestedDate',index:'requestedDate',
	   		 formatter: function(cellValue, options) {
			        if(cellValue) {
			            return $.fmatter.util.DateFormat(
			                '', 
			                new Date(+cellValue), 
			                'UniversalSortableDateTime', 
			                $.extend({}, $.jgrid.formatter.date, options)
			            );
			        } else {
			            return '';
			        }
			    }
	   		},
	   		{name:'emailID',index:'emailID' ,align:"right"},
	   		{name:'jiraId',index:'jiraId',  align:"right"},
	   		{name:'status', align:"center",search:false,index:'status' ,sortable: false,formatter: setStatusImage}, 
	   	],
	   	rowNum:10,
	   	rowList:[10,20,30],
	   	pager: '#searchResultsListPager',
	   	sortname: 'id',
	    viewrecords: true,
	    sortorder: "desc",
	    width:'600',
	    caption:"Search Results"
	});
	jQuery("#searchResultsList").jqGrid('navGrid','#searchResultsListPager',{edit:false,add:false,del:false});

	function setStatusImage(cellValue, options, rowdata, action)  {
		if(rowdata.status=="Processing"){
			return imgSrc = "<img src='"+contextPath+"/images/Circle_Orange.png' ></img>";
		}
		if(rowdata.status=="Completed"){
			return imgSrc = "<img src='"+contextPath+"/images/Circle_Green.png' ></img>";
		}
		if(rowdata.status=="Deferred"){
			return imgSrc = "<img src='"+contextPath+"/images/Circle_Red.png' ></img>";
		}
       
    }
});

///////////////////// start flow chart ////////////////////////////////////////////////////////////
flowSVG.draw(SVG('drawing').size(900, 1100));
flowSVG.config({
interactive: true,
showButtons: true,
connectorLength: 60,
scrollto: true
});
flowSVG.shapes(
[
{
label: 'knowPolicy',
type: 'decision',
text: [
'Do you know the ',
'Open Access policy',
'of the journal?'
],
yes: 'hasOAPolicy',
no: 'checkPolicy'
}, 
{
label: 'hasOAPolicy',
type: 'decision',
text: [
'Does it have Open',
'Access paid option or is it an',
' Open Access journal?'
],
yes: 'CCOffered',
no: 'canWrap'
}, 
{
label: 'CCOffered',
type: 'decision',
text: [
'Creative Commons licence',
'CC-BY offered?'
],
yes: 'canComply',
no:'checkGreen'
},
{
label: 'canComply',
type: 'finish',
text: [
'Great - can comply. ',
'Please complete'
],
links: [
{
text: 'application form', 
url: 'http://www.jqueryscript.net/chart-graph/Simple-SVG-Flow-Chart-Plugin-with-jQuery-flowSVG.html', 
target: '_blank'
}
],
tip: {title: 'HEFCE Note',
text:
[
'You must put your',
'accepted version into',
'WRAP and/or subject',
'repository within 3 months',
'of acceptance.'
]}
},
{
label: 'canWrap',
type: 'decision',
text: [
'Can you archive in ',
'WRAP and/or Subject',
'repository?'
],
yes: 'checkTimeLimits',
no: 'doNotComply'
}, 
{
label: 'doNotComply',
type: 'finish',
text: [
'You do not comply at all. ',
'Is this really the only journal',
' you want to use? ',
'Choose another or make ',
'representations to journal'
],
tip: {title: 'HEFCE Note',
text:
[
'If you really have to go',
'this route you must log',
'the exception in WRAP on',
'acceptance in order',
'to comply.'
]}
},       
{
label: 'checkGreen',
type: 'process',
text: [
'Check the journal\'s policy',
'on the green route'
],
next: 'journalAllows',
}, 
{
label: 'journalAllows',
type: 'decision',
text: ['Does the journal allow this?'],
yes: 'checkTimeLimits',
no: 'cannotComply',
orient: {
yes:'r',
no: 'b'
}

},
{
label: 'checkTimeLimits',
type: 'process',
text: [
'Make sure the time limits',
'acceptable',
'6 month Stem',
'12 month AHSS'
],
next: 'depositInWrap'
},
{
label: 'cannotComply',
type: 'finish',
text: [
'You cannot comply with',
'RCUK policy. Contact ',
'journal to discuss or',
'choose another'
],
tip: {title: 'HEFCE Note',
text:
[
'Deposit in WRAP if',
'time limits acceptable. If',
'journal does not allow at all',
'an exception record will',
'have to be entered',
'in WRAP, if you feel this is',
'most appropriate journal.'
]}
},
{
label: 'depositInWrap',
type: 'finish',
text: [
'Deposit in WRAP here or ',
'contact team'
],
tip: {title: 'HEFCE Note',
text:
[
'You must put your',
'accepted version into',
'WRAP and/or subject',
'repository within 3 months',
'of acceptance.',
'Note also time limits:',
'HEFCE 12 months',
'STEM ? months',
'AHSS ? months',
'So you comply here too.'
]}
},
{
label: 'checkPolicy',
type: 'process',
text: [
'Check journal website',
'or go to '
],
links: [
{
text: 'SHERPA FACT/ROMEO ', 
url: 'http://www.jqueryscript.net/chart-graph/Simple-SVG-Flow-Chart-Plugin-with-jQuery-flowSVG.html', 
target: '_blank'
}
],
next: 'hasOAPolicy'
}
]);
