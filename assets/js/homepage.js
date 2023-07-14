var userFormEl = document.querySelector('#user-form')
var apiKey = '0410adc31dc23c4ff294045bbe91f64b09e4510119daf47a5f3eb24e675f3ba3';
var apiUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR';
var choosenCoinName = document.querySelector('#cryptoName')
var searchBtn = document.querySelector('#searchBtn')

// addEventListener.searchBtn('click') ON CLICK callCoinInfo function
function callCoinInfo () {

}


var formSubmit = function (event) {
    
}


userFormEl.addEventListener('submit', formSubmit);