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

var education = {
	"schools": [
		{
			"name": "Santa Fe College",
	 		"location": "Gainesville, FL",
			"degree": "AS",
	 		"majors": "Graphic Design",
			"dates": 2003,
			"url": "http://www.sfcollege.edu/",
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/",
		}
	],

	display: function () {
		$("#education").prepend(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools.name);
		$("#education").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
		$("#education").append(formattedDegree);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools.dates);
		$("#education").append(formattedDate);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
		$("#education").append(formattedLocation);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools.majors);
		$("#education").append(formattedMajors);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
		$("#education").append(formattedTitle);

		$("#education").append(HTMLonlineClasses);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
		$("#education").append(formattedOnlineSchool);
		var formattedOnlineCourses = HTMLonlineDates.replace("%data%", education.onlineCourses.date);
		$("#education").append(formattedOnlineCourses);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses.url);
		$("#education").append(formattedOnlineUrl);
	},
};

bio.display();
education.display();