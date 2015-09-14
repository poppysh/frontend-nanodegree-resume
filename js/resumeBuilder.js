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
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
		$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
		$("#topContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
		$("#topContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
		$("#topContacts").append(formattedLocation);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedPic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);
		$("#header").append(HTMLskillsStart);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills);
		$("#header").append(formattedSkills);

	},
};

bio.display();