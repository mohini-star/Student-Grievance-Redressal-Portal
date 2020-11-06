$(document).ready(function(){
	//alert("working");
	//$('#panelcon').show();
	//$('#panelcon').show();
	$('#content2').load('adminpanel.html');
	
	$('#all').click(function(){
		$('.searchdiv').show();
		$('#content2').load('adminpanel.html');
	});
	$('#dep').click(function(){
	    $('.searchdiv').show();
		$('#content2').load('adminpanel.html');
	});
	var token = localStorage.getItem("token");
	$("#logout").click(function(){
			window.localStorage.setItem('token',null);
			//window.localStorage.setItem('token',null);
			
		});
	if(token=='null'){
		window.location = "front_1.html";
	}

	$('#profilepage,#profilepage1').click(function(e){
		e.preventDefault();
		$('#content2').load('profile.html');
		$('#profile').hide();
		 $('.searchdiv').hide();
		//	$('#content2').hide();
		// var x=$('#display');
		// x.style.display = "none";
	});


		//Arranging elements according to viewport resizing
		var h=$(window).height();
		var w=$(window).width();
		if (w>=975){
				$('.top-corner').css({"position":"absolute","top":"10px","right":"5px"});
				$("#profile").attr('style','margin-left:-229px !important');
				$('.sidenav').each(function(index){
				$(this).html(arr[index]);
				});
		}
		else{
			$('.sidenav').each(function(){
			$(this).html($(this).children());
			$('.top-corner').css({"position":"relative"});
			$("#profile").attr('style','');
			$('#h1,#h2').hide();

		});
		}

	$(window).resize(function(){
		var h=$(window).height();
		var w=$(window).width();
		if (w>=975){
				$('.top-corner').css({"position":"absolute","top":"10px","right":"5px"});
				$("#profile").attr('style','margin-left:-229px !important');
				$('.sidenav').each(function(index){
				$(this).html(arr[index]);
				});
				$('.navcontent').css({'opacity':'1'})
		}
		else{
			$('.sidenav').each(function(){
			$(this).html($(this).children());
			$('.top-corner').css({"position":"relative"});
			$("#profile").attr('style','');
			$('#h1,#h2').hide();
		});
		}
	});

});
