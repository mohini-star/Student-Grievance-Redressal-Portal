$(document).ready(function() {

	// $('.content').load('Login.html');
	//Load complain
	$('#profilepage,#profilepage1').click(function(e){
		e.preventDefault();
		$('.content').load('profile.html');
		$('#profile').hide();
		// var x=$('#display');
		// x.style.display = "none";
	});
	
	$('#complainview').click(function(e){
			e.preventDefault();
			$('.content').load('adminpanel.html');
		});

	$('#Complain').click(function(e){
			e.preventDefault();
			$('.content').load('complain.html');
		});
	// $('#home').click(function(e){
	// 		e.preventDefault();
	// 		$('.content').load('Login.html');
	// 	});
	//storing html of side navigation bar elements
		var arr=[];
			$('.sidenav').each(function(index){
					arr[index]=$(this).html();
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
				$('#h1,#h2,#h3').hide();
	
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
				$('#h1,#h2,#h3').hide();
			});
			}
		});
	
	
	//contents fade on clicking navbar toggler	
		$('.navbar-toggler').click(function(){
			var c='on',
			el='.navcontent';
			if ($(el).hasClass(c)) {
				$('.navcontent').css({'opacity':'1'}).removeClass(c);
			}
			else {
				$('.navcontent').css({'opacity':'0.5'}).addClass(c);
			}
			
		});	
	
	//On clicking profile icon
		$('#profileDropdown').click(function(){
				$("#profile").fadeToggle(2);
		});
		
	//----------------------------------------------------------------------
		var token = localStorage.getItem("token");
		//var login_email = localStorage.getItem("login");
		var first_name = localStorage.getItem("first_name");
		var last_name = localStorage.getItem("last_name");
		//var i = localStorage.getItem("id");
		var requestData = "json";
		var resultElement = $('#pfname');
		var result1=' ';
		//alert(token);
		$.ajax({
	
			url:    "http://grievanceapi.herokuapp.com/api/profile/",
			method: 'GET',
			data:  { format : requestData },
			dataType: 'json',
			headers: {
						'Authorization': token
					},
			success: function (data){
				
				//alert(login_email);
				//alert(key);
				//alert(data[i].first_name+' '+data[i].last_name);

				if(data.length > 0){
					result1 += '<h6>' + first_name + ' ' + last_name + '</h6>';
				}else{
					result1 += '<h3>Data not found!</h3><br>';
				}
	
				resultElement.html(result1);
	
			}
	
		});
		$("#logout").click(function(){
			window.localStorage.setItem('token',null);
		});
		
		if(token=='null'){
			window.location = "file:///C:\Users\hp\Desktop\Frontend_version1.1\index.html";
		}
	
	});
	