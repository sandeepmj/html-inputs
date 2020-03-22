$("body").on("click", "#radio-btn", function (e) { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements
	// 	// $("input[max], input[min]").on("keyup", function (e) { //any input that has a min or max defined
	// 	// 	let ele = $(this), //the input field we're typing in
	// 	// 		min = ele.attr("min"), //grab the minimum value as defined
	// 	// 		max = ele.attr("max"), //grab the maximum value as defined
	// 	// 		type = ele.attr("type"), //grab the type of input this is
	// 	// 		value = ele.val(), //grab the value as entered
	// 	// 		container = ele.closest("div");
	output =
		$('input[name=income]:checked',
			'#tablet-radio').val();
	console.log(output)
});
// data list capture
$("input[name=fav-sports]").bind('input', function () {

	console.log($(this).val());


});