document.addEventListener("DOMContentLoaded", function() {
    // Display student info
    const studentInfo = document.getElementById("studentInfo");
    studentInfo.textContent = "Student ID: [Your Student ID]"; // Replace with your student ID

    // OpenWeatherMap API key 
    const apiKey = "7a6651f4414ccf437ca3f6982920a37a"; // Replace with your OpenWeatherMap API key

    // API endpoint
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Barrie&appid=${apiKey}`;

    // Get weather data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <p><strong>Location:</strong> ${data.name}, ${data.sys.country}</p>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = "<p>Error fetching weather data.</p>";
        });
});
