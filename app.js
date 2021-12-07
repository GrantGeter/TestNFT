const express = require('express')
const router = express.Router();
const app = express()
const cors = require('cors');
const path = require('path')
const port = process.env.PORT || 50080


//KEKE

router.get('/kekeblue', function (req, res) {
    res.sendFile(__dirname + '/public/kekehtml/kekeblue.html')
})

router.get('/kekegreen', function (req, res) {
    res.sendFile(__dirname + '/public/kekehtml/kekegreen.html')
})

router.get('/kekehoney', function (req, res) {
    res.sendFile(__dirname + '/public/kekehtml/kekehoney.html')
})

router.get('/kekeredmarble', function (req, res) {
    res.sendFile(__dirname + '/public/kekehtml/kekeredmarble.html')
})

router.get('/kekexplode', function (req, res) {
    res.sendFile(__dirname + '/public/kekehtml/kekexplode.html')
})

router.get('/slimthugcoin', function (req, res) {
    res.sendFile(__dirname + '/public/kekehtml/kekegoldcoin.html')
})

//Slim

router.get('/slimdarkblue', function (req, res) {
    res.sendFile(__dirname + '/public/slimhtml/slimdarkblue.html')
})

router.get('/slimbluemarble', function (req, res) {
    res.sendFile(__dirname + '/public/slimhtml/slimbluemarble.html')
})

router.get('/slimdarkred', function (req, res) {
    res.sendFile(__dirname + '/public/slimhtml/slimdarkred.html')
})

router.get('/slimflower', function (req, res) {
    res.sendFile(__dirname + '/public/slimhtml/slimflower.html')
})

router.get('/slimsplitcreamy', function (req, res) {
    res.sendFile(__dirname + '/public/slimhtml/slimsplitcreamy.html')
})

router.get('/slimgoldcoin', function (req, res) {
    res.sendFile(__dirname + '/public/slimhtml/slimgoldcoin.html')
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