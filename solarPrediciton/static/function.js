
var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(document).ready(function(){
	
	
	$("#chat").hide();
	
	
});


function send()

{
 insertMessage();



}


$(window).load(function() {
  $messages.mCustomScrollbar();
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    alert("m "+m);
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));

  }
}

function insertMessage() {

  msg = $('.message-input').val();
  alert(msg);
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.messages-content')).addClass('new');
  setDate();



  fakeMsg(msg);
  
  //alert(msg);
  
//  $.ajax({
//
//	  url:"AdminServlet",
//	  type:"POST",
//	  data:{action:"fetchquestion", msg:msg},
//	  success:function(data)
//	  {
//
//
//		  if(data=="not")
//			  {
//			  alert("Not valid question!!");
//			  return false;
//			  }
//		 fakeMessage(data);
//	  }
//
//
//  })
  
  
  $('.message-input').val(null);
  updateScrollbar();
 
}



$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})



var fake=[
'hiiii',
'hello'

]


function fakeMessage() {

//  if ($('.message-input').val() != '') {
//    return false;
//  }
//
//  alert("heyyyy");
//  $('<div class="message loading new"><figure class="avatar"><img src="img/user.png" /></figure><span></span></div>').appendTo($('.messages-content'));
//  updateScrollbar();
//
//  setTimeout(function() {
//    $('.message.loading').remove();
//    $('<div class="message new"><figure class="avatar"><img src="img/user.png"  /></figure>'+ fake[i] +'</div>').appendTo($('.messages-content')).addClass('new');
//    setDate();
//    updateScrollbar();
//
//  }, 1000 + (Math.random() * 20) * 100);

}

function fakeMsg(msg){




$.ajax({
type:"POST",
url:'/fetchAnswers',

data:{msg:msg},
success:function(data)
{


  setTimeout(function() {
    $('.message.loading').remove();
  $('<div class="message new"><figure class="avatar"><img src="img/user.png"  /></figure>'+ data +'</div>').appendTo($('.messages-content')).addClass('new');
   setDate();
   updateScrollbar();

  }, 1000 + (Math.random() * 20) * 100);
}




});


}

function openForm()
{
$("#chat").show();
	
}

$('#closechat').click(function(){
	
	$("#chat").hide();

});

function closechat()
{
$("#chat").hide();
}






	