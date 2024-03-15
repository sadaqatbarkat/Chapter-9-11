// q1


// var city = prompt("Enter Your City");



// if (city === "karachi"){
// 	console.log("Welcome to city of lights")
// }
// else {
// 	console.log("welcome to our city")
// }

//Q2

// var gender = prompt("Enter Your Gender");

// if (gender==="male"){
// 	console.log("Good Morning Sir")
// }
// else {
// 	console.log("Good Morning Ma'am");
// }

//Q3

// var signal = prompt(" You Can ask the meaning of Road Signal light")

// if (signal === "red") {
// 	document.write(
// 		"<table border = 1px solid  >" +
// 		"<tr>" +
// 		"<th>" + "Signal color  " + "</th>"
// 		+ "<th>" + "Message" + "</th>"



// 		+ " </tr>"
// 		+ "<tr>"
// 		+ "<th>" + "Red" + "</th>"
// 		+ "<td>" + "Must Stop" + "</td>"
// 		+ "</tr>"

// 		+ "</table>"
// 	)
// }



// else if (signal === "yellow") {



// 	document.write(
// 		"<table border = 1px solid   >" +
// 		"<tr>" +
// 		"<th>" + "Signal color  " + "</th>"
// 		+ "<th>" + "Message" + "</th>"

// 		+ "<tr>"
// 		+ "<th>" + "Yellow" + "</th>"
// 		+ "<td>" + "Ready to move" + "</td>"
// 		+ "</tr>"
// 	)
// 		+ "</table>"


// 	}

// else if(signal==="green")  {

// document.write(

// 	"<table border = 1px solid  >" +
// 	"<tr>" +
// 	"<th>" + "Signal color  " + "</th>"
// 	+ "<th>" + "Message" + "</th>"



// 	+ " </tr>"

// 	+ "<tr>"
// 	+ "<th>" + "Green" + "</th>"
// 	+ "<td>" + "Move now" + "</td>"
// 	+ "</tr>"







// 	+ "</table>"
// )

// }

// else{
// 	document.write(" Sorry! You are entering wrong light color")
// }



//Q4


// let fuel = prompt("How much remaing fuel of Car ? ")


// if (fuel <= "0.25"){
// 	console.log("Please refill the fuel in your car.")
// }


//Q5

//A True

// let a = 4;   
// if (++a===5){
// 	alert(a)
// }


//B True

// let b = 82;
// if (b++===83){

// }



//C   False
// let c = 12;

// if (c++===13){
// 	alert(c)
// }






//True
//  c = 12;

// if (c===13){
// 	alert(c)
// }



//C False
// c =13;
// if (++c<14){
// 	alert(c)
// }

// if (c===14){
// 	alert(c)
// }


//D Ture

// let materialCost=20000;
// let laborCost = 2000;
// let totalCost = materialCost+laborCost;
// if (totalCost===laborCost+materialCost){

// alert(totalCost);

// }


//F True


// if ("car"< "cat"){
// 	alert("Car is smaller than cat")
// }



//Q6
// let secret = 7;
// secret=prompt("Guess the number which number I have stored?")
// if (secret==="7"){
// 	console.log("Bingo! Correct answer.")
// }
// else if (secret>"+10"){
// 	console.log("Close enough to the correct answer.")
// }
// else{
// 	console.log("Sorry! You are entering wrong number")
// }

//Q7
// let totalMarks = prompt("Enter your total marks")

// let subject1 = +prompt("Enter the English subject marks ")
// let subject2 = +prompt("Enter the Science subject marks")
// let subject3 = +prompt("Enter the  Math subject marks")
// let obtainedmarks = subject1 + subject2 + subject3;
// let percentage = obtainedmarks / totalMarks * 100 ;
// percentage = percentage.toFixed(1 )



// if (percentage >= 80) {
// 	document.write(
// 		"<table>"
// 		+ "<h1>" + "Marks Sheet" + "</h1>"
// 		+ "<tr>"
// 		+ "<th class=one>" + "Total Marks :" + "</th>" + "<th class=total>" + totalMarks + "</th>"

// 		+ "<tr>"
// 		+ "<th>" + "Marks obtained :" + "</th>" + "<th id= per >" + obtainedmarks + "</th>"

// 		+ "</tr>"
// 		+ "<tr>"
// 		+ "<th class=one>" + "Percentage :" + " </th>" + "<th   class=total>" + percentage +  "</th>"
// 		+ "</th>"
// 		+ "<tr>"
// 		+ "<th class=two>" + "Grade :" + "</th>" + "<th id= level class=total>" + "A-one" + "</th>"


// 		+ "</tr>"
// 		+ "<tr>"
// 		+ "<th class=three>" + "Remarks :" + "</th>" + "<th class=remark class=total>" + "Excellent" + "</th>"



// 		+ "</tr>"





// 		+ "</table>"





// 	)






