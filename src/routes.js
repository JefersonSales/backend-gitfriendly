const express = require('express')
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikesController = require('./controllers/DislikesController')
const SkillsController = require('./controllers/SkillsController')

const routes = express.Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DislikesController.store)
routes.post('/skills', SkillsController.store)

module.exports = routes
