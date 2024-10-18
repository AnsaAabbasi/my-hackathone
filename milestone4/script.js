// get refrences to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prvent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    //generate the resume content dymamically
    var resumeHTML = "\n    <h2><b> Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditanle=\"true\">".concat(name, "</span></p>\n    <p><b>Name:</b><span contenteditanle=\"true\"> ").concat(email, "</span></p>\n    <p><b>Name:</b><span contenteditanle=\"true\"> ").concat(phone, "</span></p>\n\n    <h3>Education<h3>\n    <p contenteditanle=\"true\">").concat(education, "</p>\n\n     <h3>Experience<h3>\n    <p contenteditanle=\"true\">").concat(experience, "</p>\n\n     <h3>skills<h3>\n    <p contenteditanle=\"true\">").concat(skills, "</p>\n    ");
    //display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
