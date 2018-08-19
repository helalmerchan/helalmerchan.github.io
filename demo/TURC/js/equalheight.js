(function($){
	'use strict';

	$.fn.equalizeHeight = function() {
		var tallestHeight = 0;
			heighStories = this;

		heighStories.each(function(i, el) {
			var elHeight = $(el).outerHeight();

			if (elHeight > tallestHeight) {
				tallestHeight = elHeight;
			}
		});

		heighStories.css('min-height', tallestHeight);

		return heighStories;
	}
}(jQuery));