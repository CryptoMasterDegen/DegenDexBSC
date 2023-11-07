import * as chains from './chains';

const DOGECHAINCoins = [
  {
    name: "Wrapped BNB",
    abbr: "WBNB",
    address: "", // eth address is fetched from the router
  },
  {
    name: "DEGENDEX",
    abbr: "DDEX",
    address: "0x62c193b240b54f4797d380f591431e52f5f55d76",
  },
  {
    name: "Cake",
    abbr: "CAKE",
    address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
},
]

const COINS = new Map();
COINS.set(chains.ChainId.DOGECHAIN, DOGECHAINCoins)
export default COINS
