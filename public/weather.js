if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature_2m,weathercode&current_weather=true`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("weather").textContent =
          data.current_weather.temperature;
      });
  }, (error) => {
    console.error('Пользователь запретил нам получать информацию о местонахождении')
  });
}
