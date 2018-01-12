

	$(function() {		
	
		
		//to clear earlier form action
		$('#leftnavform').attr("action", "");			
		
		//to display message
		var showMessage=function(message){			
			$.growl({message: message, timeout:3});  	
			$('#message').html(message);
			$('#message').show();
			$('#message').delay(3000).fadeOut();				
		};
		
		//to display message to display with class
		var showMessageWithClass=function(message,classname){			
			$.growl({message: message, timeout:3});  	
			$('#message').html(message);
			$('#message').addClass(classname);
			$('#message').show();
			$('#message').delay(3000).fadeOut();				
		};
		
		
		//declaration for onload 
		var onLoad = function(){
			$('#vendorDetailModal').hide();
			$('#leftnavform').attr("action", "");	
			$("#accordion").accordion();
			$('#message').hide();
			
			$("#appCodesH3").hide();
			$("#appCodesAccDiv").hide();
			$("#custH3").hide();
			$("#custAccDiv").hide();
			$("#reportsH3").hide();
			$("#reportsAccDiv").hide();
			$("#customersH3").show();
			$("#customersAccDiv").show();
			$('#customersAccDiv').addClass("ui-accordion-group-selected");
			$("#staffsH3").show();
			$("#staffAccDiv").show();
		
		};	
		
		 var processAddEdit=function(response, postdata) {	
		    	var obj2= response.responseText;
		    	var obj = jQuery.parseJSON(obj2);
		    	showMessageWithClass(obj.message,obj.messageClass);
		    	var appCodesURL="getAllMyCandidates.html";	  		
		  		$("#all-vendors-grid").jqGrid('setGridParam', {url:appCodesURL,datatype:'json',page:1}).trigger("reloadGrid");
			
		 }
		
		//declaration for hideLoading
		var hideLoading = function () {
    		jQuery("#lui_all-vendors-grid").hide();
    		jQuery("#load_all-vendors-grid").hide();
	 	};	 	
	 	
		 onLoad();	
	
		 
		//Open Modal when User CLicks on View link in Table
		$(document).on('click', 'a[id^="view"]', function(event) {
				var idOfElement=this.id;
				var rowId = idOfElement.substring(4, 5);
				var dataFromTheRow = jQuery('#all-vendors-grid').jqGrid ('getRowData', rowId);
				
				$("#vendorCompTxt").val(dataFromTheRow.vendorName);
				$("#vendFirstNameTxt").val(dataFromTheRow.vendorContactFirstName);
				$("#vendLastNameTxt").val(dataFromTheRow.vendorContactLastName);
				$("#vendContactTxt").val(dataFromTheRow.vendorContactNum);
				$("#vendEmailTxt").val(dataFromTheRow.vendorEmailId);
				$("#vendCreatedByTxt").val(dataFromTheRow.createdBy);
				$("#vendCreatedDtTxt").val(dataFromTheRow.createdDt);
				$("#vendUpdatedByTxt").val(dataFromTheRow.updatedBy);
				$("#vendUpdatedDtTxt").val(dataFromTheRow.updatedDt);
				
				$('#vendorDetailModal').modal('show')
				/*dialog12 = $("#vendorDetailModal").dialog({
					width : '80%',					
					modal : true,
					close : function(event, ui) {
						$("#vendorDetailModal").remove();
					}
				});*/
			});
		 
		 
     	//For Loading Grid Group Search Results

		jQuery("#all-vendors-grid").jqGrid({
					datatype : "json",
					rowNum : 10,
					url:"getAllVendorDetails.html",
					rowList : [ 10,15,20 ],
					colNames : [ '','Vendor Name','Contact Person First Name','Contact Person Last Name', 'Contact Number','Email','CreatedBy','CreatedDate','UpdatedBy','UpdatedDate','Edit', 'View'],
					colModel : [	
					{
						name : 'vendorId',
						index : 'vendorId',
						align : "Left",
						width : '100%',
						align : 'center',
						hidden: true
					},
					 {
						name : 'vendorName',
						index : 'vendorName',
						align : "Left",
						width : '100%',
						align : 'center'
					}, {
						name : 'vendorContactFirstName',
						index : 'vendorContactFirstName',
						width : '100%',
						align : 'center'
					}, {
						name : 'vendorContactLastName',
						index : 'vendorContactLastName',
						width : '100%',
						align : 'center'
					}, {
						name : 'vendorContactNum',
						index : 'vendorContactNum',
						width : '100%',
						align : 'center'
					}, {
						name : 'vendorEmailId',
						index : 'vendorEmailId',
						width : '100%',
						align : 'center'
					}, {
						name : 'createdBy',
						index : 'createdBy',
						width : '100%',
						align : 'center',
						hidden: true
					},{
						name : 'createdDt',
						index : 'createdDt',
						width : '100%',
						align : 'center',
						hidden: true
					},{
						name : 'updatedBy',
						index : 'updatedBy',
						width : '100%',
						align : 'center',
						hidden: true
					},{
						name : 'updatedDt',
						index : 'updatedDt',
						width : '100%',
						align : 'center',
						hidden: true
					},{ name: 'edit', width: 50, sortable: false, search: false,
						 formatter:returnMyEditLink
					},{ name: 'view', width: 50, sortable: false, search: false,
	                      formatter:returnMyViewLink
	                  }
	                ],
					pager : "#all-vendors-grid-pager",
					height : '250px',
					gridview : true,
					viewrecords : true,
					loadonce :true,
					sortorder : "asc",
					scroll : false,
					caption : "All Users:",
					search : true,
					width:'100%',
					hidegrid: false,
					loadComplete : function() {
						hideLoading();
					},
					loadError : function() {
						hideLoading();
					},
					
					jsonReader : {
						root : "rows",
						page : "page",
						total : "total",
						records : "records",
						repeatitems : false,
						cell : "cell",
						id:"idApPerson"
					}
				});
		
		jQuery("#all-vendors-grid").jqGrid('filterToolbar', {
			stringResult : true,
			searchOnEnter : false
		});
		
		jQuery("#all-vendors-grid")
		.navGrid('#all-vendors-grid-pager',{del:false,edit:false,add:false,search:false,refresh:true},
	      { // edit options 
	        url: 'editUser.html',
	        closeAfterEdit: true,
	        afterComplete:processAddEdit
	    },
	    { // add
	        url: 'addUser.html',
	        closeAfterAdd: true,
	        afterComplete:processAddEdit
	    },
	    { //delete
	        url: 'deleteUser.html',
	        closeOnEscape: true,
	        afterComplete:processAddEdit
	    })
		
	    function getContextPath() {
			return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
		}

	    function returnMyEditLink(cellValue, options, rowdata, action){
	    	var contextPath=getContextPath();
			return "<a id='edit"+options.rowId+"' class='tableView' href='"+contextPath+"/editVendor.html?selectedVendor="+rowdata.vendorId+"' ><img src='"+contextPath+"/images/edit.png' height='16' width='16' ><b><u>Edit</u></b></a>";
		} 
		
		//my Edit Link
		function returnMyViewLink(cellValue, options, rowdata, action){
			return "<a id='view"+options.rowId+"' class='tableView' href='#' ><img src='"+contextPath+"/images/view.png' height='16' width='16'><b><u>View</u></b></a>";
		} 
		
	    
	   
     
 
	   function editOrView(param,rowId,idVendor,event){
		  // alert(idVendor);
		   var dataFromTheRow = jQuery('#all-vendors-grid').jqGrid ('getRowData', rowId);
		   //alert(dataFromTheRow.vendorId);
		   if(param=='view'){
			  
			   $("#vendorCompTxt").val(dataFromTheRow.vendorName);
			   $("#vendFirstNameTxt").val(dataFromTheRow.vendorContactFirstName);
			   $("#vendLastNameTxt").val(dataFromTheRow.vendorContactLastName);
			   $("#vendContactTxt").val(dataFromTheRow.vendorContactNum);
			   $("#vendEmailTxt").val(dataFromTheRow.vendorEmailId);
			   $("#vendCreatedByTxt").val(dataFromTheRow.createdBy);
			   $("#vendCreatedDtTxt").val(dataFromTheRow.createdDt);
			   $("#vendUpdatedByTxt").val(dataFromTheRow.updatedBy);
			   $("#vendUpdatedDtTxt").val(dataFromTheRow.updatedDt);
			   event.preventDefault();
			   event.stopImmediatePropagation()
			   dialog12 = $("#vendorDetailModal").dialog({
					width : '80%',					
					modal : true,
					close : function(event, ui) {
						$("#vendorDetailModal").remove();
					}
				});
			   
			   $('#vendorDetailModal').modal('show');
		   }
	   }
		
	  
	 //Cancel Button of Modal
		$('#closeDialogBtn').click(function(event){
			$('#vendorDetailModal').dialog("close");
		});
		
	});
	
	 function view1(rowId){
  	   alert(rowId);
  	 var dataFromTheRow = jQuery('#all-vendors-grid').jqGrid ('getRowData', rowId);
  	 $("#vendorCompTxt").val(dataFromTheRow.vendorName);
	   $("#vendFirstNameTxt").val(dataFromTheRow.vendorContactFirstName);
	   $("#vendLastNameTxt").val(dataFromTheRow.vendorContactLastName);
	   $("#vendContactTxt").val(dataFromTheRow.vendorContactNum);
	   $("#vendEmailTxt").val(dataFromTheRow.vendorEmailId);
	   $("#vendCreatedByTxt").val(dataFromTheRow.createdBy);
	   $("#vendCreatedDtTxt").val(dataFromTheRow.createdDt);
	   $("#vendUpdatedByTxt").val(dataFromTheRow.updatedBy);
	   $("#vendUpdatedDtTxt").val(dataFromTheRow.updatedDt);
	  
	   dialog12 = $("#vendorDetailModal").dialog({
			width : '80%',					
			modal : true,
			close : function(event, ui) {
				$("#vendorDetailModal").remove();
			}
		});
     }
	   
	
	
