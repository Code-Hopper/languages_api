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

let GetRandomLanguage = async (req, res) => {
    // make a random number , filter the number with language ids, return the json data with status 200

    try {
        let randomNumber = Math.floor((Math.random() * languages.length) + 1)

        console.log(randomNumber)

        let randomLanguage = await LanguageModel.findOne({ _id: randomNumber })

        if (randomLanguage == null) {
            throw ("unable to get random language")
        }

        res.status(200).json({ message: "You got a random language !", language: randomLanguage })

    } catch (err) {
        res.status(404).json({ message: err })
    }

}

let GetLanguages = (req, res) => {
    // return all the data from the array
    res.status(200).json({ collection: languages })
}

let GetSearchData = async (req, res) => {
    // read the query, filter the data, return json

    console.log(req.query)

    let { scope, level } = req.query

    // to make capitalized text

    // "word1 word2"

    let makeCapitalizedText = (text) => {

        text = text.replace(text.charAt(0), text.charAt(0).toUpperCase(0))

        text = text.replace(text.charAt(text.indexOf(" ") + 1), text.charAt(text.indexOf(" ") + 1).toUpperCase())

        return text
    }

    try {

        // console.log(scope)
        if (scope && !level) {

            scope = makeCapitalizedText(scope)

            let scopeLanguages = await LanguageModel.find({ scope: { $eq: scope } })

            if(scopeLanguages.length == 0 ){
                throw("invalid search")
            }

            res.status(200).json({ message: `languages based on ${scope} scope !`, scopeLanguages })


        } else if (!scope && level) {

            level = makeCapitalizedText(level)

            let levelLanguages = await LanguageModel.find({ level: level })

            res.status(200).json({ message: `languages based on ${level} level !`, levelLanguages })

        } else if (scope && level) {

            scope = makeCapitalizedText(scope)

            level = makeCapitalizedText(level)

            let scopeLevelLanguages = await LanguageModel.find({ level : level , scope : { $eq: scope } })

            res.status(200).json({ message: `languages based on ${level} level & ${scope} scope !`, scopeLevelLanguages })

        } else if (!scope && !level) {
            res.status(401).json({ message: `Invalid search Parameters !` })
        }

    } catch (err) {
        console.log("err while fetch the data for filters", err)
        res.status(500).json({ message: `unable to get data from database !` })
    }


}

export { GetHello, GetRandomLanguage, GetLanguages, GetSearchData, readDataFromDatabase }