# Crypto Watch Tower

Market data : `https://api.coingecko.com/api/v3/global`

All market data : `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y`

Coin price chart : `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`

Coingecko : `https://www.coingecko.com/fr/pi%C3%A8ces/`

Pour utiliser redux
npm i react-redux redux redux-thunk redux-devtools-extension

now

npm install @reduxjs/toolkit;

#NB:permet de creer un store pour toute notre application

pour structurer ce qu'il faut fait lorsqu'on veut travailler avec redux :
Installer les paquages nécessaires ( redux, react-redux, redux-thunk,redux-devtools-extension)
Englober notre <App/> par un Provider en lui passant un proprs le store
Créer le store
Créer un reducer
Créer un action
