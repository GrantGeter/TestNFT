const express = require('express')
const router = express.Router();
const app = express()
const cors = require('cors');
const path = require('path')
const port = process.env.PORT || 50080

let glbpath = "";

router.get('/kekeblue', function (req, res) {
    res.sendFile(__dirname + '/public/kekeblue.html')
})

router.get('/kekegreen', function (req, res) {
    res.sendFile(__dirname + '/public/kekegreen.html')
})

router.get('/kekehoney', function (req, res) {
    res.sendFile(__dirname + '/public/kekehoney.html')
})

router.get('/kekeredmarble', function (req, res) {
    res.sendFile(__dirname + '/public/kekeredmarble.html')
})

router.get('/kekexplode', function (req, res) {
    res.sendFile(__dirname + '/public/kekexplode.html')
})

router.get('/slimthugcoin', function (req, res) {
    res.sendFile(__dirname + '/public/slimthugcoin.html')
})

app.use(router);

app.use(cors())
app.options('*', cors())
app.use(express.static(__dirname + '/public'))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

app.listen(port, () =>
    console.log('Up and running on port' + port)
);