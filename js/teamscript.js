
var teamMembers = 
	[["Fran", "fran@index.com", "img/person1.png", "cat" ],
	["Bill", "bill@index.com", "img/person2.png", "turtle"],
	["Fritz", "fritz@index.com","img/person3.png", "llama"]];



class	Team {
	name = " ";
	email = " ";
	image = " ";
	fav = " ";

	constructor (name, email, image, fav) {
		this.name = name;
		this.email = email;
		this.image = image;
		this.fav = fav; 
	}

	output() {
		place.innerHTML = "<img src=' " + this.image + " ' /> <br>" + "Name: " + this.name + "<br>" + "Mailadress: " + this.email + "<br>"
	}

	animal() {
		favInput.innerHTML = "Favorite Animal: " + this.fav + "<br>"
	}
}

var person1 = new Team (teamMembers[0][0],teamMembers[0][1],teamMembers[0][2],teamMembers[0][3],);
var person2 = new Team (teamMembers[1][0],teamMembers[1][1],teamMembers[1][2],teamMembers[1][3],);
var person3 = new Team (teamMembers[2][0],teamMembers[2][1],teamMembers[2][2],teamMembers[2][3],);
var team = [person1, person2, person3];

// Adding Ids to divs
var teamoutputElements = document.querySelectorAll("#teamoutput > div");

for (a=0; a < teamoutputElements.length;a++){

	teamoutputElements[a].id = "member" + a
	teamoutputElements[a].className = "members"
}
var favInput = document.getElementById("favinput")


// load and click event loop
for (i = 0; i < team.length; i++ ) {

	let person = team[i];

	place = document.getElementById("member" + i);
	place.addEventListener("load", person.output(), false);

	members =document.querySelectorAll(".members");
	mems= members[i];

	mems.addEventListener('click' , function(){person.animal()} , false );
	};

