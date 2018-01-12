<head>

<link href="<%=request.getContextPath()%>/css/ui-grid.css"
	rel="stylesheet" type="text/css" />
	<script>
	$(function() {
	$("#addSubBApanel").hide();
	$("#addSubBAButton").click(function(){
		$("#addSubBApanel").show();
		$("#editSubBATitle").hide();
		$("#addSubBATitle").show();
		$("#saveNewSBABtn").show();
		$("#saveEditSBABtn").hide();
		
		cleanFormFields();
	});
	
	$("#cancelSBABtn").click(function(){
		cleanFormFields();
		$("#addSubBApanel").hide();
	});
	
	$("#saveNewSBABtn").click(function(){
		alert("Saving the Sub Business area");
		cleanFormFields();
		$("#addSubBApanel").hide();
	});
	
	
	var cleanFormFields=function(){
		$('#txtSBA').val('');
		
	};
	
	 var hideLoading = function () {
   		 	jQuery("#lui_sub-business-area-grid").hide();
    		jQuery("#load_sub-business-area-grid").hide();
	 };
	 
	jQuery("#sub-business-area-grid").jqGrid({
		datatype : "json",
		url:"getallsubbusinessareas.html",
		rowNum : 10,
		rowList : [ 10,15,20 ],
		colNames : ['', 'Sub Business Area Name','Associated Business Area'],
		colModel : [
								{
								name : 'areaCode',
								index : 'areaCode',
								align : "Left",
								width : 200,
								align : 'center',
								 hidden:true
							},
								{
								name : 'areaName',
								index : 'areaName',
								align : "Left",
								width : 200,
								align : 'center'
							}, {
								name : 'associatedBusinessAreas',
								index : 'associatedBusinessAreas',
								width : 200,
								align : 'center'
							} ],
							pager : "#sub-business-area-grid-pager",
							height : '140px',

							loadonce : true,
							gridview : true,
							viewrecords : true,
							sortorder : "asc",
							scroll : false,
							caption : "All Sub Business Areas",
							search : true,
							onSelectRow : function(id, status) {
								$("#editSubBATitle").show();
								$("#addSubBATitle").hide();
								$("#saveNewSBABtn").hide();
								$("#saveEditSBABtn").show();
								var rowData = jQuery(this).getRowData(id);
								areaName = rowData['areaName'];
								effectiveFrom = rowData['effectiveFrom'];
								termDate = rowData['terminationDate'];
								hideOnInitiate = rowData['hideOnInitiate'];
								$("#addSubBApanel").show();
								$('#txtSBA').val(areaName);
								
								
								
								
								},
							
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
				jQuery("#subscriber-grid").jqGrid('filterToolbar', {
					stringResult : true,
					searchOnEnter : false
				});
				
				
				
				
				
				
				$("#sbaPickList").pickList({
				sourceListLabel:	"Available Business Areas",
				targetListLabel:	"Assigned Business Area",
				addAllLabel:		">>",
				addLabel:			">",
				removeAllLabel:		"<<",
				removeLabel:		"<",
				sortAttribute:		"value"
				
				
			});
			
	});
	</script>
	</head>
<div>
<h2 class="searchTitle">Sub Business Area</h2>
<div style="padding:5px"></div>
<div>
	<a href="#" id="addSubBAButton"><img src="<%=request.getContextPath()%>/images/add.png" />Add Sub Business Area</a>
</div>
<div style="padding:5px"></div>
<div id="subBusinessAreaResult" style="float: left;">
		<table id="sub-business-area-grid"></table>
		<div id="sub-business-area-grid-pager"></div>
</div>
<div style="padding:5px">

</div>
<div id="addSubBApanel" style="float: right;">
	<div>
	
	<h2 class="searchTitle" style="position:static" id="addSubBATitle">Add Sub Business Area</h2>
	<h2 class="searchTitle" style="position:static;display:none" id="editSubBATitle">Edit Sub Business Area</h2>
		<table>
			<tr>
				<td><label class="inv_label">Sub Business Area:</label></td><td><input type="text"  id="txtSBA"></td>
			</tr>
			<tr>
				<td>
				<div>
				<h2 class="searchTitle" style="position:static;width:250px" id="addSubBATitle">Assign Business Area</h2>
					<select id="sbaPickList" name="sbaPickList" multiple="multiple">
						<option value="1">Business Area 1</option>
						<option value="2">Business Area 2</option>
						<option value="3">Business Area 3</option>
						<option value="4">Business Area 4</option>
						<option value="5">Business Area 5</option>
					</select>
				</div>
				
				</td>
			</tr>
		</table>
		
		<p align="center">
			
			<button id="saveNewSBABtn" type="button" class="ui-state-default ui-corner-all">Save</button>
			<button id="saveEditSBABtn" type="button" class="ui-state-default ui-corner-all">Save</button>
			<button id="cancelSBABtn" type="button" class="ui-state-default ui-corner-all">Cancel</button>
		</p>
	</div>
</div>
</div>