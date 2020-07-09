$(function() {
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

     }) //menu 디자인바뀌기
	
   $(window).resize(function(){
    $('.sec3 > .sec3_imgset > img').each(function(){   //1단계           
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
	   
    $('.bxslider > div, .cont_box > div').each(function(){   //1단계           
        if ($(window).width() < 1180) {
            //alert();
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

            


}