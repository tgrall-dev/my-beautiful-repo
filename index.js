

const express = require('express')
const app = express()
const port = 3000

const x = "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";

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/some/path', function(req, res) {
    let url = req.param("url");
    // BAD: the host of `url` may be controlled by an attacker
    if (url.includes("example.com")) {
        res.redirect(url);
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("Hello world");
