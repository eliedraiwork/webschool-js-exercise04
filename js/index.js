//  User input
const salary = parseFloat(prompt('Please enter your salary'));
const peopleAtHome = parseInt(prompt('Please enter number of people at home'));

// electricity and water
const electricity = 77 * peopleAtHome;
const water = 54 * peopleAtHome;

// calculate Arnona
// 260 OR 350
let arnona;
if (salary < 5000 && peopleAtHome > 2) {
	arnona = 260;
} else {
	arnona = 350;
}

// calculate rent
const rent = 2950;

// family allocations
const numberOfChildren = peopleAtHome - 2;
let allocations = 0;
if (peopleAtHome >= 3 && peopleAtHome <= 5) {
	allocations = numberOfChildren * 203;
} else if (peopleAtHome > 5) {
	allocations = numberOfChildren * 180;
} else {
	alert('You have no right to allocations');
}

const total = (salary + allocations - electricity - water - rent - arnona) * 12;
alert('At the end of the year you have $' + total);
