
var new_da;
function page(f,t,ddd,aa)
{
	var f1=f;
	$("#br").hide();
	$("#br1").hide();
	 $("#u_details").hide();
	 $("#seatInfoHeading").hide();
	 $("#trip").hide();
	 
	 $("#seatInfoHeading").hide();
	 $("#2d").hide();
	 $("#detailsss").show();
	 $("#tr_click").click(function(){
    	 $("#trip").slideToggle("slow");
    	 $("#detailsss").slideToggle("slow");
    	 callls();
    	 
      });
	var pairs;
	var d=new Array();
	/* function getParams() {
		var idx = document.URL.indexOf('?');
				if (idx != -1) {
		 pairs = document.URL.substring(idx+1, document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++) {
		nameVal = pairs[i].split('=');
		params[nameVal[0]] = nameVal[1];
		}
		} */
		from=f1;
		to=t;
		// dae=params["date1"];
		// day= ddd;//dae.split('#');
		date=ddd;
		
		d=date.split("-");
		
		if(d.length>=2){date1=d[1]+"/"+d[2]+"/"+d[0];}
		else{date1=ddd;}
		//alert(date1);
		document.getElementById("from").innerHTML=from;
		document.getElementById("to").innerHTML=to;
		document.getElementById("date").innerHTML=date1.split("/")[1]+"/"+date1.split("/")[0]+"/"+date1.split("/")[2];
		if(date1=="null")
			{
		
			window.location.replace("../../../login.do");
			
			}
		journey=date1;
		document.getElementById("journeyDate").setAttribute("value", date1);
		
		new_da=date1;
		 $("#u_details").hide();
		 $("#bus21").hide();
		 $("#hiding").hide();
		
		// alert("data:"+new_da);
		 $("#load").show();
		
		 $("#details").hide();
		  $("#seatInfoHeading").hide();
		  $("#passes").show();
		  $("#passes1").hide();
		 $("#passanger").hide();
		 //alert("GO to calling");
		
	ajaxFunction2(from,to,date1,aa);// step 111111111
	// calling("book");
	
}

function mod_date(op,op1) {
	 $("#u_details").hide();
	 $("#bus21").hide();
	 $("#hiding").hide();
	
	// alert("data:"+new_da);
	 $("#load").show();
	
	 $("#details").hide();
	  $("#seatInfoHeading").hide();
	  $("#passes").show();
	  $("#passes1").hide();
	 $("#passanger").hide();
	   document.getElementById("bus_outer").style.border="0px solid #000000";
	
	 document.getElementById("passanger").innerHTML="<br><br><center><p>Please Select Your Favourite Seats...</p></center>"
	document.getElementById("table").innerHTML="<b>PLEASE WAIT....</b>";
	document.getElementById("bus").innerHTML="<center><br><br><blink>Please choose your bus<br><br></blink></center>";
	document.getElementById("bus_outer").innerHTML="";
	var ds=new Date();
	var d1 = new Date(new_da);
	
	if(op==1){
		if(d1.getDate()<=ds.getDate() && d1.getMonth()<=ds.getMonth()){ document.getElementById("lt").disabled =true; d1.setDate(d1.getDate()+1);document.getElementById("lt").style.color='black';
		document.getElementById("lt").style.backgroundColor="#2B697E";}
		else{ document.getElementById("lt").disabled = false;document.getElementById("lt").style.color='white';}
	 d1.setDate(d1.getDate()-1);
	 
	}
	else
		{
		//alert(d1.getDate());
		d1.setDate(d1.getDate()+1);
		
	document.getElementById("lt").style.backgroundColor="#3e96b4";
	document.getElementById("lt").style.color='white';
		document.getElementById("lt").disabled = false;
		}
	  dd=d1.getDate();
	 mm=d1.getMonth();
	 yyyy=d1.getFullYear();
	 
	new_da=(mm+1)+'/'+dd+'/'+yyyy;
	document.getElementById("journeyDate").setAttribute("value", new_da);
	document.getElementById("date").innerHTML=new_da.split("/")[1]+"/"+new_da.split("/")[0]+"/"+new_da.split("/")[2];

var bb;
 if(op1!=1){
	 bb=1;
 }
 else
	 {
	 bb=0;
	 }
	ajaxFunction2(from,to,new_da,bb,op1);
//	ajaxFunction20(from,to,new_da);

} 





var journeyDate,serviceNumber;serviceNumber=new Array();
var source;source=new Array();
var destination;destination=new Array();
var busType;busType=new Array();
var date;date=new Array();

var departureTime=new Array();
var arrivalTime=new Array();
var fare=new Array();
var sourceId=new Array();
var destinationId=new Array();
var routeId=new Array();

function getXMLObject() 
{
	var xmlHttp = false;
	try {
	     	xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");  // For Old Microsoft Browsers
	   	}
	catch (e) 
	{
	     try {
	       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  // For Microsoft IE 6.0+
	     }
	     catch (e2) {
	       xmlHttp = false;   // No Browser accepts the XMLHTTP Object then false
	     }
	}
	   if (!xmlHttp && typeof XMLHttpRequest != 'undefined') 
	   {
	     xmlHttp = new XMLHttpRequest();        //For Mozilla, Opera Browsers
	   }
	   return xmlHttp; 
}


var xmlhttp = new getXMLObject();	
var my=0,check=0;
var u=1;

// step 22222222222
function ajaxFunction2(from,to,date,vv,op1)
{
	
check=vv;

var exe=document.getElementById("execuseme").value;
//alert(exe);
	  if(xmlhttp) {
		//  alert("2   "+vv);
			  var name='user@limousine.com';
			  var sourceId=from;
			  var destinationId=to;
			  journeyDate=date;
			 // var busId=1;
			 //alert(journeyDate);
			  if(vv==0){
			   url="../../../WebClient";
			  }else
				  {
				   url="WebClient";
				  }
		     xmlhttp.open("POST",url,true);
		     xmlhttp.onreadystatechange=handle;
		     xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			    //alert("name: "+name);
			    dataType: "json";
		   
			    xmlhttp.send('action=Booking/searchBus&userName='+name+'&sourceName='+sourceId+'&destinationName='+destinationId+'&journeyDate='+journeyDate+'&execuseme='+exe+'&User='+u);
			    
			   
			  }
		  
	}
function handle() 
{
	if (xmlhttp.readyState == 4) 
	{
		//alert("status"+xmlhttp.status);
	     if(xmlhttp.status == 200) 
	     {
	    	 var output=xmlhttp.responseText;
	    	 var o1=output.split('//');
	    	 var ex=o1[1];
	    	 var js=o1[0];
	    	 document.getElementById("execuseme").value=js;
	    	
	    	 				var jsondata=eval("("+ex+")"); ///eval("("+xmlhttp.responseText+")");
	    	 			
	    	 				var rssentries=jsondata.busInfo;
	    	 				serviceNumber=new Array();
	    	 		    	 source=new Array();
	    	 		    	destination=new Array();
	    	 		    	 busType=new Array();
	    	 		    	 date=new Array();

	    	 		    	  departureTime=new Array();
	    	 		    	  arrivalTime=new Array();
	    	 		    	  fare=new Array();
	    	 		    	  sourceId=new Array();
	    	 		    	  destinationId=new Array();
	    	 		    	 routeId=new Array();
	    	 				for (var i=0; i<rssentries.length; i++)
	    	 				{
	    	 				 serviceNumber[i]=rssentries[i].serviceNumber;
	    	 				 
	    	 				 busType[i]=rssentries[i].busType;
	    	 				 date1[i]=rssentries[i].date;
	    	 				 departureTime[i]=rssentries[i].departureTime;
	    	 				 arrivalTime[i]=rssentries[i].arrivalTime;
	    	 				 fare[i]=rssentries[i].fare;
	    	 				 sourceId[i]=rssentries[i].sourceName;
	    	 				 destinationId[i]=rssentries[i].destinationName;
	    	 				 routeId[i]=rssentries[i].routeId;
	    	 				}
	    	 				//alert("jj: "+check);
	    	 				if(rssentries.length!=0)
	    	 					{
	    	 						$("#load").show();
	    	 						document.getElementById("table").innerHTML="<p>Please wait some moments....";
	    	 						//alert("Service no: "+serviceNumber+"src: "+sourceId+"destination: "+destinationId+"busType:"+busType+"date:"+journeyDate+"departureTime"+departureTime+"arrivalTime:"+arrivalTime+"fare"+fare+"route:"+routeId+"check"+check);
	    	 						avail(serviceNumber,sourceId,destinationId,busType,journeyDate,departureTime,arrivalTime,fare,routeId,check);
	    	 					}
	    	 				else
	    	 					{
	    	 					 	$("#load").hide();
	    	 						document.getElementById("table").innerHTML="<center><h4 style='color:red'>Sorry Booking not yet opened for selected date...</h4></center>";
	    	 						date123(journeyDate);
	    	 					}
	     }
	}
	
}


var dd,mm,yyyy,new_da;
function date123(ddddd)
{
	//alert(ddddd);

	new_da=ddddd;
}


function avail(serviceNumber,source,destination,busType,da,departureTime,arrivalTime,fare,routeId,check)
{

	bus_Id=routeId;
	var serv=0;
	src_name=source;
	dest_name=destination;
	
	start2(serv,serviceNumber,source,destination,busType,da,departureTime,arrivalTime,fare,routeId,check);	
}




