let GetHello = (req, res) => {
    res.json({
        message: " this is a node.js api app create for testing",
        whatCanYouDo: {
            task1: {
                details: "you can get a random coding language",
                apiRoute: "/api/random",
                method: "Get",
                resultType: "JSON"
            },
            task2: {
                details: "you can get a scope of coding language",
                apiRoute: "/api/scope/:scope",
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

}

export { GetHello }