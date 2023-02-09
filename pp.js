function displayresult() {
    var city = document.getElementById("city").value;
    var apikey='2edcfe37bac87da84cea9b70fbf6aff3';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    + city + '&appid='+apikey+'&units=metric')
       .then(response => response.json())
       .then(data => {
          var t = data['main']['temp']
          var x = data['main']['temp_min']
          var y = data['main']['temp_max']
          document.getElementById("output").innerHTML = t;
          document.getElementById("min").innerHTML = x;
          document.getElementById("max").innerHTML = y;
})
}
    