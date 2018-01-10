window.onload = function() {
    var container = document.getElementById('container');
    var banner = document.getElementById('banner');
    var imgs = banner.getElementsByTagName('img');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 0;
    var number = 0;
    var timer;

//img 切换函数
    function imgShow() {
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].className === 'show') {
                imgs[i].className = '';
         }
        }
        if(number > 4) {
            number = 0;
        }else if (number < 0) {
            number =4;
        }
        imgs[number].className = 'show';
    }
    
//button 切换函数
    function buttonOn() {
        for(var i = 0;i < buttons.length; i++) {
            if(buttons[i].className === 'on') {
                buttons[i].className = '';
            }
        }
        if(index > 4) {
            index = 0;
        }else if (index < 0) {
            index =4;
        }
        buttons[index].className = 'on';
    }

//prev 事件
    prev.onclick = function() {
        number -= 1;
        index -= 1;
        imgShow();
        buttonOn();
    }

//next 事件
    next.onclick = function() {
        number += 1;
        index += 1;
        imgShow();
        buttonOn();
    }

//播放函数
    function play() {
        timer = setInterval (function () {
            next.onclick()
        },2000);
    }
    
    function stop() {
        clearInterval(timer);
    }

//点击按钮切换图片函数
    for(var i = 0;i < buttons.length; i++) {
        buttons[i].index = i;
        buttons[i].onclick = function() {
            index = this.index;
            number = this.index;
            imgShow();
            buttonOn();
        }
    }

//绑定mouseover，mouseout事件
    container.onmouseover = stop;
    container.onmouseout = play;
    play();
}