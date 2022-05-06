var lis = $(".options-box ul li")
lis.eq(0).css("backgroundColor","tomato")
lis.eq(1).css("backgroundColor","teal")
lis.eq(2).css("backgroundColor","#09c")
lis.eq(3).css("backgroundColor","yellow")
lis.eq(4).css("backgroundColor","orange")

lis.click(function(){
    
    var c = $(this).css("backgroundColor");
    $("body").css("color",c)
})


$(".options-box i").click(function(){
    
    $(".colors-box").toggle(1000);
})

$('.top').click(function(e){
            e.preventDefault();
            $('html , body').animate({
                scrollTop:0
            },1000);
        })
    
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 400) {
	    $(".navbar").css("background" , "#fff");
           $(".nav-link").css("color" , "black");
           $('.navbar-brand img').attr("src","images/logo-red.png");
       
         
          
	  }

	  else{
		  $(".navbar").css("background" , "transparent");
          $(".nav-link").css("color" , "#fff");
           $('.navbar-brand img').attr("src","images/logo-white.png");
	  }
  })
})
 $(window).scroll(function(){
        //Sync Navbar Links With sections
        $('.blockkk').each(function(){
            if($(window).scrollTop() > $(this).offset().top)
                {
                    var blockID=$(this).attr('id');
                    $('.navbar-nav  a').removeClass('active');
                    $('.navbar-nav li a[data-scroll="'  + blockID + '"]').addClass('active');
                  
                }
        })
 })