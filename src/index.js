const app = require('./app');

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(app.get('port'), () => {
    console.log("esta en el puerto", app.get("port"));
});