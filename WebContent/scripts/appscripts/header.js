


$(function() {

	
	//to load bundles
	function loadBundles(lang) {
		jQuery.i18n.properties({
			name : 'messages',
			path : 'scripts/bundles/',
			mode : 'both',
			language : lang,
			callback : function() {

			}
		});
	}

	loadBundles('en');
	
	
});

