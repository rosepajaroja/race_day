/* Race Day Project | Codeacademy | Nov. 27, 2022

Instructions: 

Registration
9:30 AM - Adult and registered early
11:00 AM - Adult and registered late
12:30 PM - All Youth

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:
Early adults receive a race number at or above 1000.
All others receive a number below 1000.

Start time:
Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.

Youth registrants run at 12:30 pm (regardless of registration).

But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project. */

let raceNumber = Math.floor(Math.random() * 1000);

/* Create a variable that indicates whether a runner registered early or not. Set it equal to a Boolean value. You’ll change this later as you test different runner conditions */
let early = false; //can change this later

/* Create a variable for the runner’s age and set it equal to a number. You’ll change this later as you test different runner conditions. */
let age = 18; // change the age later

/* Create a control flow statement that checks whether the runner is an adult AND registered early. Add 1000 to their raceNumber if this is true. */
if (early && age > 18) {
  raceNumber += 1000; //
}

/* Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time. For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber. */

if (early && age > 18) {
  console.log(
    `Your race starts at 9:30AM, and your race number is ${raceNumber}.`
  );
} else if (!early && age > 18) {

/* “Late adults run at 11:00 am” Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am. Write the corresponding else if statement. Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.*/
  console.log(
    `Your race starts at 11:00AM, and your race number is ${raceNumber}.`
  );
} else if (age < 18) {

/* “Youth registrants run at 12:30 pm (regardless of registration)” For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.*/
  console.log(
    `Your race starts at 12:30PM, and your race number is ${raceNumber}.`
  );
} else {

/* Don’t forget about runners exactly 18 years old!
Add an else statement that logs a statement to the console telling the runner to see the registration desk.*/
  console.log(`Please see the registration desk.`);
}
