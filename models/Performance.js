const mongoose = require('mongoose');
const { Schema } = mongoose;

const PerformanceSchema = Schema({
    employeeId: String,
    punctuality: String,
    performance: String,
    achievement: String,
    rating: String,
});

mongoose.model('performance', PerformanceSchema);
