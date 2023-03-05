import express from "express";


const app = express()
const port = Number(process.env.PORT) || 8080

app.get("/.well-known/fastly/logging/challenge", (req, res) => {
    res.status(200).send("*")
})
app.use(express.text())
app.post("*", (req, res) => {
    console.log(req.body)
    res.status(200).json({ok: true})
})

app.listen(port, () => console.log(`APP is listening on ${port}`))
