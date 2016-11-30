'use strict';

var path      = require('path'),
    rootPath  = path.normalize(__dirname + '/..'),
    env       = process.env.NODE_ENV || 'development';

var config = {
  development: {
    env: 'development',
    root: rootPath,
    IpcProvider: process.env.IPC_PROVIDER || '/Users/work/Library/Ethereum/demo/geth.ipc',
    rpc: {
      host: process.env.RPC_HOST || 'http://localhost',
      port: process.env.RPC_PORT || '8545'
    },
    address: process.env.CONTRACT_ADDRESS || '0xF100dceD26e7F1F976663b29D2031AC615545672',
    interval: process.env.INTERVAL || 30000,
    minPrice: process.env.MIN_PRICE || 100,
    maxPrice: process.env.MAX_PRICE || 1000,
    batchSize: process.env.BATCH_SIZE || 5
  },

  test: {
    env: 'test',
    root: rootPath,
    IpcProvider: process.env.IPC_PROVIDER,
    rpc: {
      host: process.env.RPC_HOST || 'http://localhost',
      port: process.env.RPC_PORT || '8545'
    },
    address: process.env.CONTRACT_ADDRESS,
    interval: process.env.INTERVAL || 30000,
    minPrice: process.env.MIN_PRICE || 100,
    maxPrice: process.env.MAX_PRICE || 1000,
    batchSize: process.env.BATCH_SIZE || 5
  },

  production: {
    env: 'production',
    root: rootPath,
    IpcProvider: process.env.IPC_PROVIDER,
    rpc: {
      host: process.env.RPC_HOST || 'http://localhost',
      port: process.env.RPC_PORT || '8545'
    },
    address: process.env.CONTRACT_ADDRESS,
    interval: process.env.INTERVAL || 30000,
    minPrice: process.env.MIN_PRICE || 100,
    maxPrice: process.env.MAX_PRICE || 1000,
    batchSize: process.env.BATCH_SIZE || 5,
  }
};

module.exports = config[env];
