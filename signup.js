$(document).ready(function(){
	var $first_name=$('#first_name');
	var $last_name=$('#last_name');
	var $enrollment_no=$('#enrollment_no');
	var $institute=$('#institute');
	var $department=$('#department');
	var $contact_no=$('#contact_no');
	var $email=$('#email');
	var $city=$('#city');
	var $state=$('#state');
	var $password=$('#ps1');
	var $dob=$('#dob');

	$('#signupsubmit').click(function(ev){
		if ($password.val()==$('#ps2').val()){

		// 		var profile={
		// 			password: $password.val(),
		// 			first_name: $first_name.val(),
		// 			last_name: $last_name.val(),
		// 			email: $email.val(),
		// 			dob: $dob.val(),
		// 			city: $city.val(),
		// 			state: $state.val(),
		// 			institute: $institute.val(),
		// 			upload_id: null,
		// 			enrollment_no: $enrollment_no.val(),
		// 			department: $department.val(),
		// 			contact_no: $contact_no.val(),
			
		// };

				//console.log(profile);

		$.ajax({
							
							type: "POST",
							dataType: "json",
							url: "http://grievanceapi.herokuapp.com/api/profile/",
							data: {
					password: $password.val(),
					first_name: $first_name.val(),
					last_name: $last_name.val(),
					email: $email.val(),
					dob: $dob.val(),
					city: $city.val(),
					state: $state.val(),
					institute: $institute.val(),
					upload_id: null,
					enrollment_no: $enrollment_no.val(),
					department: $department.val(),
					contact_no: $contact_no.val(),
			
		},
							success: function(newprofile){
								window.location="Login.html";
							},
							error: function(xhr){
								console.log("error"+xhr.status+xhr.statusText+xhr.responseText);
								//alert(xhr.status);
								//alert(xhr.statusText);
								//alert(xhr.responseText);
							}
								
					});
		}
		else{
			alert("password not matched")
		}
		ev.preventDefault();
		
	});

		

	
});