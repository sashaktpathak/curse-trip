
const express = require('express')
const app = express()

const todos = ['one task', 'tow task']
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => res.send(`
<form method="post" action="/addtodo">
    <input name="tood">
    <input name="tood2">
    <input type="submit">
    <input formaction="/imhere" type="submit" value="resize">
<form>
<form action="/imhere">
   
</form>
<ul>
    <li>
    ${todos.join('</li><li>')}
    </li>
</ul>
`)
)
app.post('/addtodo',(req,res)=>{
    todos.push(req.body['tood'])
    res.redirect('/')
})
app.post('/imhere',(req,res)=>{
    /* var w = parseInt(req.body['tood'])
    var h = parseInt(req.body['tood2'])
    fs.readFile(
        __dirname + '/ass-logo.png',
        (err,data) => {
            if (err) throw err
            sharp(data).resize(w,h).toFile(__dirname+'/assi-logo.png',
            (err,info) => {
                if (err) console.error(err);
                console.log("done");
            }
            )
        }
    ) */
    todos.push(req.body['tood'])
    res.redirect('/')
}
)
app.listen(PORT);