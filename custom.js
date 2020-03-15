$(".form-rsvp button").click(function(){
	checkRSVP();
})

$('.rsvp-input').on('keydown', function(e) {
    if (e.which == 13) {
        e.preventDefault();
        checkRSVP();
    }
});

function checkRSVP(){
	if(!$(".rsvp-input").val() ) {
		$(".error").show().text("Please enter the code.");
	}else if($(".rsvp-input").val() === "0301"){
		window.open("https://forms.gle/zRU1mT1qQdFNfkkD9"); //plus one
	}else if($(".rsvp-input").val() === "1019"){
		window.open("https://forms.gle/KufcVtKfZc2CipMG8"); //single person
	}else{
		$(".error").show().text("Please enter a correct code.");
	}
}

$(".rsvp-input").focus(function(event) {
	/* Act on the event */
	$(".error").hide();
});

$(document).ready(function (){
	$("#rsvp").click(function (){
		$('html, body').animate({
			scrollTop: $(".rsvp").offset().top
		}, 2000);
	});
});