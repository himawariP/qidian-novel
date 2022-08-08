var li_list = document.querySelectorAll('.classify-wrap li');
var sel_tags = document.querySelectorAll('.classify-sel-tags dd');
var sex_tags = document.querySelectorAll('.sex-tags dd');
var classify_tags = document.querySelectorAll('.classify-tags dd');
var state_tags = document.querySelectorAll('.state-tags dd');
var VIP_tags = document.querySelectorAll('.VIP-tags dd');
var words_tags = document.querySelectorAll('.words-tags dd');
var quality_tags = document.querySelectorAll('.quality-tags dd');
var update_tags = document.querySelectorAll('.update-tags dd');

for(var i=0;i<li_list.length;i++){
    li_list[i].setAttribute('index',i);
}

// 删除已选标签
for(var i=1;i<sel_tags.length;i++){
    sel_tags[i].setAttribute('sel_index',i);
    sel_tags[i].onclick = function(){
        this.removeAttribute('class');
        var sel_index = this.getAttribute('sel_index');
        for(var i=0;i<li_list[sel_index].children[1].children.length;i++){
            li_list[sel_index].children[1].children[i].removeAttribute('class');
        }
    }
}

var index=0;

// 清除标签样式
function clearClass(list){
    for(var i=0;i<list.length;i++){
        list[i].removeAttribute('class');
    }
}

// 显示已选标签
function showTag(lable){
    index = lable.parentNode.parentNode.getAttribute('index');
    sel_tags[index].innerHTML = '<span>'+lable.children[0].innerHTML+' ×</span>';
    sel_tags[index].setAttribute('class','act');
}

// 选择标签
function selTag(list){
    for(var i=0;i<list.length;i++){
        list[i].onclick = function(){
            clearClass(list);
            this.setAttribute('class','act');
            showTag(this);
        }
    }
}


selTag(sex_tags);
selTag(classify_tags);
selTag(state_tags);
selTag(VIP_tags);
selTag(words_tags);
selTag(quality_tags);
selTag(update_tags);














