$(document).ready(function() {
    $(".avatar-ring").click(function () {
        // $( ".avatar-ring" ).addClass( "avatar-ring-active" );
        $(".background").load('../views/home.html', function() {
             // $( ".main-wrapper" ).addClass( "first-transition-to-left2" );
            // alert( "$.get succeeded" );
          });
       
        // debugger;
        $( "body" ).addClass( "click-home-active" );
        // $( ".background" ).addClass( "background-active" );
        // $( ".line-background" ).addClass( "background-active" );
        // $( ".avatar" ).addClass( "avatar-active" );
        // $( ".nav-bar" ).addClass( "nav-bar-active" );
        // $( ".line-nav-bar" ).addClass( "line-nav-bar-active" );
        // $( ".background-img" ).addClass( "opacity-active-background" );
        // $( ".background-img-dark" ).addClass( "opacity-active-background" );
        // $(".background").load('/views/home.html');
        
        
    });

        $(".nav-bar a").click(function () {
            var obj = $(this);
            $( ".main-wrapper" ).addClass( "second-transition-to-left" );
            setTimeout(function(){
                $(".background").load('../views/'+obj.attr('href').replace('#','')+'.html', function() {
                $( ".main-wrapper" ).addClass( "first-transition-to-left" );
            // alert( "$.get succeeded" );
            });
            }, 500);
        	
        	// $( ".nav-bar li" ).removeClass( "nav-bar-a" );
        	// $(this);
        	// $(this).parent().addClass( "nav-bar-a" );
        // $( ".nav-bar" ).addClass( "nav-bar-active" );
        // $( ".nav-bar-blur" ).addClass( "nav-bar-blur-active" );
    });
    
});

