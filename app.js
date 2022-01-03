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

// const fs = require('fs');
// let key = fs.readFileSync('../../../../ssl/keys/e3515_3fb53_59c43628211315f24e00189a013fc591.key');
// let cert = fs.readFileSync('../../../../ssl/certs/sosouth_net_e3515_3fb53_1673189862_f30cefc6b75bdbef9da2e8107ac23997.crt');

// const options = {
//     key: key,
//     cert: cert
// }


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

app.use(router);

app.use(cors())
app.options('*', cors())
app.use(express.static(__dirname + '/public'))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

// const server = https.createServer(options, app)

app.listen(port, () =>
    console.log('Up and running on port' + port)
);