var top_hidden_list = document.getElementsByClassName('top-nav-hidden');

site.onmouseenter = function(){
    for(var i=0;i<top_hidden_list.length;i++){
        top_hidden_list[i].setAttribute('class','top-nav-hidden');
    }
    top_hidden_list[0].setAttribute('class','top-nav-hidden act');
}

site.onmouseleave = function(){
    for(var i=0;i<top_hidden_list.length;i++){
        top_hidden_list[i].setAttribute('class','top-nav-hidden');
    }
}

more.onmouseenter = function(){
    for(var i=0;i<top_hidden_list.length;i++){
        top_hidden_list[i].setAttribute('class','top-nav-hidden');
    }
    top_hidden_list[1].setAttribute('class','top-nav-hidden act');
}

more.onmouseleave = function(){
    for(var i=0;i<top_hidden_list.length;i++){
        top_hidden_list[i].setAttribute('class','top-nav-hidden');
    }
}

for(var i=0;i<top_hidden_list.length;i++){
    top_hidden_list[i].onmouseenter = function(){
        this.setAttribute('class','top-nav-hidden act');
    }
    top_hidden_list[i].onmouseleave = function(){
        this.setAttribute('class','top-nav-hidden');
    }
}