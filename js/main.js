$(document).ready(function () {
	
	//Carga el primer html
	var objt = '<object class="container" type="text/html" data="contents/1-Introduccion.html"></object>';
	
	$("main").html(objt);

	
	
$(".menu").click(function(){
  $(".menuBar").animate({left: '50%'});
});

$(".closeMenuBar").click(function(){
	$(".menuBar").animate({left: '100%'});
})

});


$(document).ready(function(){
    $(".menuBar a").each(function(){
        var href = $(this).attr("href");
        $(this).attr({ href: "#"});
        $(this).click(function(){
			

			
			
		
		var content = '<object class="container" type="text/html" data="' + href + '"' + '</object>';
		
		
		$("main").html(content);
		
			
			
		
      });
   });
});




//Cambia el estado activo en el menú

    $(".menuBar a").on("click", function(){
    $(".menuBar a.activo").removeClass("activo");
    $(this).addClass("activo");
});



//Animacion del menu para dispositivos moviles

    $(document).ready(function(){
        $(".menu").on( "click", function() {
            $(".menuBar").animate({
                left:"50%"
                });
        	 });
        $(".menuBar a").on( "click", function() {
            $(".menuBar").animate({
                left:"100%"
                });
            });
		$(".closeMenuBar").on("click", function(){
			$(".menuBar").animate({
				left:"100%"
			});
		});
     });

		

$(document).ready(function(){
     var $span = $('span.group');
     var $div = $('div.group');
     $div.each(function() { $('div',this).first().hide(); });
     $('input[type=radio]').on('change',function() {
         var group = $span.index( $(this).closest( 'span.group' ) );
         $div.eq( group ).children().hide('normal');
         $div.eq( group ).children().eq( $('span.group:eq(' + group + ') > input[type=radio]').index( this ) ).show('normal');
         });
     });

	 //Detecta el año
var anio = (new Date).getFullYear();

	$(document).ready(function() {
	  	$("#fecha").text( anio );
	});



$(function() {

    var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
    $fluidEl = $("figure");

	$allVideos.each(function() {

	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');

	});

	$(window).resize(function() {

	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {

	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));

	  });

	}).resize();

});




var altura = $('.menu').offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    });