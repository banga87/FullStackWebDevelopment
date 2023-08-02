const persons = require('./data')
const express = require('express')
const app = express()

app.use(express.json())

const root = '/api/persons'

//PHONEBOOK INFO
app.get(`/info`, (request, response) => {
    const phonebookSize = persons.length;
    const date = new Date()
    response.send(
        `
            <p>Phonebook has info for ${phonebookSize} people</p>
            <p>${date}</p>
        `
    )
})

// GET ALL
app.get(root, (request, response) => {
    response.json(persons)
})

// GET SINGLE
app.get(`${root}/:id`, (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

// CREATE A PERSON

// DELETE A PERSON

// PORT & SERVER
const PORT = 3001;
app.listen(PORT, ()=> {
    console.log('listening on PORT', PORT)
})