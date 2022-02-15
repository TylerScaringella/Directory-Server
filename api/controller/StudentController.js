const Student = require('../model/Student')

const getStudents = async (req, res) => {
    res.send(await Student.find({}))
}

const createStudent = async (req, res) => {
    res.send(await Student.create(req.body))
}

const deleteStudent = async (req, res) => {
    let { id } = req.params

    res.send(await Student.findByIdAndDelete(id))
}

const getStudent = async (req, res) => {
    let { name } = req.params

    const student = await Student.find({
        name: name
    })

    if(!student) return res.status(400).send({
        error: 'BAD_REQUEST',
        errorMessage: 'The student provided could not be found'
    })

    res.status(200).send(student)
}

module.exports = {
    getStudents,
    createStudent,
    deleteStudent,
    getStudent
}