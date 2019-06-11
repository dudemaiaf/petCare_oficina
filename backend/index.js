const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const db = require('./queries')


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

// ROTAS USUARIOS
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/createUsers', db.createUser)
app.put('/updateUsers/:id', db.updateUser)
app.delete('/deleteUsers/:id', db.deleteUser)

// ROTAS PETS
app.get('/pets', db.getPets)
app.get('/pets/:id', db.getUserById)
app.post('/createPet', db.createUser)
app.put('/updatePet/:id', db.updateUser)
app.delete('/deletePet/:id', db.deleteUser)

// ROTAS RELACIONAMENTOS
app.get('/relationships', db.getRelationships)
app.get('/relationships/:id', db.getRelationshipById)
app.post('/createRelationship', db.createRelationship)
app.put('/updateRelationship/:id', db.updateRelationship)
app.delete('/deleteRelationship/:id', db.deleteRelationship)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})