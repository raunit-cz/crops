const crops = [
{
    name: "Organic Basmati Rice",
    variety: "Pusa Basmati 1121",
    season: "Kharif",
    price: "₹85/kg",
    popularity: "★★★★★",
    organic: true,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c"
},
{
    name: "Premium Wheat",
    variety: "Sharbati",
    season: "Rabi",
    price: "₹35/kg",
    popularity: "★★★★☆",
    organic: false,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
},
{
    name: "Organic Sugarcane",
    variety: "Co 0238",
    season: "Annual",
    price: "₹320/quintal",
    popularity: "★★★★★",
    organic: true,
    image: "https://images.unsplash.com/photo-1598514982461-7f0f6dfc0c03"
},
{
    name: "Fresh Potato",
    variety: "Kufri Jyoti",
    season: "Rabi",
    price: "₹25/kg",
    popularity: "★★★★☆",
    organic: false,
    image: "https://images.unsplash.com/photo-1582515073490-dc2c1e4d6a4f"
},
{
    name: "Organic Tomato",
    variety: "Roma",
    season: "All Season",
    price: "₹40/kg",
    popularity: "★★★★★",
    organic: true,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
},
{
    name: "Onion",
    variety: "Nashik Red",
    season: "Rabi",
    price: "₹30/kg",
    popularity: "★★★★☆",
    organic: false,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4"
}
];

const container = document.getElementById("cropContainer");

function displayCrops(data) {
    container.innerHTML = "";
    data.forEach(crop => {
        container.innerHTML += `
        <div class="crop-card">
            <img src="${crop.image}" alt="${crop.name}">
            <div class="crop-info">
                ${crop.organic ? '<div class="badge">🌱 Organic</div>' : ''}
                <h3>${crop.name}</h3>
                <p><strong>Variety:</strong> ${crop.variety}</p>
                <p><strong>Season:</strong> ${crop.season}</p>
                <p><strong>Popularity:</strong> ${crop.popularity}</p>
                <p class="price">${crop.price}</p>
            </div>
        </div>
        `;
    });
}

function showOrganic() {
    const organicCrops = crops.filter(crop => crop.organic);
    displayCrops(organicCrops);
}

function showAll() {
    displayCrops(crops);
}

displayCrops(crops);