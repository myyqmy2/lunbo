window.onload=function() {
	var container = document.getElementById('container');
	var banner = document.getElementById('banner');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
    var index = 0;
    var timer;

    //动画函数
    function animatePic(obj,setValue) {
        clearInterval(timeSet);
        var timeSet;
        timeSet = setInterval(function() {
            if(setValue !== 0) {
                if(setValue < 0) {
                    obj.style.left = parseInt(obj.style.left)-15 + 'px';
                    setValue += 15;
                }else {
                    obj.style.left = parseInt(obj.style.left)+15 + 'px';
                    setValue -= 15;
                }
            }
            if (parseInt(obj.style.left) == -3600) {
                obj.style.left = -600 + 'px';
            }
            if (parseInt(obj.style.left) == 0) {
                obj.style.left = -3000 + 'px';
            }
        },15)
    }
	//定义无动画图片切换函数
    
    function changePic(offset) {
    	var newSet = parseInt(banner.style.left) + offset;
    	banner.style.left = newSet + 'px';
       
    	if (newSet < -3000) {
    		banner.style.left = -600 + 'px';
    	}
    	if (newSet > -600) {
    		banner.style.left = -3000 + 'px';
    	}

    }

    //buttons

    function showBtn() {
    	for( var i=0;i<buttons.length;i++) {
    			if(buttons[i].className === 'on') {
    				buttons[i].className = '';
    			}
    	}
        buttons[index].className = 'on';
    }
    //定义箭头按钮

    prev.onclick = function() {
    	index -= 1;
    	if (index < 0) {
    		index = 4;
    	}else if (index > 4) {
    		index = 0
    	}
        
        // changePic(600);
        animatePic(banner,600);
        showBtn();
    }
     next.onclick = function() {
    	index += 1;
    	if (index < 0) {
    		index = 4;
    	}else if (index > 4) {
    		index = 0
    	}
        
        // changePic(-600);
        animatePic(banner,-600);
        showBtn();
    }




    //设置定时函数

    function play() {
    	timer = setInterval(function() {
    		next.onclick();
    	},2000)
    }

    function stop() {
    	clearInterval(timer);
    }
    
    //点击按钮切换图片

    for (var i = 0;i < buttons.length; i++) {
    	(function (i) {
    		buttons[i].index = i;
    		buttons[i].onclick = function() {
    			var btnIndex = this.index;
    			var newIndex = (index - btnIndex) * 600;
    			index = btnIndex;
                changePic(newIndex);
                showBtn();
    		}
    	}(i));
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
 
    //点击按钮切换函数
    for (var i = 0;i < buttons.length; i++) {
        (function (i) {
            buttons[i].index = i;
            buttons[i].onclick = function() {
                var btnIndex = this.index;
                var newIndex = (index - btnIndex) * 600;
                index = btnIndex;
                changePic(newIndex);
                showBtn();
            }
        }(i));
    }

    //绑定mouseover mouseout 事件

    container.onmouseover = stop;
    container.onmouseout = play;
    play();
}

