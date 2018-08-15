var axios = require('axios');

module.exports = {
  fetchPopularRepos: function(city,country,API_KEY) {
    var encodedURI = window.encodeURI(
       `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&u`
    );

    return axios.get(encodedURI).then(function(response) {
      return response.data.items;
    });
  }
};
