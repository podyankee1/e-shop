jQuery(document).ready(function($) {
			$('.my-slider').unslider({
				autoplay: true,
				arrows: false,
				animation: 'vertical'
			});

			setEqualHeight($(".description"));

			function setEqualHeight(columns) {
					var tallestcolumn = 0;
					columns.each( function() {
						currentHeight = $(this).height();
						if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } );
						columns.height(tallestcolumn);
					}

		});
