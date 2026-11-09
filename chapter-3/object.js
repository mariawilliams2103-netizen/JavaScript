// JS - OBJECTS
const student = {
    firstName: "Mohamed",
    lastName: "Kargbo",
    age: 29,
    walk: true,
    girlfriend: false,
    university: "Limkokwing",
    program: "BSEM",
    occupation: "Web Developer",
    photo: "https://www.pixabay.com/mohamed-pic-002",
    website: "https://mohamed-kargbo.netlify.app/",


}


// PRINTING THE OBJECT
console.log(student);

// ACCESSING A PROPERTY OF AN OBJECT
console.log(student.photo);

// UPDATING AN ATTRIBUTE IN AN OBJECT
student.occupation = "Website Designer"
console.log(student);


// ADDING A NEW PROPERTY TO THE OBJECT
student.gender = "Male"
console.log(student);



//  EXERCISE 1
// Create an object for a citizen(at least 5 crucial infos) and print them to the console in an ID card format using the JS Template Literal.
console.log("***************** Citizen Information ******************");

const citizen = {
    firstName:  "Maria",
    middleName: "Leonaria",
    lastName: "Williams",
    age: 56,
    gender: "Female",
    height: "6ft",
    country: "Sierra Leane",
    nationality: "Sierra Leonean",
    region: "Christianity",
    tribe: "Mende",

}
console.log(`**************** SIERRA LEONE NATIONAL ID CARD **********************`);
console.log(`First Name: ${citizen.firstName}`);
console.log(`Middle Name: ${citizen.middleName}`);
console.log(`lastName: ${citizen.lastName}`);
console.log(`age: ${citizen.age}`);
console.log(`gender: ${citizen.gender}`);
console.log(`height: ${citizen.height}`);
console.log(`Country: ${citizen.country}`);
console.log(`Nationality: ${citizen.nationality}`);
console.log(`Region: ${citizen.region}`);
console.log(`Tribe: ${citizen.tribe}`);
console.log(`****************** SL ID CARD ********************`);



const house = {
    location: "Lumley",
    numberOfRooms: 4,
    parlour: 2,
    bathRooms: 5,
    owner: "Maria Williams",
    pricePerNight: 100,
    facilities: ["Internet", "One Mobile - Wifi", "Kitchen", "TV", "Car Park", "Dryer", "Pool", "Beach Access", "No Smoking", "No Pet"],

    apartment: {
        name: "Block D apartment",
        numberOfRooms: 2,
        gamingTV: 1
    }
}

console.log(house);
console.log(house.apartment);
console.log(house.facilities);





