$(function() {
	//Report Loading
	var handleAjaxError=function (jqXHR, textStatus, errorThrown) {
		alert(jqXHR);
		alert(textStatus);
		alert(errorThrown);
	}
	
	var initLoad;
	$('#searchBtn').on(
			'click',
			function() {
				initLoad ='true';
				var serverURL="searchFlow.do?chgFrmId="+$('#srchChfmId').val()+"&reqBy="+$('#srchReqBy').val()+"&reqDate="+$('#srchReqDate').val()+"&jiraId="+$('srchJiraId').val();
				$("#recentRequestList").jqGrid('setGridParam', {url:serverURL,datatype:'json',page:1}).trigger("reloadGrid");
				return false;
			
			});
	
	$("#message").hide();
	
	//Jqgrid for Table to display detailed description
	jQuery("#recentRequestList").jqGrid({
		url:"loadRecentRequest.do?fromPage="+$('#captionId').val()+'&initLoad='+initLoad,
		datatype: "json",
	   	colNames:['Change Form Id','Requested By', 'Request Date','Email Id','Status','Comments'],
	   	colModel:[
	   		{name:'changeFormId',index:'changeFormId', width:250, align:"center"},
	   		{name:'requestedBy',index:'requestedBy', width:100, align:"center"},
	   		{name:'requestedDate',index:'requestedDate', width:100, align:"center"},
	   		{name:'emailID',index:'emailID', width:140, align:"center"},
	   		{name:'status',index:'status', width:60, align:"center"},
	   		{name:'comments',index:'comments', width:300, align:"left"},
	   	],
	   	rowNum:10,
	   	rowList:[10,20,30],
	   	pager: '#recentRequestListPager',
	   	sortname: 'id',
	    viewrecords: true,
	    sortorder: "desc",
	    height: 250,
	    width:'150%',
	    caption:$('#captionId').val(),
	    	  onSelectRow : function(changeFormId){
	    		  var rowData = jQuery(this).getRowData(changeFormId); 
                  var temp= rowData['changeFormId'];
                  loadViewFormData(temp);
                  return false;
		}
	});
	jQuery("#recentRequestList").jqGrid('navGrid','#recentRequestListPager',{edit:false,add:false,del:false});

	function loadViewFormData(chfrmId){
		var divTag = $("<div></div>");
		  $.ajax({
		      url: 'viewChangeForm.do?captionId='+$('#captionId').val(),
		      data:{'cgFmId' :chfrmId},
		      success: function(data) {
		        divTag.html(data)
		         .dialog({
		          modal: true,
		          title: 'View Change Form Details',
		          draggable:false,
		          resizable:false,
		          width:"800px",
		         })
		         .dialog('open');
		      }
		  });
	}
	
	//Jqgrid for Table to display detailed description
	jQuery("#requestResponseList").jqGrid({
		url:"loadSubmittedRequest.do",
		datatype: "json",
	   	colNames:['Change Form Id','Request Date','Status','Comments'],
	   	colModel:[
	   		{name:'changeFormId',index:'changeFormId', width:260, align:"center"},
	   		{name:'requestedDate',index:'requestedDate', width:100, align:"center"},
	   		{name:'status',index:'status', width:60, align:"center"},
	   		{name:'comments',index:'comments', width:300, align:"left"},
	   	],
	    onSelectRow : function(changeFormId){
  		  var rowData = jQuery(this).getRowData(changeFormId); 
            var temp= rowData['changeFormId'];
            var status= rowData['status'];
            if(status =='On Hold' || status == 'Defer'){
            	loadEditFormData(temp);
            }
            return false;
	}
	});
	
	function loadEditFormData(chfrmId){
		var divTag = $("<div></div>");
		  $.ajax({
		      url: 'editChangeForm.do?captionId='+$('#captionId').val(),
		      data:{'cgFmId' :chfrmId},
		      success: function(data) {
		        divTag.html(data)
		         .dialog({
		          modal: true,
		          title: 'Edit Change Form Details',
		          draggable:true,
		          modal:true,
		          resizable:false,
		          width:"800px"
		         })
		         .dialog('open');
		      }
		  });
	}
});
