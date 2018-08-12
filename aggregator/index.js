const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const mongoose = require('mongoose');
const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    rate: Number,
    stock: Boolean,
    married: Boolean,
    gender: Boolean, // true is male
    secret: String,
    sitting: {
        type: Boolean,
        default: true
    },
    napping: {
        type: Boolean,
        default: false
    },
    postureData: Array,
    napData: Array,
    moodData: Array,
}))
const crypto = require('crypto')

app.use(function (req, res, next) {
    console.log("GOT REQ")
    var oneof = false;
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if (req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if (req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    if (oneof) {
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
    }

    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
})
app.use(express.json())

// FIXME: DON'T PUSH THIS TO GITHUB
mongoose.connect('mongodb://ds119662.mlab.com:19662/worklive', {
    user: 'worklive',
    pass: 'worklive123$'
})
mongoose.connection.on('error', e => console.error(e))

app.get('/', (q, s) => s.sendStatus(200))

app.post('/register', (q, s) => {
    let pk = crypto.randomBytes(12).toString('hex')
    let user = new User({
        name: q.body.name || 'Anonymous',
        rate: q.body.rate || null,
        stock: q.body.stock || false,
        married: q.body.married || false,
        gender: q.body.gender && q.body.gender == 'male', // true is male
        secret: pk
    })
    user.save()
    s.send(pk)
})

app.post('/login', (q, s) => {
    if (!q.body.key) return s.sendStatus(403)
    User.findOne({
        secret: q.body.key
    }, (e, u) => {
        if (e) return s.sendStatus(418)
        if (!u) return s.sendStatus(403)
        return s.sendStatus(200)
    })
})

app.get('/user/:key/mood', (q, s) => {
    console.log("GOT REQ")
    User.findOne({
        secret: q.params.key
    }, (e, u) => {
        if (e) return s.sendStatus(418)
        if (!u) return s.sendStatus(403)
        if (u.moodData.length == 0) s.send([])
        s.send(u.moodData.slice(Math.max(u.moodData.length - 11, 0), Math.max(u.moodData.length - 1, 0)))
    })
})

app.get('/user/:key/naps', (q, s) => {
    console.log("GOT REQ")
    User.findOne({
        secret: q.params.key
    }, (e, u) => {
        if (e) return s.sendStatus(418)
        if (!u) return s.sendStatus(403)
        if (u.napData.length == 0) s.send([])
        s.send(u.napData.slice(Math.max(u.napData.length - 11, 0), Math.max(u.napData.length - 1, 0)))
    })
})

app.get('/user/:key/posture', (q, s) => {
    console.log("GOT REQ")
    User.findOne({
        secret: q.params.key
    }, (e, u) => {
        if (e) return s.sendStatus(418)
        if (!u) return s.sendStatus(403)
        if (u.postureData.length == 0) s.send([])
        s.send(u.postureData.slice(Math.max(u.postureData.length - 11, 0), Math.max(u.postureData.length - 1, 0)))
    })
})

app.post('/data', (q, s) => {
    if (!q.body.key) return s.sendStatus(403)
    User.findOne({
        secret: q.body.key
    }, (e, u) => {
        if (e) return s.sendStatus(418)
        if (!u) return s.sendStatus(403)
        if (q.body.posture) {
            u.sitting = !u.sitting
            let now = new Date()
            u.postureData.push({
                time: now.toString(), //now.toLocaleTimeString('en-us', {hour: 'numeric', minute: '2-digit'}),
                label: u.sitting ? 'standing' : 'sitting',
                value: ((now - (u.postureData.length > 0 ? (new Date(u.postureData[u.postureData.length - 1].time)) : now)) / (1000 * 60)).toFixed(0)
            })
        }
        if (q.body.nap) {
            u.napping = !u.napping
            let now = new Date()
            u.napData.push({
                time: now.toString(), //now.toLocaleTimeString('en-us', {hour: 'numeric', minute: '2-digit'}),
                label: u.napping ? 'awake' : 'napping',
                value: ((now - (u.napData.length > 0 ? (new Date(u.napData[u.napData.length - 1].time)) : now)) / (1000 * 60)).toFixed(0)
            })
        }
        if (q.body.mood) {
            let now = new Date()
            u.moodData.push({
                time: now.toString(),
                label: ['Saddest', 'Sad', 'Meh', 'Happy', 'Happiest'][q.body.mood],
                value: q.body.mood
            })
        }
        u.save((e, ss) => {
            if (e) s.sendStatus(418)
            else s.sendStatus(200)
        })
    })
})

app.listen(80)
