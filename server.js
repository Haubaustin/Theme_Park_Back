const { Park, Ride, Package } = require('./models')
//const { controllers } = require('./controllers')
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
//const bodyParser = require('body-parser');
//const routes = require('./routes');
const app = express()
//app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
//app.use('/api', routes)
app.get('/', (req, res) => {
    res.send('This is our Project for themeparks!')
})
app.get('/rides', async (req, res) => {
    const rides = await Ride.find()
    res.json(rides)
  })
  app.get('/rides/:id', async (req, res) => {
    try {
      const { id } = req.params
      const ride = await Ride.findById(id)
      if (!ride) throw Error('Ride not found')
      res.json(ride)
    } catch (e) {
      console.log(e)
      res.send('Ride not found!')
    }
  })
  app.get('/parks', async (req, res) => {
    const parks = await Park.find()
    res.json(parks)
  })
  app.get('/parks/:id', async (req, res) => {
    try {
      const { id } = req.params
      const park = await Park.findById(id)
      if (!park) throw Error('Park not found.')
      res.json(park)
    } catch (e) {
      console.log(e)
      res.send('Park not found!!!')
    }
  })
  app.get('/packages', async (req, res) => {
    const packages = await Package.find()
    res.json(packages)
  })
  //app.delete('/parks/:id', controllers.deletePark())

  db.on('error', console.error.bind(console, 'MongoDB connection error'))
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))














