var focus_sel_list = document.querySelectorAll('.focus-slider ol li');
var focus_img_list = document.querySelectorAll('.focus-slider ul li');
var index_top_focus = document.getElementById('index_top_focus');

// 首页顶部焦点图
var focus_img_index = 0;
var focus_img_auto;
function focus_img_autoplay(){
    focus_img_auto = setInterval(function(){    
        focus_img_index++;
        if(focus_img_index == focus_img_list.length){
            focus_img_index=1;
            index_top_focus.style.transition = 'transform 0ms linear 0s';
            index_top_focus.style.transform = "translateX("+-0+"px)";
            setTimeout(function(){
                index_top_focus.style.transition = 'transform 300ms linear 0s';
                index_top_focus.style.transform = "translateX("+-focus_img_index*758+"px)";
                for(var i=0;i<focus_sel_list.length;i++){
                    focus_sel_list[i].removeAttribute('class');
                }
                focus_sel_list[focus_img_index].setAttribute('class','act');
            },200)
        }else{
            index_top_focus.style.transition = 'transform 300ms linear 0s';
            index_top_focus.style.transform= "translateX("+-focus_img_index*758+"px)";
            if(focus_img_index < focus_img_list.length-1){
                for(var i=0;i<focus_sel_list.length;i++){
                    focus_sel_list[i].removeAttribute('class');
                }
                focus_sel_list[focus_img_index].setAttribute('class','act');
            }else{
                for(var i=0;i<focus_sel_list.length;i++){
                    focus_sel_list[i].removeAttribute('class');
                }
                focus_sel_list[0].setAttribute('class','act');
            }
        }
    },2000)
}
focus_img_autoplay();


index_top_focus.onmouseenter = function(){
    clearInterval(focus_img_auto);
}
index_top_focus.onmouseleave = function(){
    focus_img_autoplay();
}

for(var i=0;i<focus_sel_list.length;i++){
    focus_sel_list[i].onmouseenter = function(){
        clearInterval(focus_img_auto);
    }
    focus_sel_list[i].onmouseleave = function(){
        focus_img_autoplay();
    }
}

// 滚动公告
var attention_text = document.getElementById('attention_text');
var attention_auto;
var attentionX = 0;
function attention_autoplay(){
    attention_auto = setInterval(function(){
        attentionX++;
        if(attentionX==300){
            attentionX=-200;
        }else{
            attention_text.style.transform = "translateX("+-attentionX+"px)";
        }
    },10)
}
attention_autoplay();

// 编辑推荐焦点图
var rec_focus = document.getElementById('rec_focus');
var rec_img_list = document.querySelectorAll('.rec-focus-list ul li')
var rec_text_list = document.getElementsByClassName('editor-rec-text');
var rec_sel_list = document.querySelectorAll('.editor-rec-img-focus ol li')
var rec_focus_index = 0;
var rec_focus_auto;


function right_animation(){
    rec_focus_index++;
    if(rec_focus_index==rec_img_list.length){
        rec_focus_index=1;
        rec_focus.style.transition = 'transform 0ms linear 0s';
        rec_focus.style.transform = "translateX("+-0+"px)";
        setTimeout(function(){
            rec_focus.style.transition = 'transform 300ms linear 0s';
            rec_focus.style.transform = "translateX("+-rec_focus_index*90+"px)";
            for(var i=0;i<rec_text_list.length;i++){
                rec_text_list[i].setAttribute('class','editor-rec-text');
                rec_sel_list[i].removeAttribute('class');
            }
            rec_text_list[rec_focus_index].setAttribute('class','editor-rec-text act');
            rec_sel_list[rec_focus_index].setAttribute('class','act');
        },200)
    }
    else if(rec_focus_index==rec_img_list.length-1){
        rec_focus.style.transform = "translateX("+-rec_focus_index*90+"px)";
        for(var i=0;i<rec_text_list.length;i++){
            rec_text_list[i].setAttribute('class','editor-rec-text');
            rec_sel_list[i].removeAttribute('class');
        }
        rec_text_list[0].setAttribute('class','editor-rec-text act');
        rec_sel_list[0].setAttribute('class','act');
    }
    else{
        rec_focus.style.transition = 'transform 300ms linear 0s';
        rec_focus.style.transform = "translateX("+-rec_focus_index*90+"px)";
        for(var i=0;i<rec_text_list.length;i++){
            rec_text_list[i].setAttribute('class','editor-rec-text');
            rec_sel_list[i].removeAttribute('class');
        }
        rec_text_list[rec_focus_index].setAttribute('class','editor-rec-text act');
        rec_sel_list[rec_focus_index].setAttribute('class','act');
    }
}

function rec_focus_autoplay(){
    rec_focus_auto = setInterval(function(){
        right_animation();
    },2000)
}
rec_focus_autoplay();

