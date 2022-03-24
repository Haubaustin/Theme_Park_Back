const db = require('../db')
const { Package } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const packages = [
    {
        deal_name: 'Disney Incredi-Pass',
      description: 'Anual Pass to all Walt Dinsey World Resorts',
      price: '$1,299.00',
      money_saved: 'Depends on how much you visit',
      park: park1._id
    },
    {
        deal_name: 'Create Your Own Package',
        description: 'Create your own perfect vacation plan',
        price: '$99.00+',
        money_saved: '?',
        park: park2._id
    },
    {
        deal_name: 'Disney Incredi-Pass',
        description: 'Anual Pass to all Walt Dinsey World Resorts',
        price: '$1,299.00',
        money_saved: 'Depends on how much you visit',
        park: park3._id
    },
    {
        deal_name: 'Disney Incredi-Pass',
        description: 'Anual Pass to all Walt Dinsey World Resorts',
        price: '$1,299.00',
        money_saved: 'Depends on how much you visit',
        park: park4._id
    },
    {
        deal_name: 'Dollywood & Pigeon Forge Vacation Package',
        description: ' 3 Nights Lodging and admission Dollywood Theme Park',
        price: 'Ages 19 and Up: $221.00 Ages 10-19: $95.40 Ages 4-9: $84.15 Ages 0-3: Free',
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