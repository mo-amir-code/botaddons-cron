// Ensure you're using Node.js v18+ for native fetch support

async function callAPI() {
  try {
    const response = await fetch('https://api.botaddons.com/ping');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API called successfully:', data);
  } catch (error) {
    console.error('API call failed:', error.message);
  }
}

callAPI();
