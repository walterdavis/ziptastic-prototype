document.observe('dom:loaded',function(){
	$$('input.zip').invoke('observe', 'change', function(evt) {
		new Ajax.Request('http://zip.elevenbasetwo.com',{
			method: 'get',
			parameters: {zip:$F(this)}, 
			onSuccess:function(transport){
				var data = transport.responseText.evalJSON();
				$$('.city').invoke('setValue', data.city);
				$$('.state').invoke('setValue', data.state);
				$$('.country').invoke('setValue', data.country);
			}
		});
	});
});
