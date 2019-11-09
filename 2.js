function is_username_valid(username) {
var lowercaseRe = /[a-z]/g;
  if(username.length == 5 
	&& username.match(lowercaseRe).length == username.length) {
    	return true;
    }
    return false;
}

function is_password_valid(password) {
  
  var numberRe = /[0-9]/g;

  var specialRe = /[@, &]/g;

  var uppercaseRe = /[A-Z]/g;

  if(
     && numberRe.test(password).length == 2

     && specialRe.test(password)).length == 1

     && uppercaseRe.test(password).length == 4 {
     return true;
  }

  return false;
}
