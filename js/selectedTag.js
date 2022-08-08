var selTag_list = document.querySelectorAll('.selectedTag a');
var type_list = document.querySelectorAll('.type-filter li');
var sub_type_list = document.getElementsByClassName('sub-type');
var sub_type_dl_list = document.querySelectorAll('.sub-type dl');
var sub_type_dl_dd_list = document.querySelectorAll('.sub-type dl dd');

var action_list = document.querySelectorAll('.action-filter li');
var vip_list = document.querySelectorAll('.vip-filter li');
var words_list = document.querySelectorAll('.words-filter li');
var quality_list = document.querySelectorAll('.quality-filter li');
var ud_list = document.querySelectorAll('.ud-filter li');
var tag_list = document.querySelectorAll('.tag-filter li');

window.onload = function(){
    hidden_sub_type();
    hidden_sub_type_dl();
    removeSelTag();
}

// 分类选框
for(var i=0;i<type_list.length;i++){
    type_list[i].setAttribute('tagIndex',i);
    type_list[i].onclick = function(){
        // 取消其他选框
        for(var j=0;j<type_list.length;j++){
            type_list[j].removeAttribute('class');
        }
        for(var i=0;i<sub_type_dl_dd_list.length;i++){
            sub_type_dl_dd_list[i].removeAttribute('class');
        }

        this.setAttribute('class','act');
        var tagIndex = this.getAttribute('tagIndex')
        
        if(tagIndex==0){ //当选择全部时，隐藏子选项框
            for(var i=0;i<sub_type_list.length;i++){
                sub_type_list[i].setAttribute('subType',i);
                sub_type_list[i].setAttribute('class','sub-type hidden');
            }
        }else if(tagIndex<=4){
            sub_type_list[0].setAttribute('class','sub-type');
            hidden_sub_type_dl();
            sub_type_dl_list[tagIndex-1].removeAttribute('class');
        }else if(tagIndex<=9){
            sub_type_list[1].setAttribute('class','sub-type');
            hidden_sub_type_dl();
            sub_type_dl_list[tagIndex-1].removeAttribute('class');
        }else if(tagIndex<=13){
            sub_type_list[2].setAttribute('class','sub-type');
            hidden_sub_type_dl();
            sub_type_dl_list[tagIndex-1].removeAttribute('class');
        }else{
            sub_type_list[3].setAttribute('class','sub-type');
            hidden_sub_type_dl();
            sub_type_dl_list[tagIndex-1].removeAttribute('class');
        }
        
        // 显示已选标签
        selTag_list[0].removeAttribute('class');
        selTag_list[0].innerHTML = this.children[0].innerHTML+"<cite>×</cite>";
    }
}

// 子分类选框
for(var i=0;i<sub_type_dl_dd_list.length;i++){
    sub_type_dl_dd_list[i].onclick = function(){
        for(var i=0;i<sub_type_dl_dd_list.length;i++){
            sub_type_dl_dd_list[i].removeAttribute('class');
        }
        for(var i=0;i<type_list.length;i++){
            type_list[i].removeAttribute('class');
        }
        this.setAttribute('class','act');

        // 显示已选标签
        selTag_list[0].removeAttribute('class');
        selTag_list[0].innerHTML = this.children[0].innerHTML+"<cite>×</cite>";
    }
}

// 状态选框
for(var i=0;i<action_list.length;i++){
    action_list[i].setAttribute('actionIndex',i);
    action_list[i].onclick = function(){
        // 取消其他选框
        for(var j=0;j<action_list.length;j++){
            action_list[j].removeAttribute('class');
        }
        this.setAttribute('class','act');
        if(this.getAttribute('actionIndex') == 0){
            selTag_list[1].setAttribute('class','hidden');
        }else{
            selTag_list[1].removeAttribute('class');
            selTag_list[1].innerHTML = this.children[0].innerHTML+"<cite>×</cite>";
        }
    }
}

// 属性选框
for(var i=0;i<vip_list.length;i++){
    vip_list[i].setAttribute('vipIndex',i);
    vip_list[i].onclick = function(){
        // 取消其他选框
        for(var j=0;j<vip_list.length;j++){
            vip_list[j].removeAttribute('class');
        }
        this.setAttribute('class','act');
        if(this.getAttribute('vipIndex') == 0){
            selTag_list[2].setAttribute('class','hidden');
        }else{
            selTag_list[2].removeAttribute('class');
            selTag_list[2].innerHTML = this.children[0].innerHTML+"<cite>×</cite>";
        }
    }
}

// 字数选框
for(var i=0;i<words_list.length;i++){
    words_list[i].setAttribute('wordsIndex',i);
    words_list[i].onclick = function(){
        // 取消其他选框
        for(var j=0;j<words_list.length;j++){
            words_list[j].removeAttribute('class');
        }
        this.setAttribute('class','act');
        if(this.getAttribute('wordsIndex') == 0){
            selTag_list[3].setAttribute('class','hidden');
        }else{
            selTag_list[3].removeAttribute('class');
            selTag_list[3].innerHTML = this.children[0].innerHTML.substring(0,this.children[0].innerHTML.length-2)+"<cite>×</cite>";
        }
    }
}

