

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
		    	var appCodesURL="getAllUsers.html";	  		
		  		$("#all-users-grid").jqGrid('setGridParam', {url:appCodesURL,datatype:'json',page:1}).trigger("reloadGrid");
			
		 }
		
		//declaration for hideLoading
		var hideLoading = function () {
    		jQuery("#lui_all-users-grid").hide();
    		jQuery("#load_all-users-grid").hide();
	 	};	 	
	 	
		 onLoad();	
	
     	//For Loading Grid Group Search Results

		jQuery("#all-users-grid").jqGrid({
					datatype : "json",
					rowNum : 10,
					url:"getAllUsers.html",
					rowList : [ 10,15,20 ],
					colNames : [ '','First Name','Last Name', 'Contact Number','User Type','Email','App Access'],
					colModel : [	
					{
						name : 'idApPerson',
						index : 'idApPerson',
						align : "Left",
						width : 200,
						align : 'center',
						hidden: true
					},
					 {
						name : 'firstName',
						index : 'firstName',
						align : "Left",
						width : 200,
						align : 'center'
					}, {
						name : 'lastName',
						index : 'lastName',
						width : 200,
						align : 'center'
					}, {
						name : 'mobileNumber',
						index : 'mobileNumber',
						width : 200,
						align : 'center'
					},  {
						name : 'personType',
						index : 'personType',
						width : 200,
						align : 'center'
					}, {
						name : 'email',
						index : 'email',
						width : 200,
						align : 'center'
					},{
						name : 'appAccess',
						index : 'appAccess',
						edittype: 'image',
						formatter: imageFormatter,
						align : 'center',
						width : 200,
						search:false
					
					}],
					pager : "#all-users-grid-pager",
					height : '250px',
					loadonce : true,
					gridview : true,
					viewrecords : true,
					sortorder : "asc",
					scroll : false,
					caption : "All Users:",
					search : true,
					width:'80%',
					hidegrid: false,
					loadComplete : function() {
						hideLoading();
					},
					loadError : function() {
						hideLoading();
					},
					onSelectRow : function(id, status) {
					//alert(id);
						$("#selectedId").val(id);
						$.blockUI({ message: $('#editConfirm'), css: { width: '100px' ,height:'150px'} }); 						
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
		
		jQuery("#all-users-grid").jqGrid('filterToolbar', {
			stringResult : true,
			searchOnEnter : false
		});
		
		jQuery("#all-users-grid")
		.navGrid('#all-users-grid-pager',{del:true,edit:true,add:false,search:false,refresh:false},
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
 
	   
		
	});
	
	
	
	
