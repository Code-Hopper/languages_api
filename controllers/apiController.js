import { languages } from "../dataset.js"

let GetHello = (req, res) => {
    res.status(200).json({
        message: " this is a node.js api app create for testing",
        whatCanYouDo: {
            task1: {
                details: "you can get a random coding language",
                apiRoute: "/api/random",
                method: "Get",
                resultType: "JSON"
            },
            task2: {
                details: "you can get a scope, level of coding language",
                apiRoute: "/api/search/",
                method: "Get",
                resultType: "JSON"
            },
            task3: {
                details: "Get All Languages",
                apiRoute: "/api/languages",
                method: "Get",
                resultType: "JSON"
            }
        }
    })
}

let GetRandomLanguage = (req, res) => {
    // make a random number , filter the number with language ids, return the json data with status 200

    try {
        let randomNumber = Math.floor((Math.random() * languages.length) + 1)

        console.log(randomNumber)

        let [result] = languages.filter((language) => {
            return language.id === randomNumber
        })

        if (!result) {
            throw ("unable to fetch random language !")
        }

        console.log(result)

        res.status(200).json({ message: "You got a random language !", language: result })
    } catch (err) {
        res.status(404).json({ message: err })
    }

}

let GetLanguages = (req, res) => {
    // return all the data from the array
    res.status(200).json({ collection: languages })
}

let GetSearchData = (req, res) => {
    // read the query, filter the data, return json

    console.log(req.query)

    let scope = req.query.scope

    // console.log(scope)

    // filter the data

    let result = languages.filter((language) => {
        let data = language.scope.filter((x) => {
            return x.toLowerCase() == scope.toLowerCase()
        })
        
        // we will always get the data (i.e. [] it will counted as true statement  )

        if(data.length > 0){
            return language
        }
    })

    console.log("result")
    console.log(result)

    res.status(200).json({message:`languages based on ${scope} scope !`, result})

}

export { GetHello, GetRandomLanguage, GetLanguages, GetSearchData }