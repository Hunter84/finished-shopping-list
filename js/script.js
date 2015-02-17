$(document).ready(function() {

	$('.search-button').click(function() {

		var inputSearch = $('.search-item').val();

		$('.list-item').append('<li class="item">' + '<input type="checkbox" class="done"></input>' + '<h1>' + inputSearch + '</h1>' +  '</li>');
		$('.search-item').val("");
	
	});

	$("ul").on('change', 'input[type="checkbox"]', function() {

	    if($(this).is(":checked")) {
	        //Do stuff
	        $(':checked').parent().css('background-color','olivedrab')
	    }
	    else {
	    	$('input:checkbox:not(:checked)').parent().css('background-color','coral')
	    }
	});

	$('ul').on('click', 'li h1', function() {
		$(this).parent().remove();	// study this more ...
	});
});