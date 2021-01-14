const arrayOfElements = [1,1,2,3,4,2,4,5,2,5,6,8]
const arrayPersonCities = [
    {
        name: "John",
        age: 22,
        country: "Portugal",
        city: "Porto",
        job: "Design"
    },
    {
        name: "John",
        age: 33,
        country: "Portugal",
        city: "Lisbon",
        job: "Design"
    },
    {
        name: "John",
        age: 33,
        country: "Portugal",
        city: "Lisbon",
        job: "Developer"
    },
    {
        name: "John",
        age: 35,
        country: "Portugal",
        city: "Porto",
        job: "Developer"
    }
]


/**
 * 
 * Basic examples
 * 
 */
function basic() {
    const setNumbers = new Set(arrayOfElements)
    console.log("Example with numbers", setNumbers)

    const setOfPersonLiveInPorto = new Set(arrayPersonCities.filter(person => person.city === "Porto"))
    const setOfPersonLiveInLisbon = new Set(arrayPersonCities.filter(person => person.city === "Lisbon"))

    console.log("Person live in Porto", setOfPersonLiveInPorto)
    console.log("Person live in Lisbon", setOfPersonLiveInLisbon)

    // Unique values
    const arrayCities = new Set(arrayPersonCities.map(person => person.city))
    console.log("Cities ", arrayCities) 
}


/**
 * 
 * My examples of Set
 * 
 */
function main() {
    basic()
}

main()
