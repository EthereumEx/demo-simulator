# demo-simulator

## Installation
```bash
$ git clone https://github.com/EthereumEx/demo-simulator
$ cd demo-simulator
$ npm install
```
## Environment Variables
```bash
export CONTRACT_ADDRESS=0x22444F54DF8e7791Ee028fE5785D2D1bdA9E1Ed0 (or the address of the deployed notification contract)
export INTERVAL=<The interval for sending transactions in ms (optional - default 30000)>
export MIN_PRICE=<Minimum random price (optional - default 100)>
export MAX_PRICE=<Maximum random price (optional - default 1000)>
export BATCH_SIZE=<Number of transactions send in each batch (optional - default 5)>
```

### To run with IPC
```bash
export IPC_PROVIDER=<path to IPC>
```

### To run with RPC
Make sure the `IPC_PROVIDER` environment variable is **not** set.

```bash
export RPC_HOST=<RPC URL (optional - default http://localhost)>
export RPC_PORT=<RCP port (optional - default 8545)>
```

## Development
You need to download the development dependencies first.

```bash
$ npm install --global truffle
```

Then:

```bash
export DEBUG=demo-simulator
$ node app.js
or
$ npm start 
```

To compile contracts:

```bash
$ cd contracts
$ truffle compile
$ #TODO deploy
```

## Execution
```bash
export NODE_ENV=production
export DEBUG=demo-simulator (optional for debug messages)
$ node app.js
or
$ npm start
```
