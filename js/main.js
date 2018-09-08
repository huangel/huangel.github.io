$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});
$('.modal').on('shown.bs.modal', function () {
  $('.modal-content').trigger('focus')
})
/**
*Exampe from https://kottenator.github.io/jquery-circle-progress/
*/

var first_landing = true;

$(window).on('scroll', function() {

	var y_scroll_pos = window.pageYOffset;
	var scroll_pos_test = 1200;

	if (y_scroll_pos > scroll_pos_test & first_landing) {
		first_landing = false;

		var startColor = '#FF6699';
		var endColor = '#34DDDD';

		$('.status').each(function(i) {
		    var circle = new ProgressBar.Circle(this, {
			    color: startColor,
			    easing: 'linear',
			    strokeWidth: 8,
			    duration: 1500,
			    text: {
			        value: '100'
			    }
			});
		    
		    var value = ($(this).attr('value') / 100);


			circle.animate(value, {
			    from: {
			        color: startColor
			    },
			    to: {
			        color: endColor
			    },
			    step: function(state, circle, bar) {
			        circle.path.setAttribute('stroke', state.color);
			        console.log(circle);
			        circle.setText((circle.value() * 100).toFixed(0)+'%');
			    }
			});
		});
	}
});
/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();


