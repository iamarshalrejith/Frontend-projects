🌤️ Weather App
A simple weather application that allows users to check the current weather for any city around the world. It fetches real-time data from the OpenWeatherMap API and displays the weather information, including temperature, humidity, and wind speed.

🚀 Features
🌍 Search weather for any city.
🌡️ Display current temperature, humidity, and wind speed.
🌦️ Weather icon updates based on weather conditions (e.g., rain, snow, clear sky).
❌ Provides error messages for invalid city names.
💻 Beautiful and responsive design with a clean UI.

🛠️ Technologies Used
HTML5 for the structure.
CSS3 for styling (with a focus on modern design principles).
JavaScript for logic and fetching API data.
OpenWeatherMap API to get real-time weather data.

⚙️ Setup and Installation
📌 Prerequisites
A browser to run the application.
A valid OpenWeatherMap API key (you can get it here).

📥 Steps to Run the Application Locally
Clone the repository:
1.git clone https://github.com/yourusername/weather-app.git
2.Navigate into the project folder:
cd weather-app
3.Edit the script.js file:
Open script.js and replace the apikey variable with your own OpenWeatherMap API key.
const apikey = "YOUR_API_KEY_HERE";
Open the index.html file in your browser:

You can double-click the index.html file to open it directly in your browser.
🧠 How it Works
1.The user enters the name of a city into the search box.
2.On pressing the search button, the app sends a request to the OpenWeatherMap API.
3.The app retrieves weather data such as the temperature, humidity, wind speed, and weather conditions.
4.The weather icon and information are updated based on the retrieved data.
5.If the city is invalid or there is an error, an error message is displayed.

📁 File Structure
/weather-app
├── index.html # The main HTML file for the app.
├── style.css # The stylesheet for the app's design.
├── script.js # The JavaScript file that contains logic and API calls.
├── /Images # Folder containing image assets for weather icons and UI elements.
├── cloudy.png
├── snow.png
├── clear-sky.png
├── drizzle.png
├── haze.png
├── rain.png
├── default.png
├── humidity.png
├── wind.png
├── search.png

🤝 Contributing
If you want to contribute to this project, feel free to fork the repository and submit a pull request.
Here's how you can help:
🎨 Improve the UI/UX design.
🌦️ Add additional weather data (e.g., pressure, sunrise/sunset time).
🌟 Add more features such as a forecast for the next few days.
🐞 Bug fixes and optimizations.
📜 License
This project is open-source and available under the MIT License.

🙏 Acknowledgements
OpenWeatherMap API: Provides real-time weather data.
FontAwesome: For icons used in the app.
Google Fonts: For the Poppins font used in the design.
