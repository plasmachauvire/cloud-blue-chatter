 $(document).ready(function() {

	 $('#user-name').keydown(function(e) {
		 if(e.keyCode == 13){ //Enter pressed
			 go();
		 }
	 });
	 $('.go-user').on('click', function(e) {
		 go();
	 });
 });

 var name = '';
 function go() {
	 name = $('#user-name').val();
	 $('#user-name').val('');
	 $('.user-form').hide();
	 $('.chat-box').show();
 };
