<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<script type="text/javascript">
var contextPath = '<%=request.getContextPath()%>';
</script>
<c:set var="userRole" value="${model.userVO.role}" />
<c:set var="currentUser" value="${model.userVO}" />
<c:set var="msgContent" value="${model.message.message}" />
<c:set var="msgClass" value="${model.message.messageClass}" />

<script	src="<%=request.getContextPath()%>/scripts/appscripts/reports.js">
	
</script>
<script type="text/javascript">
	var currentUser = "${currentUser}";
	var msgClass = "${msgClass}";
	var msgContent = "${msgContent}";
	$(document).ready(function() {

	$('#leftnavform').attr("action", "");		
	
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
	<div class="${model.message.messageClass}" id="message" >${model.message.message}</div>
	<div>
		<br>
		<p align="left" class="searchTitle">Reports :: Transaction Reports
			
		</p>	
		
	
	</div>
	
		<!-- Table to show All Bill from respective user -->
		<!-- Tabs -->
  		<div id="wizard" class="swMain">
  			<ul>
  				<li><a href="#step-1">
                <label class="stepNumber">1</label>
                <span class="stepDesc">
                   Search By<br />
                   <small>Enter Date's</small>
                </span>
  				<li><a href="#step-2">
                <label class="stepNumber">2</label>
                <span class="stepDesc">
                   Profile Details<br />
                   <small>Fill your profile details</small>
                </span>
            </a></li>
  				<li><a href="#step-3">
                <label class="stepNumber">3</label>
                <span class="stepDesc">
                   Contact Details<br />
                   <small>Fill your contact details</small>
                </span>
             </a></li>
  				<li><a href="#step-4">
                <label class="stepNumber">3</label>
                <span class="stepDesc">
                   Other Details<br />
                   <small>Fill your other details</small>
                </span>
            </a></li>
  			</ul>
  			<div id="step-1">	
            <h2 class="StepTitle">Step 1: Account Details</h2>
            <table cellspacing="3" cellpadding="3" align="center">
          			<tr>
                    	<td align="center" colspan="3">&nbsp;</td>
          			</tr>        
          			<tr>
                    	<td align="right"><label class="label">From Date:*</label></td>
                    	<td align="left">
                    	  <input type="text" id="fromDateTxt" name="fromDateTxt" value="" >
                      </td>
                    	<td align="right"><label class="label">Till Date :*</label></td>
                    	<td align="left">
                    	  <input type="text" id="toDateTxt" name="toDateTxt" value="" >
                      </td>
          			</tr>
          			<tr>
                    	
                    
          			</tr> 
                <tr>
                    	<td align="right"></td>
                    	<td align="left">
                    	<button id="searchBtn"  name="searchBtn" type="button" class="ui-state-default ui-corner-all"  >Search</button>
                      </td>
                    	<td align="left"><span id="msg_cpassword"></span>&nbsp;</td>
          			</tr>         
          			<tr>
          			<td></td>  
          			</tr>                          			
  			   </table>    
  			   <!-- Table to show All Bill from respective user -->
				  			<br><br><div id="userGeneratedBillsDiv" style="position: hidden">
					<table id="user-bills-grid"></table>
					<div id="user-bills-grid-pager"></div>
				</div>  <br><br><br><br><br><BR>
        </div>
  			<div id="step-2">
            <h2 class="StepTitle">Step 2: Profile Details</h2>	
            <table cellspacing="3" cellpadding="3" align="center">
          			<tr>
                    	<td align="center" colspan="3">&nbsp;</td>
          			</tr>        
          			<tr>
                    	<td align="right">First Name :</td>
                    	<td align="left">
                    	  <input type="text" id="firstname" name="firstname" value="" class="txtBox">
                      </td>
                    	<td align="left"><span id="msg_firstname"></span>&nbsp;</td>
          			</tr>
          			<tr>
                    	<td align="right">Last Name :</td>
                    	<td align="left">
                    	  <input type="text" id="lastname" name="lastname" value="" class="txtBox">
                      </td>
                    	<td align="left"><span id="msg_lastname"></span>&nbsp;</td>
          			</tr> 
          			<tr>
                    	<td align="right">Gender :</td>
                    	<td align="left">
                        <select id="gender" name="gender" class="txtBox">
                          <option value="">-select-</option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>                 
                        </select>
                      </td>
                    	<td align="left"><span id="msg_gender"></span>&nbsp;</td>
          			</tr>                                   			
  			   </table>        
        </div>                      
  			<div id="step-3">
            <h2 class="StepTitle">Step 3: Contact Details</h2>	
            <table cellspacing="3" cellpadding="3" align="center">
          			<tr>
                    	<td align="center" colspan="3">&nbsp;</td>
          			</tr>        
          			<tr>
                    	<td align="right">Email :</td>
                    	<td align="left">
                    	  <input type="text" id="email" name="email" value="" class="txtBox">
                      </td>
                    	<td align="left"><span id="msg_email"></span>&nbsp;</td>
          			</tr>
          			<tr>
                    	<td align="right">Phone :</td>
                    	<td align="left">
                    	  <input type="text" id="phone" name="phone" value="" class="txtBox">
                      </td>
                    	<td align="left"><span id="msg_phone"></span>&nbsp;</td>
          			</tr>          			
          			<tr>
                    	<td align="right">Address :</td>
                    	<td align="left">
                            <textarea name="address" id="address" class="txtBox" rows="3"></textarea>
                      </td>
                    	<td align="left"><span id="msg_address"></span>&nbsp;</td>
          			</tr>                                   			
  			   </table>               				          
        </div>
  			<div id="step-4">
            <h2 class="StepTitle">Step 4: Other Details</h2>	
            <table cellspacing="3" cellpadding="3" align="center">
          			<tr>
                    	<td align="center" colspan="3">&nbsp;</td>
          			</tr>        
          			<tr>
                    	<td align="right">Hobbies :</td>
                    	<td align="left">
                    	  <input type="text" id="phone" name="phone" value="" class="txtBox">
                      </td>
                    	<td align="left"><span id="msg_phone"></span>&nbsp;</td>
          			</tr>          			
          			<tr>
                    	<td align="right">About You :</td>
                    	<td align="left">
                            <textarea name="address" id="address" class="txtBox" rows="5"></textarea>
                      </td>
                    	<td align="left"><span id="msg_address"></span>&nbsp;</td>
          			</tr>                                   			
  			   </table>                 			
        </div>
  		</div>
<!-- End SmartWizard Content -->  	


	</div>

</body>