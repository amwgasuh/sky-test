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

/*************************************************************/

//var fruits = ["oranges", "apples", "pears", "apples"];
//var found_apples = fruits.indexOf("apples");
//window.alert(found_apples);
//document.write(found_apples);
//var found_apples = fruits.lastIndexOf("apples");
//window.alert(found_apples);
//document.write(found_apples);

/*************************************************************/

//function pass_grades(prev_value, next_value) {
//	return (prev_value - next_value);
//}
//var grades = [2, 4, 8, 16, 32];
//var the_result = grades.reduceRight(pass_grades);
//window.alert(the_result);
//console.log(pass_grades);
//document.write(the_result);

/*************************************************************/

//var students = [["thomas", 92, 90],
//				 ["Roger", 87, 78],
//				 ["Amber", 82, 89],
//				 ["Jennifer", 62, 90]
//];
//for (var i = 0; i < students.length; i++) {
//	for ( var j =0; j < students[i].length; j++) {
//		document.write("students[" + i + "][" +j + "] =" + students[i][j] + "<br />");
//	}
//}

/*************************************************************/

//var students = [["thomas", 92, 90],
//				  ["Roger", 87, 78],
//				  ["Amber", 82, 89],
//				  ["Jennifer", 62, 90]
//];
//for (var i = 0; i < students.length; i++) {
//	for ( var j =0; j < students[i].length; j++) {
//		if (j === 0) {
//			document.write(students[i][j] + ":");
//			console.log(students.length);
//		} else if (j === students[i].length -1) {
//			document.write(students[i][j] + "<br />");
//		} else {
//			continue;
//		}
//	}
//}

/*************************************************************/

//var computer_parts = [["monitors", "LCD", "VC"],
//					  ["motherboards,", "Fast"],
//					  ["Chips", "{entium", "very Fast"],
//					  ["HD", "100-500", "FR"],
//					  ["DVD-", "B-CDs", "B-DVDs", "L to both!"],
//					  ["Cases", "As", "C of C"],
//					  ["PW", "W can get one!"]
//];
//for (var i = 0; i < computer_parts.length; i++) {
//	for (var j = 0; j < computer_parts[i].length; j++) {
//		if (j === 0) {
//			document.write(computer_parts[i][j] + ":");
//		} else if (j === computer_parts.length -1) {
//			document.write(computer_parts[i][j] + "<br />");
//		} else {
//			document.write(computer_parts[i][j] + ",");
//		}
//	}
//}

/*************************************************************/

//var car = {
//	seats: "cloth",
//	engine: "V-6"
//};
//var s = "seats";
//function show_seat_type(sts) {
//	window.alert(car.sts);
//}
//show_seat_type(s);

/*************************************************************/

//练习:8-1
//var computer = {
//	Speed: "4GHZ",
//	hd: "500GB",
//	RAM: "8GB"
//}
//document.write("Computer Speed: " + computer.speed +"<br />");
//document.write("Computer Hard Disk: " + computer.hd +"<br />");
//document.write("Computer RAM: " + computer.RAM);

/*************************************************************/

//function Car(seats, engine, radio) {
//	this.seats = seats;
//	this.engine = engine;
//	this.radio = radio;
//	this.describe = describe_car;
//}
//function describe_car() {
//	document.write("This amazing car has these features: ");
//	document.write(this.seats + " 	seats, " + this.engine + " engine, ");
//	document.write(this.radio);
//}
//var work_car = new Car("cloth", "V-6", "Tape Deck");
//work_car.describe();

/*************************************************************/

//function Car(seats, engine, radio) {
//	this.seats = seats;
//	this.engine = engine;
//	this.radio = radio;
//}
//Car.prototype.locks = "automatic";
//var work_car = new Car("cloth", "V-6", "Tape Deck");
//var family_car = new Car("cloth", "V-4", "CD Changer");
//work_car.locks = "manual";
//window.alert(work_car.hasOwnProperty("locks"));
//window.alert(family_car.hasOwnProperty("locks"));

/*************************************************************/

//function Car(seats, engine, radio) {
//	this.seats = seats;
//	this.engine = engine;
//	this.radio = radio;
//}
//var work_car = new Car("cloth", "V-6", "Tape Deck");
//for (var prop_name in work_car) {
//	if	(work_car.hasOwnProperty(prop_name)) {
//		document.write(prop_name + ": " + work_car[prop_name] + "<br />");
//	}
//}

/*************************************************************/
//练习8.2
//构造函数
//function Computer(type, processor, ram, hd) {
//	this.type = type;
//	this.processor = processor;
//	this.ram = ram;
//	this.hd = hd;
//}
//构造函数/原型结合模式
//Computer.prototype.describe = function() {
//	document.write("<p>" + this.type + ":<br />");
//	document.write("Processor:" + this.processor + "<br />");
//	document.write("RAM:" + this.ram + "<br />");
//	document.write("Hard Disk:" + this.hd + "</p>");
//}
//var work_computer = new Computer("Work", "2GHZ", "8GB", "1TB");
//var home_computer = new Computer("Home", "2GHZ", "4GB", "500GB");
//var gaming_computer = new Computer("Gaming", "4GHZ", "16GB", "2TB");
//work_computer.describe();
//home_computer.describe();
//gaming_computer.describe();

/*************************************************************/

