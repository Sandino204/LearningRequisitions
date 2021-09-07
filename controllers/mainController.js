const mainController = {}

mainController.ping = (req, res) => {
    return res.status(200).json({
        success: true, 
        data: "Caio é um professor da porra"
    })
}

mainController.getParams = (req, res) => {
    const id = req.params.id
    const name = req.params.name 

    console.log(req.params.lala)

    let result = 'olá, ' + name + ' seu id é: ' + id
    
    return res.status(200).json({
        success: true,
        data: result
    })
}

mainController.getQuery = (req, res) => {
    const id = req.query.id
    const name = req.query.name 

    console.log(req.query.lala)

    let result = 'olá, ' + name + ' seu id é: ' + id
    
    return res.status(200).json({
        success: true,
        data: result
    })
}

mainController.getBody = (req, res) => {
    const id = req.body.id
    const name = req.body.name

    console.log(req.body.lala)

    let result = `olá, ${name} seu id é:  ${id}`

    return res.status(200).json({
        success: true,
        data: result
    })
}

module.exports = mainController