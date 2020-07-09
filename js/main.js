$(function() {
          $('.bxslider').bxSlider({
            captions:false,
            //slideWidth:600,  //수정
            auto:true,
            autoControls:false,
            stopAutoOnclick:true,
          });
 
    $('.bxslider > div, .cont_box > div').each(function(){   //1단계           
        if ($(window).width() < 1180) {
            //alert();
            var img = $(this).find('img'); //2단계  find ==> 선택자를 찾는 명령
            var img_pc = img.attr('src'); //3단계  
            var img_mo = img_pc.replace('pc', 'mo') //4단계   relapce(a,b) ==> a를 b로 대체
            img.attr('src', img_mo);
            $('.bx-viewport').css({height:'auto'});
        } else {
            var img = $(this).find('img'); //2단계  find ==> 선택자를 찾는 명령
            var img_mo = img.attr('src'); //3단계  
            var img_pc = img_mo.replace('mo', 'pc') //4단계   relapce(a,b) ==> a를 b로 대체
            img.attr('src', img_pc);
             $('.bx-viewport').css({height:'auto'});
        }
    })  
    
    
    $(window).resize(function(){
    $('.bxslider > div, .cont_box > div').each(function(){   //1단계           
             //5단계
             if ($(window).width() < 800) {
            //alert();
            var img = $(this).find('img'); //2단계  find ==> 선택자를 찾는 명령
            var img_pc = img.attr('src'); //3단계  
            var img_mo = img_pc.replace('pc', 'mo') //4단계   relapce(a,b) ==> a를 b로 대체
            img.attr('src', img_mo);
                  $('.bx-viewport').css({height:'auto'});
           } else {
              var img = $(this).find('img'); //2단계  find ==> 선택자를 찾는 명령
            var img_mo = img.attr('src'); //3단계  
            var img_pc = img_mo.replace('mo', 'pc') //4단계   relapce(a,b) ==> a를 b로 대체
            img.attr('src', img_pc);
                $('.bx-viewport').css({height:'auto'});
          }
    }) 
            
      }) 
         
    
    
    var a=1;
    $('.menu').click(function(){
      if (a == 1){
       $('#nav').stop().slideDown();
       //$('.menu').css({'background-image':'URL(index_img/m_arr_menu_down.jpg)'});
          //만약 이미지 태그로 디자인된 경우 
          //$('img').attr('src','imges/dxjklf.gif')
       a=2}
       else{
          $('#nav').stop().slideUp();
        //  $('.menu').css({'background-image':'URL(index_img/m_arr_menu_top_03.jpg)'});
          a=1;
       }
        
     }) //menu 디자인바뀌기




/***********************미니슬라이더*******************************/
$(function(){
  var mySlider=$(".slide_banner").bxSlider({
      mode:"horizontal",   // 가로 수평으로 슬라이드 됩니다.
      speed:500,              // 이동 속도를 설정합니다.
      pager:true,            // 현재 위치 페이징 표시 여부 설정.
      moveSlides:1,         // 슬라이드 이동시 갯수 설정.
      slideWidth:500,        // 슬라이드 마다 너비 설정.
      minSlides:1,           // 최소 노출 개수를 설정합니다.
      maxSlides:1,          // 최대 노출 개수를 설정합니다.
      slideMargin:10,      // 슬라이드간의 간격을 설정합니다.
      auto:true,             // 자동으로 흐를지 설정합니다.
      autoHover:true,    // 마우스 오버시 정시킬지 설정합니다.
      controls:false        // 이전 다음 버튼 노출 여부 설정합니다.
   });
//이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
   $("#prevBtn").on("click",function(){
    mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동됩니다.
    return false; //<a>에 링크를 차단합니다.
   });
//다음 버튼을 클릭하면 다음 슬라이드로 전환됩니다.
   $("#nextBtn").on("click",function(){
    mySlider.goToNextSlide();  //다음 슬라이드 배너로 이동됩니다.
    return false;
   });
});

/*********************버튼 돌아감********************************/
 var open_btn = 0;
    $('.open').click(function(){
      if (open_btn == 0) {
        $(this).css({transform:'rotate(450deg)'});
        $('.btn1').animate({top:'-100px'}); 
        open_btn = 1;
      }else {
        $(this).css({transform:'rotate(0deg)'});
        $('.btn1').animate({top:'0'}); 
        open_btn = 0;
      }
    })
 }) // j-query end

