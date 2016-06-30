$(document).ready(

	function(){

		console.log("jQuery is ready")


		$(".click-toggle").click(
			function(){
				if ($(".click-toggle").hasClass("on")) {
					$(this).addClass("off");
					$(this).removeClass("on");
				}
				else if ($(".click-toggle").hasClass("off")) {
					$(this).addClass("on");
					$(this).removeClass("off");
				}
			}
		);
	}
)