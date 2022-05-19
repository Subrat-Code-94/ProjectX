//alert('JS file is called');
//document.write('the JS - Home Page')
var person = prompt("Please enter your name");
var msg = "Welcome to the Page Mr."+person
var con = true
document.getElementById("msg").innerHTML =msg
if(con){
console.log(msg)
}