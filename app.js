//usando objeto express
const express = require('express')

//App de express
const app = express()

//usaremos json
app.use(express.json())

//puerto de applicacion 3000
const port = 3000


//http methods
app.get('/v1/explorers', (req, res) => {
		console.log(`Api Explorers GET ALL requests ${new Date()}`)
		const explorer1 = {id: 1, name: "Juan1"}
		const explorer2 = {id: 2, name: "Juan2"}
		const explorer3 = {id: 3, name: "Juan3"}
		const explorer4 = {id: 4, name: "Juan4"}
		const explorers = [explorer1, explorer2, explorer3, explorer4]
		res.status(200).json(explorers)
})

//initialize the app
app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
})
