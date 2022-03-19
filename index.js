// Code your solution here

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

let findMatching = (drivers, str)=> {
   let newStr =  drivers.filter((x) => {
       return (x.toLowerCase() === str.toLowerCase())
    })
    return newStr
}

let fuzzyMatch = (drivers, str) =>{
    let newStr = drivers.filter((index) => {
        return (index.substring(0,str.length) === str)
    })
    return newStr;
}


let matchName = (driver, str) => {
    return drivers.filter((index) => {
        return(index.name === str)
    })
}

const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

console.log(matchName(drivers,'Bobby'))

