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
};
	
bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);
		
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
		$("#header").append(formattedSkills);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
		$("#header").append(formattedSkills);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
		$("#header").append(formattedSkills);
	}
};

var work = {
	"jobs": [
		{
			"employer": "Babywearing: the magazine",
			"title": "Publisher",
			"location": "Miami, FL", 
			"dates": "2014-Present",
			"description": "Design, photograph, edit, publish and promote international niche magazine.",
		},

		{
			"employer": "Simply the Best Magazine",
			"title": "Art Director",
			"location": "Boca Raton, FL", 
			"dates": "2007-Present",
			"description": "Design bi-monthly glossy magazine including all editorials and advertisements. Also maintin and design the website.",
		},

		{
			"employer": "The Gainesville Sun",
			"title": "Advertising Designer",
			"location": "Gainesville, FL", 
			"dates": "2010-2011",
			"description": "Built ads and advertorials for both newspaper and magazine clients. Designed sales materials for marketing campaigns.",
		},
    ],
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

var projects = {
	"projects": [
		{
			"title": "Portfolio Site",
			"dates": "August 2015",
			"description": "Built a portfolio site to showcase my projects using HTML, CSS and Bootstrap.",
			"images": ["images/PortfolioProject.png", "images/PortfolioProject2.png"],
		},
	],
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
				$(".project-entry:last").append(formattedImages);
			}
		}
	}
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
	]
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[0].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[0].dates);
		$(".education-entry:last").append(formattedDate);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[0].majors);
		$(".education-entry:last").append(formattedMajors);
	}
		
	for (onlineCourse in education.onlineCourses) {
		$(".education-entry:last").append(HTMLonlineClasses);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineCourses = HTMLonlineDates.replace("%data%", education.onlineCourses[0].date);
		$(".education-entry:last").append(formattedOnlineCourses);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
};

$("#mapDiv").append(googleMap);


bio.display();
work.display();
projects.display();
education.display();