function namechange(firstName) {
    if (firstName !== "") {
        document.getElementById("heading").innerHTML="Hello " + firstName + ", Welcome to Pauls";
	    document.getElementById("nameForm").style.display = "none";
	    document.getElementById("tempheading").style.display = "none";
        document.getElementById("heading").style.display = "block";
    } else {
        console.log("Invalid Name Argument passed")
    }
}
function displayMessage(name) {
    namechange(name);
    console.log("Name Changed");
    createCookie("name",name,30);
    console.log("Cookie Created");
}
function loadname() {
    var namecookie = getCookie("name");
    if (namecookie !== " " || namecookie !== null || namecookie !== "") {
        var namecookieedited = namecookie.split(",")[0];
        console.log("Name Changed");
        namechange(namecookieedited);
    }  else {
        console.log("No Cookie Found");
    } 
}