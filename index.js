const myProject = require('express')
const uuid = require('uuid')
const cors = require('cors')
const port = 3001

const app = myProject()
app.use(myProject.json())
app.use(cors())

const users = []

const checkUsersID = (request, response, next) => {
    const { id } = request.params

    const index = users.findIndex(user => user.id === id)

    if (index < 0) {
        return response.status(404).json({ error: "User not found" })
    }

    request.userIndex = index
    request.userId = id

    next()
}

app.get('/users', (request, response) => {
    return response.json(users)
})

app.get('/users/:id', checkUsersID, (request, response) => {
    const index = request.userIndex

    const consultUser = users[index]

    return response.json(consultUser)
})

app.post('/users', (request, response) => {
    try {
        const { name, age } = request.body

        if (age < 18) throw new Error("Only over 18 years old!")

        const createdUser = { id: uuid.v4(), name, age }

        users.push(createdUser)

        return response.status(201).json(createdUser)
    } catch (err) {
        return response.status(400).json({ error: err.message })
    } finally {
        console.log('finalizado')
    }
})

app.put('/users/:id', checkUsersID, (request, response) => {
    const index = request.userIndex
    const id = request.userId
    const { name, age } = request.body

    const updatedUser = { id, name, age }

    users[index] = updatedUser

    return response.json(users)
})

app.delete('/users/:id', checkUsersID, (request, response) => {
    const index = request.userIndex

    users.splice(index, 1)

    return response.status(204).json()
})

app.listen(port, () => {
    console.log(`🚀Server is starting on port ${port}`)
})