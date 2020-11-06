$(document).ready(function(){
	var $category=$('#category');
	var $sub_category=$('#sub_category');
	var $subject=$('#subject');
	var $desc=$('#desc');
	var token = localStorage.getItem("token");
	$('#complainsubmit').click(function(ev){


					
		$.ajax({
							
							type: "POST",
							dataType: "json",
							url: "http://grievanceapi.herokuapp.com/api/complaint/",
							data: {category: $category.val(),
								sub_category: $sub_category.val(),
								subject: $subject.val(),
								complaint_text: $desc.val()},
							beforeSend: function (xhr) {
			                    //alert(token);
			                    xhr.setRequestHeader('Authorization', "token" + " " + token);
			                },
							success: function(response){
								alert("Complaint posted");
								
								//console.log(response);
							},
							error: function(xhr){
								console.log("error"+xhr.status+xhr.statusText+xhr.responseText);
								//alert(xhr.status);
								//alert(xhr.statusText);
								//alert(xhr.responseText);
							}
								
					});
		ev.preventDefault();

	});			
});