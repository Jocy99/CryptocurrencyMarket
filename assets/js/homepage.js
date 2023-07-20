var userFormEl = document.querySelector('#user-form');
var apiKey = '0410adc31dc23c4ff294045bbe91f64b09e4510119daf47a5f3eb24e675f3ba3';
var apiUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR';
// var choosenCoinName = document.querySelector('#cryptoName');
var chosenCoinSelect = document.querySelector('#cryptoSelect');
var coin_list = 'https://www.cryptocompare.com/coins/list/all/USD/1';
var top_coins_key = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=' + apiKey;
var single_symbol_url = 'https://min-api.cryptocompare.com/data/price?&tsyms=USD&api_key=' + apiKey;
var coin_news_key = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=' + apiKey;
var coin_names_url = 'https://min-api.cryptocompare.com/data/all/coinlist'
var coin_news = document.querySelector('#coin-price-results');
var div_list = document.querySelector('.crypto-container');
var div_coin_news = document.querySelector('#coin-news-results');
var img = document.querySelector("img");

// Creating a ordered list element
var ol_list = document.createElement("ol");

// Creating List Items
var li1 = document.createElement("ol");

li1.textContent = "Testing list";



// function top_coin_call () {
//     fetch (top_coins_key)
// .then(response => response.json())
// .then(data => console.log(data));
// }

function coin_names() {
    fetch(coin_names_url).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log("Coin_names", data)
            }
            );
        }});}


function fetchSingleToken(token) {
    var apiUrl = single_symbol_url;
    if(token) {
        apiUrl = apiUrl + "&fsym=" + token;
    }
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log("TOP COIN CALL", data)
                // display price for coin/token

            });
        } else {
            alert('Error: ' + response.statusText);
        }
    });
}

function top_coin_call() {
    fetch(top_coins_key).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                // console.log("TOP COIN CALL", data)
                // console.log(data.Data[0].CoinInfo.FullName);
                // console.log(data.Data.length);
                for (
                    var i = 0;
                    i < data.Data.length;
                    i++) {
                    var price_list = document.createElement('ol');
                    price_list.textContent = data.Data[i].CoinInfo.FullName + " " + data.Data[i].DISPLAY.USD.PRICE;
                    coin_news.appendChild(price_list);

                    // console.log(data.Data[i].CoinInfo.FullName);

                }

            });
        } else {
            alert('Error: ' + response.statusText);
        }
    });
}

function coin_news_call() {
    fetch(coin_news_key).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log("NEWS DATA",data)

                // divEl.appendChild(liul);
                // divEl.liul.appendChild(li2);
                for (
                    var i = 0;
                    i < data.Data.length;
                    i++) {
                    // console.log(data.Data[i].url);
                    if (i < data.Data.length) {
                        // var listItem = document.createElement('div');
                        // listItem.classList = 'card-image';
                        // var figureItem = document.createElement('figure');
                        // figureItem.classList = 'image is-96x96';
                        // img.src=data.Data[i].imageurl;
                        // console.log("imgURL",data.Data[i].imageurl);
                        
                        // listItem.setAttribute('id', 'coin-news-results');
                        // var listItem_2 = document.createElement('li');
                        // listItem.textContent = ""+data.Data[i].url;
                        // div_list.appendChild(listItem);

                        // Creating a link for each url

                        // listItem_2.textContent = data.Data[i].source_info.name;
                        // div_list.appendChild(listItem_2);
                        // a.href = (listItem_2.textContent);
                        // div_list.appendChild(a);

                        // Creating the card with the data that is received
                        function getHtmlTemplate(dataObject) {
                            var news_img = data.Data[i].imageurl;
                            var news_title = data.Data[i].title;
                            var news_source= data.Data[i].source;
                            var news_paragraph= data.Data[i].body;
                            return `
                                <div>
                                    ${dataObject.content}
                                    <div class="card" id="coin-news-results">
                                    <div class="card-image">
                                      <figure class="image is-96x96"">
                                        <img src="${news_img}">
                                      </figure>
                                    </div>
                                    <div class="card-content">
                                      <div class="media">
                                        <div class="media-content">
                                          <p class="title is-4">${news_title}</p>
                                          <p class="subtitle is-6">${news_source}</p>
                                        </div>
                                      </div>
                                  
                                      <div class="content">
                                        ${news_paragraph}<a>@bulmaio</a>.
                                        <a href="#">#css</a> <a href="#">#responsive</a>
                                        <br>
                                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            `;
                        }
                        
                        var someData = {
                            content: ""
                        }
                        
                        function addContent(content) {
                            card.innerHTML = card.innerHTML + content;
                        }
                        
                        var myHtml = getHtmlTemplate(someData);
                        addContent(myHtml);

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
// function callCoinInfo() {

// }

// searchBtn.addEventListener('click', () => {
    
// });

var formSubmit = function (event) {
    event.preventDefault();
    fetchSingleToken(chosenCoinSelect.value);
}

userFormEl.addEventListener('submit', formSubmit);
// top_coin_call();
// fetchSingleToken();
top_coin_call();
coin_news_call();
coin_names();


 var card = document.getElementById('coin-news-results');

// function getHtmlTemplate(dataObject) {
//     return `
//         <div>
//             ${dataObject.content}
//             <div class="card" id="coin-news-results">
//             <div class="card-image">
//               <figure class="image is-96x96"">
//                 <img src=""+>
//               </figure>
//             </div>
//             <div class="card-content">
//               <div class="media">
//                 <div class="media-content">
//                   <p class="title is-4">News Title</p>
//                   <p class="subtitle is-6">Other title regarding Information</p>
//                 </div>
//               </div>
          
//               <div class="content">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Phasellus nec iaculis mauris. <a>@bulmaio</a>.
//                 <a href="#">#css</a> <a href="#">#responsive</a>
//                 <br>
//                 <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
//               </div>
//             </div>
//           </div>
//         </div>
//     `;
// }

// var someData = {
//     content: "Hello this is some content"
// }

// function addContent(content) {
//     card.innerHTML = card.innerHTML + content;
// }

// var myHtml = getHtmlTemplate(someData);
// addContent(myHtml);



//  USELESS CODE -------------------------------

                        // var a = document.createElement('a');
                        // var link = document.createTextNode(data.Data[i].title);
                        // a.appendChild(link);
                        // a.title = (data.Data[i].title);
                        // // a.href = (listItem.textContent);
                        // div_list.appendChild(a);

                        // // Creating a paragraph for each ul
                        // var listItem_p = document.createElement('p');
                        // listItem_p.textContent = data.Data[i].body;
                        // div_list.appendChild(listItem_p);