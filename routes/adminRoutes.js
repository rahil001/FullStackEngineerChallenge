const mongoose = require('mongoose');
const Employee = mongoose.model('employees');
const Performance = mongoose.model('performance');

module.exports = (app) => {
    // route for adding an employee
    app.post('/api/addEmployee', (req, res) => {
        const {
            name, password, designation, department, id
        } = req.body;
        const employee = new Employee({
            name, password, designation, department, id
        });
        if (name  && password) {
            employee.save(() => {
               return res.json({ employee, success: true });
            });
        }
    });

    // route for getting all the employees
    app.get('/api/getEmployees', (req, res) => {
        Employee.find({}, (err, employees) => {
            return res.json({ employees });
        });
    });

    // deleting an employee detail
    app.delete('/api/removeEmployee/:employeeId', (req, res) => {
        const empId = req.params.employeeId;
        // Make a Query to delete the record with specific employeeId
        Employee.findOneAndDelete({ id: empId }, function(err, data){
            if (!err) {
                return res.json({ data, success: true });
            }
            return res.json({ success: false });
        })
    });

    // updating an employee detail
    app.put('/api/updateEmployee/:employeeId', (req, res) => {
        const empId = req.params.employeeId;
        // Make a Query to update the record with specific employeeId
        Employee.findOneAndUpdate({ id: empId }, req.body, function(err, data){
            if (!err) {
                return res.json({ data, success: true });
            }
            return res.json({ success: false });
        })
    });

    // add performance review for an employee
    app.post('/api/addPerformanceReview/:employeeId', function (req, res) {
        debugger;
        const employeeId = req.params.employeeId;
        const {
            achievement, engagement, performance, punctuality, rating
        } = req.body;
        Performance.findOne({ employeeId }, function (err, resp) {
            if (resp) {
                return res.json({
                    msg: 'already exists'
                })
            }
            const performanceObj = new Performance({
                employeeId,
                achievement,
                engagement,
                performance,
                punctuality,
                rating
            });
            performanceObj.save(() => {
                return res.json({ performanceReview : performanceObj });
            });
        })
    })

};
