document.addEventListener("DOMContentLoaded", function () {
    async function searchPlayer() {
        const searchInput = document.getElementById("searchInput").value.trim();
        const resultsDiv = document.getElementById("results");

        // Check if input is empty
        if (!searchInput) {
            resultsDiv.innerHTML = "<p style='color: red;'>⚠️ Please enter a player's name.</p>";
            return;
        }

        try {
            // Fetch player data from JSON file
            const response = await fetch("Foot.json");
            if (!response.ok) throw new Error("Failed to load player data.");

            const players = await response.json();

            // Search for the player
            const foundPlayer = players.find(player =>
                player.player.toLowerCase().includes(searchInput.toLowerCase())
            );

            // Display results
            if (foundPlayer) {
                resultsDiv.innerHTML = `
                    <h2>🎉 Player Found:</h2>
                    <p>👤 <strong>Name:</strong> ${foundPlayer.player}</p>
                    <p>🌍 <strong>Country:</strong> ${foundPlayer.country}</p>
                    <p>🎂 <strong>Age:</strong> ${foundPlayer.age}</p>
                    <p>🏆 <strong>Club:</strong> ${foundPlayer.club}</p>
                    <p>⚽ <strong>Position:</strong> ${foundPlayer.att_position || "N/A"}</p>
                    <p>🎯 <strong>Dribbling:</strong> ${foundPlayer.dribbling}</p>
                    <p>🚀 <strong>Sprint Speed:</strong> ${foundPlayer.sprint_speed}</p>
                    <p>💪 <strong>Strength:</strong> ${foundPlayer.strength}</p>
                    <p>🎯 <strong>Finishing:</strong> ${foundPlayer.finishing}</p>
                    <p>💰 <strong>Value:</strong> ${foundPlayer.value}</p>
                `;
            } else {
                resultsDiv.innerHTML = "<p style='color: red;'>❌ No player found. Try another name.</p>";
            }
        } catch (error) {
            resultsDiv.innerHTML = `<p style='color: red;'>❌ Error: ${error.message}</p>`;
            console.error("Error fetching player data:", error);
        }
    }

    // Attach function to global window object so it can be called from HTML
    window.searchPlayer = searchPlayer;
});
