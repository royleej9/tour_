require([
    'config'
], function () {
	require([
	    'jquery',
	    'select2',
	    'views/print/PrintTourInfoView'
	    ], function (
	        $,
	        select2,
	        PrintTourInfoView
	        ) {
	        	
	        	var appView = new PrintTourInfoView();
				$('#appBox').append(appView.el);
		
				$('#day').change(function(e) {
					appView.changeDay(this.value);
				});
		
				$('#loadBtn').click(function(evt) {
					var data = $('#dataArea').val();
					data = JSON.parse(data);
					appView.setData(data);
				});
				
				$('#saveBtn').click(function(evt) {
					var a = {aa: 1};
					var data = JSON.stringify( appView.getData() );
					$('#dataArea').val(data);
				});
		
				$('#destroyBtn').click(function(evt) {
					appView.destroy();
				});		
	} );
} );