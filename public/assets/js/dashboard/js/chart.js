setTimeout(() => {
  var c = $("#chartSwitch");
  c.empty();
  var coin = c.attr("coin");
  var mobile = c.attr("data-mobile");

  var h = mobile==='true'?'300':'440'

  c.append(`
  <div class="tradingview-widget-container">
    <div id="tradingview_d0b0a"></div>
    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
    <script type="text/javascript">
    new TradingView.widget(
    {
    "width": ${c.width()},
    "height": ${h},
    "symbol": "COINBASE:${coin.toUpperCase()}USD",
    "interval": "30",
    "timezone": "Etc/UTC",
    "theme": "light",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "save_image": false,
    "container_id": "tradingview_d0b0a"
  }
    );
  </script>
</div>
`);
}, 3000);
