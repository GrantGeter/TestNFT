const express = require('express')
const https = require('https');
const router = express.Router();
const vinylRouter = express.Router();
const coinRouter = express.Router();
const metadataRouter = express.Router();

const app = express()
const cors = require('cors');
const path = require('path')
const port = process.env.PORT || 50080

const fs = require('fs');
let key = fs.readFileSync('~/ssl/keys/b5419_7ce61_30ea6a770dabf934616b32bd96c60c36.key');
let cert = fs.readFileSync('~/ssl/certs/sosouth_net_b5419_7ce61_1670361047_f91fe933779ba1cc56ccb639c0abf52c.crt');

const options = {
    key: key,
    cert: cert
}


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
    const data = {
        "image": "",
        "description": "",
        "name": "",
        "animation_url": ""
    }
})

metadataRouter.get('/kekegreen', function (req, res) {
    const data = {
        "image": "",
        "description": "",
        "name": "",
        "animation_url": ""
    }
})

metadataRouter.get('/kekehoney', function (req, res) {
    const data = {
        "image": "",
        "description": "",
        "name": "",
        "animation_url": ""
    }
})

metadataRouter.get('/kekeredmarble', function (req, res) {
    const data = {
        "image": "",
        "description": "",
        "name": "",
        "animation_url": ""
    }
})

metadataRouter.get('/kekexplode', function (req, res) {
    const data = {
        "image": "",
        "description": "",
        "name": "",
        "animation_url": ""
    }
})

metadataRouter.get('/kekegoldcoin', function (req, res) {
    const data = {
        "image": "",
        "description": "",
        "name": "",
        "animation_url": ""
    }
})

//Slim Metadata

metadataRouter.get('/slimdarkblue', function (req, res) {
    // res.sendFile(__dirname + '/metadata/slimdarkblue')
    const data = {
        "image": "../public/assets/Slim Thug GLBs/Slim Thug JPGs/Slim Thug Dark Blues.jpeg",
        "description": "PLACEHOLDER",
        "name": "TestItem",
        "animation_url": "sosouth.net:50080/vinyls/slimdarkblue"
    }
    res.send(JSON.stringify(data));
})

metadataRouter.get('/slimbluemarble', function (req, res) {
    const data = {
        "image": "",
        "description": "",
        "name": "",
        "animation_url": ""
    }
})

metadataRouter.get('/slimdarkred', function (req, res) {
    const data = {
        "image": "",
        "description": "",
        "name": "",
        "animation_url": ""
    }
})

metadataRouter.get('/slimflower', function (req, res) {
    const data = {
        "image": "",
        "description": "",
        "name": "",
        "animation_url": ""
    }
})

metadataRouter.get('/slimsplitcreamy', function (req, res) {
    const data = {
        "image": "",
        "description": "",
        "name": "",
        "animation_url": ""
    }
})

metadataRouter.get('/slimgoldcoin', function (req, res) {
    const data = {
        "image": "",
        "description": "",
        "name": "",
        "animation_url": ""
    }
})

app.use(router);

app.use(cors())
app.options('*', cors())
app.use(express.static(__dirname + '/public'))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

const server = https.createServer(options, app)

server.listen(port, () =>
    console.log('Up and running on port' + port)
);