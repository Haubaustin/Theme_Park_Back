const db = require('../db')
const { Package } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const packages = [
    {
        deal_name: '??',
      description: '!!',
      money_saved: '$$',
      park: park1._id
    },
    {
        deal_name: '??',
        description: '!!',
        money_saved: '$$',
        park: park2._id
    },
    {
        deal_name: '??',
        description: '!!',
        money_saved: '$$',
        park: park3._id
    },
    {
        deal_name: '??',
        description: '!!',
        money_saved: '$$',
        park: park4._id
    },
    {
        deal_name: '??',
        description: '!!',
        money_saved: '$$',
        park: park5._id
    },
  ]
  await Package.insertMany(packages)
  console.log('Created top deals!')
}

const run = async () => {
  await main()
  db.close()
}

run()