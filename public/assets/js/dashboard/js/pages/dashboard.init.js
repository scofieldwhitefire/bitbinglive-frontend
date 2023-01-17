setTimeout(function () {
  $("#subscribeModal").modal("show");
}, 2e3);
var options = {
    chart: {
      height: 360,
      type: "bar",
      stacked: !0,
      toolbar: { show: !1 },
      zoom: { enabled: !0 },
    },
    plotOptions: {
      bar: { horizontal: !1, columnWidth: "15%", endingShape: "rounded" },
    },
    dataLabels: { enabled: !1 },
    series: [
      {
        name: "Series A",
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48],
      },
      {
        name: "Series B",
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
      },
      {
        name: "Series C",
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    colors: ["#556ee6", "#f1b44c", "#34c38f"],
    legend: { position: "bottom" },
    fill: { opacity: 1 },
  },
  chart = new ApexCharts(
    document.querySelector("#stacked-column-chart"),
    options
  );
chart.render();
options = {
  chart: { height: 200, type: "radialBar", offsetY: -10 },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: { fontSize: "13px", color: void 0, offsetY: 60 },
        value: {
          offsetY: 22,
          fontSize: "16px",
          color: void 0,
          formatter: function (e) {
            return e + "%";
          },
        },
      },
    },
  },
  colors: ["#556ee6"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: !1,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  },
  stroke: { dashArray: 4 },
  series: [67],
  labels: ["Series A"],
};
(chart = new ApexCharts(
  document.querySelector("#radialBar-chart"),
  options
)).render();

$(".dashboardScroller").empty().append(`
<div class="tradingview-widget-container" style="height:40px width: 100%">
  <div class="tradingview-widget-container__widget"></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
  {
  "symbols": [
    {
      "description": "Bitcoin",
      "proName": "COINBASE:BTCUSD"
    },
    {
      "description": "Ethereum",
      "proName": "COINBASE:ETHUSD"
    },
    {
      "description": "DodgeCoin",
      "proName": "COINBASE:DOGEUSD"
    },
    {
      "description": "Bitcoin Cash",
      "proName": "COINBASE:BCHUSD"
    },
    {
      "description": "Ripple",
      "proName": "KRAKEN:XRPUSD"
    },
    {
      "description": "LitCoin",
      "proName": "COINBASE:LTCUSD"
    },
    {
      "description": "Tether USDC",
      "proName": "CRYPTOCAP:USDC"
    },
    {
      "description": "Tether USDT",
      "proName": "CRYPTOCAP:USDT"
    },
    {
      "description": "Matic",
      "proName": "COINBASE:MATICUSD"
    },
    {
      "description": "Stack",
      "proName": "COINBASE:STXUSD"
    },
    {
      "description": "ApeCoin",
      "proName": "COINBASE:APEUSD"
    },
    {
      "description": "Solana",
      "proName": "COINBASE:SOLUSD"
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "light",
  "isTransparent": false,
  "displayMode": "adaptive",
  "locale": "en"
}
  </script>
</div>
`);
var aa = $(".miniChart");
var b = $(".SecondChart");
aa.empty();
b.empty();

aa.append(`
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
  {
  "symbol": "COINBASE:BTCUSD",
  "width": ${aa.width()},
  "height": 220,
  "locale": "en",
  "dateRange": "3M",
  "colorTheme": "light",
  "trendLineColor": "rgba(255, 0, 0, 1)",
  "underLineColor": "rgba(234, 153, 153, 0.64)",
  "underLineBottomColor": "rgba(41, 98, 255, 0)",
  "isTransparent": false,
  "autosize": false,
  "largeChartUrl": ""
}
  </script>
</div>
<div style="padding-top: 5px" class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
  {
  "symbol": "COINBASE:ETHUSD",
  "width": ${aa.width()},
  "height": 220,
  "locale": "en",
  "dateRange": "3M",
  "colorTheme": "light",
  "trendLineColor": "rgba(255, 0, 0, 1)",
  "underLineColor": "rgba(234, 153, 153, 0.64)",
  "underLineBottomColor": "rgba(41, 98, 255, 0)",
  "isTransparent": false,
  "autosize": false,
  "largeChartUrl": ""
}
  </script>
</div>
`);

b.append(`
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js" async>
  {
  "title": "Cryptocurrencies",
  "title_raw": "Cryptocurrencies",
  "title_link": "/markets/cryptocurrencies/prices-all/",
  "width": ${aa.width()},
  "height": 450,
  "locale": "en",
  "showSymbolLogo": true,
  "symbolsGroups": [
    {
      "name": "Overview",
      "symbols": [
        {
          "name": "CRYPTOCAP:TOTAL"
        },
        {
          "name": "BITSTAMP:BTCUSD"
        },
        {
          "name": "BITSTAMP:ETHUSD"
        },
        {
          "name": "FTX:SOLUSD"
        },
        {
          "name": "BINANCE:AVAXUSD"
        },
        {
          "name": "COINBASE:UNIUSD"
        }
      ]
    },
    {
      "name": "Bitcoin",
      "symbols": [
        {
          "name": "BITSTAMP:BTCUSD"
        },
        {
          "name": "COINBASE:BTCEUR"
        },
        {
          "name": "COINBASE:BTCGBP"
        },
        {
          "name": "BITFLYER:BTCJPY"
        },
        {
          "name": "CEXIO:BTCRUB"
        },
        {
          "name": "CME:BTC1!"
        }
      ]
    },
    {
      "name": "Ethereum",
      "symbols": [
        {
          "name": "BITSTAMP:ETHUSD"
        },
        {
          "name": "KRAKEN:ETHEUR"
        },
        {
          "name": "COINBASE:ETHGBP"
        },
        {
          "name": "BITFLYER:ETHJPY"
        },
        {
          "name": "BINANCE:ETHBTC"
        },
        {
          "name": "BINANCE:ETHUSDT"
        }
      ]
    },
    {
      "name": "Solana",
      "symbols": [
        {
          "name": "FTX:SOLUSD"
        },
        {
          "name": "BINANCE:SOLEUR"
        },
        {
          "name": "COINBASE:SOLGBP"
        },
        {
          "name": "BINANCE:SOLBTC"
        },
        {
          "name": "HUOBI:SOLETH"
        },
        {
          "name": "BINANCE:SOLUSDT"
        }
      ]
    },
    {
      "name": "Uniswap",
      "symbols": [
        {
          "name": "COINBASE:UNIUSD"
        },
        {
          "name": "KRAKEN:UNIEUR"
        },
        {
          "name": "COINBASE:UNIGBP"
        },
        {
          "name": "BINANCE:UNIBTC"
        },
        {
          "name": "KRAKEN:UNIETH"
        },
        {
          "name": "BINANCE:UNIUSDT"
        }
      ]
    }
  ],
  "colorTheme": "light"
}
  </script>
</div>
`);
