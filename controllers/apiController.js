import { languages } from "../dataset.js"

import { LanguageModel } from "../Models/languages.js"

// read data from database

let readDataFromDatabase = async (req, res) => {

    try {

        let result = await LanguageModel.find()

        console.log("we got some data from database")
        console.log(result)

    } catch (err) {
        console.log("unable to get the data from database ", err)
    }

}



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

    let { scope, level } = req.query

    // console.log(scope)
    if (scope && !level) {
        let result = languages.filter((language) => {

            let data = language.scope.filter((x) => {
                return x.toLowerCase() == scope.toLowerCase()
            })

            // we will always get the data (i.e. [] it will counted as true statement  )

            if (data.length > 0) {
                return language
            }

        })

        res.status(200).json({ message: `languages based on ${scope} scope !`, result })


    } else if (!scope && level) {

        let result = languages.filter((language) => {
            return language.level.toLowerCase() === level.toLowerCase()
        })

        res.status(200).json({ message: `languages based on ${level} level !`, result })

    } else if (scope && level) {

        let result = languages.filter((language) => {

            let data = language.scope.filter((x) => {
                return x.toLowerCase() == scope.toLowerCase()
            })

            // we will always get the data (i.e. [] it will counted as true statement  )

            if (data.length > 0) {
                if (language.level.toLowerCase() === level.toLowerCase()) {
                    return language
                }
            }

        })

        res.status(200).json({ message: `languages based on ${scope} scope & ${level} level !`, result })

    } else if (!scope && !level) {
        res.status(401).json({ message: `Invalid search Parameters !` })
    }


}

export { GetHello, GetRandomLanguage, GetLanguages, GetSearchData , readDataFromDatabase }