// Mock Price Data Last 4 Years + Predicted 1 Year (averages in ₹ per kg)
const cropData = {
    rice: [30, 32, 35, 37, 38],
    wheat: [28, 29, 30, 31, 32],
    sugarcane: [25, 24, 26, 28, 30],
    potato: [15, 16, 18, 20, 22],
    onion: [18, 21, 19, 23, 27],
    tomato: [20, 23, 22, 26, 30]
};

// Years for x-axis
const labels = ["2022", "2023", "2024", "2025", "2026 (Pred)"];

// Set the current price UI
document.getElementById("rice-price").innerText = cropData.rice[4];
document.getElementById("wheat-price").innerText = cropData.wheat[4];
document.getElementById("sugarcane-price").innerText = cropData.sugarcane[4];
document.getElementById("potato-price").innerText = cropData.potato[4];
document.getElementById("onion-price").innerText = cropData.onion[4];
document.getElementById("tomato-price").innerText = cropData.tomato[4];

// Chart Create Function
function createChart(canvasId, dataArray, color) {
    new Chart(document.getElementById(canvasId), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price ₹/kg',
                data: dataArray,
                borderColor: color,
                backgroundColor: color + "80",
                tension: 0.35,
                fill: true,
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: "#ccc" }
                },
                x: {
                    grid: { color: "#eee" }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// Create All Charts
createChart("riceChart", cropData.rice, "#0f9535");
createChart("wheatChart", cropData.wheat, "#1b5e20");
createChart("sugarcaneChart", cropData.sugarcane, "#f7941e");
createChart("potatoChart", cropData.potato, "#ffcc00");
createChart("onionChart", cropData.onion, "#f7941e");
createChart("tomatoChart", cropData.tomato, "#0f9535");