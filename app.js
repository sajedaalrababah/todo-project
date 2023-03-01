
var userName = prompt ("Please enter your name");
console.log(userName);




var gender = prompt("Please enter your gender");
 if (gender == 'male'||"female") {
  console.log(gender);
}else{
alert("your gender is wrong")
}

var age = prompt ("enter your age ");
console.log(age);
if( age <= 0){
    alert ("No age like this")
}

var skip =confirm ("skip the welcoming message?");
console .log(skip);
if (gender == "male"&&skip==false)
{
    alert("Welcome, MR. " + userName );
}
else if (gender == "female"&& skip==false)
{
    alert("Welcome, MS. " +userName );
}
else{
    alert("the gender undefined");
}