// 品质选框
for(var i=0;i<quality_list.length;i++){
    quality_list[i].setAttribute('qualityIndex',i);
    quality_list[i].onclick = function(){
        // 取消其他选框
        for(var j=0;j<quality_list.length;j++){
            quality_list[j].removeAttribute('class');
        }
        this.setAttribute('class','act');
        if(this.getAttribute('qualityIndex') == 0){
            selTag_list[4].setAttribute('class','hidden');
        }else{
            selTag_list[4].removeAttribute('class');
            selTag_list[4].innerHTML = this.children[0].innerHTML+"<cite>×</cite>";
        }
    }
}

// 更新选框
for(var i=0;i<ud_list.length;i++){
    ud_list[i].setAttribute('udIndex',i);
    ud_list[i].onclick = function(){
        // 取消其他选框
        for(var j=0;j<ud_list.length;j++){
            ud_list[j].removeAttribute('class');
        }
        this.setAttribute('class','act');
        if(this.getAttribute('udIndex') == 0){
            selTag_list[5].setAttribute('class','hidden');
        }else{
            selTag_list[5].removeAttribute('class');
            selTag_list[5].innerHTML = this.children[0].innerHTML+"<cite>×</cite>";
        }
    }
}

// 标签选框

for(var i=0;i<tag_list.length;i++){   
    tag_list[i].onclick = function(){
        // 取消其他选框
        for(var j=0;j<tag_list.length;j++){
            tag_list[j].removeAttribute('class');
        }  
        this.setAttribute('class','act');  
        if(this.getAttribute('tagIndex') == 0){
            selTag_list[6].setAttribute('class','hidden');
        }else{
            selTag_list[6].removeAttribute('class');
            selTag_list[6].innerHTML = this.children[0].innerHTML+"<cite>×</cite>";
        }
    }
}

// 已选择标签
selTag_list[0].onclick = function(){
    // 取消其他选框
    for(var j=0;j<type_list.length;j++){
        type_list[j].removeAttribute('class');
    }
    for(var i=0;i<sub_type_dl_dd_list.length;i++){
        sub_type_dl_dd_list[i].removeAttribute('class');
    }
    for(var i=0;i<sub_type_list.length;i++){
        sub_type_list[i].setAttribute('class','sub-type hidden');
    }
    type_list[0].setAttribute('class','act');
    this.innerHTML = type_list[0].children[0].innerHTML+"<cite>×</cite>";
}

selTag_list[1].onclick = function(){
    // 取消其他选框
    for(var j=0;j<action_list.length;j++){
        action_list[j].removeAttribute('class');
    }
    action_list[0].setAttribute('class','act');
    selTag_list[1].setAttribute('class','hidden');
}

selTag_list[2].onclick = function(){
    // 取消其他选框
    for(var j=0;j<vip_list.length;j++){
        vip_list[j].removeAttribute('class');
    }
    vip_list[0].setAttribute('class','act');
    selTag_list[2].setAttribute('class','hidden');
}

selTag_list[3].onclick = function(){
    // 取消其他选框
    for(var j=0;j<words_list.length;j++){
        words_list[j].removeAttribute('class');
    }
    words_list[0].setAttribute('class','act');
    selTag_list[3].setAttribute('class','hidden');
}

selTag_list[4].onclick = function(){
    // 取消其他选框
    for(var j=0;j<quality_list.length;j++){
        quality_list[j].removeAttribute('class');
    }
    quality_list[0].setAttribute('class','act');
    selTag_list[4].setAttribute('class','hidden');
}

selTag_list[5].onclick= function(){
    // 取消其他选框
    for(var j=0;j<ud_list.length;j++){
        ud_list[j].removeAttribute('class');
    }
    ud_list[0].setAttribute('class','act');
    selTag_list[5].setAttribute('class','hidden');
}

selTag_list[6].onclick = function(){
    // 取消其他选框
    for(var j=0;j<tag_list.length;j++){
        tag_list[j].removeAttribute('class');
    }  
    tag_list[0].setAttribute('class','act');  
    selTag_list[6].setAttribute('class','hidden');
}





// 全部隐藏子选项框
function hidden_sub_type_dl(){
    for(var i=0;i<sub_type_dl_list.length;i++){
        sub_type_dl_list[i].setAttribute('class','hidden');
    }
}

function hidden_sub_type(){
    for(var i=0;i<sub_type_list.length;i++){
        sub_type_list[i].setAttribute('subType',i);
        sub_type_list[i].setAttribute('class','sub-type hidden');
    }
}

function removeSelTag(){  
    for(var i=0;i<selTag_list.length;i++){
        selTag_list[i].setAttribute('class','hidden');
    }
    selTag_list[0].removeAttribute('class');
    selTag_list[0].innerHTML = '全部<cite>×</cite>';
}
