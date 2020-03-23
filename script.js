//grab items that thare checked
$("input[type='checkbox']").on("click", function (e) {
	//NO PREVENT DEFAULT. YOU WANT THE BOX TO CHECK
	// $("ul li.active").removeClass("active"); //disable all active classes

	//making checked items active
	$("input[type='checkbox']:checked").each(function () {
		var checkbox = $(this),
			elective = checkbox.data("price");
		console.log(elective)
	});
});

// get radio button selections
$("body").on("click", "#radio-btn", function (e) { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements
	output =
		$('input[name=income]:checked',
			'#tablet-radio').val();
	console.log(output)
});

// get dropdown menu selections
$("body").on("click", "#submit", function (e) { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements
	console.log($("#tablet-pulldown").val());
});

// // get datalist selections
$("input[name=fav-sports]").bind('input', function () {
	console.log($(this).val());
});