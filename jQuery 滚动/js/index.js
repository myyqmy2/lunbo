jQuery(function($) {
    var $container = $('#container'),
        $pics = $('#pics'),
        $buttons = $('#buttons span'),
        $prev = $('#prev'),
        $next = $('#next'),
        index = 0,
        timer;
//图片切换函数
  function changePic(x) {
    var offset = parseInt($pics.css('left'));
    var newOffset = offset + x;
    $pics.animate({left: newOffset + 'px'}, 'fast', function() { 
      if(newOffset < -3000) {
      newOffset = -600;
      $pics.css('left', newOffset + 'px');
    }else if(newOffset > -600) {
      newOffset = -3000;
      $pics.css('left', newOffset + 'px');
    }
    if(index > 4) {
      index = 0;
    }else if(index < 0) {
      index = 4;
    }
    });
  }
    
//button 定位
  function showButton() {
    for(var i = 0; i < $buttons.length; i++) {
      if($buttons.eq(i).hasClass('on')) {
        $buttons.eq(i).removeClass('on');
      }
    }
    $buttons.eq(index).addClass('on');
  }    

//arrow 事件
  $prev.click(function() {
    index -= 1;
    $pics.finish();
    changePic(600);
    showButton();
  });

  $next.click(function() {
    index += 1;
    $pics.finish();
    changePic(-600);
    showButton();
  })

//定时器
 $container.mouseout(function() {
    timer = setInterval(function() {
      $next.click();
    },2000);
 })
 $container.mouseover(function() {
   clearInterval(timer);
 })
 $container.mouseout();

 //按钮点击事件
 (function() {
    for(var i = 0; i < $buttons.length; i++) {
      $buttons[i].index = i;
      $buttons.eq(i).click(function() {
          var newSet = (index - this.index)*600;
          index = this.index;
          $pics.finish();
          changePic(newSet);
          showButton();
      })
    }
  }());
});