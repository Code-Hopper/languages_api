let GetHome = (req, res) => {
    res.json({ message: "this is GetHome Function ", route: "you visited this -> /" })
}

let GetAbout = (req, res) => {
    res.json({ message: "this is GetAbout Function ", route: "you visited this -> /about" })
}

let GetServices = (req, res) => {
    res.json({ message: "this is GetServices Function ", route: "you visited this -> /service" })
}

let Get404 = (req, res) => {
    res.json({ message: "the data your are trying to look for does not exists !" })
}


export { GetHome, GetAbout, GetServices, Get404 }