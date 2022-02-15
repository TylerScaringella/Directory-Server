const StudentController = require('./controller/StudentController')

module.exports = (app) => {
    app.get('/student', StudentController.getStudents)
    app.get('/student/:name', StudentController.getStudent)
    app.post('/student', StudentController.createStudent)
    app.delete('/student/:id', StudentController.deleteStudent)

    app.use('/*', (req, res) => {
        res.status(404).send({
            error: 'NOT_FOUND',
            errorMessage: 'The requested resource could not be found'
        })
    })
}