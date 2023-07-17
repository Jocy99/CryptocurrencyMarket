var userFormEl = document.querySelector('#user-form');
var apiKey = '0410adc31dc23c4ff294045bbe91f64b09e4510119daf47a5f3eb24e675f3ba3';
var apiUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR';
var choosenCoinName = document.querySelector('#cryptoName');
var searchBtn = document.querySelector('#searchBtn');
var coin_list = 'https://www.cryptocompare.com/coins/list/all/USD/1';
var top_coins_key = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key='+apiKey;
var coin_news_key = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key='+apiKey;
var coin_news = document.querySelector('#coin-price-results');
var div_list = document.querySelector('#crypto-container');

// Creating a ordered list element
var ol_list = document.createElement("ol");

// Creating List Items
var li1 = document.createElement("li");

li1.textContent = "Testing list";


// function top_coin_call () {
//     fetch (top_coins_key)
// .then(response => response.json())
// .then(data => console.log(data));
// }
function top_coin_call () {
fetch(top_coins_key).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data)
        // console.log(data.Data[0].CoinInfo.FullName);
        // console.log(data.Data.length);
        for (
            var i = 0;
            i < data.Data.length;
            i++) {
                var price_list = document.createElement('li');
                price_list.textContent =data.Data[i].CoinInfo.FullName +" " + data.Data[i].DISPLAY.USD.PRICE;
                coin_news.appendChild(price_list);

                // console.log(data.Data[i].CoinInfo.FullName);

            }
        
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
}

function coin_news_call () {
    fetch(coin_news_key).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data)
            
            // divEl.appendChild(liul);
            // divEl.liul.appendChild(li2);
            for (
                var i = 0;
                i < data.Data.length;
                i++) {
                    // console.log(data.Data[i].url);
                    if (i < data.Data.length) {
                        var listItem = document.createElement('li');
                        var listItem_2 = document.createElement('li');
                        listItem.textContent = data.Data[i].url;
                        // div_list.appendChild(listItem);

                        // Creating a link for each url
                        var a = document.createElement('a');
                        var link = document.createTextNode(data.Data[i].title);
                        a.appendChild(link);
                        a.title = (data.Data[i].title);
                        a.href = (listItem.textContent);
                        div_list.appendChild(a);

                        // Creating a paragraph for each ul
                        var listItem_p = document.createElement('p');
                        listItem_p.textContent = data.Data[i].body;
                        div_list.appendChild(listItem_p);
                        // listItem_2.textContent = data.Data[i].source_info.name;
                        // div_list.appendChild(listItem_2);
                        // a.href = (listItem_2.textContent);
                        // div_list.appendChild(a);

                }
                    
                }
            
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
    }

// fetch(link_with_api_key).then(res =>
//     res.json()).then (d => {
//         console.log(d)
//     })

// addEventListener.searchBtn('click') ON CLICK callCoinInfo function
function callCoinInfo () {

}


var formSubmit = function (event) {
    
}


userFormEl.addEventListener('submit', formSubmit);
// top_coin_call();
coin_news_call();
top_coin_call();