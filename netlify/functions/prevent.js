const { default: axios } = require("axios");

function startKeepAlive() {
  setInterval(function () {
    const urls = [
      "https://audiophile-e-commerce.herokuapp.com",
      "http://bag-2022.herokuapp.com",
    ];

    for (let i = 0; i < urls.length; i++) {
      axios
        .get(urls[i], { method: "GET" })
        .then((data) => console.log(data.config.url));
    }
  }, 58 * 60 * 1000); // load every 58 minutes
}

startKeepAlive();
