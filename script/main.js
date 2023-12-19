$(function(){
    var winWidth = window.innerWidth || document.documentElement.clientWidth;//미디어쿼리 사이즈와 $(window).width()가 인식하는 px단위 사이즈가 달라서 선언한 변수 : clinentWidth 와 innerWidth의 사이즈는 동일하나 innerWidth는 익스플로러 9 미만 버전은 인식하지 못하므로 동시선언
    $(window).on("resize", function(){
        winWidth = window.innerWidth || document.documentElement.clientWidth;
        if(winWidth <= 1024){
            $(".section").removeClass("effect");
        }
    });
    // fullpage
    $("#fullpage").fullpage({
        licenseKey:'25LQ8-0QH07-JTX0H-Z4I9J-XHDGO',
        anchors: ['main1','main2','main3','main4','main5','footer'],
        navigationTooltips: ['main1','main2','main3','main4','main5','footer'],
        animateAnchor :true,
		autoScrolling:true,
        easingcss3: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
		keyboardScrolling :  true,
        verticalCentered: true,
        normalScrollElements: ".wholeMenu, #divSearch",
        responsiveWidth: 1025,
        scrollingSpeed: 800,
 		scrollOverflow: false,
        credits:{enabled:false},
 		afterRender: function(){
            $(".floatingNav").addClass("light");
            $(".topInfo").addClass("load");
            if(winWidth > 1024){
                $(".gotoBtnW .gotoTop").addClass("off");
                $(".section").addClass("effect");
            }
        },
        onLeave: function(origin, section){
            $("."+section.anchor).removeClass("effect");
            if(section.anchor  == "main1" || section.anchor =="main4"){
                $(".floatingNav").addClass("light");
            }else{
                $(".floatingNav").removeClass("light");
            }

            if(section.anchor=='footer'){
                $(".gotoBtnW").addClass("fix");
                $(".gotoBtnW .gotoBot").addClass("off");
                $(".floatingNav ul li").removeClass("active")
            }else{
                $(".floatingNav ul li").eq(section.index).addClass("active").siblings().removeClass("active");
                $(".gotoBtnW").removeClass("fix");
                $(".gotoBtnW .gotoBot").removeClass("off");
            }

            if(section.anchor == "main1"){
                $(".gotoBtnW .gotoTop").addClass("off");
                $(".gotoBtnW").addClass("fix2");
            }else{
                $(".gotoBtnW .gotoTop").removeClass("off");
                $(".gotoBtnW").removeClass("fix2");
                
            }
    
        },
        afterLoad: function( section, origin, destination, direction, trigger){
           
        },
        afterSlideLoad : function(section, origin, destination, direction, trigger){
         
        }
    });
    $(window).on("scroll", function(){
        winWidth = window.innerWidth || document.documentElement.clientWidth;
        let scrollTop = $(this).scrollTop();

        if(winWidth <= 1024){
            if(scrollTop >= $(".header1").outerHeight(true) + $(".topInfo").outerHeight(true)){
                $("#divWrapper").addClass("fixed");
            }else{
                $("#divWrapper").removeClass("fixed");
            }
        }
    })

    // topInfo
    $(".topInfo .topInfoClose").on("click", function(){
        $(".topInfo").slideUp();
        return false
    });

    // 요약정보
    $(".header1 .myInfoBtn").on("click", function(){
        if($(this).next().hasClass("on")){
            $(this).next().removeClass("on");
        }else{
            $(this).next().addClass("on");
        }
        return false;
    });
    $(".header1 .infoClose").on("click", function(){
        $(this).parents(".myInfo").removeClass("on");
        return false;
    });


    // 문의하기
    $("#divGlobalMenu .inquiry>a").on("click",function(){   
        if($(this).parent().hasClass("on")){
            $(this).parent().removeClass("on")
            $(this).next().fadeOut();
        }else{
            $(this).parent().addClass("on")
            $(this).next().fadeIn();
        }
        return false
    });


    // divTopMenu
    $("#divTopMenu>ul>li>a").on("click",function(){
        if($(this).parent().hasClass("on")){
            $(this).parent().removeClass("on");
            $(this).parent().find(".depth2W").stop().slideUp(500);
        }else{
            $(this).parent().addClass("on").siblings().removeClass("on");
            $(this).parent().siblings().find(".depth2W").hide();
            $(this).parent().find(".depth2W").stop().slideDown(500);
        }
        return false
    });
    $("#divTopMenu>ul>li>a").on("focus",function(){
        $(this).parent().find(".depth2W").slideDown(500);
        $(this).parent().siblings().find(".depth2W").hide();

        return false
    });
    // $("#divTopMenu").on("mouseleave",function(){
    //     $("#divTopMenu>ul>li .depth2W").slideUp(500);
    //     return false
    // });
    
    // menu 제외 클릭시 depth2W 닫힘
    $('html').click(function(e) {   
        if($(e.target).parents('.header2').length < 1){   
            $("#divTopMenu .depth2W").slideUp();
            $("#divTopMenu .depth1>li").removeClass("on")
        }
    });
    $(".wholeMenuBtn").on("focus",function(){
        $("#divTopMenu>ul>li .depth2W").hide();
    });
    // wholeMenu
    $(window).on("resize", function(){
        winWidth = window.innerWidth || document.documentElement.clientWidth;
        if(winWidth > 1024){
            if(!$("#divHeader").hasClass("wmOpen")){
                $("#divGlobalMenu").removeAttr("style"); 
            }
            $(".wholeMenu .wm .depth3").removeAttr("style"); 
        }
    })
    $(".wholeMenuBtn").on("click", function(){
        winWidth = window.innerWidth || document.documentElement.clientWidth;
        if(winWidth <= 1024){
            $("#divGlobalMenu").fadeIn();
            $("html, body").css("overflow","hidden");
        }
        $(".wholeMenu").fadeIn();
        $("#divHeader").addClass("wmOpen");
        return false;
    });
    $(".wholeMenuClose").on("click", function(){
        winWidth = window.innerWidth || document.documentElement.clientWidth;
        if(winWidth <= 1024){
            $("#divGlobalMenu").fadeOut();
            $("html, body").css("overflow","auto");
        }
        $(".wholeMenu").fadeOut();
        $("#divHeader").removeClass("wmOpen");
        return false;
    });
    $(".wholeMenu .wm>ul>li>a").on("click", function(){
        winWidth = window.innerWidth || document.documentElement.clientWidth;
        if(winWidth <= 1024){
            $(this).parent().addClass("on").siblings().removeClass("on");
            return false;   
        }
    });
    $(".wholeMenu .wm .depth2>li>a").on("click", function(){
        winWidth = window.innerWidth || document.documentElement.clientWidth;
        if(winWidth <= 1024){
            if($(this).parent().hasClass("on")){
                $(this).parent().removeClass("on");
                $(this).parent().children(".depth3").slideUp();
            }else{
                $(".wholeMenu .wm .depth3").slideUp();
                $(".wholeMenu .wm .depth2>li").removeClass("on");
                $(this).parent().addClass("on");
                $(this).parent().children(".depth3").slideDown();
            }
            return false;
        }
    });

    //Select Box
    $('#divSearch .selectW select').on("focus",function(){
        $('.selectW').click();
    });
    $('#divSearch .selectW').on("click",function(){
        if($(this).hasClass('on')){
			$('#divSearch .selectBox .srchSelectBox').slideUp();
			$(this).removeClass('on');
            return false;
		}else{
			$('#divSearch .selectBox .srchSelectBox').slideDown();
			$(this).addClass('on');
            return false;
		}
    });
    $("#divSearch .inputBox .textInput").on("focus",function(){
        $('#divSearch .selectBox .srchSelectBox').slideUp();
        $('#divSearch .selectW').removeClass('on');
        return false;
    });
	// 영역외 클릭시 닫기
	$('body').click(function(e){
		if(!$('#divSearch .selectW').has(e.target).length){
			$('#divSearch .selectBox .srchSelectBox').stop().slideUp();
			$('#divSearch .selectW').removeClass('on');
		}
	});
    // 검색창 select Box
    $('#divSearch .OptList > ul > li > a').click(function(e){
        var optText = $(this).text();
        $(this).parent().parent().parent().parent().prev().find('select').attr('title',$(this).text());//옵션선택시 텍스트 변경
        $(this).parent().parent().parent().parent().prev().find('label').text($(this).text());//옵션선택시 텍스트 변경
        $(this).parent().parent().parent().parent().siblings().children('select').find('option').removeAttr('selected');
        $(this).parent().parent().parent().parent().siblings().children('select').find('option').filter(function() {return this.text == optText;}).attr('selected', 'selected');

        // inputBox
        $(".inputBox .searchInput").eq($(this).parent().index()).addClass("on").siblings().removeClass("on");
       
        $('.selectBox .srchSelectBox').stop().slideUp();
        $('.selectW').removeClass('on');

        return false;
    });
	

    // visualW
    let visualSwiper = new Swiper(".visualW",{
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        effect:"creative",
        creativeEffect: {
            next:{
                opacity: 0,
                scale: 1.1
            },
            prev:{
                opacity: 0,
                scale: 1.1
            },
        },
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
    $(".visualW .autoPlayBtn").on("click", function(){
        if($(this).hasClass("stop")){
            visualSwiper.autoplay.start();
            $(this).removeClass("stop")
            $(this).attr("title","멈춤");
        }else{
            visualSwiper.autoplay.stop();
            $(this).addClass("stop");
            $(this).attr("title","재생");
        }
        
        return false;
    });

    // quickMenu
    let quickMenuSwiper = new Swiper(".quickMenu",{
        slidesPerView: "auto",
        freeMode: true,
        observer: true,
        observeParents: true,
    });
    var $quickMenuBtn;
    $(".quickMenuW .settingBtn").on("click", function(){
        $(".quickMenuSettingW").attr("tabindex", 0).fadeIn().focus();
        $(".quickMenuSettingW").addClass("open");
        $quickMenuBtn = $(this);
        return false;
    });
    $(".quickMenuSettingW .closeBtn").on("click", function(){
        $(".quickMenuSettingW").fadeOut();
        $(".quickMenuSettingW").removeClass("open");
        $quickMenuBtn.find("a").focus();
        return false;
    });
    // 갯수제한
    var limit = 6;
    $('.quickMenuSettingW input[name=quickMenu]').on('change', function(evt) {
        console.log($(".quickMenuSettingW input[name=quickMenu]"))
        if($('.quickMenuSettingW input[name=quickMenu]:checked').length > limit) {
            this.checked = false;
        }
    });
    // libSchedule
    $(".scheduleList").slick({
        slidesToShow: 1,
        slidesPerRow: 2,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 5000,
        speed: 2000,
        responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 1201, //화면 사이즈 960px
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 1,
                    slidesToScroll: 2,
                } 
            },
		]
    });
    $(".scheduleListW .autoPlayBtn").on("click", function(){
        if($(this).hasClass("stop")){
            $(".scheduleList").slick('slickPlay');
            $(this).removeClass("stop")
            $(this).attr("title","멈춤");
        }else{
            $(".scheduleList").slick('slickPause');
            $(this).addClass("stop");
            $(this).attr("title","재생");
        }
        
        return false;
    });
    $(window).on("resize", function(){
        $(".scheduleList").slick("setPosition");
    });

    //좌석현황
    $('.libSelectW select').on("focus",function(){
        $('.libSelectW label').click();
    });
	$('.libSelectW label').click(function(){
		if($(this).parents(".libSelectW").hasClass('on')){
			$('.libSelectW .OptList').slideUp();
			$(this).parents(".libSelectW").removeClass('on');
			return false;
		}else{
			$('.libSelectW .OptList').slideDown();
			$(this).parents(".libSelectW").addClass('on');
			return false;
		}
	});
	// 영역외 클릭시 닫기
	$('body').click(function(e){
		if(!$('.libSelectW').has(e.target).length){
			$('.libSelectW .OptList').stop().slideUp();
			$('.libSelectW').removeClass('on');
		}
	});
    // 검색창 select Box
    $('.libSelectW .OptList > li > a').click(function(e){
        var optText = $(this).text();
        $(this).parents(".libSelectW").find('select').attr('title',$(this).text());//옵션선택시 텍스트 변경
        $(this).parents(".libSelectW").find('label').text($(this).text());//옵션선택시 텍스트 변경
        $(this).parents(".libSelectW").children('select').find('option').removeAttr('selected');
        $(this).parents(".libSelectW").children('select').find('option').filter(function() {return this.text == optText;}).attr('selected', 'selected');
       
        $('.libSelectW .OptList').stop().hide();
        $('.libSelectW').removeClass('on');
        $(this).parent().addClass("selected").siblings().removeClass("selected");
        $(".seatsInfoW .seatsInfo").eq($(this).parent().index()).addClass("on").siblings().removeClass("on");

        return false;
    });



    // 도서관 알림-swiper
    let eventZoneSwiper = new Swiper(".eventZone .eventW",{
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        // effect:"fade",
        speed: 1500,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.eventZone .nextBtn',
            prevEl: '.eventZone .prevBtn',
          },
    });
    $(".eventZone .autoPlayBtn").on("click", function(){
        if($(this).hasClass("stop")){
            eventZoneSwiper.autoplay.start();
            $(this).removeClass("stop")
            $(this).attr("title","멈춤");
        }else{
            eventZoneSwiper.autoplay.stop();
            $(this).addClass("stop");
            $(this).attr("title","재생");
        }
        
        return false;
    });



    // 이용시간-slick
    $(".useTimeList").slick({
        slidesToShow: 1,
        slidesPerRow: 2,
        infinite: true,
        arrows:true,
        appendArrows : $(".useTime .controller"),
        prevArrow: $(".useTime .prevBtn"),
        nextArrow: $(".useTime .nextBtn"),
        autoplay:true,
        autoplaySpeed: 2500,
        speed: 1000,
    });
    $(".useTime .autoPlayBtn").on("click", function(){
        if($(this).hasClass("stop")){
            $(".useTimeList").slick('slickPlay');
            $(this).removeClass("stop")
            $(this).attr("title","멈춤");
        }else{
            $(".useTimeList").slick('slickPause');
            $(this).addClass("stop");
            $(this).attr("title","재생");
        }
        
        return false;
    });


    
    // 인포그래픽 -slick
    $(".infoGraphicList").slick({
        slidesToShow: 1,
        infinite: true,
        fade: true,
        arrows:true,
        appendArrows : $(".infoGraphic .controller"),
        prevArrow: $(".infoGraphic .prevBtn"),
        nextArrow: $(".infoGraphic .nextBtn"),
        asNavFor: '.infoGraphicName',
        autoplay:true,
        autoplaySpeed: 2500,
        speed: 1000,
    });
    $(".infoGraphicName").slick({
        slidesToShow: 1,
        infinite: true,
        fade: true,
        arrows: false,
        autoplay:false,
        autoplaySpeed: 2500,
        speed: 1000,
        asNavFor: '.infoGraphicList'
    });
    $(".infoGraphic .autoPlayBtn").on("click", function(){
        if($(this).hasClass("stop")){
            $(".infoGraphicName").slick('slickPlay');
            $(".infoGraphicList").slick('slickPlay');
            $(this).removeClass("stop")
            $(this).attr("title","멈춤");
        }else{
            $(".infoGraphicName").slick('slickPause');
            $(".infoGraphicList").slick('slickPause');
            $(this).addClass("stop");
            $(this).attr("title","재생");
        }
        
        return false;
    });


    // 데이터베이스-swiper
    let dataBaseSwiper = undefined;
    if($(".dataBaseList").length > 0){
        dataBaseSwiper = new Swiper(".dataBaseList",{
            slidesPerView: "auto",
            slidesPerGroup:1,
            initialSlide: 0,
            observer: true,
            observeParents: true,
            centerInsufficientSlides:true,
            centeredSlides: true,
            speed: 1000,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: true,
            },
            pagination: {
                el: ".dbpagination",
                type: "fraction",
            },
            navigation: {
                nextEl: '.dbNext',
                prevEl: '.dbPrev',
            },
            breakpoints: {
                768: {
                  slidesPerView: 3,  //브라우저가 768보다 클 때
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 5,  //브라우저가 1024보다 클 때
                  centeredSlides: false,
                },
              },
        });
    }
    $(".dataBaseList .autoPlayBtn").on("click", function(){
        if($(this).hasClass("stop")){
            dataBaseSwiper.autoplay.start();
            $(this).removeClass("stop")
            $(this).attr("title","멈춤");
        }else{
            dataBaseSwiper.autoplay.stop();
            $(this).addClass("stop");
            $(this).attr("title","재생");
        }
        
        return false;
    });

    // 도서목록-swiper
    let bookListSwiper = [];
    let bookList = [".bookListW1 .bookList",".bookListW2 .bookList",".bookListW3 .bookList",".bookListW4 .bookList"]
    let bookListpag = [".bookpag1",".bookpag2",".bookpag3",".bookpag4"];
    let bookListprev = [".bookPrev1",".bookPrev2",".bookPrev3",".bookPrev4"];
    let bookListnext = [".bookNext1",".bookNext2",".bookNext3",".bookNext4"];
    function bookListSwiperFn(i){
        if($(bookList[i]).length > 0){
            bookListSwiper[i] = new Swiper(bookList[i],{
                slidesPerView: "auto",
                initialSlide: 0,
                loop: true,
                loopPreventsSlide: false,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                centerInsufficientSlides:true,
                centeredSlides: true,
                speed: 600,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: true,
                },
                pagination: {
                    el: bookListpag[i],
                    type: "fraction",
                },
                navigation: {
                    nextEl: bookListnext[i],
                    prevEl: bookListprev[i],
                },
                breakpoints: {
                    768: {
                        slidesPerView: 3,  //브라우저가 768보다 클 때
                        centeredSlides: false,
                    },
                    800: {
                    slidesPerView: 4,  //브라우저가 800보다 클 때
                    centeredSlides: false,
                    },
                    1024: {
                    slidesPerView: 5,  //브라우저가 1024보다 클 때
                    centeredSlides: false,
                    loopAdditionalSlides: 1,
                    },
                    1440: {
                        slidesPerView: 6,  //브라우저가 1440보다 클 때
                        centeredSlides: false,
                        loopAdditionalSlides: 1,
                    },
                },
            });
        }else{
            bookListSwiper[i] = undefined;
        }
    }
    if($(".bookListW").length > 0){
        let bookListEl = $(".bookW>ul>li");
        bookListEl.each(function(i,el){
            bookListSwiperFn(i);
        });

    }
    $(".bookListW .autoPlayBtn").on("click", function(){
        if($(this).hasClass("stop")){
            bookListSwiper[$(this).parents("li").index()].autoplay.start();
            $(this).removeClass("stop")
            $(this).attr("title","멈춤");
        }else{
            bookListSwiper[$(this).parents("li").index()].autoplay.stop();
            $(this).addClass("stop");
            $(this).attr("title","재생");
        }
        return false;
    });
    $(".bookW > ul> li > a").on("click", function(){
        let i = $(this).parent().index();
        $(this).parent().addClass("on").siblings().removeClass("on");
        // 클릭탭의 swiper 삭제후 다시 생성
        if(bookListSwiper[i] != undefined){
            bookListSwiper[i].destroy();
            bookListSwiper[i]=undefined;
            bookListSwiperFn(i);
        }
        return false;
    });
   
    // footer
    let linkListSwiper = new Swiper("#divFooter .linkList",{
        slidesPerView: "auto",
        slidesPerGroup:1,
        observer: true,
        observeParents: true,
        centerInsufficientSlides:true,
    });
    $(".siteList>a").on("click", function(){
        if($(this).parent().hasClass("on")){
            $(this).parent().removeClass("on");
            $(this).next().hide();
        }else{
            $(this).parent().addClass("on");
            $(this).next().slideDown();
        }
        return false;
    });
    $('body').click(function(e){
		if(!$('.siteList').has(e.target).length){
			$('.siteList>ul').stop().slideUp();
			$('.siteList').removeClass('on');
		}
	});
});