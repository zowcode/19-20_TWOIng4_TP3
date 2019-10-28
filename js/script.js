// Récupérer input --> city prend sa valeure
function setCityValue(){
  console.log("I'm in setCityValue");
  //const city = document.getElementById("city-input").value;
  console.log(city);
  // appel de la fonction start avec nouvelle valeure
}

// Fonction test afficher axios 
function afficheAxios() {
  alert(axios.get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`, {
  crossdomain: true
}));
}

// Fonction appelée lorsque page is loaded
function start() {
  // Création de l'objet apiWeather
  console.log("I'm in function Start");
  
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    // app fonction qui récupère promise 
    // soit response soit error
  
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

