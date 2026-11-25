require('dotenv').config();

const express = require("express");
const connectDB = require('./config/db');
const PORT = process.env.PORT;
const app = express();

app.use(express.json());


/*get resuests*/
app.get('/', (req, res) => {
    res.send("Welcome to glowmate");
});
/*post resuests*/
app.post('/signup',(req, res) => {
    console.log(req.body);
     res.send('Signup request received!');
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})