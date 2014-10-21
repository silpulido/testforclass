// These code snippets use an open-source library. http://unirest.io/java
HttpResponse<JsonNode> response = Unirest.get("https://simple-weather.p.mashape.com/weatherdata?lat=1.0&lng=1.0")
.header("X-Mashape-Key", "ug6ECrKU0ymshhYcYD7mAtIcDsRxp1hvdYIjsnoAdlirgC6CKq")
.asJson();
function getWeather(weather) {
  for(var i=0; i<weather.length; i++){
    var time = weather[i];
    $('#box').append('<div class="weather_type">' + '<h2>' + time + '</h2>' + '<br>'
    + 'date: '+ time.date + '<br>'
    + 'day: ' + time.day + '</div>');
  }
}
