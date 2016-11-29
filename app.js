'user strict'

var Web3 = require('web3');
var debug = require('debug')('demo-simulator');
var config = require('./config/config');
var BookingFactory = require('./contracts/build/contracts/BookingFactory.sol');
var referenceIds = require('./reference-ids')


var web3 = new Web3();
require('./config/web3')(web3, config);
BookingFactory.setProvider(web3.currentProvider);

// Needs attention
var bookingFactory = BookingFactory.at('0x22444F54DF8e7791Ee028fE5785D2D1bdA9E1Ed0');


    bookingFactory.updateBooking('0ICDX', 700, {from: '0x47aba09257c91e015903f1608b2b4ed245ed8264'})
      .then(function(tx_id) {
        debug(tx_id);
      }).catch(function(e) {
        debug(e);
      });


function updateContracts() {
  // for (var i = 0; i < randomInt(2, 5); ++i) {
    var id = randomReference();
    // needs attention
    var price = randomInt(100, 1000);
    debug(id, price);

    // needs attention
    bookingFactory.updateBooking(id, price, {from: '0x47aba09257c91e015903f1608b2b4ed245ed8264'})
      .then(function(tx_id) {
        debug(tx_id);
      }).catch(function(e) {
        debug(e);
      });

  // }
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

// setInterval(updateContracts, 10000);
