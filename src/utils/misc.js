import axios from "axios";
const url = "https://api.livecoinwatch.com/coins/list";

export const getCoinsPrices = async (x) => {
  const i = sessionStorage.getItem("stage");
  const body = {
    currency: "USD",
    sort: "rank",
    order: "ascending",
    offset: 0,
    limit: 50,
    meta: !0,
  };

  const headers = {
    headers: {
      "content-type": "application/json",
      "x-api-key": "1a743226-67af-4643-81e8-5a98d64a5f05",
    },
  };
  let res = {};
  let coins = ["btc", "eth", "sol", "usdt", "doge"];
  if (Number(i) === 2) {
    try {
      const { data, status } = await axios.post(url, body, headers);

      if (status === 200) {
        for (let i = 0; i < coins.length; i++) {
          for (let j = 0; j < data.length; j++) {
            if (data[j].code === coins[i].toUpperCase())
              res = { ...res, [data[j].code]: data[j].rate };
          }
        }
      } else {
        res = { error: "xerror", BTC: 2102.512155457855 };
      }
    } catch (err) {
      res = { error: "xerror", BTC: 2102.512155457855 };
    }
  } else {
    res = { error: "xerror", BTC: 2102.512155457855 };
  }
  return res;
};

export const Counter = (t, r, y, callback) => {
  var res;
  var countDownDate = new Date(t).getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (y) {
      if (r === "s") {
        res = seconds;
      } else if (r === "m-s") {
        res = minutes + ":" + seconds;
      } else if (r === "h-m-s") {
        res = hours + ":" + minutes + ":" + seconds;
      } else if (r === "d-h-m-s") {
        res = days + ":" + hours + ":" + minutes + ":" + seconds;
      } else {
        res = 0;
      }
    } else {
      if (r === "s") {
        res = seconds + "s ";
      } else if (r === "m-s") {
        res = minutes + "m : " + seconds + "s ";
      } else if (r === "h-m-s") {
        res = hours + "h : " + minutes + "m : " + seconds + "s ";
      } else if (r === "d-h-m-s") {
        res =
          days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s ";
      } else {
        res = 0;
      }
    }
    if (distance < 0) {
      clearInterval(x);
      res = "EXPIRED";
    }
    callback(res);
  }, 1000);
};
var dz;
var d = 4;
export const countDown = (t, r, y = !0) => {
  Counter(t, r, y, function (x) {
    dz = x;
    return x;
  });
  console.log(dz);
};
