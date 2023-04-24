const express = require("express");
const app = express();

const port = 3000;



app.get("/", (req, res)=>{
    res.sendFile("public.html", { root: __dirname });
});

app.listen(port, ()=>{
    console.log("app's running on port ", port)
})