

$(function() {
	//Fucntion to get trigegr on search click
	$('#searchBtn').on(
			'click',
			function() {
				var serverURL="searchFlow.do";
				$("#searchResultsList").jqGrid('setGridParam', {url:serverURL,datatype:'json',page:1}).trigger("reloadGrid");
				return false;
			
			});
	
	

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
	   	colNames:['Change Form ID','Raised By', 'Request Raised On', 'Email Id','Jira Ticket','Status'],
	   	colModel:[
	   		{name:'slno',index:'slno', width:150},
	   		{name:'desc',index:'desc', width:250},
	   		{name:'attachmentsLink',index:'attachmentsLink', width:200},
	   		{name:'emailId',index:'emailId', width:200, align:"right"},
	   		{name:'jiraId',index:'jiraId', width:150, align:"right"},
	   		{name:'delete',search:false,index:'userId',width:100,sortable: false,formatter: deleteLink}, 
	   	],
	   	rowNum:10,
	   	rowList:[10,20,30],
	   	pager: '#searchResultsListPager',
	   	sortname: 'id',
	    viewrecords: true,
	    sortorder: "desc",
	    width:'150%',
	    caption:"Search Results"
	});
	jQuery("#searchResultsList").jqGrid('navGrid','#searchResultsListPager',{edit:false,add:false,del:false});

	function deleteLink(cellValue, options, rowdata, action)  {
        return "<a href='javascript:deleteRecord(" + rowdata.slNo + ")' class='ui-icon ui-icon-closethick'></a>";
    }
});
