$(document).ready(function() {
    $(".avatar-ring").click(function () {
        $( ".avatar-ring" ).addClass( "avatar-ring-active" );
        $( ".avatar" ).addClass( "avatar-active" );
        $( ".nav-bar" ).addClass( "nav-bar-active" );
        $( ".nav-bar-blur" ).addClass( "nav-bar-blur-active" );
        $( ".background-img" ).addClass( "opacity-active-background" );
        
    });

        $(".nav-bar a").click(function () {
        	
        	// $( ".nav-bar li" ).removeClass( "nav-bar-a" );
        	// $(this);
        	// $(this).parent().addClass( "nav-bar-a" );
        // $( ".nav-bar" ).addClass( "nav-bar-active" );
        // $( ".nav-bar-blur" ).addClass( "nav-bar-blur-active" );
    });
    
});

