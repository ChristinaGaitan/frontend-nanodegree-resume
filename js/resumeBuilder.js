var bio = {
  "name" : "Luz Christina Gaitan Torres",
  "role" : "Web Developer",
  "contacts" : {
    "mobile": "3121225740",
    "email": "christina.gaitan@gmail.com",
    "github": "ChristinaGaitan",
    "twitter": "@thikaris",
    "location": "Colima, Col. Mx."
    },
    "welcomeMessage": "Hi :D",
    "skills": ["lol producer", "Gordo fanatic"],
    "biopic": "http://www.panoramio.com/photo/30472296"
}

var education = {
  "schools": [
    {
      "name": "CENIDET",
      "location": "Cuernavaca, Mor. Mx.",
      "degree": "Master",
      "majors": ["CompSci"],
      "dates": 2012,
      "url": "http://www.cenidet.edu.mx/"
    },
    {
      "name": "Facultad de Telematica",
      "location": "Colima, Col. Mx.",
      "degree": "BA",
      "majors": ["Telematics"],
      "dates": 2007,
      "url": "http://telematicanet.ucol.mx/"
    }
  ],
  "onlineCourses": [
    {  
      "title": "JavaScript Basics",
      "school": "Udacity",
      "date": "How to use Git an Github",
      "url": "https://www.udacity.com/course/viewer#!/c-ud775"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Tango Source", 
      "title": "Developer",
      "location": "Colima, Col. Mx.", 
      "dates": "2014-2015",
      "description": "Web Developer"
    },
    {
      "employer": "IIE", 
      "title": "Developer",
      "location": "Cuernavaca, Mor. Mx.", 
      "dates": "2012-2014",
      "description": "Web Developer"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "One",
      "dates": "May 2015",
      "description": "Web",
      "images": ["http://uno.com", "http://uno-uno.com"]
    },
    {
      "title": "Two",
      "dates": "June 2014",
      "description": "Web",
      "images": ["http://dos.com", "http://dos-dos.com"]
    }
  ]
}

var name = 'Luz Christina Gaitan Torres'
var role = 'Web Developer'

var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderRole.replace('%data%', role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
}