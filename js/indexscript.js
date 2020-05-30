function calculateInsurance() {
	
	var fName = document.getElementById("fname").value;
	var age = Number(document.getElementById("age").value);
	var country = document.getElementById("country").value;
	var hPower = Number(document.getElementById("hpower").value);


	if (country == "austria") {
		var insurance = Math.round(hPower * 100 / age + 50);
		output.style.visibility = "visible"
		output.innerHTML = fName + ", your insurance costs " + insurance + "€ .";
	}

	else if (country == "hungary") {
		var insurance = Math.round(hPower * 120 / age + 100);
		output.style.visibility = "visible"
		output.innerHTML = fName + ", your insurance costs " + insurance + "€ .";
	}

	else {
		var insurance = Math.round(hPower * 150 / (age+3) + 50);
		output.style.visibility = "visible"
		output.innerHTML = fName + ", your insurance costs " + insurance + "€ .";
	}

}


var output = document.getElementById("calprint");
	
var input = document.getElementById("calsubmit");

input.addEventListener('click', calculateInsurance, false);