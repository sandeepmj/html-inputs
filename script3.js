/**
 hijack the submit event on a form making the 'enter' button and all other native
 form submission events pipe into the same function
 */

$("body").on("submit", "#numbers-input", function (e) {
  const form = e.target;
  const $form = $(e.target);

  //do the stuff you want on submit
  numBananas = parseFloat($("#banana").val()); //store the number of banana input
  console.log(numBananas);
});


/**
 * Listen for keyup, keydown, keypress AND change to ensure all browsers are happy
 */
$("body").on("keyup keydown keypress change", "input[max], input[min]", function (e) {
  //use e.target instead of this so that you can use () => {} functions in the future
  let ele = $(e.target),
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