var $Carousel = (function(){
    var $content11 = $('<div class="slider" id="slider"></div>');
    var $content12 = $('<span id="left"><</span> ');
    var $content13 = $('<span id="right">></span> ');
    var $content14 = $('<ul class="nav" id="navs"></ul>');
    var $content21 = $('<div class="slide"><img src="img/b5.png" alt=""></div>');
    var $content22 = $('<div class="slide"><img src="img/b1.png" alt=""></div>');
    var $content23 = $('<div class="slide"><img src="img/b2.png" alt=""></div>');
    var $content24 = $('<div class="slide"><img src="img/b3.png" alt=""></div>');
    var $content25 = $('<div class="slide"><img src="img/b4.png" alt=""></div>');
    var $content26 = $('<div class="slide"><img src="img/b5.png" alt=""></div>');
    var $content27 = $('<div class="slide"><img src="img/b1.png" alt=""></div>');
    var $content31 = $('<li>1</li>');
    var $content32 = $('<li>2</li>');
    var $content33 = $('<li>3</li>');
    var $content34 = $('<li>4</li>');
    var $content35 = $('<li>5</li>');
    var obj = {
        container:'.box',
        container1:'.slider',
        container2:'.nav'
    }
    $(obj.container).append($content11);
    $(obj.container).append($content12);
    $(obj.container).append($content13);
    $(obj.container).append($content14);
    $(obj.container1).append($content21);
    $(obj.container1).append($content22);
    $(obj.container1).append($content23);
    $(obj.container1).append($content24);
    $(obj.container1).append($content25);
    $(obj.container1).append($content26);
    $(obj.container1).append($content27);
    $(obj.container2).append($content31);
    $(obj.container2).append($content32);
    $(obj.container2).append($content33);
    $(obj.container2).append($content34);
    $(obj.container2).append($content35);
    var pageLi=document.getElementsByTagName('li');
    var slide = document.getElementsByClassName('slide');
    var slider = document.getElementById('slider');
    var index = 0;
    function Carousel(a){
        pageLi[0].className='active';
        console.log('enter');
        page=1;
        var autoplay;
        $("ul").on("click","li",function(){ 
            console.log($(this).text()-1); 
            page = $(this).text()-1;
            for(var p=0;p<5;p++){
                if(p===page){
                pageLi[p].className='active';
                // console.log(p);
                }
                else{
                // console.log(p);
                pageLi[p].className='';
                }
            }
            
            if(page==0){
                slider.style.left="-100%";
            }
            else{
                slider.style.left="-" + (page+1) + "00%";
            }            
        });
        //向左点击
        $('#left').click(function(){
            if(page==1){
                pageLi[4].className='active';
                pageLi[0].className='';
                slider.style.left="-500%";
                page=5;console.log(page);
            }
            else if(page<5&&page>1){
                page=page-1;
                pageLi[page-1].className='active';
                pageLi[page].className='';
                slider.style.left="-" + page + "00%";
                console.log(page);
                
            }
            else if(page=5){
                pageLi[page-2].className='active';
                pageLi[page-1].className='';
                page--;
                slider.style.left="-" + page + "00%";
                console.log(page);
            } 

        })
        //向右点击
        $('#right').click(function(){
            if(page==1){
                pageLi[4].className='';
                pageLi[0].className='active';
                slider.style.left="-100%";
                console.log(page);
                page++;
            }
            else if(page<5&&page>1){
                console.log(page);
                pageLi[page-1].className='active';
                pageLi[page-2].className='';
                slider.style.left="-" + page + "00%";
                page=page+1;
            }
            else if(page=5){
                pageLi[page-1].className='active';
                pageLi[page-2].className='';
                slider.style.left="-" + page + "00%";
                page=1;
                console.log(page);
            } 

        })
        //自动播放调用
        auto();
        //划入划出
        $("#box").mouseover(function(){
            // console.log('over');
            // $("span").style.opacity=0.8;
            $("span").css({ opacity: 0.8 });
            clearInterval(autoplay);
        })
        $("#box").mouseout(function(){
            $("span").css({ opacity: 0 });
            // console.log('out');
            auto();
        })
        //自动播放
        function auto(){
            autoplay = setInterval(function() {
                console.log('set')
                if(page==1){
                    pageLi[4].className='';
                    pageLi[0].className='active';
                    slider.style.left="-100%";
                    // console.log(page);
                    page++;
                }
                else if(page<5&&page>1){
                    // console.log('click');
                    // console.log(page);
                    pageLi[page-1].className='active';
                    pageLi[page-2].className='';
                    slider.style.left="-" + page + "00%";
                    // console.log(page);
                    page=page+1;
                }
                else if(page=5){
                    pageLi[page-1].className='active';
                    pageLi[page-2].className='';
                    // pageLi[4].className='';
                    // pageLi[0].className='active';
                    slider.style.left="-" + page + "00%";
                    page=1;
                    // console.log(page);
                } 
                    
            } , 2000);
        }
        
        console.log('out');
    }
    return{
        Carousel:Carousel
    }
}());