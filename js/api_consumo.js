const apiKey = 'b10dead2496814f4480c0df14eae72d0';
const ciudad = 'buenos aires';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const climaElement = document.getElementById('clima');
    const temperaturaCelsius = data.main.temp - 273.15; // Conversión a grados Celsius

    climaElement.innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperatura: ${temperaturaCelsius.toFixed(2)} °C</p>
    `;
  })
  .catch(error => console.error('Error:', error));
