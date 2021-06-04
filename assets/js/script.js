(function($){

    console.log("Hello World");

    var lesa = $('a');
    var langage = $('.sectionlangage>div:nth-child(2)>div:nth-child(1)>div');
    

    lesa.mouseenter(function(){

        $(this).css("color",'#FBFB06')
    })

    lesa.mouseleave(function(){

        $(this).css("color",'white')
    })

    $('a').on('click',function(){

        $('*').css('overflow','visible');
        $('.sectionlangage>div:nth-child(2)>div:nth-child(2)').css('overflow','hidden');
    })

    $('#projets').on('mouseenter',function(){

        console.log('yoyo');
        $('.liblock').slideToggle();
    })

    


    

    var letsgo = $('header > div:nth-child(2) > p:nth-child(3)');

    letsgo.on('click',function(){

        $('*').css('overflow','visible');
        $('.sectionlangage>div:nth-child(2)>div:nth-child(2)').css('overflow','hidden');
        $('.sectionlangage').siblings().css('display','flex');
        $('.sectionlangage').css('display','flex');
    })

    langage.mouseenter(function(){
        
        var index = $(this).index()+1;

        // $(this).animate({left : '30px',top : '30px'},"fast");
        $(this).css("height", "150px");
        $(this).css("width", "275px");
        $(this).css("box-shadow","30px 30px yellow");
        $('.sectionlangage>div:nth-child(2)>div:nth-child(2)>div:nth-child('+index+')').slideDown();
        $('.sectionlangage>div:nth-child(2)>div:nth-child(2)>div:nth-child('+index+')').siblings().slideUp();
        $('.sectionlangage>div:nth-child(2)>div:nth-child(2)>div:nth-child('+index+')').css("height","100%");
        $('.sectionlangage>div:nth-child(2)>div:nth-child(2)>div:nth-child('+index+')').css("width","100%");
        

        console.log(index);  

        // var bckUrl = "../images/Backgrounds/depositphotos_271697982-stock-photo-abstract-black-and-dark-background.jpg";
        // $(this).css("background-image","url("+bckUrl+")");
    })

    langage.mouseleave(function(){

        // $(this).animate({top : '0px',left : '0px'},"fast");
        $(this).css("background-color","#1fe0");
        $(this).css("box-shadow","none");
        $(this).css('position','initiale')
        $(this).css("height", "20%");
        $(this).css("width", "100%");
        // $(this).animate({left : '0px'},"fast");
        // $(this).animate({top : '0px'},"fast");
        $('.sectionlangage>div:nth-child(2)>div:nth-child(2)').css('overflow','visible');
        // $('.sectionlangage>div:nth-child(2)>div:nth-child(2)>div:nth-child('+index+')').css("height","100%");
        // $('.sectionlangage>div:nth-child(2)>div:nth-child(2)>div:nth-child('+index+')').css("width","100%");
    })

    // langage.on('click',function(){

    //     $(this).animate({left : '-50px'},"fast");
    //     $(this).animate({top : '-50px'},"fast");
        

    // })

    langage.on("click",function(){

        var index = $(this).index()+1;

        // $(this).css({top : "0px", left: "200px"});
        // $(this).animate({left : '-50px'},"fast");
        // $(this).animate({top : '-50px'},"fast");
        $(this).css("box-shadow","25px 25px yellow");
        $('.sectionlangage>div:nth-child(2)>div:nth-child(2)').css('overflow','visible');
        $('.sectionlangage>div:nth-child(2)>div:nth-child(2)>div:nth-child('+index+')').css("height","+=50px");
        $('.sectionlangage>div:nth-child(2)>div:nth-child(2)>div:nth-child('+index+')').css("width","+=50px");
    
    })


    var btnlangage = $('.sectionlangage>div:nth-child(1)>p');
    

    btnlangage.on('click',function(){

        $(".sectionlangage>div:not(.langage)").slideToggle();
        $(".sectionlangage>div:not(.langage)").css("display",'flex');
        $('header>nav').slideToggle();
        $('.sectionarclabs').toggleClass('.sectionarclabs2');
        
       
    })


    var btnarclabs = $('.sectionarclabs>div:nth-child(1)>p');
    

    btnarclabs.on('click',function(){

        $(".sectionarclabs>div:not(.arclabs)").slideToggle();
        $(".sectionarclabs>div:not(.arclabs)").css("display",'flex');
        $('header>nav').slideToggle();
        $('.sectionarclabs').toggleClass('.sectionarclabs2');

    })




    var btntinker = $('.sectiontinker>div:nth-child(1)>p');
    

    btntinker.on('click',function(){
        
        $(".sectiontinker>div:not(.tinker)").slideToggle();
        $(".sectiontinker>div:not(.tinker)").css("display",'flex');
        $('header>nav').slideToggle();
        $('.sectiontinker').toggleClass('.sectionarclabs2');
    })


    var btntheresto = $('.sectiontheresto>div:nth-child(1)>p');
    

    btntheresto.on('click',function(){
        
        $(".sectiontheresto>div:not(.theresto)").slideToggle();
        $(".sectiontheresto>div:not(.theresto)").css("display",'flex');
        $('header>nav').slideToggle();
        // $(".sectiontheresto").toggleClass('.sectionarclabs2');
    })


    var btngalaxywar = $('.galaxywarsection>div:nth-child(1)>p');
    

    btngalaxywar.on('click',function(){
        
        $(".galaxywarsection>div:not(.galaxywarp)").slideToggle();
        $(".galaxywarsection>div:not(.galaxywarp)").css("display",'flex');
        $('header>nav').slideToggle();
        // $(".sectiontheresto").toggleClass('.sectionarclabs2');
    })






    $('.btnenvoi').on('click',function(){

        console.log('yoyo')
        $(this).animate({left : '2000px',top : '247px'},"slow");
        
    })

    $('.btnenvoi').on('mouseleave',function(){

        console.log('yoyo')
        $(this).animate({left : '0px',top : '247px'},"slow");
        
    })


    $('.socialbox>div').on('mouseenter',function(){

        console.log('yoyo');
        $(this).css('width','70px');
        $(this).css('height','70px');
        $(this).css('transform','rotate(180deg)')
        
    })

    $('.socialbox>div').on('mouseleave',function(){

        console.log('yoyo');
        $(this).css('width','50px');
        $(this).css('height','50px');
        $(this).css('transform','rotate(360deg)')
        
    })

    $('header>nav .burger').on('mouseenter',function(){

        $('header>nav>ul').css('display','flex');
        $('header>nav>ul>li').css('display','block');
        $('header>nav>.burger').css('color','#FBFB06');
        $('header>nav').css('oveflow','visible');
        // $('header>nav>ul>li').css('oveflow','visible');
        
    })

    $('header>nav').on('mouseenter', function(){
        $('header>nav>ul').css('display','flex');
    })

    $('header>nav>ul').on('mouseleave',function(){

        $('header>nav>ul').css('display','none');
        $('header>nav>.burger').css('color','white');
        $('header>nav').css('oveflow','hidden');
        $('.liblock').slideUp();
        
    })


    function moveToSelected(element) {

        if (element == "next") {
        var selected = $(".selected").next();
        } else if (element == "prev") {
        var selected = $(".selected").prev();
        } else {
        var selected = element;
        }
    
        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();
    
        $(selected).removeClass().addClass("selected");
    
        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");
    
        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");
    
        $(nextSecond).nextAll().removeClass().addClass('hideRight');
        $(prevSecond).prevAll().removeClass().addClass('hideLeft');
    
    }
    
    // Eventos teclado
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
            moveToSelected('prev');
            break;
    
            case 39: // right
            moveToSelected('next');
            break;
    
            default: return;
        }
        e.preventDefault();
    });
    
    $('#carousel div').click(function() {
        moveToSelected($(this));
    });
    
    $('#prev').click(function() {
        moveToSelected('prev');
    });
    
    $('#next').click(function() {
        moveToSelected('next');
    });

    $('.selected').click(function(){
        $('carouselsection').css('background-color','black');
    });
    


    
    $(document).on('keyup', function (e) {

        
        if (e.keyCode == 81) { 
            $('#divvaissseau').animate({left :'-=55px'},"fast");
            $('#divvaissseau').css('transform','rotate(270deg)');
        }
        

        if (e.keyCode == 68) {
            $('#divvaissseau').animate({left :'+=55px'},"fast");
            $('#divvaissseau').css('transform','rotate(90deg)');
        }
        if (e.keyCode == 90) {
            $('#divvaissseau').animate({top : '-=55px'},"fast");
            $('#divvaissseau').css('transform','rotate(360deg)');
        }
        if (e.keyCode == 83) {
            $('#divvaissseau').animate({top :'+=55px'},"fast");
            $('#divvaissseau').css('transform','rotate(180deg)');
        }
        if (e.keyCode == 20) {
            $('.weapon').fadeIn();
            $('.weapon').fadeOut();
        }
        if (e.keyCode == 16) {
            $('.weapon2').fadeIn();
            $('.weapon2').fadeOut();
        }



       
    })

    








})(jQuery);