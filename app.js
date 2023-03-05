
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


const arrOfAnswer=[];



function singleOrMaried(){
var single = prompt ("are you single ");
if (single=="yes"||single=="no"){
  arrOfAnswer.push(single);  
}
else if(single===null||single=="") {
     arrOfAnswer.push("invalid");}
}
singleOrMaried();

function studentOrEmploer() {
    var student= prompt ("are you student ");
    if (student=="yes"||student=="no"){
        arrOfAnswer.push(student);  
       }
       else if(student===null||student=="") {
            arrOfAnswer.push("invalid");}
}
studentOrEmploer();

function programerOrNO() {
    var programer= prompt ("are you a programer ");
    if (programer=="yes"||programer=="no"){
        arrOfAnswer.push(programer);  
       }
       else if(programer===null||programer=="") {
            arrOfAnswer.push("invalid");}
}
programerOrNO();


for (let i = 0; i <= arrOfAnswer.length-1; i++) {
    console.log(arrOfAnswer);
    
}





