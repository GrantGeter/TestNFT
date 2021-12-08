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
let key = fs.readFileSync('../../../../ssl/keys/e3515_3fb53_59c43628211315f24e00189a013fc591.key');
let cert = fs.readFileSync('../../../../ssl/certs/sosouth_net_e3515_3fb53_1673189862_f30cefc6b75bdbef9da2e8107ac23997.crt');

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
        "image": "https://sosouth.net:50080/assets/LilkekeJPGs/KekeBlue.jpeg",
        "description": "Placeholder",
        "name": "Test Item",
        "animation_url": "https://sosouth.net:50080/vinyls/kekeblue"
    }
    res.send(data);
})

metadataRouter.get('/kekegreen', function (req, res) {
    const data = {
        "image": "https://sosouth.net:50080/assets/LilkekeJPGs/KekeGreens.jpeg",
        "description": "Placeholder",
        "name": "Test Item",
        "animation_url": "https://sosouth.net:50080/vinyls/kekegreen"
    }
    res.send(data);
})

metadataRouter.get('/kekehoney', function (req, res) {
    const data = {
        "image": "https://sosouth.net:50080/assets/LilkekeJPGs/KekeHoney.jpeg",
        "description": "Placeholder",
        "name": "Test Item",
        "animation_url": "https://sosouth.net:50080/vinyls/kekehoney"
    }
    res.send(data);
})

metadataRouter.get('/kekeredmarble', function (req, res) {
    const data = {
        "image": "https://sosouth.net:50080/assets/LilkekeJPGs/KekeRedMarble.jpeg",
        "description": "Placeholder",
        "name": "Test Item",
        "animation_url": "https://sosouth.net:50080/vinyls/kekeredmarble"
    }
    res.send(data);
})

metadataRouter.get('/kekexplode', function (req, res) {
    const data = {
        "image": "https://sosouth.net:50080/assets/LilkekeJPGs/Kekexplode.jpeg",
        "description": "Placeholder",
        "name": "Test Item",
        "animation_url": "https://sosouth.net:50080/vinyls/kekexplode"
    }
    res.send(data);
})

metadataRouter.get('/kekegoldcoin', function (req, res) {
    // const data = {
    //     "image": "https://sosouth.net:50080/assets/LilkekeJPGs/KekeBlue.jpeg",
    //     "description": "Placeholder",
    //     "name": "Test Item",
    //     "animation_url": "https://sosouth.net:50080/vinyls/kekegoldcoin"
    // }
    // res.send(data);
})

//Slim Metadata

metadataRouter.get('/slimdarkblue', function (req, res) {
    const data = {
        "image": "https://sosouth.net:50080/assets/SlimThugJPGs/SlimThugDarkBlues.jpeg",
        "description": "Placeholder",
        "name": "Test Item",
        "animation_url": "https://sosouth.net:50080/vinyls/slimdarkblue"
    }
    res.send(data);
})

metadataRouter.get('/slimbluemarble', function (req, res) {
    const data = {
        "image": "https://sosouth.net:50080/assets/SlimThugJPGs/slimthugbluemarble.jpeg",
        "description": "Placeholder",
        "name": "Test Item",
        "animation_url": "https://sosouth.net:50080/vinyls/slimbluemarble"
    }
    res.send(data);
})

metadataRouter.get('/slimdarkred', function (req, res) {
    const data = {
        "image": "https://sosouth.net:50080/assets/SlimThugJPGs/slimthugdarkred.jpeg",
        "description": "Placeholder",
        "name": "Test Item",
        "animation_url": "https://sosouth.net:50080/vinyls/slimdarkred"
    }
    res.send(data);
})

metadataRouter.get('/slimflower', function (req, res) {
    const data = {
        "image": "https://sosouth.net:50080/assets/SlimThugJPGs/SlimThugFlowers.jpeg",
        "description": "Placeholder",
        "name": "Test Item",
        "animation_url": "https://sosouth.net:50080/vinyls/slimflower"
    }
    res.send(data);
})

metadataRouter.get('/slimsplitcreamy', function (req, res) {
    const data = {
        "image": "https://sosouth.net:50080/assets/SlimThugJPGs/slimthugsplitcreamy.jpeg",
        "description": "Placeholder",
        "name": "Test Item",
        "animation_url": "https://sosouth.net:50080/vinyls/slimsplitcreamy"
    }
    res.send(data);
})

metadataRouter.get('/slimgoldcoin', function (req, res) {
    // const data = {
    //     "image": "https://sosouth.net:50080/assets/SlimThugJPGs/SlimThugFlowers.jpeg",
    //     "description": "Placeholder",
    //     "name": "Test Item",
    //     "animation_url": "https://sosouth.net:50080/vinyls/slimgoldcoin"
    // }
    // res.send(data);
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