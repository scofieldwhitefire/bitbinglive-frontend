$("#scrollChart").append(`
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
  {
  "symbols": [
    {
      "proName": "FOREXCOM:SPXUSD",
      "title": "S&P 500"
    },
    {
      "proName": "FOREXCOM:NSXUSD",
      "title": "US 100"
    },
    {
      "proName": "FX_IDC:EURUSD",
      "title": "EUR/USD"
    },
    {
      "proName": "BITSTAMP:BTCUSD",
      "title": "Bitcoin"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
      "title": "Ethereum"
    },
    {
        "proName": "BINANCE:SOLUSDT",
        "title": ""
    },
    {
        "proName": "BINANCE:BTCUSDT",
        "title": ""
    },
    {
        "proName": "BINANCE:GRTUSDT",
        "title": ""
    },
    {
        "proName": "BINANCE:BNBUSDT",
        "title": ""
    },
    {
        "proName": "BINANCE:AXSUSDT",
        "title": ""
    },
    {
        "proName": "BITFINEX:BTCUSD",
        "title": ""
    },
    {
        "proName": "BINANCE:DOTUSDT",
        "title": ""
    },
    {
        "proName": "BINANCE:ICPUSDT",
        "title": ""
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "light",
  "isTransparent": false,
  "displayMode": "compact",
  "locale": "en"
}
  </script>
</div>
`);
