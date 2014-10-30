var work = {
    "jobs": [
        {
            "employer" : "Yunen He",
            "title" : "Independent Game Developer",
            "location" : "Canberra Australia",
            "dates_worked" : 2014,
            "description" : "HTML5 Game Development"
        },
        {
            "employer" : "Yunen He",
            "title" : "XiaMen MakerSpace",
            "location" : "XiaMen China",
            "dates_worked" : 2014,
            "description" : "A community-operated workspace where people with common interests, often in computers, machining, technology, science, digital art or electronic art; can meet, socialize and collaborate."
        }
    ]
}

work.display = function() {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates_worked);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedworkEmployerTitle = formattedworkEmployer + formattedworkTitle;
        $(".work-entry:last").append(formattedworkEmployerTitle);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkDescription);
    });
}

var bio = {
    "name": "Yunen He",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Outstanding people always stand out.",
    "contacts": {
        "mobile_number": "61-0420947611",
        "email" : "heyunen@hotmail.com",
        "github" : "https://github.com/heyunen",
        "location" : "Canberra Australia"
    },
    "pictureURL":"images/yunen.png",
    "skills" : ["AngularJS", "HTML","CSS", "JavaScript","Haskell","Java"]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile_number);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};


var education = {
    "schools": [
        {
            "name" : "Australian National University",
            "location": "Acton, Australian Capital Territory, Australia",
            "degree": "Information technology",
            "majors" : ["Software Development"],
            "dates_attended": "July 2011",
            "url": "http://www.anu.edu.au/"
        }],
    "onlineCourses":[
        {
            "title": "Introduction to Game Design",
            "school": "MITx",
            "dates_attended":"Oct 22, 2014",
            "url":"https://courses.edx.org/courses/MITx/11.126x/3T2014/info"
        },{
            "title": "Introduction to Computational Thinking and Data Science",
            "school": "MITx",
            "dates_attended":"May 09, 2014",
            "url":"https://courses.edx.org/courses/MITx/6.00.2x/1T2014/info"
        },
        {
            "title": "Introduction to Computer Science and Programming Using Python",
            "school": "MITx",
            "dates_attended":"Apr 25, 2014",
            "url":"https://courses.edx.org/courses/MITx/6.00.1-x/1T2014/info"
        }]
};

education.display = function(){
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates_attended);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last a").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);

        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    if (education.onlineCourses.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);;
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates_attended);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }
};

var projects = {
    "projects" : [
        {
            "title" : "Word Game (Java and JavaFX)",
            "dates_worked" : "20 October 2013",
            "description" : "",
            "images" : ["images/project1.png"]
        },
        {
            "title" : "MochiStaker Clone (Phaser)",
            "dates_worked" : "3 July 2014",
            "description" : "",
            "images" : ["images/project2.png"]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates_worked);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    })
};

function inName() {
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

work.display();
bio.display();
education.display();
projects.display();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);