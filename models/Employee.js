const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    name: String,
    password: String,
    designation: String,
    department: String,
    id: String
});

mongoose.model('employees', EmployeeSchema);
