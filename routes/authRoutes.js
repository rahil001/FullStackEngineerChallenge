
const stubAdminCredential = {
    name: 'rahil',
    password: '123456'
};

module.exports = (app) => {
    app.post('/api/login', (req, res) => {
        const {
            name, password
        } = req.body;
        if (name === stubAdminCredential.name && password === stubAdminCredential.password) {
            return res.send({
                name,
                success: true,
                category: 'admin'
            })
        }
        return res.send({
            name,
            success: true,
            category: 'employee'
        })
    });
};
