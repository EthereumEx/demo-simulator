'user strict'

var Web3 = require('web3');
var debug = require('debug')('demo-simulator');
var config = require('./config/config');
var BookingFactory = require('./contracts/build/contracts/BookingFactory.sol');
var referenceIds = require('./reference-ids')


var web3 = new Web3();
require('./config/web3')(web3, config);

BookingFactory.setProvider(web3.currentProvider);
var bookingFactory = BookingFactory.at(config.address);


web3.eth.getAccounts(function (err, result){
  if(err) {
    console.error(error);
    throw error;
  }

  var accountAddress = result[0]
  if(!accountAddress) {
    throw new Error('No account was found');
  }

  debug('Using account: ', accountAddress);
  setInterval(updateContracts(accountAddress), config.interval);
});


function updateContracts(accountAddress) {
  return function() {
  for (var i = 0; i < config.batchSize; ++i) {
    var id = randomReference();
    var price = randomInt(config.minPrice, config.maxPrice);
    debug(id, price);

    bookingFactory.updateBooking(id, price, {from: accountAddress, gas: 500000})
      .then(function(tx_id) {
        console.log(tx_id);
      }).catch(function(e) {
        console.error(e);
      });
    }
  }
}

/**
 * Returns a random element from referenceIds
 */
function randomReference() {
  return referenceIds[randomInt(0, referenceIds.length)];
}

/**
 * Returns a random integer between min (inclusive) and max (non inclusive)
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
