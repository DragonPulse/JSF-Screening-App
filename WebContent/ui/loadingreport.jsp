<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<script type="text/javascript">
var contextPath = '<%=request.getContextPath()%>';
</script>
<c:set var="userRole" value="${model.userVO.role}" />
<c:set var="currentUser" value="${model.userVO}" />
<c:set var="msgContent" value="${model.message.message}" />
<c:set var="msgClass" value="${model.message.messageClass}" />

<script	src="<%=request.getContextPath()%>/scripts/appscripts/loadingreport.js">
	
</script>
<script type="text/javascript">
	var currentUser = "${currentUser}";
	var msgClass = "${msgClass}";
	var msgContent = "${msgContent}";
	$(document).ready(function() {

	$('#leftnavform').attr("action", "");	

	var custNameOptions, custNameSugg,cityNameOptions,cityNameSugg;
	jQuery(function(){
	  custNameOptions = { serviceUrl:'getAllCustomerNames.html'};
	  custNameSugg = $('#custNameTxt').autocomplete(custNameOptions);
	  
	  cityNameOptions = { serviceUrl:'getAllCities.html'};
	  cityNameSugg = $('#fromPlace').autocomplete(cityNameOptions);
	  
	  
	  cityNameSugg = $('#toPlace').autocomplete(cityNameOptions);
	  
	  
	});
		
	
	//to display message
		var showMessage=function(message){			
			$.growl({message: message, timeout:3});  	
			$('#message').html(message);
			$('#message').show();
			$('#message').delay(3000).fadeOut();				
		};
		
		if(msgContent.length>0){
			showMessage(msgContent);
		}

	});

	
</script>

</head>
<body>
	<div>
	<div class="info" id="message" >${model.message.message}</div>
	
	</div>
	<br>
		<h3 class="searchTitle">Reports :: Loading Item Report</h3>
	<br>
	
	<!-- Smart Wizard -->
  		<div id="wizard" class="swMain">
  			<ul>
  				<li><a href="#step-1">
                <label class="stepNumber">1</label>
                <span class="stepDesc">
                   Search By<br />
                   <small>Dates</small>
                </span>
            </a></li>
  				<li><a href="#step-2">
                <label class="stepNumber">2</label>
                <span class="stepDesc">
                   Step 2<br />
                   <small>Detail List,Add Loading data</small>
                </span>
            </a></li>
  				<li><a href="#step-3">
                <label class="stepNumber">3</label>
                <span class="stepDesc">
                   Step 3<br />
                   <small>Enter Vehicle Details</small>
                </span>                   
             </a></li>
  				<li><a href="#step-4">
                <label class="stepNumber">4</label>
                <span class="stepDesc">
                   Step 4<br />
                   <small>Print Preview</small>
                </span>                   
            </a></li>
  			</ul>
  			<div id="step-1">	
            <h2 class="StepTitle">Search For Bills</h2>            
            <div>
				
            	<fieldset >
            	<p align="center">
            		<label class="label">From Date:*</label><input id="fromDate" value=""/>
            		<label class="label">To Date:*</label><input id="toDate" value=""/>
					<button id="searchBtn"  name="searchBtn" type="button" class="ui-state-default ui-corner-all"  >Search</button>
            	</p>	
            	</fieldset>
            </div>
            <!-- Table to show All Bill from respective user -->
			<div id="userGeneratedBillsDiv" align="center">
				<table id="user-bills-grid"></table>
				<div id="user-bills-grid-pager"></div>
			</div>
        </div>
  			<div id="step-2">
            <h2 class="StepTitle">Detail List of Bills</h2>	
           <div id="detailBillsDiv" align="center">
				<table id="detail-bills-grid"></table>
				<div id="detail-bills-grid-pager"></div>
			</div>
        </div>                      
  			<div id="step-3">
            <h2 class="StepTitle">Enter Details Of Vehicle</h2>	
           	<div>
           		<table width="100%">
           			<tr>
           				<td><label class="label">Vehicle Number:*</label></td><td><input type="text" id="vehicleNo" name="vehicleNo"></td>
           			</tr>
           			<tr>
           				<td><label class="label">From Place:*</label></td><td><input type="text" id="fromPlace" name="fromPlace" value=""></td>
           				<td><label class="label">To Place:*</label></td><td><input type="text" id="toPlace" name="toPlace" value=""></td>
           			</tr>
           			
           		</table>
           		
           		
           		<div>
           		
           		</div>
           	</div>         
        </div>
  			<div id="step-4">
            <h2 class="StepTitle">Step 4 Content</h2>	
            <div id="printDiv">
            <table width="100%">
            	<tr>
            		<td>
            			<label>Vehicle No:</label><h3><label id="vehicleNoLbl"></label></h3>
            		</td>
            	</tr>
            	<tr>
            		<td>
            			<label>From Place:</label><label id="fromPlaceLbl"></label>
            		</td>
            		<td>
            			<label>To Place:</label><label id="toPlaceLbl"></label>
            		</td>
            	</tr>
            </table>
            	
            	<div id="printBillsDiv" align="center">
				<table id="print-bills-grid"></table>
				<div id="print-bills-grid-pager"></div>
			</div>
            
            </div>                			
        </div>
  		</div>
<!-- End SmartWizard Content -->  		

	
		


	</div>

</body>