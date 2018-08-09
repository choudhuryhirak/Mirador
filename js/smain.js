//owl carousel

//end caro





$(document).ready(function(){

    var tl = new TimelineMax({repeat:-1});

    $(".slider-anim").each(function(index, element){
       
        
        tl.to(element, 3, {Autoalpha:"-90%", opacity:1})
    .to(element, 2, {Autoalpha:"15%", opacity:0, ease:Power2.easeIn}, "+=1")
        
      
    })
    


    var tlanim;
    $('.owl-container').hover(
    
    function()
        {
            tlanim = new TimelineMax();
            tlanim.to($(this).find('.transitionbox'), 0.3, {scaleX:1.50, scaleY:1.50, autoAlpha:0.9, ease:Power1.easeIn}, 0.3)
            .to($(this).find('.carotitle'), 1, {autoAlpha:1, x:"0", y:"60%", ease:Power1.easeInOut},0.4);
            
            
        },
        function()
        {
            tlanim.reverse();
        }
    
    
    
    )
    
    
    var tileanimtl;
    $('.tile, .tile2').hover(
    
        function()
        {
            tileanimtl = new TimelineMax();
            tileanimtl.to( $(this).find('.tile-img > img'), 2, {scaleX:1.08, scaleY:1.08, ease:Power1.easeInOut}, 0.2);
            
            
            
        },
        function()
        {
            tileanimtl.reverse();
        }
    
    
    )
    
    
    //about-page
    
    
    
    
    
    var jrnycontroller2 = new ScrollMagic.Controller();
    
    
    var jrnytimeline2 = new TimelineMax();
    
    jrnytimeline2
    
    
    .from(".journeytitle > p", 1, {css:{color: "#fff"}, ease:Power1.easeOut},0.2)
    .reverse();
    ;
    
    var jrnyscene2 = new ScrollMagic.Scene({
        
        triggerElement: '#journey'
        
        
        
        
    })
    .setTween(jrnytimeline2)
    .addTo(jrnycontroller2);
    
    
    
    
    
    
    
    
    
    
    var jrnycontroller = new ScrollMagic.Controller();
    
    
    var jrnytimeline = new TimelineMax();
    
    jrnytimeline
    
    
    .from(".journeytitle > p", 1, {css:{color: "#000"}, ease:Power1.easeOut},0.2)
    .reverse();
    ;
    
    var jrnyscene = new ScrollMagic.Scene({
        
        triggerElement: '#doorimg'
        
        
        
        
    })
    .setTween(jrnytimeline)
    .addTo(jrnycontroller);
    
    
    
    //menu--nav--overlay
    
    
    
    
    var menuscroller = new ScrollMagic.Controller();
    var menutl = new TimelineMax();
    
    
    
    menutl
    
    .to("i.fas.fa-bars", 0.2,{css:{color: "#000"}, ease:Power1.easeOut}, 0.1)
    .to("i.fas.fa-bars", 0.2,{css:{color: "#fff"}, ease:Power1.easeOut}, 0.1)
    ;
    
    
    
    
    
    var menutlScene = new ScrollMagic.Scene({
        
        triggerElement: '#cover-overlay'
    
    })
    .setTween(menutl)
    .addTo(menuscroller);
    
    
    
    //2mno
    
    
    var menuscroller2 = new ScrollMagic.Controller();
    var menutl2 = new TimelineMax();
    
    menutl2
    
    .to("i.fas.fa-bars", 0.2,{css:{color: "#fff"}, ease:Power1.easeOut}, 0.1)   
    .to("i.fas.fa-bars", 0.2,{css:{color: "#000"}, ease:Power1.easeOut}, 0.2)
    ;
    
    
    var menutlScene2 = new ScrollMagic.Scene({
        
        triggerElement: '#blockcc'
        
        
        
        
    })
    .setTween(menutl2)
    .addTo(menuscroller2);
    
    
    
    

});