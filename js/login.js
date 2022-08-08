var login = document.getElementById('login');
var close_login = document.getElementById('close_login');
var login_wrap = document.getElementById('login_wrap');

// 打开和关闭登录窗口
login.onclick = function(){
    login_wrap.style.display = "block";
}

close_login.onclick = function(){
    login_wrap.style.display = "none";
}

function clear_sel_class(){
    for(var i=0;i<sel_list.length;i++){
        sel_list[i].removeAttribute('class');
    }
}

// 选择登录类型
var sel_list = document.querySelectorAll('.login-tag li');
for(var i=0;i<sel_list.length;i++){
    sel_list[i].setAttribute('sel_index',i);
    sel_list[i].onclick = function(){
        var index = this.getAttribute('sel_index');
        clear_sel_class();
        this.setAttribute('class','act');
        if(index==0){
            zh_login.style.display = "block"
            qq_login.style.display = "none"
            wx_login.style.display = "none"
        }else if(index==1){
            zh_login.style.display = "none"
            qq_login.style.display = "block"
            wx_login.style.display = "none"
        }else{
            zh_login.style.display = "none"
            qq_login.style.display = "none"
            wx_login.style.display = "block"
        }
    }
}








