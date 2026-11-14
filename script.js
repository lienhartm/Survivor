let lives = 3;
let heart = "";

const sections = document.querySelectorAll('section');
//console.log(sections);
function display(x) {
	//console.log(x);
	for(let i = 0; i < sections.length; i++) {
		if (lives == 0) { display(34); }
		sections[i].style.display = 'none';
	}
	sections[x].style.display = 'block';
}

display(0);

function live(lives) {
	if (lives <= 0) {
		lives = 0;
		// display the game over screen
		display(35);
	}
	for (let i = 0; i <= lives; i++) {
		heart += "❤️";
	}
	heart.replaceAll(""," ");
	document.getElementById('lives').innerHTML = heart;
}

function item() {
	document.getElementById('items').innerHTML = objects.join(" - ");
}

function screen() {
	document.getElementById('objects').innerHTML = "";
	for(let obj of objects) {
		document.getElementById('objects').innerHTML += `<li onclick="remove(objects.indexOf('${obj}'))">${obj}</li>`;
	}
}

let lost = ["an axe", "1 kg of airline food", "a 20cm knife", "a small first aid kit", "1 litre of drinking water (in a plastic container)", "a handgun with three bullets", "1 litre of petrol (in a plastic container)"];
let objects = [];
function add(object) {
	if (objects.length < 3 && !objects.includes(lost[object])) {
		objects.push(lost[object]);
	}
	//console.log(objects.length);
	//console.log(objects);
	screen();
	live(lives);
	item();
}


function remove(object) {
	objects.pop(objects.indexOf(object));
	screen();
	item();
}

function object(card) {
	if (objects.length == 3) {
		display(card);
	}
}

/* fish */
function fish() {
	if  (objects.includes(lost[2])) {
		objects.pop(objects.indexOf(lost[2]));
		display(21);
		item();
	}
}

function lose(card) {
	lives--;
	live(lives);
	display(card);
}

function coconut() {
	objects.push("coconuts");
	display(4);
	item();
}

function medecine(card) {
	if (objects.includes(lost[3])) {
		objects.pop(objects.indexOf(lost[3]));
	}
	 else if (!objects.includes(lost[3])) {
		lives--;
		live(lives);
	}
	item();
	display(card);
}

function food() {
	if (objects.includes(lost[1])) {
		objects.pop(objects.indexOf(lost[1]));
	}
	item();
	display(16);
}

function tree() {
	lives--;
	objects.push("coconuts");
	live(lives);
	display(5);
	item();
}

function axe() {
	if (objects.includes(lost[0])) {
		objects.push("raft");
		display(8);
	}
	else if (!objects.includes(lost[0])) {
		display(26);
	}
	item();
}
	
function gun() {
	if (objects.includes(lost[5])) {
		objects.pop(objects.indexOf(lost[5]));
		lives--;
		live(lives);
		display(13);
	}
	item();
}

function petrol() {
	if (objects.includes(lost[6])) {
		objects.pop(objects.indexOf(lost[6]));
		display(22);
	} else if (!objects.includes(lost[6])) {
		display(29);
	}
	item();
}

function swim() {
	objects.pop(Math.floor(Math.random() * objects.length));
	lives--;
	live(lives);
	display(12);
	item();
}

function eat(card) {
	if (objects.includes(lost[0]) || objects.includes(lost[2])) {
		objects.pop(objects.indexOf("coconuts"));
		display(card);
	}
	item();
}

function no(card) {
	if (!objects.includes(lost[0]) || !objects.includes(lost[2])) {
		display(card);
	}
}

function pig() {
	if (objects.includes("coconuts")) {
		objects.pop(objects.indexOf("coconuts"));
	}
	if (objects.includes(lost[1])) {
		objects.pop(objects.indexOf(lost[1]));
	}
	item();
	display(5);
}

function raft() {
	if (objects.includes("raft")) {
		lives--;
		live(lives);
	}
	display(17);
}

function drink() {
	if (objects.includes(lost[4])) {
		objects.pop(objects.indexOf(lost[4]));
	}
	item();
	display(24);
}
