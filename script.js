$(document).ready(function () { //on DOM ready, bind clicks

	// Validate min and max numbers
	$("input[max], input[min]").on("keyup", function (e) { //any input that has a min or max defined
		var ele = $(this), //the input field we're typing in
			min = ele.attr("min"), //grab the minimum value as defined
			max = ele.attr("max"), //grab the maximum value as defined
			type = ele.attr("type"), //grab the type of input this is
			value = ele.val(), //grab the value as entered
			container = ele.closest("div");

		/*
			WE NEED TO CHECK THE FIELD TYPE. DIFFERENT TYPES CAN HAVE
			MIN/MAX VALUES AND WE MAY NOT WANT TO
			HANDLE EACH THE SAME WAY
		*/
		if (type === "number") {
			if (min) { //if a minimum value was defined
				min = parseFloat(min); //because this is a number make it a float
			} else {
				min = false; //if one wasn't defined, set min to false
			}

			if (max) { //if a max was defined
				max = parseFloat(max); //because this is a number, make it a float
			} else {
				max = false; //if it wasn't defined, set it to false
			}

			if (min && value < min) { //if a minimum was defined AND the value entered is less, display an error
				alert("That value is too low!");
				ele.val(""); //clear the value out
			}

			if (max && value > max) { //if a max was defined AND the value entered is greater, display an error
				alert("That value is too high!");
				ele.val(""); //clear the value out
			}
		}
	});

	$("#compute").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior

		// getNumber1 = $("#number1"),
		// num1 = parseFloat(getNumber1.val()); //store the number of input 1
		numBananas = parseFloat($("#banana").val()); //store the number of banana input
		// num2 = parseFloat($("#number2").val()); //store the number of input 2

		console.log(numBananas);
		// runMath(); //call runMath function
		// showIt(); //call the showIt function
	}); // close get value of input fields

});