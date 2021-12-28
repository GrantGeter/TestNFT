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


vinylRouter.get('/kekeblue', (req, res) => {
    res.sendFile(__dirname + '/public/kekehtml/kekeblue.html')
})

vinylRouter.get('/kekegreen', (req, res) => {
    res.sendFile(__dirname + '/public/kekehtml/kekegreen.html')
})

vinylRouter.get('/kekehoney', (req, res) => {
    res.sendFile(__dirname + '/public/kekehtml/kekehoney.html')
})

vinylRouter.get('/kekeredmarble', (req, res) => {
    res.sendFile(__dirname + '/public/kekehtml/kekeredmarble.html')
})

vinylRouter.get('/kekexplode', (req, res) => {
    res.sendFile(__dirname + '/public/kekehtml/kekexplode.html')
})

coinRouter.get('/kekegoldcoin', (req, res) => {
    res.sendFile(__dirname + '/public/kekehtml/kekegoldcoin.html')
})

coinRouter.get('/goldcoinblank', (req, res) => {
    res.sendFile(__dirname + '/public/kekehtml/kekegoldcoinblank.html')
})

//Slim

vinylRouter.get('/slimdarkblue', (req, res) => {
    res.sendFile(__dirname + '/public/slimhtml/slimdarkblue.html')
})

vinylRouter.get('/slimbluemarble', (req, res) => {
    res.sendFile(__dirname + '/public/slimhtml/slimbluemarble.html')
})

vinylRouter.get('/slimdarkred', (req, res) => {
    res.sendFile(__dirname + '/public/slimhtml/slimdarkred.html')
})

vinylRouter.get('/slimflower', (req, res) => {
    res.sendFile(__dirname + '/public/slimhtml/slimflower.html')
})

vinylRouter.get('/slimsplitcreamy', (req, res) => {
    res.sendFile(__dirname + '/public/slimhtml/slimsplitcreamy.html')
})

coinRouter.get('/slimgoldcoin', (req, res) => {
    res.sendFile(__dirname + '/public/slimhtml/slimgoldcoin.html')
})

//KEKE Metadata

metadataRouter.get('/kekeblue/:tokenId', (req, res) => {
    const id = req.params.tokenId;
    const data = {
        "image": "https://sosouth.net:50080/assets/LilkekeJPGs/KekeBlue.jpeg",
        "description": "Placeholder",
        "name": "Test Keke Blue #" + id,
        "animation_url": "https://sosouth.net:50080/vinyls/kekeblue"
    }
    res.send(data);
})

metadataRouter.get('/kekegreen/:tokenId', (req, res) => {
    const id = req.params.tokenId;
    const data = {
        "image": "https://sosouth.net:50080/assets/LilkekeJPGs/KekeGreens.jpeg",
        "description": "Placeholder",
        "name": "Test Keke Green #" + id,
        "animation_url": "https://sosouth.net:50080/vinyls/kekegreen"
    }
    res.send(data);
})

metadataRouter.get('/kekehoney/:tokenId', (req, res) => {
    const id = req.params.tokenId;
    const data = {
        "image": "https://sosouth.net:50080/assets/LilkekeJPGs/KekeHoney.jpeg",
        "description": "Placeholder",
        "name": "Test Keke Honey #" + id,
        "animation_url": "https://sosouth.net:50080/vinyls/kekehoney"
    }
    res.send(data);
})

metadataRouter.get('/kekeredmarble/:tokenId', (req, res) => {
    const id = req.params.tokenId;
    const data = {
        "image": "https://sosouth.net:50080/assets/LilkekeJPGs/KekeRedMarble.jpeg",
        "description": "Placeholder",
        "name": "Test Keke Red Marble #" + id,
        "animation_url": "https://sosouth.net:50080/vinyls/kekeredmarble"
    }
    res.send(data);
})

metadataRouter.get('/kekexplode/:tokenId', (req, res) => {
    const id = req.params.tokenId;
    const data = {
        "image": "https://sosouth.net:50080/assets/LilkekeJPGs/Kekexplode.jpeg",
        "description": "Placeholder",
        "name": "Test Keke Explode #" + id,
        "animation_url": "https://sosouth.net:50080/vinyls/kekexplode"
    }
    res.send(data);
})

metadataRouter.get('/kekegoldcoin/:tokenId', (req, res) => {
    const id = req.params.tokenId;
    const data = {
        "image": "https://sosouth.net:50080/assets/LilkekeJPGs/KekeCoin.jpeg",
        "description": "Placeholder",
        "name": "Test Item #" + id,
        "animation_url": "https://sosouth.net:50080/coins/kekegoldcoin"
    }
    res.send(data);
})

metadataRouter.get('/goldcoinblank/:tokenId', (req, res) => {
    const id = req.params.tokenId;
    const data = {
        "image": "https://sosouth.net:50080/assets/LilkekeJPGs/KekeCoin.jpeg",
        "description": "Placeholder",
        "name": "Test Item #" + id,
        "animation_url": "https://sosouth.net:50080/coins/goldcoinblank"
    }
    res.set({
        'Content-Type': 'text/plain',
        'charset': 'utf-8'
    })
    res.send(data);
})

//Slim Metadata

metadataRouter.get('/slimdarkblue', (req, res) => {
    const data = {
        "image": "https://sosouth.net:50080/assets/SlimThugJPGs/SlimThugDarkBlues.jpeg",
        "description": "Placeholder",
        "name": "Test Slim Dark Blue",
        "animation_url": "https://sosouth.net:50080/vinyls/slimdarkblue"
    }
    res.send(data);
})

metadataRouter.get('/slimbluemarble', (req, res) => {
    const data = {
        "image": "https://sosouth.net:50080/assets/SlimThugJPGs/slimthugbluemarble.jpeg",
        "description": "Placeholder",
        "name": "Test Slim Blue Marble",
        "animation_url": "https://sosouth.net:50080/vinyls/slimbluemarble"
    }
    res.send(data);
})

metadataRouter.get('/slimdarkred', (req, res) => {
    const data = {
        "image": "https://sosouth.net:50080/assets/SlimThugJPGs/slimthugdarkred.jpeg",
        "description": "Placeholder",
        "name": "Test Slim Dark Red",
        "animation_url": "https://sosouth.net:50080/vinyls/slimdarkred"
    }
    res.send(data);
})

metadataRouter.get('/slimflower', (req, res) => {
    const data = {
        "image": "https://sosouth.net:50080/assets/SlimThugJPGs/SlimThugFlowers.jpeg",
        "description": "Placeholder",
        "name": "Test Slim Flower",
        "animation_url": "https://sosouth.net:50080/vinyls/slimflower"
    }
    res.send(data);
})

metadataRouter.get('/slimsplitcreamy', (req, res) => {
    const data = {
        "image": "https://sosouth.net:50080/assets/SlimThugJPGs/slimthugsplitcreamy.jpeg",
        "description": "Placeholder",
        "name": "Test Slim Split Creamy",
        "animation_url": "https://sosouth.net:50080/vinyls/slimsplitcreamy"
    }
    res.send(data);
})

metadataRouter.get('/slimgoldcoin/:tokenId', (req, res) => {
    const id = req.params.tokenId;
    const data = {
        "image": "https://sosouth.net:50080/assets/SlimThugJPGs/",
        "description": "Placeholder",
        "name": "Test Item #" + id,
        "animation_url": "https://sosouth.net:50080/vinyls/slimgoldcoin"
    }
    res.send(data);
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