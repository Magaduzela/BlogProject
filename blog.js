/*location.href = "./contact.html";*/

function submit() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var mnumber = document.getElementById('mnumber').value;
    var email = document.getElementById('email').value;
    var province = document.getElementById('province').value;
    var subject = document.getElementById('subject').value;
    if (fname == "" && lname == "" && mnumber == "" && email == "" && province == "" && subject == "") {
        alert("Name must be filled out");

    } else {
        contactForm();


    }
}

function contactForm() {
    var formData = {};
    formData["fname"] = document.getElementById('fname').value;
    formData["lname"] = document.getElementById('lname').value;
    formData["mnumber"] = document.getElementById('mnumber').value;
    formData["email"] = document.getElementById('email').value;
    formData["province"] = document.getElementById('province').value;
    formData["subject"] = document.getElementById('subject').value;
    return formData;
}