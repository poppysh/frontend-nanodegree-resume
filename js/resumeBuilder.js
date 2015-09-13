var bio = {
	"name": "Sarah Zeenberg",
	"role": "Web Developer",
	"contact": {
		"mobile": "352.514.4816",
		"email": "sarah.zeenberg@gmail.com",
		"github": "poppysh",
		"location": "Miami, FL",
	},
	"welcomeMessage": "Developer with a designer's eye",
	"skills": [
		"Programming", "Social Media", "Print Design",
	],
	"biopic": "images/SZ_logo.png",
	display: function () {
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		$("#header").append(HTMLskills.replace("%data%", bio.skills));
	}
}

bio.display();
