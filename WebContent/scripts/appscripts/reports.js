

	$(function() {		
		
		$( "#fromDateTxt" ).datepicker();
		$( "#toDateTxt" ).datepicker();
		
	
		//to clear earlier form action
		$('#leftnavform').attr("action", "");			
		
		//to display message
		var showMessage=function(message){			
			$.growl({message: message, timeout:3});  	
			$('#message').html(message);
			$('#message').show();
			$('#message').delay(3000).fadeOut();				
		};
		
		//to display message with class
		var showMessageWithClass=function(message,classname){			
			$.growl({message: message, timeout:3});  	
			$('#message').html(message);
			$('#message').addClass(classname);
			$('#message').show();
			$('#message').delay(3000).fadeOut();				
		};
		
		//funciton on next
		

		//declaration for onload 
		var onLoad = function(){
			$("#accordion").accordion();
			$('#message').hide();
			$("#billingH3").hide();
			$("#billingAccDiv").hide();
			$("#appCodesH3").hide();
			$("#appCodesAccDiv").hide();
			$("#custH3").hide();
			$("#custAccDiv").hide();
			$("#reportsH3").show();
			$("#reportsAccDiv").show();
			$("#customersH3").hide();
			$("#customersAccDiv").hide();
			$("#staffsH3").hide();
			$("#staffAccDiv").hide();
			$("#customersH3").hide();
			$("#customersAccDiv").hide();
			$("#staffsH3").hide();
			$("#staffAccDiv").hide();
			
			
			//Smart Wizard
			$('#wizard').smartWizard({transitionEffect:'slideleft',onLeaveStep:leaveAStepCallback,onFinish:onFinishCallback,enableFinishButton:true});

		      function leaveAStepCallback(obj){
		        var step_num= obj.attr('rel');
		        return validateSteps(step_num);
		      }
		      
		      function onFinishCallback(){
		       if(validateAllSteps()){
		        $('form').submit();
		       }
		      }
			
			
		};	
		//declaration for hideLoading
		var hideLoading = function () {
   		 
    		jQuery("#lui_user-bills-grid").hide();
    		jQuery("#load_user-bills-grid").hide();
    		
    		
	 	};	 	
	 	var clearFormFields = function(){
		 	
		 };		 
		 
		var validateMandatoryFields = function(){
			var fromDate = $("#fromDateTxt").val().length;
			var toDate = $( "#toDateTxt" ).val().length;
			if(fromDate==0 && toDate==0){			
				return false;
			}
			return true;
		 };	
		 
		 
		 onLoad();	
		 
		 
		 
		 //on click of search button	
		 $("#searchBtn").click(function(){
			if(!validateMandatoryFields()){
				showMessageWithClass("Enter Date Values. Mandatory fields Misisng.","info");
			}else{
				var fromDate = $("#fromDateTxt").val();
				var toDate = $( "#toDateTxt" ).val();
				var searchURL="getBillsByDate.html?fromDate='"+fromDate+"'&toDate='"+toDate+"'";	  		
		  		$("#user-bills-grid").jqGrid('setGridParam', {url:searchURL,datatype:'json',page:1}).trigger("reloadGrid");
			}
		 })
		
		 
		 
		 //on click of clear button
		
	
		
     	//For Loading Grid Group Search Results

		jQuery("#user-bills-grid").jqGrid({
					datatype : "json",
					rowNum : 5,					
					rowList : [ 5,10,15,20 ],
					colNames : [ 'Bill Number','Bill Date', 'Customer Name',' To Address','Bill Amount'],
					colModel : [					           
					 {
						name : 'billNo',
						index : 'billNo',
						align : "Left",
						width : 100,
						align : 'center'
					}, {
						name : 'billDate',
						index : 'billDate',
						width : 200,
						align : 'center',
						sorttype:'date',
						formatter:'date',
						formatoptions: {newformat:'d/m/Y'}, 
						datefmt: 'd-M-Y'
					}, {
						name : 'customerName',
						index : 'customerName',
						width : 200,
						align : 'center'
					}, {
						name : 'toPlace',
						index : 'toPlace',
						width : 200,
						align : 'center'
					
					}, {
						name : 'billAmount',
						index : 'billAmount',
						width : 200,
						align : 'center'						
					}],
					pager : "#user-bills-grid-pager",
					height : '140px',
					loadonce : true,
					gridview : true,
					viewrecords : true,
					sortorder : "asc",
					scroll : false,
					caption : "Bills Generated:",
					search : true,
					width:'50%',
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
						cell : "cell"
					}
				});
		
		jQuery("#user-bills-grid").jqGrid('filterToolbar', {
			stringResult : true,
			searchOnEnter : false
		});
		
		jQuery("#user-bills-grid").jqGrid('navGrid','#user-bills-grid',{});
		
	});
	
	
