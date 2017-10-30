//var num1 = 2;
//	result = ++num1;
//alert("num1= " + num1 + "result=" + result);
//num1 = 2;
//result = num1++;
//alert("num1= " + num1 + " result= " + result);

/*************************************************/

//var paycheck = 2000;
//alert(paycheck += paycheck);
//alert(paycheck -=500);
//alert(paycheck -=paycheck);
//alert(paycheck +=500);
//alert(paycheck -=80);

/*************************************************/

//var havecookbook = "yes";
//	meatloafrecipe = "yes";
//if (havecookbook === "yes") {
//	if (meatloafrecipe === "yes") {
//		window.alert("Recipe found");
//	}
//	else {
//		window.alert("Have the book but no recipe");
//	}
//}
//else {
//	window.alert("You need a cookbook");
//}

/*************************************************/

//var username = window.prompt("Give me your name!","");
//if ( (username === null ) || (username === "" ) ) {
//	document.write("Hello,Random Nameless Person!");
//}
//else {
//	document.write("Hello, " + username + "!");	
//}

/*************************************************/

// 6.1练习
//var msg = "",
//	city = window.prompt("Whit is he name of your city?");
//if ( (city === null) || (city ==="" ) ) {
//	msg = "No city enterd. Cannot determine delivery availabilite.";
//}
//else {
//	switch (city) {
//		case "Johnstown" :
//			msg = "We can have items delivered to you in 3days.";
//			break;
//		case "Donville" :
//			msg = "We can have items delivered to you in 1 week";
//			break;
//		case " Daineltown || Maryville " :
//			msg = "We can have items delivered to you in 2 weeks";
//			break;
//		default :
//		msg = "Sorry!We do not deliver to your city yet.";
//	}
//}
//document.write(msg);

/*************************************************************/

//var student0 = "thomas",
//	student1 = "Roger",
//	student2 = "Amber",
//	student3 = "Jennifer";
//document.write(student0 + "<br />");
//document.write(student1 + "<br />");
//document.write(student2 + "<br />");
//document.write(student3 + "<br />");

/*************************************************************/

//	6.2练习
//var msg = "",
//	items = 0,
//	city = window.prompt("Whit is he name of your city?");
//if ( (city === null) || (city ==="" ) ) {
//	msg = "No city enterd. Cannot determine delivery availabilite.";
//}
//else {
//	switch (city) {
//		case "Johnstown" :
//			msg = "We can have items delivered to you in 3days.";
//			items = 10;
//			break;
//		case "Donville" :
//			msg = "We can have items delivered to you in 1 week";
//			items = 5;
//			break;
//		case " Daineltown || Maryville " :
//			msg = "We can have items delivered to you in 2 weeks";
//			items = 2;
//			break;
//		default :
//		msg = "Sorry!We do not deliver to your city yet.";
//		items = 0;
//	}
//}
//document.write(msg);
//if (items > 0) {
//	document.write("<p>We can deliver up to " + items + "item to your city.</p>");
//}
//	document.write("<p>Print this out, write your item numbers below, and mailit to us to order.</p>");
//	for (var count = 1; count<=items; count++) {
//		document.write(count + ".______<br>");
//	}

/*************************************************************/

//7.1练习
//var computer_parts = ["Monitors", "Motherboards", "Chips", "Hard Drives", "DVD-ROWS", "Cases", "Power Suplies"],
//	i = 0;
//for (var i = 0; i<computer_parts.length; i++) {
//	console.log(computer_parts[i]);
//}
var fruits = ["oranges", "apples", "pears", "grapes"];
var somefruits = fruits.slice(0,4);
console.log(somefruits);
