// 投票
var ticket_list = document.querySelectorAll('.ticket-tab>p a');
var ticket_wrap_list = document.querySelectorAll('.ticket-tab>div');

for(var i=0;i<ticket_list.length-1;i++){
    ticket_list[i].setAttribute('ticket_index',i);
    ticket_list[i].onclick = function(){
        for(var j=0;j<ticket_list.length-1;j++){
            ticket_wrap_list[j].setAttribute('class','ticket-wrap hidden');
            ticket_list[j].setAttribute('class','ticket');
        }
        var index = this.getAttribute('ticket_index');
        ticket_list[index].setAttribute('class','ticket act');
        ticket_wrap_list[index].setAttribute('class','ticket-wrap');
    }
}

// 滚动
var gundong = document.querySelector('.book-trends>div>span>ul');
var book_trends;
var book_trends_top = 0;
function gd(){
    book_trends = setInterval(function(){
        book_trends_top++;
        if(book_trends_top>180){
            book_trends_top=0;
        }
        gundong.style.marginTop = -book_trends_top+'px';
    },50)
}
gd();

// 其他作品滚动
var order_works_list = document.querySelectorAll('.order-works li');
var order_auto;
var order_index=0;
function order_autoplay(){
    order_auto = setInterval(function(){
        order_index++;
      
        if(order_index==order_works_list.length){
                order_index=0;  
                order_works_wrap.style.transition='transform 0ms linear';
                order_works_wrap.style.transform = "translateX("+0*250+"px)"; 
                // order_index=1
             setInterval(function(){
                // order_works_wrap.style.transition='transform 300ms linear';
                // order_works_wrap.style.transform = "translateX("+-order_index*250+"px)"; 
             },2)  
        }else{
            order_works_wrap.style.transition='transform 300ms linear';
            order_works_wrap.style.transform = "translateX("+-order_index*250+"px)"; 
        }
       
           
    },2000)
}
order_autoplay();