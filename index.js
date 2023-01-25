const express = require('express')
const mongoose = require('mongoose');
mongoose.connect("mongodb://db-mongo:27017/server-mongo");
const Schema = mongoose.Schema;
const serverSchema = new Schema({
    time: String,
    message: String
})
const model = mongoose.models.server_safekids || mongoose.model('server_safekids', serverSchema)
const app = express()
app.use(express.json());
const port = process.env.PORT || 443;

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.post('/add-value', (req, res) => {
    console.log(req.body)
    const item = {
        time: req.body.time,
        message: req.body.message
    }
    const val = new model(item);
    val.save(function (err, result ){
        if (err) {
            res.send(err);
        } else {
            res.send(result)
        }
    })
})
app.post('/get-values', ((req, res) => {
    model.find({}).then(function (users){
        res.send(users);
    })
}))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})