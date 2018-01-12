
	var templatePrimaryRecepient = "${primaryRecepient}";
	$(function() {
		
		//to clear earlier form action
		$('#form').attr("action", "");	
		
		
		
		//to display message
		var showMessage=function(message){			
			$.growl({message: message, timeout:3});  	
			$('#message').html(message);
			$('#message').show();
			$('#message').delay(3000).fadeOut();				
		};
		
		//funciton on next
		var onClickOfNext = function(){
			var selectedMembers = validateMemberGrid();
			var selectedDentalGroups = validateDentalGroup();
			var selectedGroups = validateGroup();
			if(selectedMembers.length == 0 && selectedDentalGroups.length == 0 && selectedGroups.length==0){
				showMessage(required.atleast.one.recipient);
			}else{
				$('#selectedMembers').val(selectedMembers);	
				$('#selectedDentalGroups').val(selectedDentalGroups);	
				$('#selectedGroups').val(selectedGroups);	
				$('#form').attr("action", "redirectToLogo.html");
				$('#form').attr("method", "POST");
				$('#form').submit();
			}
			
		};

		//declaration for onload 
		var onLoad = function(){
			$('#message').hide();
			//$('#topNextBtn').hide();
			//$('#dwnNextBtn').hide();
			$('#manualEntry').hide();
			$('#searchResultsPanel').hide();
			
		};	
		//declaration for hideLoading
		var hideLoading = function () {
   		 	jQuery("#lui_member-grid").hide();
    		jQuery("#load_member-grid").hide();
    		jQuery("#lui_group-grid").hide();
    		jQuery("#load_group-grid").hide();
    		jQuery("#lui_dental-group-grid").hide();
    		jQuery("#load_dental-group-grid").hide();
    		
	 	};	 	
	 	var clearFormFields = function(){
		 	$("#groupId").val("");
		 	$("#subId").val("");
		 	$("#mbrNbr").val("");
		 	$("#dentalGrpId").val("");
		 	$("#firstName").val("");
		 	$("#lastName").val("");
		 };		 
		 onLoad();	
		 //on click of next button		 
		 $('#topNextBtn').click(function(){
			 onClickOfNext();
		 });
		 $('#dwnNextBtn').click(function(){
			 onClickOfNext();
		 });
		 
		 
		 //on click of clear button
		$('#clearBtn').click(function(){
      		clearFormFields();
      		$('#manualEntry').hide();
      		//$('#topNextBtn').hide();
			//$('#dwnNextBtn').hide();
			$('#searchResultsPanel').hide(); 
     	});    
		//on Click of manual Button
     	$('#manualBtn').click(function(){
     		$('#manualEntry').show();
			$('#searchResultsPanel').hide(); 
     	});		 
		//On click of Search Button
     	$('#searchBtn').click(function() {   
		 	$('#manualEntry').hide();   
		  	var groupId= $("#groupId").val();	
			var subId= $("#subId").val();
			var mbrNbr= $("#mbrNbr").val();
			var dentalGrpId= $("#dentalGrpId").val();
			var caseFolderId= $("#caseFolderId").val();			
			if($.trim(groupId).length == 0 && $.trim(subId).length == 0 && $.trim(mbrNbr).length == 0 && $.trim(dentalGrpId).length == 0 && $.trim(caseFolderId).length == 0 ){					
					showMessage(required.search.criteria);
			}else{
				$('#searchResultsPanel').show();
		  		$("#message").text("");  		
		  		var subscriberURL="searchSubscriber.html?groupId="+groupId+"&subId=";
		  		var groupURL="searchGroup.html?groupId="+groupId+"&subId="+subId+"&mbrNbr="+mbrNbr+"&dentalGrpId="+dentalGrpId+"&caseFolderId="+caseFolderId;
		  		var dentalGroupURL="searchDentalGroup.html?groupId="+groupId+"&subId=";
		  		
		  		$("#member-grid").jqGrid('setGridParam', {url:subscriberURL,datatype:'json',page:1}).trigger("reloadGrid");
				$("#group-grid").jqGrid('setGridParam', {url:groupURL,datatype:'json',page:1}).trigger("reloadGrid");
				$("#dental-group-grid").jqGrid('setGridParam', {url:dentalGroupURL,datatype:'json',page:1}).trigger("reloadGrid");
			} 
		});
		
     	//For Loading Grid Group Search Results

		jQuery("#group-grid").jqGrid({
					datatype : "json",
					rowNum : 5,
					rowList : [ 5,10,15,20 ],
					colNames : [ '','Group Id', 'Sub Group Id','Package Id','Effctive Date','Termination Date'],
					colModel : [
						{name: 'myradio', width: 15,search : false,
						 fixed: true, align: 'center',  sortable: false,
                formatter: function (cellValue, option) {
                    return '<input type="radio" name="radio_' + option.gid + '"  />';
                }},
					 {
						name : 'groupId',
						index : 'groupId',
						align : "Left",
						width : 200,
						align : 'center'
					}, {
						name : 'subGroupID',
						index : 'subGroupID',
						width : 200,
						align : 'center'
					}, {
						name : 'packageId',
						index : 'packageId',
						width : 200,
						align : 'center'
					}, {
						name : 'effDate',
						index : 'effDate',
						width : 200,
						align : 'center',
						sorttype:'date',
						formatter:'date',
						 formatoptions: {newformat:'d/m/Y'}, 
						datefmt: 'd-M-Y'
					}, {
						name : 'termDate',
						index : 'termDate',
						sorttype:'date',
						formatter:'date',
						 formatoptions: {newformat:'d/m/Y'}, 
						datefmt: 'd-M-Y'
					} ],
					pager : "#group-grid-pager",
					height : '140px',
					loadonce : true,
					gridview : true,
					viewrecords : true,
					sortorder : "asc",
					scroll : false,
					caption : "Group Search Results",
					search : true,
					width:'80%',
					hidegrid: false,
					loadComplete : function() {
						hideLoading();
					},
					loadError : function() {
						hideLoading();
					},
					beforeSelectRow: function (rowid, e) {
            var radio = $(e.target).closest('tr').find('input[type="radio"]');
            radio.attr('checked', 'checked');
            return true; // allow row selection
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
		jQuery("#group-grid").jqGrid('filterToolbar', {
			stringResult : true,
			searchOnEnter : false
		});
		
		//For Loading Grid Dental Group Search Results
		jQuery("#dental-group-grid").jqGrid(
				{
					datatype : "json",
					rowNum : 5,
					rowList : [ 5,10,15],
					colNames : [ '','Group Id', 'Sub Group Id','Package Id','Effctive Date','Termination Date'],
					colModel : [
						{name : 'groupId',
							index : 'groupId', width: 15,search : false,
						 fixed: true, align: 'center',  sortable: false,
                formatter: function (cellValue, option) {
                    return '<input type="radio" name="radio_' + option.gid + '"  />';
                }},					
					{
						name : 'groupId',
						index : 'groupId',
						align : "Left",
						width : 200,
						align : 'center'
					}, {
						name : 'subGroupID',
						index : 'subGroupID',
						width : 200,
						align : 'center'
					}, {
						name : 'packageId',
						index : 'packageId',
						width : 200,
						align : 'center'
					}, {
						name : 'effDate',
						index : 'effDate',
						width : 200,
						align : 'center',
						sorttype:'date',
						formatter:'date',
						 formatoptions: {newformat:'d/m/Y'}, 
						datefmt: 'd-M-Y'
					}, {
						name : 'termDate',
						index : 'termDate',
						sorttype:'date',
						formatter:'date',
						formatoptions: {newformat:'d/m/Y'}, 
						datefmt: 'd-M-Y'
					} ],
					pager : "#dental-group-grid-pager",
					height : '140px',
					loadonce : true,
					gridview : true,
					viewrecords : true,
					sortorder : "asc",
					scroll : false,
					caption : "Dental Group Search Results",
					search : true,
					hidegrid: false,
					loadComplete : function() {
						hideLoading();
					},
					loadError : function() {
						hideLoading();
					},
					beforeSelectRow: function (rowid, e) {
            var radio = $(e.target).closest('tr').find('input[type="radio"]');
            radio.attr('checked', 'checked');
            return true; // allow row selection
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
		jQuery("#dental-group-grid").jqGrid('filterToolbar', {
			stringResult : true,
			searchOnEnter : false
		});
		
		//For Loading Grid Member Group Grid
		jQuery("#member-grid").jqGrid(				{
					datatype : "json",
					rowNum : 5,
					rowList : [5,10,15 ],
					colNames : [ 'Member Id','Member Relationship', 'Member First Name','DOB', 'Effective Date', 'Termination Date' ],
					colModel : [{
						name : 'memberId',
						index : 'memberId',
						align : "Left",
						width : 200,
						align : 'center'
					}, {
						name : 'memberRelation',
						index : 'memberRelation',
						width : 200,
						align : 'center'
					}, {
						name : 'firstName',
						index : 'firstName',
						width : 200,
						align : 'center'
					}, {
						name : 'dob',
						index : 'dob',						
						align : 'center',
						width : 200,
						sorttype:'date',
						formatter:'date',
						formatoptions: {newformat:'d/m/Y'}, 
						datefmt: 'd-M-Y'
					}, {
						name : 'effDate',
						index : 'effDate',
						width : 200,
						align : 'center',
						sorttype:'date',
						formatter:'date',
						 formatoptions: {newformat:'d/m/Y'}, 
						datefmt: 'd-M-Y'
					}, {
						name : 'termDate',
						index : 'termDate',
						sorttype:'date',
						formatter:'date',
						 formatoptions: {newformat:'d/m/Y'}, 
						datefmt: 'd-M-Y'
					} ],
					pager : "#member-grid-pager",
					height : 150,
					
					hidegrid: false,
					loadonce : true,
					gridview : true,
					viewrecords : true,
					sortorder : "asc",
					scroll : false,
					caption : "Member Search Results",
					search : true,
					multiselect:true,
				/*	onSelectRow : function(id, status) {
						var rowData = jQuery(this).getRowData(id);
						configid = rowData['cfgId'];					
						// Add this    
						var ch = jQuery(this).find(
								'#' + id + ' input[type=checkbox]')
								.prop('checked');
						if (ch) {
							jQuery(this).find(
									'#' + id + ' input[type=checkbox]')
									.prop('checked', false);
						} else {
							jQuery(this).find(
									'#' + id + ' input[type=checkbox]')
									.prop('checked', true);
						}
						// end Add
						rowChecked = 1;
						currentrow = id;
					},*/

					
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
		jQuery("#member-grid").jqGrid('filterToolbar', {
			stringResult : true,
			searchOnEnter : false
		});
		
		//OnSelect of check box in member grid
		$("#member-grid").find('input[type=checkbox]').each(function() {			
			$(this).change(function() {
				var colid = $(this).parents('tr:last').attr('id');
				if ($(this).is(':checked')) {
					$("#member-grid").jqGrid('setSelection', colid);
					$(this).prop('checked', true);
				}
				return true;
			});
		});
		
		
		
	});
	
	function validateMemberGrid(){
		var memberGrid =$("#member-grid");
		var selectedRowIds = memberGrid.jqGrid('getGridParam','selarrrow');
		var names = [];
		 if (selectedRowIds.length>0) {               
           for (var i=0, il=selectedRowIds.length; i < il; i++) {
               var name = memberGrid.jqGrid('getCell', selectedRowIds[i], 'memberId');
               names.push(name);
           }
		 }
		 return names;
	}
	
	function validateDentalGroup(){
		var names = [];
		$('#dental-group-grid tbody tr td input[type=radio]').each(function(){
			if($(this).prop('checked')==true){
				var parentEle=$(this).prop('parentElement');
				var parentEle1 = $(parentEle).prop('parentElement');
				var cells = $(parentEle1).prop('cells');
				names.push(cells[1].title);
			}
			
		});
		return names;
	} 
	
	function validateGroup(){
		var names = [];
		$('#group-grid tbody tr td input[type=radio]').each(function(){
			if($(this).prop('checked')==true){
				var parentEle=$(this).prop('parentElement');
				var parentEle1 = $(parentEle).prop('parentElement');
				var cells = $(parentEle1).prop('cells');
				names.push(cells[1].title);
			}
		});
		return names;
	} 
