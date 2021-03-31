// Usecase of using switch method
var firstName, age;
age = 16;
firstName = 'john'

age >= 16 ? console.log(firstName +" " + 'can drink beer') : console.log (firstName + 'is still aboy') 
age = prompt ('how old are u ?')
switch (true){
    case age > 10 && age < 15:
        console.log('u are a big boy');
        break;
    case age < 9:
        console.log(' that\'s still a child');
        break;
    case age > 15 && age < 30:
        console.log('old enough to impregnate a gurl');
        break;
    default:
        console.log('fucking input an age hommie')
        break;
}

const jonhTeam = (116 + 94 + 123) / 3;
var mikeScore;
mikeScore = (116 + 94 + 123) / 3;

if (jonhTeam > mikeScore) {
    console.log ('john\'s team won' + ' ' + jonhTeam)
}
else if (mikeScore > jonhTeam) {
    console.log ('mike\'s team won' + ' ' + mikeScore)
}

else if ( jonhTeam === mikeScore) {
    console.log ('it was a tie')
}

// a function that calculate the particular age of a user
 function myAge (birthYear){
     return 2018 - birthYear
 }

 var kunleAge = myAge (1996);
 var frankAge = myAge (1993)

 console.log(kunleAge,frankAge);

 /* A Function that tells if a user has reach a retirement age by calculating the users age 
and comparing it to the retirement  */ 
 function yearsUntilRetirement (year,name){
     var age = myAge (year);
     var retirementAge = 67 - age;
     console.log( name + ' ' + ' will retire in' + ' ' + retirementAge +' ' + 'years time' )
 }

 yearsUntilRetirement (1993, 'sam');

/* A tip calculator to tell the user if he or she what amount to tip an individual in a store depending 
 on the amount of the items bought by the user */

function tipCal (bills){
    var percentage;
    switch (true){
        case bills < 50 :
            percentage = 0.2; 
            return percentage * bills;
        case bills > 50 && bills < 200:
            percentage = .15;
            return percentage * bills;
        default:
        percentage = .1;
        return percentage * bills; 
            
    }
}
console.log(tipCal(20))
console.log(tipCal(600))
var bill = [120,222,300]

// var tipArray = [];
// console.log(tipCal([0,1,2]))

