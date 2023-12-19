$(function(){
    var winWidth = window.innerWidth || document.documentElement.clientWidth;//미디어쿼리 사이즈와 $(window).width()가 인식하는 px단위 사이즈가 달라서 선언한 변수 : clinentWidth 와 innerWidth의 사이즈는 동일하나 innerWidth는 익스플로러 9 미만 버전은 인식하지 못하므로 동시선언

    // load할때 한번만
    if( $(window).scrollTop() >= $(".header1").outerHeight(true)){
        $("#divWrapper").addClass("fixed");
    }else{
        $("#divWrapper").removeClass("fixed");
    }
    $(window).on("scroll", function(){
        winWidth = window.innerWidth || document.documentElement.clientWidth;
        let scrollTop = $(this).scrollTop();

        if(scrollTop >= $(".header1").outerHeight(true)){
            $("#divWrapper").addClass("fixed");
        }else{
            $("#divWrapper").removeClass("fixed");
        }
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
        $(this).parent().find(".depth2W").slideDown(500);
        $(this).parent().siblings().find(".depth2W").hide();

        return false;
    });
    $("#divTopMenu>ul>li>a").on("focus",function(){
        $(this).parent().find(".depth2W").slideDown(500);
        $(this).parent().siblings().find(".depth2W").hide();

        return false;
    });
    $("#divTopMenu").on("mouseleave",function(){
        $("#divTopMenu>ul>li .depth2W").slideUp(500);
        return false;
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
        }
        $("html, body").css("overflow","hidden");
        $(".wholeMenu").fadeIn();
        $("#divHeader").addClass("wmOpen");
        return false;
    });
    $(".wholeMenuClose").on("click", function(){
        winWidth = window.innerWidth || document.documentElement.clientWidth;
        if(winWidth <= 1024){
            $("#divGlobalMenu").fadeOut();
        }
        $("html, body").css("overflow","auto");
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



    /* 탭메뉴 */
	if($('#divTabMenu').length > 0){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		$("#divTabMenu").mThumbnailScroller({
			type:"click-50",
			theme:"buttons-out"
		});
		$("#divTabMenu").mThumbnailScroller("scrollTo", $('#divTabMenu .on'));	
		if($('#divTabMenu > div ul').width()>$('#divTabMenu > div').width()){
			$("#divTabMenu > div").addClass('long');
		}else{
			$("#divTabMenu").mThumbnailScroller("destroy");
		}
		//resize
		$(window).resize(function(){
			$("#divTabMenu").mThumbnailScroller({
				type:"click-50",
				theme:"buttons-out"
			});
			$("#divTabMenu").mThumbnailScroller("scrollTo", $('#divTabMenu .on'));	
			if($('#divTabMenu > div ul').width()>$('#divTabMenu > div').width()){
				$("#divTabMenu > div").addClass('long');
			}else{
				$("#divTabMenu > div").removeClass('long');
				$("#divTabMenu").mThumbnailScroller("destroy");
			}
		});
	}


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

    $(".gotoBtnW .gotoTop").on("click", function(){
        $("html, body").animate({scrollTop:0},300);
        return false;
    });


    // guide
    // 연혁
    $(".historyTab>li>a").on("click", function(){
        if($(this).parent().hasClass("hTab1")){
            $(".historyContentW > .guideCont2").eq(0).addClass("on").siblings().removeClass("on");
        }else if($(this).parent().hasClass("hTab2")){
            $(".historyContentW > .guideCont2").eq(1).addClass("on").siblings().removeClass("on");
        }else if($(this).parent().hasClass("hTab3")){
            $(".historyContentW > .guideCont2").eq(2).addClass("on").siblings().removeClass("on");
        }
        $(".historyTab").removeClass("on");
        $(".historyTab>li").removeClass("on");
        $(this).parents(".historyTab").addClass("on");
        $(this).parent().addClass("on");
        return false;
    });

    // 층별안내
    $(".floorInfoList>ul>li.on .infoCont").show();
    $(".floorInfoList>ul>li>a").on("click", function(){
        if($(this).parent().hasClass("on")){
            $(this).parent().removeClass("on");
            $(this).parent().children(".infoCont").stop().slideUp(500);
        }else{
            $(this).parent().addClass("on").siblings().removeClass("on");
            $(".floorInfoList>ul>li .infoCont").stop().slideUp(500);
            $(this).parent().children(".infoCont").stop().slideDown(500);
        }
        return false;
    });
});