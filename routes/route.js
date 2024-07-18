const express = require('express')
const router = express.Router()

const gemini = require('../controllers/controller')

//TODO: Put actual url
router.get('/', (req, res) => {
    res.send('visit remindMe.vercel.app')
})

router.get('/gemini', gemini.run)

module.exports= router