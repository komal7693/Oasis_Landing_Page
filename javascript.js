function validateForm() {
  // Get form elements
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;

  // Validate form data
  if (name == "") {
    alert("Name is required");
    return false;
  }
  if (email == "") {
    alert("Email is required");
    return false;
  }
  if (password == "") {
    alert("Password is required");
    return false;
  }
  return true;
}
