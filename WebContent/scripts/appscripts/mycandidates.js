

	$(function() {	
		
		$.fn.jqm = false;
		
		   
		//Open Modal when User CLicks on View link in Table
		$(document).on('click', 'a[id^="view"]', function(event) {
				var idOfElement=this.id;
				var rowId = idOfElement.substring(4, 5);
				var dataFromTheRow = jQuery('#all-candidates-grid').jqGrid ('getRowData', rowId);
				
				$("#candFirstNameTxt").val(dataFromTheRow.candidateFirstName);
				$("#candLastNameTxt").val(dataFromTheRow.candidateLastName);
				$("#candContactTxt").val(dataFromTheRow.candidatePhoneNumber);
				$("#candEmailTxt").val(dataFromTheRow.candidateEmail);
				$("#candVendorContNameTxt").val(dataFromTheRow.candidateVendor);
				$("#candVendorContactNameTxt").val(dataFromTheRow.vendorContactName);
				$("#candVendorContNumTxt").val(dataFromTheRow.vendorContactPhone);
				$("#candHandledByTxt").val(dataFromTheRow.candidateScreenedBy);
				
				
				$('#candidateDetailModal').modal('show')
				
			});
		
		
		
	
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
			$('#candidateDetailModal').hide();
			$('#leftnavform').attr("action", "");	
			$("#accordion").accordion();
			$('#message').hide();
			$("#billingH3").hide();
			$("#billingAccDiv").hide();
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
		  		$("#all-candidates-grid").jqGrid('setGridParam', {url:appCodesURL,datatype:'json',page:1}).trigger("reloadGrid");
			
		 }
		
		//declaration for hideLoading
		var hideLoading = function () {
    		jQuery("#lui_all-candidates-grid").hide();
    		jQuery("#load_all-candidates-grid").hide();
	 	};	 	
	 	
		 onLoad();	
	
     	//For Loading Grid Group Search Results

		jQuery("#all-candidates-grid").jqGrid({
					datatype : "json",
					rowNum : 10,
					url:"getAllMyCandidates.html",
					rowList : [ 10,15,20 ],
					colNames : [ '','First Name','Last Name', 'Contact Number','Email','Vendor','VendorContactName','vendorContactPhone','Screened by','Edit', 'View'],
					colModel : [	
					{
						name : 'candidateId',
						index : 'candidateId',
						align : "Left",
						width : '10%',
						align : 'center',
						hidden: true
					},
					 {
						name : 'candidateFirstName',
						index : 'candidateFirstName',
						align : "Left",
						width : '100%',
						align : 'center'
					}, {
						name : 'candidateLastName',
						index : 'candidateLastName',
						width : '100%',
						align : 'center'
					}, {
						name : 'candidatePhoneNumber',
						index : 'candidatePhoneNumber',
						width : '100%',
						align : 'center'
					},  {
						name : 'candidateEmail',
						index : 'candidateEmail',
						width : '100%',
						align : 'center'
					}, {
						name : 'candidateVendor',
						index : 'candidateVendor',
						width : '100%',
						align : 'center'
					},{
						name : 'vendorContactName',
						index : 'vendorContactName',
						
						align : 'center',
						hidden: true
					},{
						name : 'vendorContactPhone',
						index : 'vendorContactPhone',
						
						align : 'center',
						hidden: true
					}, {
						name : 'candidateScreenedBy',
						index : 'candidateScreenedBy',
						width : '150%',
						align : 'center',
						search:false
					},{ name: 'edit', 
						width: 100, 
						sortable: false, 
						search: false,
						formatter:returnMyEditLink
					},{ name: 'view', width: 100,sortable: false, search: false,
						 formatter:returnMyViewLink
					}
	                ],
					pager : "#all-candidates-grid-pager",
					height : '250px',
					loadonce : true,
					gridview : true,
					viewrecords : true,
					sortorder : "asc",
					scroll : false,
					caption : "All Users:",
					search : true,
					width:'100%',
					
					hidegrid: false,
					loadComplete : function() {
						hideLoading();
					},
					subGrid: true,
					subGridRowExpanded: function(subgrid_id, row_id) {
					    // we pass two parameters
					    // subgrid_id is a id of the div tag created within a table
					    // the row_id is the id of the row
					    // If we want to pass additional parameters to the url we can use
					    // the method getRowData(row_id) - which returns associative array in type name-value
					    // here we can easy construct the following
							var dataFromTheRow = jQuery('#all-candidates-grid').jqGrid ('getRowData', row_id);
					       var subgrid_table_id;
					       subgrid_table_id = subgrid_id+"_t";
					       jQuery("#"+subgrid_id).html("<table id='"+subgrid_table_id+"' class='scroll'></table>");
					       jQuery("#"+subgrid_table_id).jqGrid({
					          url:"getAllDocsOfCandidateById.html?selectedCandidateId="+dataFromTheRow.candidateId,
					          datatype : "json",
					          width:'160%',
					          colNames: ['Document Type','Document Name','Uploaded By','Uploaded Date',''],
					          colModel: [
					            {	
					            	name:"docType",
					            	index:"docType",
					            	width:'100%',
					            	key:true
					            },{ 
					            	name:"docName",
					            	index:"docName",
					            	width:'100%',
					            },{
					            	name:"docUploadedBy",
					            	index:"docUploadedBy",
					            	width:'100%',
					            	align:"right"
					            },{
					            	name:"docUploadDate",
					            	index:"docUploadDate",
					            	width:'100%',
					            	align:"right"
					            },{
					            	name:"download",
					            	width:'100%',
					            	align:"right",
					            	sortable:false,
					            	formatter:returnMyDocDownloadLink
					            }
					          ],
					          height: '100%',
					          rowNum:20,
					          sortname: 'num',
					          sortorder: "asc"
					       });
					  },
					 
	                      
	                      
					loadError : function() {
						hideLoading();
					},
					/*onSelectRow : function(id, status) {
					//alert(id);
						$("#selectedId").val(id);
						$.blockUI({ message: $('#editConfirm'), css: { width: '100px' ,height:'150px'} }); 						
						},*/
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
		
		jQuery("#all-candidates-grid").jqGrid('filterToolbar', {
			stringResult : true,
			searchOnEnter : false
		});
		
		jQuery("#all-candidates-grid")
		.navGrid('#all-candidates-grid-pager',{del:false,edit:false,add:false,search:false,refresh:true},
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
		
	    function returnMyViewLink(cellValue, options, rowdata, action){
			return "<a id='view"+options.rowId+"' class='tableView' href='#' ><img src='"+contextPath+"/images/view.png' height='16' width='16'> <b><u>View</u></b></a>";
		}   
		
		function returnMyDocDownloadLink(cellValue, options, rowdata, action){
			return "<a id='download"+options.rowId+"' href='documentDownload.html?docLocation="+rowdata.documentLocation+"' target='_blank' ><img src='"+contextPath+"/images/download.png' ><b><u>Download</u></b></a>";
		}
	    
		 function returnMyEditLink(cellValue, options, rowdata, action){
		    	
				return "<a id='edit"+options.rowId+"' class='tableView' href='"+contextPath+"/editCandidate.html?selectedCandidate="+rowdata.candidateId+"' ><img src='"+contextPath+"/images/edit.png' height='16' width='16' ><b><u>Edit</u></b></a>";
			} 
	    $('#editYes').click(function() { 
            // update the block message 
	        $.blockUI({ message: "<h3>Remote call in progress...</h3>" }); 
	        
	    	$("#leftnavform").attr("action", "editUser.html?id="+$("#selectedId").val());
			$("#leftnavform").attr("method", "POST");
			$("#leftnavform").submit();
			
          
        }); 
 
        $('#editNo').click(function() { 
            $.unblockUI(); 
            return false; 
        }); 
 
	   function editOrView(param,rowId){
		   alert(param);
		   var rowData = jQuery("#all-candidates-grid").getRowData(rowId);
		   alert(rowData.candidateId);
	   }
		
	   
		//Docus Grid for Selected Candidate for Modal Window
		  
		   
		

	});
	
	
	
	
