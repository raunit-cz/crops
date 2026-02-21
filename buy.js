const crops = [
{
    crop: "Rice",
    farmer: "Rajesh Kumar",
    state: "Punjab",
    district: "Ludhiana",
    grade: "A",
    quantity: "500 Quintals",
    price: "₹2400 / Quintal",
    phone: "919876543210",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c"
},
{
    crop: "Wheat",
    farmer: "Amit Singh",
    state: "Uttar Pradesh",
    district: "Kanpur",
    grade: "A",
    quantity: "700 Quintals",
    price: "₹2100 / Quintal",
    phone: "919812345678",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
},
{
    crop: "Potato",
    farmer: "Ravi Patel",
    state: "Gujarat",
    district: "Surat",
    grade: "B",
    quantity: "300 Quintals",
    price: "₹1200 / Quintal",
    phone: "919876123456",
    image: "https://images.unsplash.com/photo-1582515073490-dc2c1e4d6a4f"
},
{
    crop: "Onion",
    farmer: "Suresh Yadav",
    state: "Maharashtra",
    district: "Nashik",
    grade: "A",
    quantity: "400 Quintals",
    price: "₹1500 / Quintal",
    phone: "919834567890",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4"
},
{
    crop: "Tomato",
    farmer: "Mahesh Reddy",
    state: "Karnataka",
    district: "Mysore",
    grade: "B",
    quantity: "250 Quintals",
    price: "₹1800 / Quintal",
    phone: "919812398765",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
},
{
    crop: "Sugarcane",
    farmer: "Deepak Sharma",
    state: "Haryana",
    district: "Panipat",
    grade: "A",
    quantity: "1000 Quintals",
    price: "₹320 / Quintal",
    phone: "919876987654",
    image: "https://images.unsplash.com/photo-1598514982461-7f0f6dfc0c03"
},
{
    crop: "Maize",
    farmer: "Vikram Rao",
    state: "Madhya Pradesh",
    district: "Indore",
    grade: "B",
    quantity: "600 Quintals",
    price: "₹1900 / Quintal",
    phone: "919899887766",
    image: "https://images.unsplash.com/photo-1600431521340-491eca880813"
},
{
    crop: "Mustard",
    farmer: "Harpreet Singh",
    state: "Rajasthan",
    district: "Jaipur",
    grade: "A",
    quantity: "350 Quintals",
    price: "₹5200 / Quintal",
    phone: "919811223344",
    image: "https://images.unsplash.com/photo-1604908177522-0409b3f1f41c"
}
];

const container = document.getElementById("marketContainer");

function displayCrops(data) {
    container.innerHTML = "";
    data.forEach(item => {
        container.innerHTML += `
        <div class="crop-card">
            <img src="${item.image}" alt="${item.crop}">
            <div class="crop-info">
                <h3>${item.crop}</h3>
                <p><strong>Seller:</strong> ${item.farmer}</p>
                <p><strong>Location:</strong> ${item.district}, ${item.state}</p>
                <p class="grade ${item.grade}">Grade: ${item.grade}</p>
                <p class="quantity">${item.quantity}</p>
                <p class="price">${item.price}</p>
                <a class="whatsapp-btn" 
                   href="https://wa.me/${item.phone}?text=I%20am%20interested%20in%20buying%20${item.crop}%20in%20bulk" 
                   target="_blank">
                   Contact on WhatsApp
                </a>
            </div>
        </div>
        `;
    });
}

function filterCrops() {
    const selected = document.getElementById("cropFilter").value;
    if (selected === "all") {
        displayCrops(crops);
    } else {
        const filtered = crops.filter(item => item.crop === selected);
        displayCrops(filtered);
    }
}

displayCrops(crops);