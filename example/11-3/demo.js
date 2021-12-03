window.onload = function() {
	// Mixing jQuery codes with JavaScript codes
	let ps = $('body > p');
	//console.log(ps[0]);

	// Get the last element in JavaScript and jQuery
	let psJS = document.querySelectorAll('body > p');
	let emlengthJS = psJS.length;
	let lastPosJS = emlengthJS - 1;
	//console.log(psJS[lastPosJS]);

	//jQuery, eq() = equal or equivalent
	let psJQ = $('body > p');
	//console.log(psJQ.eq(-1)); // Negative number = counting from the end
	//console.log(psJQ.eq(0)); // 0 or positive number = counting from the beginning

	//Get HTML from an element: innerHTML vs. html()
	//console.log(psJS[lastPosJS].innerHTML);
	//console.log(psJQ.eq(-1).html()); //jQuery
	//console.log(psJQ.eq(-1).innerHTML); //Mixing jQuery with Javascript = 'undefined'

	//Change the HTML contents of an element
	//psJS[lastPosJS].innerHTML = 'Content Changed!'
	psJQ.eq(-1).html('Content Changed!'); //jQuery
}