var serviceNumbe1;
var source1=4;
var destination1;
var busType1;
var date1;
var departureTime1;
var arrivalTime1;
var fare1;
var k=0;
var src;
var sourceId1;
var destinationId1;
var routeId1;
var check1;


function start2(serv,serviceNumber,source,destination,busType,date,departureTime,arrivalTime,fare,routeId,check) {
var j=serv;


if(serv==0){
	start1(serviceNumber,source,destination,busType,date,departureTime,arrivalTime,fare);
	serviceNumber1=serviceNumber;
	source1=source;
	destination1=destination;
	busType1=busType;
	date1=date;
	departureTime1=departureTime;
	arrivalTime1=arrivalTime;
	fare1=fare;
	check1=check;
	routeId1=routeId;
}
else if(serv>=1){	
	// $("#3d").hide();
	document.getElementById("passanger").innerHTML="<ceter>please select your favourite seat</center>";
			servicenumber=serviceNumber1[j-1];
			source=source1[j-1];
			destination=destination1[j-1];
			busType=busType1[j-1];
			date=date1;
			departureTime=departureTime1[j-1];
			arrivalTime=arrivalTime1[j-1];
			fare2=fare1[j-1];
			
			routeId=routeId1[j-1];
			//new imageLoader(cImageSrc, 'startAnimation()');
			$("#bus_outer").hide();
			$("#bus").hide();
			$("#2d").show();
			//alert("date "+check1);
	
        ajaxFunction1(servicenumber,source,destination,busType,date,departureTime,arrivalTime,fare2,routeId,check1);
       
}

}



    function start1(serviceNumber,source,destination,busType,date,departureTime,arrivalTime,fare) 
    {
   // alert(serviceNumber+" "+source+" "+destination+" "+busType+" "+date+" "+departureTime+" "+arrivalTime+" "+fare);
    	$("#load").hide();
    	document.getElementById("table").innerHTML="";
    	var depat=new Array();
    	for( var uu=0;uu<departureTime.length;uu++)
    		{
    			var sp=departureTime[uu].split(' ');
    			var ree=sp[0].split(':');
    			var dep=ree[0]+":"+ree[1]+" "+sp[1];
    			depat[uu]=dep;
    		}//alert(depat);
    	var arraiv=new Array();
    	for( var uu1=0;uu1<departureTime.length;uu1++)
    		{
    			var sp1=arrivalTime[uu1].split(' ');
    			var ree1=sp1[0].split(':');
    			var dep1=ree1[0]+":"+ree1[1]+" "+sp1[1];
    			arraiv[uu1]=dep1;
    		}
        var body = document.getElementById("table");
        var k=serviceNumber.length;
        
        // creates a <table> element and a <tbody> element
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");


        // creating all cells
        for (var j = 0; j < k; j++) {
            // creates a table row
            var row = document.createElement("tr");
            //row.setAttribute("onclick", "messagebox();");
            for (var i = 0; i < 5; i++) {
            	
            	if(i>-1){
            		if(i==0)
            		{
            		
            			var cell = document.createElement("td");
        		   		radioInput = document.createElement('input');
                		radioInput.setAttribute('type', 'radio');
                		radioInput.setAttribute('name', 'name');
                		radioInput.setAttribute("id", "rad");
                		radioInput.setAttribute("onclick", "start2("+(j+1)+")");
                		cell.appendChild(radioInput);
        		   		var cellText = document.createTextNode(serviceNumber[j]);
            		
            		}
               if(i==1)
            	   {
            	  
            	   var cell = document.createElement("td");
      		   		var cellText = document.createTextNode(busType[j]); 		
            		   		
            		   
            	   }
               else if(i==2)
        	   {
            	   var cell = document.createElement("td");
     		   		var cellText = document.createTextNode(depat[j]);
       		   	   		   
        	   }
               else if(i==3)
        	   {
            	   var cell = document.createElement("td");
 		   			var cellText = document.createTextNode(arraiv[j]);   	
      		   		             
        	   }
               else if(i==4)
        	   {
            	   var cell = document.createElement("td");
		   			var cellText = document.createTextNode(fare[j]);  	   		   
        	   }
              
               
               cell.appendChild(cellText);
            	}
               row.appendChild(cell);
	cell.setAttribute("width","300");
	cell.setAttribute("height","25");
	cell.setAttribute("margin-left", "3px");
	cell.setAttribute("cellspaceing", "0");
	         }


            // add the row to the end of the table body
            tblBody.appendChild(row);
        }


        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
        tbl.setAttribute("border", "0");
        tbl.setAttribute("cellspacing", "0");
        tbl.setAttribute("width", "800");
       // tbl.setAttribute("id", "b_table");
    }
  
    
	function ajaxFunction1(serviceNumber,source,destination,busType,date,departureTime,arrivalTime,fare,busId,check) {
		 
//alert("pgm here...."+check);
		//alert("typessssss"+busType);
	 ajaxFunctions3(source,destination,date,busId,fare,check,busType);

}
	

	
	function getXMLObject() {
		var xmlHttp = false;
		try {
		     xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");  // For Old Microsoft Browsers
		   }
		catch (e) {
		     try {
		       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  // For Microsoft IE 6.0+
		     }
		     catch (e2) {
		       xmlHttp = false;   // No Browser accepts the XMLHTTP Object then false
		     }
		   }
		   if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
		     xmlHttp = new XMLHttpRequest();        //For Mozilla, Opera Browsers
		   }
		   return xmlHttp; 
	}
	var xmlhttp = new getXMLObject();	
	var my=0,src,dest,dat,rid,far;
	function ajaxFunctions3(sourceId,destinationId,date,routeId,fare,checkv,busType)
	{
		
		src=sourceId;
		dest=destinationId;
		dat=date;
		rid=routeId;
		far=fare;
		 var url;
		 check=checkv;
		 var isSleeper=false;
		 var splitData=busType.split(" ");
		 for(var s=0;s<splitData.length;s++)
		 {
			 if(splitData[s]=="Sleeper")
			 {
				 isSleeper=true;
			 }
		 }
	
		  if(xmlhttp) 
		  {
				  if(checkv==1)
				  {
					  if(isSleeper==true)
						  {
						  	url="staticdata/html/user/UserBookSeats_Sleeper.html";
						  }else
							  {
							  	url="staticdata/html/user/UserBookSeats.html";
							  }
				  }
				  else
				  {
					  if(isSleeper==true)
						  {
						  	url="../../html/user/UserBookSeats_Sleeper.html";
						  }else
							  {
							  	url="../../html/user/UserBookSeats.html";
							  }
				  }
			     xmlhttp.open("GET",url,true);
			     xmlhttp.onreadystatechange=function()
			     {
			    	 if (xmlhttp.readyState == 4) 
			    	 {
			    		 //alert("page: "+xmlhttp.status);
					     if(xmlhttp.status == 200) 
					     {
					    	 document.getElementById("bus").innerHTML=xmlhttp.responseText;
			    	 		ajaxFunction11(src,dest,rid,far,check,busType);
					     }
					}
			     }
			     xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				    //alert("name: "+name);
				   // dataType: "json";
				    xmlhttp.send();
		  }
		}

	function ajaxFunction11(sourceId,destinationId,routeId,fare,check,busType) {
		//alert("src"+sourceId+"dest:"+destinationId+"rut: "+routeId+"fare: "+fare);
		document.getElementById("routeId").setAttribute("value", routeId);
		//alert(check);
		ajaxFunction(sourceId,destinationId,dat,routeId,fare,check,busType);
		
		}
	
	
	 var a_seats=new Array();
	 var b_seats;
	 var b_seats_l;
	 var blck_seats;
	 var routeId;
	 var board_time=new Array();
	 var time_am;
	 var time_pm;
	 var seat_name ,row, col;
	 var seat_dyn;
	 var data,booked_seats=0,available_seats=0;
	function getXMLObject() {
		var xmlHttp = false;
		try {
		     xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");  // For Old Microsoft Browsers
		   }
		catch (e) {
		     try {
		       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  // For Microsoft IE 6.0+
		     }
		     catch (e2) {
		       xmlHttp = false;   // No Browser accepts the XMLHTTP Object then false
		     }
		   }
		   if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
		     xmlHttp = new XMLHttpRequest();        //For Mozilla, Opera Browsers
		   }
		   return xmlHttp; 
	}
	var xmlhttp = new getXMLObject();	
	var my=0;
	var check_s="";
	function ajaxFunction(sourceId1,destinationId1,journeyDate1,busId1,fare1,check,busType)
	{
		//alert("busType="+busType);
		var fare=fare1;
		var splitData=busType.split(" ");
		var isSleeper=false;
		check_s=busType;
		for(var s=0;s<splitData.length;s++)
			{
				if(splitData[s]=="Sleeper")
					{
						isSleeper=true;
					}
			}
		if(xmlhttp) {
				  var name='user@limousine.com';
				  var exe=document.getElementById("execuseme").value;
				  //alert("exe val :"+exe);
				  var sourceId=sourceId1;
				  var destinationId=destinationId1;
				  var journeyDate=journeyDate1;
				  var board_time1;
				  var busId=busId1;
				  var time=new Array();
				  b_seats=new Array();
				  b_seats_l=new Array();
				  blck_seats=new Array();
				  var url;
				  if(check==0)
					  {
				  url="../../../WebClient";//check
				  
					  }
				  else
					  {
					  url="WebClient";
					  }
			    xmlhttp.open("POST",url,true); //gettime will be the servlet name
		 my= xmlhttp.onreadystatechange  = function()
		 {
			   if (xmlhttp.readyState == 4) {
			     if(xmlhttp.status == 200) {
			    	 				var jsondata=eval("("+xmlhttp.responseText+")");
			    	 				//alert(xmlhttp.responseText);
			    	 				board_time1=new Array();
			    	 				var rssentries=jsondata.busLayoutCTO.seatLayoutCTO;//json data
					    	 		row=jsondata.busLayoutCTO.totalRow;
					    	 		var r=row;
					    	 		row=row+1;
			    	 				col=jsondata.busLayoutCTO.totalColumn;
			    	 				var route=jsondata.busLayoutCTO.routeId;
			    	 				var board=jsondata.busLayoutCTO.boardingPointsCTO;
			    	 				var avail_seats=new Array();
			    	 				var booked_seats1=new Array();
			    	 				var booked_seats_l=new Array();
			    	 				var boarding=new Array();
			    	 				var boarding1=new Array();
			    	 				seat_dyn=new Array();
			    	 				time_am=new Array();
			    	 				time_pm=new Array();
			    	 				seat_name=new Array();
			    	 				var ti="";
			    	 				var popup_data="";
			    	 			for(var j=0;j<board.length;j++)
			    	 					{
			    	 						boarding1[j]=board[j].boardingPlace;
			    	 						board_time1[j]=board[j].boardingTime;
			    	 					}
			    	 				
			    	 				for(var z=0;z<board_time1.length;z++)
			    	 					{
			    	 						 time=board_time1[z].split(":");
			    	 						
			    	 						 if(time[0]<12)
			    	 							 {
			    	 							 	//alert(time[0]+"am");
			    	 							 	var nm=board_time1[z]+" am";
			    	 							 	time_am.push(nm);
			    	 							 }
			    	 						 else
			    	 							 {
			    	 							 //alert(time[0]+"pm");
			    	 							 var t=(time[0]-12);
			    	 							 
			    	 							  ti=t+":"+time[1]+":"+time[2]+" pm";
			    	 							
			    	 							// var nz=ti+;
			    	 							time_pm.push(ti);
			    	 							
			    	 							 }
			    	 						 
			    	 					}//alert("tt: "+time_pm);
			    	 				
			    	 				board_time1=time_am+time_pm;
			    	 				var boerd=board_time1.split(",");
			    	 				
			    	 				boarding[0]="--select--";
			    	 				for(var ii=1;ii<=boerd.length;ii++)
			    	 					{
			    	 					 boarding[ii]=boarding1[ii-1]+" "+boerd[ii-1];
			    	 					}
			    	 				popup_data=rssentries.adminSeatLayoutCTO;
			    	 			
			    	 				if(rssentries.length>0){
			    	 				for (var i=1; i<=rssentries.length; i++)
			    	 				{
			    	 		
			    	 					var b_seat=rssentries[i-1].seatStatus;
			    	 					var b_ladies=rssentries[i-1].isLadies;
			    	 					var b_gents=rssentries[i-1].isGents;
			    	 					
			    	 					 seat_name[i-1]=rssentries[i-1].seatName;
			    	 					//if(b_ladies)
			    	 					//alert("ladies: "+b_ladies);
			    	 					if(b_seat=='BOOKED')
			    	 					{
			    	 						booked_seats1[i-1]=(i);
			    	 						if(b_ladies){//alert(i); 
			    	 						booked_seats_l[i-1]=(i);}  //
			    	 						booked_seats=booked_seats+1;
			    	 					}
			    	 					else if(b_seat=='BLOCKED')
			    	 					{
			    	 						if(b_ladies){//alert(i);
			    	 						booked_seats_l[i-1]=(i);}	//
			    	 						avail_seats[i-1]=(i);
			    	 						available_seats=available_seats+1;
			    	 					}
			    	 					else if(b_seat=='TENTATIVE')
			    	 						{
			    	 						booked_seats1[i-1]=(i);
			    	 						if(b_ladies){//alert(i); 
			    	 						booked_seats_l[i-1]=(i);}  //
			    	 						booked_seats=booked_seats+1;
			    	 						}
			    	 					else
			    	 						{
			    	 						if(b_ladies){//alert(i); 
				    	 						booked_seats_l[i-1]=(i);} 
			    	 						}
			    	 					
			    	 				}
			    	  //Available seats:
			    	 				for(var m1=0;m1<avail_seats.length;m1++)
			    	 				{
			    	 					if(avail_seats[m1]!=null){ blck_seats.push(avail_seats[m1]); }
			    	 				}
			    	 // Booked seats:
			    	 				for(var m2=0;m2<booked_seats1.length;m2++)
			    	 				{
			    	 					if(booked_seats1[m2]!=null){ b_seats.push(booked_seats1[m2]); }
			    	 				}
			    	 // ladies seats:
			    	 				for(var m3=0;m3<booked_seats_l.length;m3++)
			    	 				{
			    	 					if(booked_seats_l[m3]!=null)b_seats_l.push(booked_seats_l[m3]);
			    	 				}
			    	 				
			    	 				var u=0,c=0;
			    	 				var r1,r2,r3,r4,m1=0,m2=0,m3=0,m4=0;
			    	 				r1=new Array();
			    	 				r2=new Array();
			    	 				r3=new Array();
			    	 				r4=new Array();
			    	 				 c=col;
			    	 				//alert("row"+r+c)
			    	 			for(var o=0;o<c;o++)
			    	 				{
			    	 				for(var p=0;p<r;p++)
			    	 					{
			    	 						if(p==0)
			    	 						{
			    	 						r1[m1]=""+seat_name[u];//alert(r1[m1]);
			    	 						m1++;
			    	 						}
			    	 						else if(p==1)
			    	 						{
			    	 						r2[m2]=seat_name[u];
			    	 						m2++;
			    	 						}
			    	 					else if(p==2)
			    	 					{
			    	 						r3[m3]=seat_name[u];
			    	 						m3++;
			    	 					}else
			    	 					{r4[m4]=seat_name[u];m4++;}
			    	 			
			    	 						
			    	 					u++;
			    	 					
			    	 					}
			    	 				}
			    	 			
			    	 				seat_dyn=r1;
			    	 				//img();
			    	 				route=route+"/"+seat_name+"/"+row+"/"+col;
			    	 				if(b_seats.length!=0)
			    	 					{
			    	 						if(b_seats_l.length!=0)
			    	 						{
			    	 							if(blck_seats.length!=0)
			    	 								{//alert("boarding8 "+boarding);
			    	 								if(isSleeper==true)
			    	 								{
			    	 									start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 								}else
			    	 									{
			    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 									}
			    	 								}
			    	 							else
			    	 								{blck_seats[0]=0;//alert("boarding7 "+boarding+boarding.length);
			    	 								if(isSleeper==true)
			    	 								{
			    	 									start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 								}else
			    	 									{
			    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 									}
			    	 								}
			    	 						}
			    	 						else
			    	 						{
			    	 							b_seats_l[0]=0;//alert("boarding6 "+boarding);
			    	 							if(blck_seats.length!=0)
			    	 							{
			    	 								if(isSleeper==true)
			    	 								{
			    	 									start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 								}else
			    	 									{
			    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 									}
			    	 							}
			    	 							else
			    	 							{blck_seats[0]=0;//alert("boarding5 "+boarding);
			    	 							if(isSleeper==true)
		    	 								{
			    	 								start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
		    	 								}else
		    	 									{
		    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
		    	 									}
			    	 							}
			    	 						}
			    	 					}
			    	 				else
			    	 				{
			    	 					b_seats[0]=0;
			    	 					if(b_seats_l.length!=0)
			    	 					{
			    	 						if(blck_seats.length!=0)
	    	 								{
			    	 							if(isSleeper==true)
		    	 								{
			    	 								start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
		    	 								}else
		    	 									{
		    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
		    	 									}
	    	 								}
	    	 							else
	    	 								{blck_seats[0]=0;//alert("boarding3 "+boarding);
	    	 								if(isSleeper==true)
	    	 								{
	    	 									start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
	    	 								}else
	    	 									{
	    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
	    	 									}
	    	 								}
			    	 					}
			    	 					else{
			    	 							b_seats_l[0]=0;
			    	 							if(blck_seats.length!=0)
			    	 							{
			    	 								if(isSleeper==true)
			    	 								{
			    	 									start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 								}else
			    	 									{
			    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 									}
			    	 							}
			    	 							else
			    	 							{
			    	 								blck_seats[0]=0;//alert("boarding1 "+boarding);
			    	 								if(isSleeper==true)
			    	 								{
			    	 									start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 								}else
			    	 									{
			    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 									}
			    	 							}
			    	 					}
			    	 				}
			    	 				 }
			    					  else
			    						  {
			    						  	alert("Sorry!, Booking time expired.");
			    							window.location.replace("../../../login.do");
			    						  }	

			     	}
			     else {
			        alert("Sorry could not connect to server. Please try again");
			    		}
			   }
			 
		}
		// alert("es:"+exe);
			    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			    //alert("name: "+name);
			    dataType: "json";
			    xmlhttp.send('action=Booking/getBusLayout&userName='+name+'&sourceName='+sourceId+'&destinationName='+destinationId+'&journeyDate='+journeyDate+'&routeId='+busId+'&execuseme='+exe);
			    
			   
			  }
		  
	}

	var lady,img_avail,img_book,img_block,img_ladies,select_seat,img_avail_ver,sleeper_seats,select_seat_ver;
	//sleeper
    function start_sleeper(booked_seatsss,ladies,blck,fare,board,route,check)
    {
    	var nAgt = navigator.userAgent;
    	var verOffset;
    	var rotate=false;
    	if ((verOffset=nAgt.indexOf("Chrome"))!=-1) 
    	{
    	 rotate=true;
    	}
    	$("#br").show();
    	$("#br1").hide();
    	//alert(booked_seatsss+" "+ladies+" "+blck+" "+fare+" "+board+" "+route+" "+check);
    	agent_blocked=new Array();
    	book_seats=new Array();
    	document.getElementById("passanger").innerHTML="<br/><br/><center><p><blink>Please Select Your Favourite Seats...</blink></p></center>";
    	var alot=0;
    	document.getElementById("bus_outer").innerHTML="";
    //	alert("blocked seats:"+blck);
    	$("#bus21").show();
    	$("#bus").show();
    	$("#bus_outer").show();
    	var last_booked=false;
    	$("#2d").hide();
    	$("#details").show();
    	$("#u_details").hide();
    	$("#seatInfoHeading").show();
    	//$("#3d").show();
    	//var bus_type="semi-sleeper";
    	ik=0;
    	var r_s=route.split("/");
    	var s_Name="";
    	 b_route=r_s[0];
 	    s_Name=r_s[1];
 	    var rows=r_s[2];
 	    var col=r_s[3];
 	   // alert("befores");
 	    //alert(s_Name);
 	 
    	if(check==0)
    	{
    		img_avail=CONTEXT_ROOT+"/images/bus/sleeper/available.gif";
    		img_book=CONTEXT_ROOT+"/images/bus/sleeper/booked.gif";
    		img_block=CONTEXT_ROOT+"/images/bus/sleeper/booked.gif";
    		img_ladies=CONTEXT_ROOT+"/images/bus/woman.jpg";
    		select_seat=CONTEXT_ROOT+"/images/bus/sleeper/selected.gif";
    		img_avail_ver=CONTEXT_ROOT+"/images/bus/sleeper/available1.gif";
    		select_seat_ver=CONTEXT_ROOT+"/images/bus/sleeper/selected1.gif";
			img_book_ver=CONTEXT_ROOT+"/images/bus/sleeper/booked1.gif";
			img_block_ver=CONTEXT_ROOT+"/images/bus/sleeper/booked1.gif";
    	}
		else
			{
		    	img_avail=CONTEXT_ROOT+"/images/bus/sleeper/available.gif";
				img_book=CONTEXT_ROOT+"/images/bus/sleeper/booked.gif";
				img_block=CONTEXT_ROOT+"/images/bus/sleeper/booked.gif";
				img_ladies=CONTEXT_ROOT+"/images/bus/woman.jpg";
				select_seat=CONTEXT_ROOT+"/images/bus/sleeper/selected.gif";
				img_avail_ver=CONTEXT_ROOT+"/images/bus/sleeper/available1.gif";
				select_seat_ver=CONTEXT_ROOT+"/images/bus/sleeper/selected1.gif";
				img_book_ver=CONTEXT_ROOT+"/images/bus/sleeper/booked1.gif";
				img_block_ver=CONTEXT_ROOT+"/images/bus/sleeper/booked1.gif";
		    }
    	b_fare=fare;
    	lady=ladies;
    	var l_sleeper=new Array();
    	var l_blck=new Array();
    	var l_slee=0;
    	if(k==0)
    	{
	    			if(booked_seatsss.length>0 &&booked_seatsss[0]!=0)
	    			{
	    				alr_booked=new Array();
	    				for(var m=0;m<booked_seatsss.length;m++)
	    				{
	    					alr_booked[m]=booked_seatsss[m];
	    					if(booked_seatsss[m]==16 || booked_seatsss[m]==32)
	    						{
	    						//alert("comes");
	    					l_sleeper[l_slee]=booked_seatsss[m];
	    						}
	    					l_slee=l_slee+1;
	    					//if()
	    				}
	    			}
	    			else
	    			{
	    				alr_booked=new Array();
	    			}
	    			l_slee=0;
	    			if(blck.length>0)
	    			{
	    				for(var m1=0;m1<blck.length;m1++)
	    				{
	    					agent_blocked[m1]=blck[m1];
	    					if(blck[m1]==16 || blck[m1]==32)
    						{
	    						l_blck[l_slee]=blck[m1];
    						}
	    					l_slee=l_slee+1;
	    				}
	    			}else
	    			{ 
	    				agent_blocked[0]=0;
	    			}
		    		inc=1;
		    		var body = document.getElementById("bus_outer");//bus21
		    		var tbl = document.createElement("table");

		    		var tblBody = document.createElement("tbody");
		    		
		    		alot=agent_blocked.length+booked_seatsss.length;
		    		var div=document.createElement("div");

	    			//alert("layout under construction.*.");
	    			rows=rows/2;
	    			var cell = document.createElement("td");
					//cell.setAttribute("title","Seat no."+m);
					var row = document.createElement("tr");
					 document.getElementById("avail").src=CONTEXT_ROOT+"/images/bus/sleeper/available.gif";
					 document.getElementById("select").src=CONTEXT_ROOT+"/images/bus/sleeper/selected.gif";
					 document.getElementById("booked").src=CONTEXT_ROOT+"/images/bus/sleeper/booked.gif";
					cell.setAttribute("width","670");
					cell.setAttribute("height","255");
		    		var m1=1;
		    		var last_seat=0; 
					    		do{
					    			last_booked=false;
					    					
								    if(m1!=2)
								    {
								    	inc=17;
								    	last_seat=31;
								    }
								    else
								    {
								    	inc=1;
								    	last_seat=15;
								    }
								    sleeper_seats=s_Name.split(",");
					    			row.appendChild(cell);
					    			var sleep_tbl = document.createElement("table");
					    			var sleep_tblBody = document.createElement("tbody");
						    		var dumy_tbl = document.createElement("table");
						    		var dumy_tblBody = document.createElement("tbody");
						    		var dumy_row = document.createElement("tr");
						    		var dumy_td= document.createElement("td");
						    		
						   			for (var i = 1; i <rows; i++) 
						    			{ 
						   				var last_seat_booked=false;
						    				var s_row = document.createElement("tr");
						    				// creates a table row
						    				if(i!=3)
						    				{
						    					var m=inc;
						    					for (var j = 1; j <= (col-1); j++) 
						    					{
						    						var seat_no="";
						    						seat_no=sleeper_seats[m-1];
						    						var s_cell = document.createElement("td");
						    						s_cell.setAttribute("title","Seat no."+sleeper_seats[m-1]);
						    						//alert("seat_no"+seat_no);
						    						//var cellText = document.createTextNode("    "+sleeper_seats[m-1]); 
						    		               // s_cell.appendChild(cellText);
						    						s_row.appendChild(s_cell);
						    						s_cell.setAttribute("width","70");
						    						s_cell.setAttribute("height","30");
						    						s_cell.setAttribute("id", sleeper_seats[m-1]);
						    						if(alr_booked.length>0 || agent_blocked.length>0)
						    						{
							    						for(var booked=0;booked<alot;booked++)
							    						{
							    							if(m==alr_booked[booked])//for admin check==1s_Name.split(",")[0].trim()
							    							{
							    									if(check==1)
							    										{
							    											s_cell.setAttribute("onclick","booked_seat("+check+");");
							    											s_cell.style.backgroundImage="url("+img_book+")";
							    				  						}
							    									else
							    										{
							    											s_cell.setAttribute("onclick","booked_seat("+check+");");
							    											s_cell.style.backgroundImage="url("+img_book+")";
							    										}
							    									s_cell.style.backgroundPosition="3px 5px";
											   			   			s_cell.style.backgroundRepeat="no-repeat";
											   			   			break;
							    							}
						    							else
						    							{
						    								
						    								for(var block=0;block<agent_blocked.length;block++)
						    								{
						    									if(alr_booked[booked]==(last_seat+1))
							    								{
						    										last_seat_booked=true;
							    								}
						    									if(m==agent_blocked[block])
						        			   					{
							        		  			   		   	if(check==1)
							        		  			   		   	{
							        		  			   		   		s_cell.style.backgroundColor="#B2B2B2";
									        		  			   	    s_cell.style.backgroundImage="url("+img_avail+")";
									        		  			        s_cell.setAttribute("onclick","sleeper_selected("+m+");");//+seat_no+
							        		  			   		   	}
							        		  			   		   	else
							        		  			   		   		{
									        		  			   			s_cell.style.backgroundImage="url("+img_block+")";
									        		  			   			s_cell.setAttribute("onclick","booked_seat("+check+");");
							        		  			   		   		}
							        		  			   		   	s_cell.style.backgroundRepeat="no-repeat";
							        		  			   		s_cell.style.backgroundPosition="5px 5px";
							        			   					break;
						        			   					}
						    									else
						    									{
							        			   					for(var l=0;l<ladies.length;l++)
							        			   					{
							        			   						if(m==ladies[l])
							        			   							{
							        			   								s_cell.setAttribute("onclick","sleeper_selected("+m+");");
							        			   								s_cell.style.backgroundImage="url("+img_avail+")";
							        			   								s_cell.style.backgroundRepeat="no-repeat";
							        			   								s_cell.style.backgroundPosition="5px 5px";
							        			   								break;
							        			   							}
							        			   						else
							        			   							{//var sea_t=new String(m);//alert("number==="+seat_no);//seat_no
							        			   							s_cell.setAttribute("onclick","sleeper_selected("+m+");");
							    			   								s_cell.style.backgroundImage="url("+img_avail+")";
							    			   								s_cell.style.backgroundRepeat="no-repeat";
							    			   								s_cell.style.backgroundPosition="5px 5px";
							        			   							}
							        			   					}
						    			   					
						    									}
						    								}// for
						    							}// else
						    						}
						        	   }else
											{ 
												s_cell.setAttribute("onclick","selected("+seat_no+");");
												s_cell.style.backgroundImage="url("+img_avail+")";
												s_cell.style.backgroundRepeat="no-repeat";
												s_cell.style.backgroundPosition="5px 5px";
												}
							
						                if(i==1 && (j%2)==0)
						                	m = m+1;
						                if(i==1 && (j%2)==1)
						                	m = m+5;
						                if(i==2 && (j%2)==0)
						                	m = m+3;
						                if(i==2 && (j%2)==1)
						                	m = m+3;
						                if(i==4 && (j%2)==0)
						                	m = m+5;
						                if(i==4 && (j%2)==1)
						                	m = m+1;
						                
						            }
						    		inc=inc+1;
						    	  }
						    	 else
						    		 {
						    		 	var cellText = "";
						    		 	if(m1==1)
						    		 		{
						    		 			cellText = document.createTextNode("UPPER");
						    		 		}else
						    		 			{
						    		 				cellText = document.createTextNode("LOWER");
						    		 			}
						    		 	var span=document.createElement("span");
						    		 	span.style.color="#777769";
						    		 	span.style.fontSize="10px";
						    		 	span.style.marginLeft="230%";
						    		 	span.appendChild(cellText);
						    		 	s_row.appendChild(span);
						    		 	s_row.setAttribute("height", "15");
						    		 }
						    		sleep_tblBody.appendChild(s_row);
						        }
						    			m1++;
						    			sleep_tbl.appendChild(sleep_tblBody);
						    			sleep_tbl.style.border="0px solid red";
						    			var cells = document.createElement("td");
						    			for(var ss=0;ss<l_sleeper.length;ss++)
						    				{
						    				if((last_seat+1)==l_sleeper[ss])
						    					{
						    					last_booked=true;
						    					}
						    				}
						    			for(var ss=0;ss<l_blck.length;ss++)
					    				{
					    				if((last_seat+1)==l_blck[ss])
					    					{
					    					last_booked=true;
					    					}
					    				}
						    			if(last_booked==false)
						    				{
						    					cells.style.backgroundImage="url("+img_avail_ver+")";
						    					cells.setAttribute("onclick", "sleeper_selected("+(last_seat+1)+");");
						    				}else
						    					{
						    					   cells.style.backgroundImage="url("+img_book_ver+")";
						    					   cells.setAttribute("onclick","booked_seat("+(last_seat+1)+");");
						    					}
						    				cells.setAttribute("id", sleeper_seats[last_seat]);
						    				if(rotate==true && last_seat==15)
						    				{
						    				cells.setAttribute("class", "L161");//rotate-img
						    				}
						    			
						                cells.style.backgroundRepeat="no-repeat";
						                cells.setAttribute("title", "Seatno."+sleeper_seats[last_seat]);
						               
						                cells.style.backgroundPosition="3px 20px";
						                cells.setAttribute("width","35");
						                cells.setAttribute("height","30");
						    			var dumy_rows=document.createElement("tr");
						    			dumy_rows.setAttribute("height", "10");
						    			dumy_tbl.style.border="1px solid green";
						    			sleep_tbl.setAttribute("cellspacing", "8");
						    			sleep_tbl.style.border="0px solid green";
						    			dumy_td.appendChild(sleep_tbl);
						    			dumy_row.appendChild(dumy_td);
						    			dumy_row.appendChild(cells);
						    			dumy_tblBody.appendChild(dumy_row);
						    			dumy_tbl.appendChild(dumy_rows);
						    			dumy_tbl.appendChild(dumy_tblBody);
						    			dumy_tbl.setAttribute("cellspacing", "5");
						    			cell.appendChild(dumy_tbl);
						                tblBody.appendChild(row);
						                
					    		}
					    		while(m1<3);

    		tbl.setAttribute("cellspacing", "2");		
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        document.getElementById("name").value="";
       tbl.setAttribute("border", "0");
       document.getElementById("bus21").style.border="1px solid #000000";
        document.getElementById("passanger").innerHTML="";
        seat_counter=0;
        $("#seatInfoHeading").hide();
        $("#passes1").show();
        $("#passes").hide();
        document.getElementById("fare11").innerHTML="0";
        document.getElementById("board1").innerHTML="";
    
        	if(book_seats.length>0){
        		book_seats.length=null;
        		board1(board);
        		}
        	else{ board1(board);}
        	
        images(ladies,"sleeper");
       	} 
 
    }
	
	//semi-sleeper
    function start(booked_seatsss,ladies,blck,fare,board,route,check){
    	$("#br").hide();
    	$("#br1").show();
    	agent_blocked=new Array();
    	book_seats=new Array();
    	document.getElementById("passanger").innerHTML="<br/><br/><center><p><blink>Please Select Your Favourite Seats...</blink></p></center>";
    	var alot=0;
    	document.getElementById("bus_outer").innerHTML="";
    	$("#bus21").show();
    	$("#bus").show();
    	$("#bus_outer").show();
    	$("#2d").hide();
    	$("#details").show();
    	$("#u_details").hide();
    	$("#seatInfoHeading").show();
    	ik=0;
    	var r_s=route.split("/");
    	 b_route=r_s[0];
 	    s_Name=r_s[1];
 	    var rows=r_s[2];
 	    var col=r_s[3];
	    		bus_type="sleeper";
	    		if(check==0){
	      		  img_avail=CONTEXT_ROOT+"/images/bus/available.gif";
	  			  img_book=CONTEXT_ROOT+"/images/bus/booked.gif";
	  			  img_block=CONTEXT_ROOT+"/images/bus/booked.gif";
	  			  img_ladies=CONTEXT_ROOT+"/images/bus/woman.jpg";
	  			  select_seat=CONTEXT_ROOT+"/images/bus/selected.gif";
	  				  
		      	}
		      	else
		      		{
		      		img_avail=CONTEXT_ROOT+"/images/bus/available.gif";
	  			    img_book=CONTEXT_ROOT+"/images/bus/booked.gif";
	  			    img_block=CONTEXT_ROOT+"/images/bus/booked.gif";
	  			    img_ladies=CONTEXT_ROOT+"/images/bus/woman.jpg";
	  			    select_seat=CONTEXT_ROOT+"/images/bus/selected.gif";
	      		}
    	b_fare=fare;
    	lady=ladies;
    	if(k==0)
    	{
	    			if(booked_seatsss.length>0 &&booked_seatsss[0]!=0)
	    			{
	    				alr_booked=new Array();
	    					for(var m=0;m<booked_seatsss.length;m++){ alr_booked[m]=booked_seatsss[m];}
	    			}
	    			else
	    			{
	    				alr_booked=new Array();
	    			}
	    			if(blck.length>0)
	    			{
	    				for(var m1=0;m1<blck.length;m1++){ agent_blocked[m1]=blck[m1];}
	    			}else
	    			{ 
	    				agent_blocked[0]=0;
	    			}
	   
		    		inc=1;
		    		var body = document.getElementById("bus_outer");//bus21
		    		var tbl = document.createElement("table");
		    		var tblBody = document.createElement("tbody");
		    		
		    		alot=agent_blocked.length+booked_seatsss.length;
		    		var div=document.createElement("div");
	    			document.getElementById("avail").src=CONTEXT_ROOT+"/images/bus/available.gif";
				document.getElementById("select").src=CONTEXT_ROOT+"/images/bus/selected.gif";
				document.getElementById("booked").src=CONTEXT_ROOT+"/images/bus/booked.gif";
					
		    			for (var i = 1; i <rows; i++) 
		    			{ 
		    				m=inc;
		            // creates a table row
		    				if(i!=3)
		    				{
		    					var row = document.createElement("tr"); 
		          
		    					for (var j = 1; j <= col; j++) 
		    					{
		    						var cell = document.createElement("td");
		    						cell.setAttribute("title","Seat no."+m);
					   		
		    						row.appendChild(cell);
		    						cell.setAttribute("width","45");
		    						cell.setAttribute("height","35");
		    						cell.setAttribute("id", m);
		    						
		    						
		    						if(alr_booked.length>0 || agent_blocked.length>0)
		    						{
		    						for(var booked=0;booked<alot;booked++)
		    						{
		        		   
		    							if(m==alr_booked[booked])//for admin check==1
		    							{
		    									if(check==1)
		    										{
		    										cell.setAttribute("onclick","booked_seat("+check+");");
		    				  			   		   	cell.style.backgroundImage="url("+img_book+")";
		    				  						}
		    									else
		    										{
		    										cell.setAttribute("onclick","booked_seat("+check+");");
		    				  			   		   	cell.style.backgroundImage="url("+img_book+")";
		    				  		
		    										}
		    								
					   			   			cell.style.backgroundRepeat="no-repeat";
					   			   			break;
		    							}
		    							else
		    							{
		        			
		    								for(var block=0;block<agent_blocked.length;block++)
		    								{
		    									if(m==agent_blocked[block])
		        			   					{
		        			   		   		   
		        		  			   		   	if(check==1){
		        		  			   				 cell.style.backgroundColor="#B2B2B2";
		        		  			   				 cell.style.backgroundImage="url("+img_avail+")";
		        		  			 				 cell.setAttribute("onclick","selected("+m+");");
		        		  			   		   	}
		        		  			   		   	else
		        		  			   		   		{
		        		  			   			cell.style.backgroundImage="url("+img_block+")";
		        		  			   		cell.setAttribute("onclick","booked_seat("+check+");");
		        		  			   		   		}
		        		   			   			cell.style.backgroundRepeat="no-repeat";
		        			   					
		        			   					break;
		        			   					}
		    									else
		    									{
		        			   					
		        		   		
		        			   					for(var l=0;l<ladies.length;l++)
		        			   					{
		        			   						if(m==ladies[l])
		        			   							{
		        			   								cell.setAttribute("onclick","selected("+m+");");
		        			   								cell.style.backgroundImage="url("+img_avail+")";
		        			   								cell.style.backgroundRepeat="no-repeat";
		        			   								break;
		        			   							}
		        			   						else
		        			   							{
		        			   							cell.setAttribute("onclick","selected("+m+");");
		    			   								cell.style.backgroundImage="url("+img_avail+")";
		    			   								cell.style.backgroundRepeat="no-repeat";
		    			   								
		        			   							}
		        			   					}
		    			   					
		        			   			}
		        			   		}// for
		        			   }// else
		    						}
		        	   }else
							{ 
								cell.setAttribute("onclick","selected("+m+");");
								//cell.setAttribute("cellspacing", "10");
								cell.style.backgroundImage="url("+img_avail+")";
								cell.style.backgroundRepeat="no-repeat";
								
								}
			
		                if(i==1 && (j%2)==0)
		                	m = m+1;
		                if(i==1 && (j%2)==1)
		                	m = m+7;
		                if(i==2 && (j%2)==0)
		                	m = m+3;
		                if(i==2 && (j%2)==1)
		                	m = m+5;
		                if(i==4 && (j%2)==0)
		                	m = m+5;
		                if(i==4 && (j%2)==1)
		                	m = m+3;
						if(i==5 && (j%2)==0)
							m = m+7;
						if(i==5 && (j%2)==1)
							m = m+1;
		
			
		            }inc=inc+1;
		
		    	  }
		    	 else
		    		 {
		    		 var row = document.createElement("tr");
		    		 row.setAttribute("height", "20");
		    		 }
		            tblBody.appendChild(row);
		        }

    		tbl.setAttribute("cellspacing", "0");		
    		//tbl.style.border="1px solid red";
    			// the same as
    		

        tbl.appendChild(tblBody);
        
 
        body.appendChild(tbl);
 
        document.getElementById("name").value="";
       tbl.setAttribute("border", "0");
       document.getElementById("bus21").style.border="1px solid #000000";
        document.getElementById("passanger").innerHTML="";
        seat_counter=0;
        $("#seatInfoHeading").hide();
        $("#passes1").show();
        $("#passes").hide();
        document.getElementById("fare11").innerHTML="0";
        document.getElementById("board1").innerHTML="";
    
        	if(book_seats.length>0){
        		book_seats.length=null;
        		board1(board);
        		}
        	else{ board1(board);}
        images(ladies,"semi-sleeper");
       	} 
 
    }
    function board1(board)
    {
    
       	var boards= document.getElementById("board1");
        var select = document.createElement("select");
         select.setAttribute("name", "mySelect");
         select.setAttribute("id", "mySelect");
         select.setAttribute("class", "logg");
         select.style.width = "150px";
         select.style.fontSize="10px";
         var option;
         for(var o=0;o<board.length;o++){
    
          option = document.createElement("option");
          option.setAttribute("value", board[o]);
          option.innerHTML = board[o];
         select.appendChild(option);
         }
         select.appendChild(option);
    	boards.appendChild(select);
    }
    function images(ladies,bus) 
    {
    	//alert("ladies===="+ladies);//sleeper_seats[m-1]
    
    	if(bus=="sleeper")
    		{
    	for(var l=0;l<ladies.length;l++)
    	{
    		document.getElementById(sleeper_seats[ladies[l]-1]).innerHTML="<head><img src="+img_ladies+" align='ridht'></head>";
    	}
    		}else
    			{
    			for(var l=0;l<ladies.length;l++)
    	    	{
    	    		document.getElementById(ladies[l]).innerHTML="<head><img src="+img_ladies+" align='ridht'></head>";
    	    	}
    			}
	}
     var book_seats;
    var alr_booked;
    var agent_blocked;
    var f=0;
    var k=0;
    var b_route;
    var b_fare,size;
    var m=1,inc=1;
    var num,ik=0;
    function booked_seat(check) {
    	 if(check==1)
    		{
    		alert("do u want edit this seat...");
    		}
    	  else
     		{
     	alert("Already booked.please try some other.");
     		}
     
    		 
    	
    }
    var seat_counter;
    function selected(m11) {
    	
    	var m=String(m11);
    	//alert("the given seat ************* ===="+m.toString()+"   " +seat_counter+"  "+book_seats);
    	if(seat_counter<6)
    	{//alert("comes "+book_seats.length);
            	if(book_seats.length>0)
            	{
	            	if(book_seats[book_seats.length+1]!=m)
	            	{
		            	var m1=document.getElementById(m);
		            	m1.style.backgroundImage="url("+select_seat+")";
		            	
		            	m1.style.backgroundRepeat="no-repeat";
		            	m1.setAttribute("onclick","unvalidateselectedseat("+m+");");
		            	book_seats.push(m);
	            	}
            	}
            	else
            	{
            		var m1=document.getElementById(m);
                	m1.style.backgroundImage="url("+select_seat+")";
                	m1.style.backgroundRepeat="no-repeat";
                	m1.setAttribute("onclick","unvalidateselectedseat("+m+");");
                	book_seats.push(m);
            	}
            seat_counter++;
            addElement(m);
            
    	}
    	else
    		{
    		alert("More than six seats are not allowed for single time");
    		}
                  
            }

            function unvalidateselectedseat(m)
            {
            
                 var m1=document.getElementById(m);
             	m1.style.backgroundImage="url("+img_avail+")";
             	m1.style.backgroundRepeat="no-repeat";
             	m1.setAttribute("onclick","selected("+m+");");
            
              for(var i=0;i<book_seats.length;i++)
              {
            	  if(book_seats[i]==m)
            	  {
            		  book_seats[i]=0;
            		
            	  }
              }
              seat_counter--;
              removeElement(m);
                 
            }

            function sleeper_selected(m11) {
             	//alert("yes");
            	//alert("the given seat ??????? ===="+m11+"  "+sleeper_seats[m11-1]);
            	var m=String(m11);
            	
            	
            	if(seat_counter<6)
            	{//alert("comes "+book_seats.length);
                    	if(book_seats.length>0)
                    	{
        	            	if(book_seats[book_seats.length+1]!=sleeper_seats[m-1])
        	            	{
        		            	var m1=document.getElementById(sleeper_seats[m-1]);
        		            //	m1.style.backgroundImage="url("+select_seat+")";
        		            	
        		            	if(m==16 || m==32)
        	            		{
        	            		
        	            		m1.style.backgroundImage="url("+select_seat_ver+")";
        	            		}
        	            	else
        	            		{
        	            		m1.style.backgroundImage="url("+select_seat+")";
        	            		}
        		            	m1.style.backgroundRepeat="no-repeat";
        		            	m1.setAttribute("onclick","sleeper_unvalidateselectedseat("+m+");");
        		            	book_seats.push(sleeper_seats[m-1]);
        	            	}
                    	}
                    	else
                    	{//alert("comes");
                    		var m1=document.getElementById(sleeper_seats[m-1]);
                    		if(m==16 || m==32)
    	            		{
    	            		
    	            		m1.style.backgroundImage="url("+select_seat_ver+")";
    	            		}
    	            	else
    	            		{
    	            		m1.style.backgroundImage="url("+select_seat+")";
    	            		}
                        	m1.style.backgroundRepeat="no-repeat";
                        	m1.setAttribute("onclick","sleeper_unvalidateselectedseat("+m+");");
                        	book_seats.push(sleeper_seats[m-1]);
                    	}
                    seat_counter++;
                    addElement(m);
                    
            	}
            	else
            		{
            		alert("More than six seats are not allowed for single time");
            		}
                          
                    }

            function sleeper_unvalidateselectedseat(m)
            {
            //alert("comes");
            	
                 var m1=document.getElementById(sleeper_seats[m-1]);
                 if(m==16 || m==32)
         		{
                		m1.style.backgroundImage="url("+img_avail_ver+")";
         		}
             	else
             		{
             		m1.style.backgroundImage="url("+img_avail+")";
                		}
             	m1.style.backgroundRepeat="no-repeat";
             	m1.setAttribute("onclick","sleeper_selected("+m+");");
            
              for(var i=0;i<book_seats.length;i++)
              {
            	  if(book_seats[i]==sleeper_seats[m-1])
            	  {
            		  book_seats[i]=0;
            		
            	  }
              }
              seat_counter--;
              removeElement(sleeper_seats[m-1]);
                 
            }
       
        var age1,gender1,name1;
        var arr,len;
        function seats_list(val)
        {
        	
        	arr=new Array();
        	var age=new Array();
       	 	var gender=new Array();
        	var len=book_seats.length;
        	
        	var boarded;
        	
        	
        	if(len>=1)
        	{
        		
        		 boarded=document.getElementById("mySelect").value;
        		
        		for(var y=0;y<len;y++)
        		{
        			
        			var dat=book_seats[y];
        			//alert("***********************************"+dat);
        			if(dat!=0)
        			{
        			 age1=document.getElementById("age"+dat).value;
        			
        			var gender1=document.getElementById("gender"+dat).value;


        			gender.push(gender1);
        			age.push(age1);

        			arr.push(dat);

        			
        			}
        			 var ik=0;
        			
        		}	
        		
        		if(arr.length>0){var boarde="";
        			 len=arr.length;
        			var boarded0=boarded.split(":");
        			
        			var boarded10=boarded0[0];
        			var boarded1=boarded10.split(" ");
        			
        			for(var y=0;y<(boarded1.length)-1;y++)
        				{
        				if((boarded1.length)-2==y)
        					{
        						boarde=boarde+boarded1[y];
        					}else
        						{
        						boarde=boarde+boarded1[y]+" ";
        						}
        				 
        				}
    
        			document.getElementById("age").setAttribute("value", age);
        			document.getElementById("seatName").setAttribute("value", arr);
    
        			
        			document.getElementById("bb").setAttribute("value", boarde);
        			document.getElementById("gender").setAttribute("value", gender);
        			document.getElementById("totalSeats").setAttribute("value", len);
        		
        		}
        		else
        			{
        			alert("sorry no seats booked");
        			return (false);
        			}
        	}
        	else
        	{
        		alert("sorry no seats booked");
        		return (false);
        	}
           	var v=0,id,n;
        	id="err";
        
        	var numbers11 = /^[-+]?[0-9]+$/; 
        	for(var z1=0;z1<arr.length;z1++)
        		{
        
        			
        			if(gender[z1]=='--SELECT--')
        			{
    			
        				//id="passerr"+num;
        				document.getElementById("gender"+arr[z1]).focus();
        				document.getElementById(id).innerHTML="Select Valid Gender on seat:"+arr[z1];
        				document.getElementById("boarederr").innerHTML="";
        				document.getElementById("mailerr").innerHTML="";
        				document.getElementById("mobilerr").innerHTML="";
        				document.getElementById("nameerr").innerHTML="";
        				return (false);
        			}
    		
        			/*if(age[z1]==0 || age[z1]=="" || !age[z1].match(numbers11))
        			{
        				document.getElementById("age"+arr[z1]).focus();
        				
        				document.getElementById(id).innerHTML="Enter Valid Age on seat:"+arr[z1];
        				document.getElementById("boarederr").innerHTML="";
        				document.getElementById("mailerr").innerHTML="";
        				document.getElementById("mobilerr").innerHTML="";
        				document.getElementById("nameerr").innerHTML="";
        				return (false);
        			}
        			else 
        			{
        				//alert(book_seats[y]);
        				//id="passerr"+num;
        				document.getElementById(id).innerHTML="";
        				document.getElementById("boarederr").innerHTML="";
        				document.getElementById("mailerr").innerHTML="";
        				document.getElementById("mobilerr").innerHTML="";
        				document.getElementById("nameerr").innerHTML="";
        			}*/
        	//arr=null;
        		}
        
        	document.getElementById(id).innerHTML="";
    			var name2=document.getElementById("name").value;
    	
    			var nid=document.getElementById("name");
    			if(name2=="" || name2.length<2)
    				{
    	
    				 	document.getElementById("err1").innerHTML="Enter correct name in below box";
    				 	nid.focus();
    				 	return (false);
    				}
    			else
    				{
    	
    				document.getElementById("err1").innerHTML="";
    				}
    		
        		var mail=document.getElementById("email").value;
        		var mid=document.getElementById("email");
        
        		if(mail=="")
        		{
        			document.getElementById("err1").innerHTML="Please enter email-id";
        			mid.focus();
        			return (false);
        		}
        		
        		else if (mail!=null || mail!="")
        	    {
        		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        		{
        			document.getElementById("err1").innerHTML="";
        	    }
        	    else {
        	    	document.getElementById("err1").innerHTML="please enter valid email-id";
        	    	mid.value="";
        	    	mid.focus();
        	    return (false);
        	    }
        	    }
        		else if(mail!="")
        		{
        			
        		    document.getElementById("err1").innerHTML="";
        		    mid.focus();
        		    return (false);
        		}
        		var phon=document.getElementById("phoneno").value;
        		var pid=document.getElementById("phoneno");
        		if(phon=="")
        		{
        		    document.getElementById("err1").innerHTML="Please enter Phone Number";
        			pid.focus();
        			return (false);
        		}
        		else if(phon.length>10 || phon.length<10)
        		{
        			
        			document.getElementById("err1").innerHTML="Please enter correct Phone Number";
        			pid.value="";
        			pid.focus();
        			return (false);
        		}
        		else if((phon.length==10) && (phon!=""))
        		{
        		    document.getElementById("err1").innerHTML=" ";
        		}
        		var opt=document.getElementById("mySelect").value;
        		
        	if(opt=='--select--')
        		{
        		document.getElementById("err1").innerHTML="Please select boarding place";
        		document.getElementById("mySelect").focus();
        		return (false);
        		}
        	else
        		{
        		document.getElementById("err1").innerHTML="";
        
        	}
        	/*		var con=confirm("Please confirm to book selected ticket.");
        	if(con==false)
        		{
        		return false;
        		}
        	else
        	{*/
        	if(val==1)
        		{
        			document.getElementById("btn").disabled = "disabled";
	          		ticket_book();
        		}
        	return true;
       /* }*/
        }
     
       
        function addElement(m)
        {
        	var isSleeper=false;
   		 var splitData=check_s.split(" ");
   		 for(var s=0;s<splitData.length;s++)
   		 {
   			 if(splitData[s]=="Sleeper")
   			 {
   				 isSleeper=true;
   			 }
   		 }
        	document.getElementById("err").innerHTML="";
        	document.getElementById("err1").innerHTML="";
        	 var ni = document.getElementById("passanger");
        	   num = m;
        	  var newdiv = document.createElement('div');
        	
        	  var divIdName = num;
        	 
        	  if(isSleeper)
				{
				
				 newdiv.setAttribute('id',sleeper_seats[m-1]+"/");
				}else
				{
        	  newdiv.setAttribute('id',num+"/");
				}
        	  if(num<10){
        		for(var m=0;m<=lady.length;m++){
        			if(num==lady[m]){
        				if(isSleeper)
        					{
        					num=sleeper_seats[num-1];
        					}
        				newdiv.innerHTML = '<div  style="margin-left:3%;"><table border="0"><tr><td width="25%"><span style="font-size:12px;margin-top:2%;">'+num+'</span></td><td><lable  style="margin-left:14%;"><select class="logg" id="gender'+num+'"style="width:120px;height:24px;font-size: 10px;margin-top:6%;"><option>--SELECT--</option><option>FEMALE</option></select></lable><input type="hidden"style="width:28px;height:15px;" value="0" id="age'+num+'"></td></tr></table></div>';
        	  		break;
        			}
        			else if(m==((lady.length-1)))
        				{
        				if(isSleeper)
    					{
    					num=sleeper_seats[num-1];
    					}
        				 newdiv.innerHTML = '<div  style="margin-left:3%;"><table border="0"><tr><td width="25%"><span style="font-size:12px;margin-top:2%;">'+num+'</span></td><td><lable style="margin-left:14%;"><select class="logg" id="gender'+num+'"style="font-size: 10px;width:120px;height:24px;margin-top:6%;"><option>--SELECT--</option><option>MALE</option><option>FEMALE</option></select></lable><input type="hidden" style="width:28px;height:15px;" value="0" id="age'+num+'"></lable></td></tr></table></div>';
        				}
        			else{ continue;}
        		}
        	  }
        	  else
        		  {
        		  
        		  for(var m=0;m<=lady.length;m++){
          			if(num==lady[m]){
          				if(isSleeper)
    					{
    					num=sleeper_seats[num-1];
    					}
        		  newdiv.innerHTML = '<div  style="margin-left:2%;"><table border="0"><tr><td width="25%"><span style="font-size:12px;margin-top:2%;">'+num+'</span></td><td><lable style="margin-left:8%;"><select class="logg" id="gender'+num+'" style="font-size: 10px;width:120px;height:24px;margin-top:6%;"><option>--SELECT--</option><option>FEMALE</option></select></lable><input type="hidden" style="width:28px;height:15px;"  value="0" id="age'+num+'"></td></tr></table></div>';
        		  break;
        			}
        			else if(m==((lady.length-1)))
        				{
        				if(isSleeper)
    					{
    					num=sleeper_seats[num-1];
    					}
        				newdiv.innerHTML = '<div  style="margin-left:2%;"><table border="0"><tr><td width="25%"><span style="font-size:12px;margin-top:2%;">'+num+'</span></td><td><lable style="margin-left:8%;"><select class="logg" id="gender'+num+'" style="font-size: 10px;width:120px;height:24px;margin-top:6%;"><option>--SELECT--</option><option>MALE</option><option>FEMALE</option></select></lable><input type="hidden" style="width:28px;height:15px;" value="0" id="age'+num+'"></td></tr></table></div>';	
        				}
        			else{ continue;}
        		}
        		  }
        	  ni.appendChild(newdiv);
        	  ik++;
        	  disp(ik);
        	 
        }
        function removeElement(m)
        {
        	document.getElementById("err").innerHTML="";
        	
        	 var d = document.getElementById('passanger');
        	 var num=m;
        	  var olddiv = document.getElementById(num+"/");
        	  olddiv.innerHTML='data';
        	  d.removeChild(olddiv);
        	  ik--;
        	  disp(ik);
        	  
        }
        function disp(gf)
    	{
        	
        	document.getElementById("err").innerHTML="";
    		if(gf>0)
    			{
    		
    			$("#hiding").show();
    			 $("#u_details").show();
    			 $("#passanger").show();
    			 $("#passes").hide();
    			 $("#seatInfoHeading").show();
    			 $("#passes1").hide();
    			}
    		else
    			{
    			$("#hiding").hide();
    			$("#passes1").show();
    			 $("#u_details").hide();
    			 $("#passanger").hide();
    			 $("#seatInfoHeading").hide();
    			}
    		 document.getElementById("phoneno").value='';
        	 document.getElementById("email").value='';
    		 add_fare(fare);
    	}
        function add_fare(fare) {
        	var len=book_seats.length;
        	
        	var arr1=new Array();
        	
        	if(len>=1)
        	{
        		
        		
        		
        		for(var y=0;y<len;y++)
        		{
        			var dat=book_seats[y];
        			if(dat!=0)
        			{
        			
        			arr1.push(dat);
        			}
        			
        		}
        		if(arr1.length>0){
        		
        			size=arr1.length;
        		
        			var fa=(arr1.length)*b_fare;
        			document.getElementById("fare11").value=fa;
        		
        		}
        		else
        			{
        			document.getElementById("fare").innerHTML='0';
        			}
        		
        	}
        	else
        	{
        		alert("sorry no seats booked");
        	}
        	
    	} 
        function isNumberKey(evt)
   	 {
   	    var charCode = (evt.which) ? evt.which : event.keyCode
   	    if (charCode != 46 && charCode > 31 
   	      && (charCode < 48 || charCode > 57))
   	       return false;

   	    return true;
   	 }
        
        function calling(pur)
        {
        	
       function getCookie(c_name)
        {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1)
          {
          c_start = c_value.indexOf(c_name + "=");
          }
        if (c_start == -1)
          {
          c_value = null;
          }
        else
          {
          c_start = c_value.indexOf("=", c_start) + 1;
          var c_end = c_value.indexOf(";", c_start);
          if (c_end == -1)
          {
        c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
        }
        return c_value;
        }
        var ck_value="lim_ebulliadmin";//getCookie("UserEmail");
      // alert("cook:"+ck_value);
        if(pur=="pwd"){
        	
        	document.getElementById('execuseme1').value=ck_value; 
        }
        else if(pur=="book")
        	{
        	document.getElementById('execuseme').value=ck_value; 
        	}
     
        }
        
  	function ajaxF(pwd,n_pwd,ex)
	{
			  if(xmlhttp) {
				  
				   url="WebClient";
				 xmlhttp.open("POST",url,true);
			     xmlhttp.onreadystatechange=handles18;
			     xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				    xmlhttp.send("action=AdminLogin/changePassword&currentPassword="+pwd+"&newPassword="+n_pwd+"&execuseme="+ex);
				    
				   
				  }
			  
		}
	function handles18() 
	{
		
		if (xmlhttp.readyState == 4) {
		     if(xmlhttp.status == 200) {
		    			
		    	 var jon=eval("("+xmlhttp.responseText+")");
		    	 var data122=jon.isSuccess;
		    	 
		    	 if(data122==false)
		    		 {
		    	 document.getElementById("error1").innerHTML=data122;
		    		 }
		    	 else
		    		 {
		    		 document.getElementById("bus1").innerHTML="<div class=\"alert alert-success\">YOUR PASSWORD HAS BEEN CHANGED SUCCESSFULLY....</div><BR/><DIV style='height:280px;'></DIV>";
		    		 
		    		 }
		     
		     }
		}
		
	}     
	
	function ticket_book()
	{
		
    	var action =document.getElementById("action").value;
    	var userName=document.getElementById("userName").value;
    	var age=document.getElementById("age").value;
    	var journeyDate=document.getElementById("journeyDate").value;
    	var routeId=document.getElementById("routeId").value;
    	var gender=document.getElementById("gender").value;
    	var seatName=document.getElementById("seatName").value;
    	var totalSeats=document.getElementById("totalSeats").value;
    	var bb=document.getElementById("bb").value;
    	var userId=document.getElementById("userId").value;
    	var destinationId=document.getElementById("destinationId").value;
    	var busId=document.getElementById("busId").value;
    	var boardingId=document.getElementById("boardingId").value;
    	var execuseme=document.getElementById("execuseme").value;
    	var name=document.getElementById("name").value;
    	var email=document.getElementById("email").value;
    	var phoneno=document.getElementById("phoneno").value;
    	var nsmsdmal=document.getElementById("nsmsdmal").checked;
    	var fare=document.getElementById("fare11").value;
    	
		  if(xmlhttp) {
				  
				   url="WebClient";
				  
			     xmlhttp.open("POST",url,true);
			     xmlhttp.onreadystatechange=handle11;
			     xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				    xmlhttp.send("action="+action+"&userName="+userName+"&routeId="+routeId+"&journeyDate="+journeyDate+"&boardingName="+bb+"&phoneno="+phoneno+"&name="+name+"&seatName="+seatName+"&gender="+gender+"&totalSeats="+totalSeats+"&email="+email+"&nsmsdmal="+nsmsdmal+"&execuseme="+execuseme);//+"&age="+age+"&userId="+userId+"&destinationId="+destinationId+"&busId="+busId+"&boardingId="+boardingId+"fare="+fare
				    
				   
				  }
			  
		}
	function handle11() 
	{
		if (xmlhttp.readyState == 4) {
		     if(xmlhttp.status == 200) {
		    	
		    	 var json1=eval("("+xmlhttp.responseText+")");
		    	 admin_print(json1);
		    	 
		     
		     }
		}
		
	} 
	
	function splite(dd)
	{
		var bookId=new Array();
		var seatName=new Array();
		var name=new Array();
		var gender=new Array();
		var journey,detail,detail1,time,point,landmark1,address,contact;
		
		var details=dd;
		var fare=details.totalFare;
		
		var source=details.sourceName;
		var destination=details.destinationName;
		
		journey=details.dateOfJourney;
		detail=details.passengerBookedCTO;
		
		detail1=details.boardingPointsCTO;
		for(var i=0;i<detail.length;i++)
			{
			
				bookId[i]=detail[i].bookId;
				seatName[i]=detail[i].seatName;
				name[i]=detail[i].name;
				gender[i]=detail[i].gender;
				
			}
		var time1=detail1.boardingTime;
		var cc=time1.split(':');
		
		if(cc[0]>12)
			{
			var uu=cc[0]-12;
			time=uu+':'+cc[1]+":"+cc[2]+" pm";
			}
		else
			{
			time=time1+" am";
			}
		point=detail1.boardingPlace;
		
		var sp=" ";
		landmark1=detail1.landMark+sp;
		address=detail1.address;
		contact=detail1.contactNumber;
		var point1=point;
		var j1=journey.split(":");
		var j2=j1[0].substring(0,12);
		document.getElementById("from").innerHTML=source;
		document.getElementById("to").innerHTML=destination;
		document.getElementById("dateofjourney").innerHTML=j2;
		document.getElementById("passcount").innerHTML=detail.length;
		document.getElementById("time").innerHTML=time;
		document.getElementById("fare").innerHTML=fare;
		document.getElementById("board").innerHTML=point;
		document.getElementById("landmark").innerHTML=landmark1;
		document.getElementById("address").innerHTML=address;
		document.getElementById("contact").innerHTML=contact;
		document.getElementById("board1").innerHTML=point1;
		addElement1(bookId,seatName,name,gender);
		}
	function addElement1(bookId,seatName,name,gender)
	{
		 var ni = document.getElementById("pass");
		 for(var j=1;j<=bookId.length;j++){
		  
		  var newdiv = document.createElement('div');
		  newdiv.setAttribute('id',j+"/");
		  newdiv.innerHTML = '<table border="0" width="600" align="center">'+'<tr><td width="125px">'+j+'</td><td width="125px" ><label>&nbsp&nbspLMS'+bookId[j-1]+'</label></td><td width="105px"style="padding-left:30px;">'+seatName[j-1]+'</td><td width="120px" style="padding-right:5px;">'+name[j-1]+'</td><td width="125px">'+gender[j-1]+'</td></tr></table>';
		  ni.appendChild(newdiv);
		 }	 
	}
	
	function printme()
	{
		$("#page1").hide();
		$(".body2").hide();
		$("#left").hide();
		window.print();
		window.history(-1);
		
	}
	
	function show()
	{
		$("#page1").show();
		$("#left").show();
		$(".body2").show();
		}
	var sss;
	function admin_print(p_data)
	{
	sss=p_data;
			  if(xmlhttp) {
				  
				   url="staticdata/html/user/Ticket.html";
				  
			     xmlhttp.open("GET",url,true);
			     xmlhttp.onreadystatechange=handle110;
			     xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				    xmlhttp.send();
				    
				   
				  }
			  
		}
	function handle110() 
	{
		if (xmlhttp.readyState == 4) {
		     if(xmlhttp.status == 200) {
		    	 
		    		 document.getElementById("mm").innerHTML=xmlhttp.responseText;
		    		 splite(sss);
		     
		     }
		}
		
	}   
	function back()
	{
		var r=confirm("Do you want close this window now?");
		if (r==true)
		  {
			location.replace("../../../login.do");
		  }
		
	}
	function reload()
	{
		window.location.reload();
	}