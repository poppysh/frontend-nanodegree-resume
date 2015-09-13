//header
var name = "Sarah Zeenberg";
var formattedName = HTMLheaderName.replace(
	"%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace(
	"%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//contact
var contact = {
	"mobile": "352.514.4816",
	"email": "sarah.zeenberg@gmail.com",
	"github": "poppysh",
	"location": "Miami, FL",
}

$("#topContacts").append(HTMLmobile.replace("%data%", contact.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", contact.email));
$("#topContacts").append(HTMLgithub.replace("%data%", contact.github));
$("#topContacts").append(HTMLlocation.replace("%data%", contact.location));

//pic
var pic = "images/SZ_logo.png";

$("#header").append(HTMLbioPic.replace("%data%", pic));