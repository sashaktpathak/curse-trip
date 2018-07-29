const express = require('express')
const app = express()

const PORT = process.env.PORT || 33333;

app.get('/',(requestAnimationFrame,res)=>{
    res.send('HELLO');
})
app.listen(PORT)