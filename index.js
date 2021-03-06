import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const finals2014 = fifaData.filter((item) => {
    if(item['Year'] === 2014 && item['Stage'] === 'Final') {
        return item
    };
});
console.log(finals2014);
console.log('a', finals2014[0]['Home Team Name']);
console.log('b', finals2014[0]['Away Team Name']);
console.log('c', finals2014[0]['Home Team Goals']);
console.log('d', finals2014[0]['Away Team Goals']);
console.log('e', finals2014[0]['Win Conditions']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    let finalsData = data.filter(item => 
        item['Stage'] === 'Final')
    return finalsData
};

console.log('task 2', getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let years = callback(fifaData).map((finalsMatch) => {
        return finalsMatch.Year
    })
    return years
};

console.log('task 3', getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

    let winners = callback(fifaData).map((finalsMatch) => {
        if (finalsMatch['Home Team Goals'] > finalsMatch['Away Team Goals']) {
            return finalsMatch['Home Team Name']
        } else if(finalsMatch['Away Team Goals'] > finalsMatch['Home Team Goals']) {
            return finalsMatch['Away Team Name']
        }
    })
    return winners;
};

console.log('task4', getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners... winning team each year
 * callback function getYears... every year from finals dataset
 */

function getWinnersByYear(country, year) {
    for( let i = 0; i < country.length; i++){
        console.log(`In ${year[i]}, ${country[i]} won the world cup!`)
    }
};

console.log('Task 5:')
getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    let averages = {};
    let homeCount = 0;
    let awayCount = 0;
    //array of home team scores
    let homeScores = data.map((item) => {
        return item['Home Team Goals']
    });
    let awayScores = data.map((item) => {
        return item['Away Team Goals']
    });

    const homeAverage = Math.round(homeScores.reduce((total, curr) => {
        return total += curr
    }, 0) / homeScores.length);

    const awayAverage = Math.round(awayScores.reduce((total, curr) => {
        return total += curr
    }, 0) / awayScores.length)

    return `Home team average: ${homeAverage}, away team average: ${awayAverage}`

};

console.log('task 6', getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */
// "Home Team Initials": "ITA",
// "Away Team Initials": "TCH"
function getCountryWins(data, teamInitials) {

    //take team initials
    //check if team is home or away initials
    //if it's home team initials and homescore > awayScore add 1
    //if it's away team initials and awayscore > homescore add 1
    let countryWins = data.reduce((acc, curr) => {
        if (curr['Home Team Initials'] === teamInitials && curr['Home Team Goals'] > curr['Away Team Goals']) {
            acc += 1
        } else if(curr['Away Team Initials'] === teamInitials && curr['Away Team Goals'] > curr['Home Team Goals']) {
            acc += 1
        }
        return acc
    }, 0)
    return countryWins
};

console.log('stretch1', getCountryWins(fifaData, 'ITA'));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
