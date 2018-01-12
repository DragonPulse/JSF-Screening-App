<script>

	$(function() {
		$( "#adminleftmenu" ).accordion();
		$( "#adminleftmenu" ).accordion({ active: ${model.headerBean.activeIndex} });
		
	});
	</script>
<div id="adminleftmenu">
	<h3><a href="#">Maintain Business Area</a></h3>
		<div >
			<a href="<%=request.getContextPath()%>/businessarea.html" class="${model.headerBean.subLinks[0]}">Config Business Area</a>
		</div>
		
	<h3><a href="#">Maintain Sub Business Area</a></h3>
		<div>
			<a href="<%=request.getContextPath()%>/subbusinessarea.html" class="${model.headerBean.subLinks[1]}">Config sub Business Area</a>
		</div>
		
	<h3><a href="#">Maintain Category</a></h3>
		<div class="ui-accordion-group ui-accordion-selected">
			<a href="#" class="${model.headerBean.subLinks[4]}">View Category's</a>
			<a href="#" class="${model.headerBean.subLinks[5]}">Add Category</a>
		</div>
		
	<h3><a href="#" >Maintain Sub Category</a></h3>
		<div class="ui-accordion-group ui-accordion-selected">
			<a href="#" class="${model.headerBean.subLinks[6]}">View Sub Category's</a>
			<a href="#" class="${model.headerBean.subLinks[7]}">Add sub Category</a>
		</div>
	<h3><a href="#">Maintain Sub Category</a></h3>
		<div>
			<a href="#" class="${model.headerBean.subLinks[8]}">View Sub Category's</a>
			<a href="#" class="${model.headerBean.subLinks[9]}">Add Sub Category</a>
		</div>
	<h3><a href="#" >Maintain Template</a></h3>
		<div>
			<a href="#" class="${model.headerBean.subLinks[10]}">Edit Template</a>
			<a href="#" class="${model.headerBean.subLinks[11]}">Template Properties</a>
			<a href="#" class="${model.headerBean.subLinks[12]}">View Template Settings</a>
		</div>
	
</div>