for(var i=0;i<rec_sel_list.length;i++){
    rec_sel_list[i].setAttribute('rec_sel_index',i);

    rec_sel_list[i].onmouseenter = function(){
        clearInterval(rec_focus_auto);
        var index = this.getAttribute('rec_sel_index');
        rec_focus_index = index;
        for(var i=0;i<rec_text_list.length;i++){
            rec_text_list[i].setAttribute('class','editor-rec-text');
            rec_sel_list[i].removeAttribute('class');
        }
        rec_text_list[rec_focus_index].setAttribute('class','editor-rec-text act');
        rec_sel_list[rec_focus_index].setAttribute('class','act');
        rec_focus.style.transform = "translateX("+-rec_focus_index*90+"px)";
    }
    rec_sel_list[i].onmouseleave = function(){
        rec_focus_autoplay();
    }
};

rec_focus_left.onclick = function(){
    rec_focus_index--;
    if(rec_focus_index<0){
        rec_focus_index=rec_img_list.length-2;
    }
    rec_focus.style.transform = "translateX("+-rec_focus_index*90+"px)";
    for(var i=0;i<rec_text_list.length;i++){
        rec_text_list[i].setAttribute('class','editor-rec-text');
        rec_sel_list[i].removeAttribute('class');
    }
    rec_text_list[rec_focus_index].setAttribute('class','editor-rec-text act');
    rec_sel_list[rec_focus_index].setAttribute('class','act');
}

rec_focus_left.onmouseenter = function(){
    clearInterval(rec_focus_auto);
}

rec_focus_left.onmouseleave = function(){
    rec_focus_autoplay();
}

rec_focus_right.onclick = function(){
    right_animation();
}

rec_focus_right.onmouseenter = function(){
    clearInterval(rec_focus_auto);
}

rec_focus_right.onmouseleave = function(){
    rec_focus_autoplay();
}



// 排行榜查看更多
var rank_more = document.getElementById('rank_more');
var rank_list_wrap = document.getElementById('rank_list_wrap');
var check_rank = 0;

rank_more.onclick = function(){
    if(check_rank==0){
        check_rank=1;
        rank_list_wrap.setAttribute('class','rank-list-wrap up')
        rank_more.innerHTML='收起更多<span></span>';
        var rank_more_span = rank_more.children[0];
        rank_more_span.style.transform = "rotate(180deg)";
    }else{
        check_rank=0;
        rank_list_wrap.setAttribute('class','rank-list-wrap')
        rank_more.innerHTML='展开更多<span></span>';
        var rank_more_span = rank_more.children[0];
        rank_more_span.style.transform = "rotate(0deg)";
    }
}


// 热门作品焦点图
var hot_book_list = document.querySelectorAll('.hot-book-focus li');
var hot_index = 0;
var hot_auto;
function hot_autoplay(){
    hot_auto = setInterval(function(){
        hot_index++;
        if(hot_index>2){
            hot_index=0;
        }
        for(var i=0;i<hot_book_list.length;i++){
            hot_book_list[i].removeAttribute('class');
        }
        hot_book_list[hot_index].setAttribute('class','act');
    },2000);
}
hot_autoplay();

for(var i=0;i<hot_book_list.length;i++){
    hot_book_list[i].onmouseenter = function(){
        clearInterval(hot_auto)
    }
    hot_book_list[i].onmouseleave = function(){
        hot_autoplay();
    }
}

// 新书推荐轮播图
var new_book_list = document.querySelectorAll('.new-book-focus li');
var new_index = 0;
var new_auto;
function new_autoplay(){
    new_auto = setInterval(function(){
        new_index++;
        if(new_index>2){
            new_index=0;
        }
        for(var i=0;i<new_book_list.length;i++){
            new_book_list[i].removeAttribute('class');
        }
        new_book_list[new_index].setAttribute('class','act');
    },2000);
}
new_autoplay();

for(var i=0;i<new_book_list.length;i++){
    new_book_list[i].onmouseenter = function(){
        clearInterval(new_auto)
    }
    new_book_list[i].onmouseleave = function(){
        new_autoplay();
    }
}

// 完本推荐轮播图
var end_book_list = document.querySelectorAll('.end-book-focus li');
var end_index = 0;
var end_auto;
function end_autoplay(){
    end_auto = setInterval(function(){
        end_index++;
        if(end_index>2){
            end_index=0;
        }
        for(var i=0;i<end_book_list.length;i++){
            end_book_list[i].removeAttribute('class');
        }
        end_book_list[end_index].setAttribute('class','act');
    },2000);
}
end_autoplay();

for(var i=0;i<end_book_list.length;i++){
    end_book_list[i].onmouseenter = function(){
        clearInterval(end_auto)
    }
    end_book_list[i].onmouseleave = function(){
        end_autoplay();
    }
}