// }
// else if (percentage >= 70) {
// 	document.write(
// 		"<table>"
// 		+ "<h1>" + "Marks Sheet" + "</h1>"
// 		+ "<tr>"
// 		+ "<th class=one70 >" + "Total Marks :" + "</th>" + "<th class=total70>" + totalMarks + "</th>"

// 		+ "<tr>"
// 		+ "<th>" + "Marks obtained :" + "</th>" + "<th class=obt  >" + obtainedmarks + "</th>"

// 		+ "</tr>"
// 		+ "<tr>"
// 		+ "<th class=per70>" + "Percentage :" + " </th>" + "<th class=percen  >" + percentage + "</th>"
// 		+ "</th>"
// 		+ "<tr>"
// 		+ "<th class=grade70>" + "Grade :" + "</th>" + "<th class=good >" + "A" + "</th>"


// 		+ "</tr>"
// 		+ "<tr>"
// 		+ "<th class=remark70>" + "Remarks :" + "</th>" + "<th class=best>" + "Good" + "</th>"



// 		+ "</tr>"





// 		+ "</table>"





// 	)






// }

// else if (percentage < 60) {
// 	document.write(
// 		"<table class=margin>"
// 		+ "<h1>" + "Marks Sheet" + "</h1>"
// 		+ "<tr>"
// 		+ "<th class=one70 >" + "Total Marks :" + "</th>" + "<th class=eleven >" + totalMarks + "</th>"

// 		+ "<tr>"
// 		+ "<th>" + "Marks obtained :" + "</th>" + "<th class=twelve  >" + obtainedmarks + "</th>"

// 		+ "</tr>"
// 		+ "<tr>"
// 		+ "<th class=per70>" + "Percentage :" + " </th>" + "<th class=thirteen  >" + percentage + "</th>"
// 		+ "</th>"
// 		+ "<tr>"
// 		+ "<th class=grade70>" + "Grade :" + "</th>" + "<th class=fourteen>" + "B" + "</th>"


// 		+ "</tr>"
// 		+ "<tr >"
// 		+ "<th class=remark70>" + "Remarks :" + "</th>" + "<th class=fifteen>" + "You need to improve" + "</th>"



// 		+ "</tr>"





// 		+ "</table>"





// 	)






// }

// else if (percentage < 70) {
// 	document.write(
// 		"<table>"
// 		+ "<h1>" + "Marks Sheet" + "</h1>"
// 		+ "<tr>"
// 		+ "<th class=one70 >" + "Total Marks :" + "</th>" + "<th class=total70>" + totalMarks + "</th>"

// 		+ "<tr>"
// 		+ "<th>" + "Marks obtained :" + "</th>" + "<th class=obt  >" + obtainedmarks + "</th>"

// 		+ "</tr>"
// 		+ "<tr>"
// 		+ "<th class=per70>" + "Percentage :" + " </th>" + "<th class=percen  >" + percentage + "</th>"
// 		+ "</th>"
// 		+ "<tr>"
// 		+ "<th class=grade70>" + "Grade :" + "</th>" + "<th class=good >" + "Fail" + "</th>"


// 		+ "</tr>"
// 		+ "<tr>"
// 		+ "<th class=remark70>" + "Remarks :" + "</th>" + "<th class=best>" + "Sorry" + "</th>"



// 		+ "</tr>"





// 		+ "</table>"





// 	)






// }




















//Q8

// let divisible = prompt("Enter any number I will tell You Is It divisible of 3 or not?");


// if (divisible % 3 =="0"){
// 	console.log( divisible," is divisible of 3 .")
// }

// else{
// 	console.log("Sorry! It is not divisible of 3")
// }


//Q9

// let evenOdd = prompt("Enter any number I will tell you It is Even or Odd number")


// if (evenOdd % 2 === 0){
// 	console.log( evenOdd ,"is a even number")

// }

// else{
// 	console.log (evenOdd, "is a odd number")
// }


//Q10

// let t = prompt("Enter the temperature degree and I tell you what is situation of season?")

// if (t>40){
// 	console.log("It is too hot outside.")
// }
// else if (t>30) {
// 	console.log("The Weather today is Normal")
// }


// else if (t>20){
// 	console.log("Today's Weather is Cool.")
// }
// else{
// 	console.log("OMG! Today's Weather is so cool.")
// }


//Q11



// let firstNumber = + prompt("Enter the first Number");
// let secondNumber = + prompt("Enter the second Number")

// let operation = prompt("+ -  * / %")
// if (operation=="+"){
// 	console.log(firstNumber+secondNumber)
// }
// else if (operation=="-"){
// 	console.log(firstNumber-secondNumber)
// }


// else if (operation=="*"){
// 	console.log(firstNumber*secondNumber)
// }

// else if (operation=="/"){
// 	console.log(firstNumber/secondNumber)
// }

// else{
// 	console.log(firstNumber%secondNumber)
// }