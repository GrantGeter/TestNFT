const express = require('express')
const router = express.Router();
const vinylRouter = express.Router();
const coinRouter = express.Router();
const metadataRouter = express.Router();

const app = express()
const cors = require('cors');
const path = require('path')
const port = process.env.PORT || 50080


//KEKE

app.use('/vinyls', vinylRouter);
app.use('/coins', coinRouter);

vinylRouter.use('/metadata', metadataRouter);
coinRouter.use('/metadata', metadataRouter);


vinylRouter.get('/kekeblue', function (req, res) {
    res.sendFile(__dirname + '/public/kekehtml/kekeblue.html')
})

vinylRouter.get('/kekegreen', function (req, res) {
    res.sendFile(__dirname + '/public/kekehtml/kekegreen.html')
})

vinylRouter.get('/kekehoney', function (req, res) {
    res.sendFile(__dirname + '/public/kekehtml/kekehoney.html')
})

vinylRouter.get('/kekeredmarble', function (req, res) {
    res.sendFile(__dirname + '/public/kekehtml/kekeredmarble.html')
})

vinylRouter.get('/kekexplode', function (req, res) {
    res.sendFile(__dirname + '/public/kekehtml/kekexplode.html')
})

coinRouter.get('/kekegoldcoin', function (req, res) {
    res.sendFile(__dirname + '/public/kekehtml/kekegoldcoin.html')
})

//Slim

vinylRouter.get('/slimdarkblue', function (req, res) {
    res.sendFile(__dirname + '/public/slimhtml/slimdarkblue.html')
})

vinylRouter.get('/slimbluemarble', function (req, res) {
    res.sendFile(__dirname + '/public/slimhtml/slimbluemarble.html')
})

vinylRouter.get('/slimdarkred', function (req, res) {
    res.sendFile(__dirname + '/public/slimhtml/slimdarkred.html')
})

vinylRouter.get('/slimflower', function (req, res) {
    res.sendFile(__dirname + '/public/slimhtml/slimflower.html')
})

vinylRouter.get('/slimsplitcreamy', function (req, res) {
    res.sendFile(__dirname + '/public/slimhtml/slimsplitcreamy.html')
})

coinRouter.get('/slimgoldcoin', function (req, res) {
    res.sendFile(__dirname + '/public/slimhtml/slimgoldcoin.html')
})

//KEKE Metadata

metadataRouter.get('/kekeblue', function (req, res) {
    res.sendFile(__dirname + '/metadata/kekeblue')
})

metadataRouter.get('/kekegreen', function (req, res) {
    res.sendFile(__dirname + '/metadata/kekegreen')
})

metadataRouter.get('/kekehoney', function (req, res) {
    res.sendFile(__dirname + '/metadata/kekehoney')
})

metadataRouter.get('/kekeredmarble', function (req, res) {
    res.sendFile(__dirname + '/metadata/kekeredmarble')
})

metadataRouter.get('/kekexplode', function (req, res) {
    res.sendFile(__dirname + '/metadata/kekexplode')
})

metadataRouter.get('/kekegoldcoin', function (req, res) {
    res.sendFile(__dirname + '/metadata/kekegoldcoin')
})

//Slim Metadata

metadataRouter.get('/slimdarkblue', function (req, res) {
    // res.sendFile(__dirname + '/metadata/slimdarkblue')
    const data = {
        "image": "https://nfttesttest.herokuapp.com/assets/Lil keke GLBs/ Keke Blue.jpeg",
        "description": "PLACEHOLDER",
        "name": "TestItem",
        "animation_url": "https://nfttesttest.herokuapp.com/vinyls/kekeblue"
    }
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify(data));
})

metadataRouter.get('/slimbluemarble', function (req, res) {
    res.sendFile(__dirname + '/metadata/slimbluemarble')
})

metadataRouter.get('/slimdarkred', function (req, res) {
    res.sendFile(__dirname + '/metadata/slimdarkred')
})

metadataRouter.get('/slimflower', function (req, res) {
    res.sendFile(__dirname + '/metadata/slimflower')
})

metadataRouter.get('/slimsplitcreamy', function (req, res) {
    res.sendFile(__dirname + '/metadata/slimsplitcreamy')
})

metadataRouter.get('/slimgoldcoin', function (req, res) {
    res.sendFile(__dirname + '/metadata/slimgoldcoin')
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