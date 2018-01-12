
$(function() {
	// to clear earlier form action
	$('#leftnavform').attr("action", "");

	// to display message
	var showMessage = function(message) {
		$.growl({
			message : message,
			timeout : 3
		});
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
	
	 var processAddEdit=function(response, postdata) {	
	    	var obj2= response.responseText;
	    	var obj = jQuery.parseJSON(obj2);
	    	showMessageWithClass(obj.message,obj.messageClass);
	    	var appCodesURL="getAllAppCodes.html";	  		
	  		$("#appCode-grid").jqGrid('setGridParam', {url:appCodesURL,datatype:'json',page:1}).trigger("reloadGrid");
		
	 }
	 
	//to display message
	var showMessage=function(message){			
		$.growl({message: message, timeout:3});  	
		$('#message').html(message);
		$('#message').addClass("info");
		$('#message').show();
		$('#message').delay(3000).fadeOut();				
	};

	// declaration for onload
	var onLoad = function() {
		$("#accordion").accordion();
		
		$('#message').hide();
		$("#billingH3").hide();
		$("#billingAccDiv").hide();
		$("#appCodeH3").show();
		$("#appCodesAccDiv").show();
		$('#appCodeAccDiv').addClass("ui-accordion-group-selected");
		$("#custH3").hide();
		$("#custAccDiv").hide();
		$("#reportsH3").hide();
		$("#reportsAccDiv").hide();
		$("#customersH3").hide();
		$("#customersAccDiv").hide();
		$("#staffsH3").hide();
		$("#staffAccDiv").hide();

	};
	// declaration for hideLoading
	var hideLoading = function() {

		jQuery("#lui_appCode-grid").hide();
		jQuery("#load_appCode-grid").hide();

	};
	var clearFormFields = function() {

	};
	onLoad();
	// on click of next button

	// on click of clear button

	// For Loading Grid Group Search Results

	jQuery("#appCode-grid").jqGrid(
			{
				datatype : "json",
				url:'getAllAppCodes.html',
				rowNum : 5,
				rowList : [ 5, 10, 15, 20 ],
				colNames : [ 'Code Id', 'Category', 'Name','Short Code', 'Description' ],
				colModel : [
						 {
							name : 'idAppcode',
							index : 'idAppcode',
							align : "Left",
							width : 200,
							align : 'center'
							
						},{
							name : 'cateogry',
							index : 'cateogry',
							align : "Left",
							width : 200,
							align : 'center',
							editable:true,
							editrules:{required:true},
							edittype:'select',
							editoptions: { value: 'CITY:CITY;COUNTRY:COUNTRY' } 
						}, {
							name : 'name',
							index : 'name',
							width : 200,
							align : 'center',
							editable:true,
							editrules:{required:true}
						}, {
							name : 'shortCode',
							index : 'shortCode',
							width : 200,
							align : 'center',
							editable:true,
							editrules:{required:true}
						}, {
							name : 'description',
							index : 'description',
							width : 200,
							align : 'center',
							editable:true,
							editrules:{required:true}
						}],
				pager : "#appCode-grid-pager",
				height : '140px',
				loadonce : true,
				gridview : true,
				viewrecords : true,
				sortorder : "asc",
				scroll : false,
				caption : "App Codes ",
				search : true,
				width : '80%',
				hidegrid : false,
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
					id: "idAppcode"
				}
			});
	jQuery("#appCode-grid").jqGrid('filterToolbar', {
		stringResult : true,
		searchOnEnter : false
	});

	
	jQuery("#appCode-grid")
	.navGrid('#appCode-grid-pager',{edit:true,add:true,del:true},
      { // edit options 
        url: 'editAppCode.html',
        closeAfterEdit: true,
        afterComplete:processAddEdit
    },
    { // add
        url: 'addAppCode.html',
        closeAfterAdd: true,
        afterComplete:processAddEdit
    },
    { //delete
        url: 'deleteAppCode.html',
        closeOnEscape: true,
        afterComplete:processAddEdit
    })

   
});

