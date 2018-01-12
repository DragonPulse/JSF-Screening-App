

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
			$("#appCodesH3").hide();
			$("#appCodesAccDiv").hide();
			$("#custH3").hide();
			$("#custAccDiv").hide();
			$("#reportsH3").hide();
			$("#reportsAccDiv").hide();
			$("#customersH3").hide();
			$("#customersAccDiv").hide();
			$("#staffsH3").hide();
			$("#staffAccDiv").hide();
			$("#customersH3").hide();
			$("#customersAccDiv").hide();
			$("#staffsH3").hide();
			$("#staffAccDiv").hide();
			
			
			
		};	
		//declaration for hideLoading
		var hideLoading = function () {
   		 
    		jQuery("#lui_user-bills-grid").hide();
    		jQuery("#load_user-bills-grid").hide();
    		
    		
	 	};	 	
	 	var clearFormFields = function(){
		 	
		 };		 
		 onLoad();	
		 //on click of next button		 
		
		 
		 
		 //on click of clear button
		
	
		
     	//For Loading Grid Group Search Results

		jQuery("#user-bills-grid").jqGrid({
					datatype : "json",
					rowNum : 5,
					url:"getAllBillsByUser.html",
					rowList : [ 5,10,15,20 ],
					colNames : [ 'Bill Number','Bill Date', 'Customer Name',' To Address','Bill Amount'],
					colModel : [					           
					 {
						name : 'billNo',
						index : 'billNo',
						align : "Left",
						width : 200,
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
					width:'80%',
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
	
	
