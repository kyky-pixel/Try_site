$.ajax({
    url: 'https://api.binance.com/api/v3/ticker/price?symbol=BTCETH',
    type: 'GET',
    dataType: 'json',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    success: function(data) {
      console.log(data);
    },
    error: function(xhr, status, error) {
      console.log(xhr);
    }
  });
  
$(document).ready(function() {
    var currencies = ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD'];
  
    function updateExchangeRates() {
      for (var i = 0; i < currencies.length - 1; i++) {
        for (var j = i + 1; j < currencies.length; j++) {
          var pair = currencies[i] + currencies[j];
  
          $.ajax({
            url: 'https://api.binance.com/api/v3/ticker/price',
            data: { symbol: pair },
            success: function(data) {
              var pair = data.symbol;
              var rate = parseFloat(data.price).toFixed(2);
              $('#' + pair.toLowerCase()).html(rate);
            }
          });
        }
      }
    }
  
    updateExchangeRates();
    setInterval(updateExchangeRates, 10000);
  
    $('#update-btn').click(function() {
      $('body').css('background-color', 'lightblue');
      updateExchangeRates();
    });
  });
  