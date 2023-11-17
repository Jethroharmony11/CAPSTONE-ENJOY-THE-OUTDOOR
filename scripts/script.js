

// Function to fetch sunset/sunrise times
async function getSunsetForMountain(lat, lng) {
    let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    return data.results;
}

// Display mountain information and sunrise/sunset times
async function displayMountainInfo() {
    const mountainInfoElement = document.getElementById("mountain-info");

    // Display mountain image
    mountainInfoElement.innerHTML = `<img src="${mountain.image}" alt="${mountain.name}">`;

    // Fetch and display sunrise/sunset times
    try {
        const { sunrise, sunset } = await getSunsetForMountain(mountain.lat, mountain.lng);
        mountainInfoElement.innerHTML += `<p>${mountain.name}</p>`;
        mountainInfoElement.innerHTML += `<p>Sunrise: ${sunrise}</p>`;
        mountainInfoElement.innerHTML += `<p>Sunset: ${sunset}</p>`;
    } catch (error) {
        console.error("Error fetching sunrise/sunset times", error);
        mountainInfoElement.innerHTML += `<p>Error fetching sunrise/sunset times</p>`;
    }
}

// Call the function to display mountain information
displayMountainInfo();