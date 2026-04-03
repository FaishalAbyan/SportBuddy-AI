const API_KEY = "AIzaSyAMfbDhM-5SAADdQqi6BUwcWDCHmGNER1E"; // Using the API key from App.jsx

async function listModels() {
  try {
    const fetchResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    const data = await fetchResponse.json();
    console.log("Models available:", data.models ? data.models.map(m => m.name) : data);
  } catch (err) {
    console.error("Error fetching models:", err);
  }
}

listModels();
