const express = require('express')
const app = express()

app.use(express.json())

const root = '/api/persons'

let persons = [
    { 
      id: 1,
      name: "Arto Hellas", 
      number: "040-123456"
    },
    { 
      id: 2,
      name: "Ada Lovelace", 
      number: "39-44-5323523"
    },
    { 
      id: 3,
      name: "Dan Abramov", 
      number: "12-43-234345"
    },
    { 
      id: 4,
      name: "Mary Poppendieck", 
      number: "39-23-6423122"
    }
]

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
app.post(root, (request, response) => {
    const body = request.body
    if (persons.find(person => person.name === body.name)) {
        response.status(400).json({
            error: "name must be unique"
        })
        return
    }

    if (persons.find(person => person.number === body.number)) {
        response.status(400).json({
            error: "number must be unique"
        })
        return
    }

    const ids = persons.map(n => n.id)
    let id = null;
    while (true) {
        const newId = Math.floor(Math.random() * 90000) + 10000;

        if (!ids.includes(newId)) {
            id = newId;
            break;
        }
    }

    const person = {
        id: id,
        name: body.name,
        number: body.number,
    }

    persons = persons.concat(person)
    response.json(person)
})

// DELETE A PERSON
app.delete(`${root}/:id`, (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

// PORT & SERVER
const PORT = 3001;
app.listen(PORT, ()=> {
    console.log('listening on PORT', PORT)
})