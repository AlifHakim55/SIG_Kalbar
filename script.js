// Inisialisasi Peta
const map = L.map('map').setView([-0.5, 111.5], 6); // Fokus Kalimantan Barat

// Tambahkan Tile Layer (Peta Dasar)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Data Tempat Wisata
const wisataJateng = [
    {
        name: "Taman Nasional Bukit Baka Bukit Raya",
        description: "Kawasan ini merupakan ekosistem hutan hujan tropis yang kaya akan keanekaragaman hayati, termasuk flora dan fauna endemik. Taman ini juga berfungsi sebagai lokasi perlindungan alam.",
        coordinates: [-1.2000, 111.5000],
        image: "Gunung_Bukit_Raya.jpg"
    },
    {
        name: "Danau Sentarum",
        description: "Terletak di Kabupaten Kapuas Hulu, taman ini terkenal dengan cekungan danau yang luas, menjadi habitat bagi berbagai spesies ikan dan burung, serta memiliki keindahan alam yang menakjubkan.",
        coordinates: [-0.2000, 111.5000],
        image: "Danau_Sentarum.jpg"
    },
    {
        name: "Pantai Temajuk",
        description: "Pantai ini menawarkan pemandangan laut yang indah dan suasana yang tenang, cocok untuk bersantai dan menikmati keindahan alam.",
        coordinates: [-1.0000, 109.5000],
        image: "Pantai_Temajuk.jpg"
    },
    {
        name: "Kebun Raya Unmul",
        description: "Kebun raya ini merupakan tempat penelitian dan konservasi berbagai jenis tumbuhan, serta menjadi lokasi edukasi bagi pengunjung tentang keanekaragaman hayati.",
        coordinates: [-0.5000, 117.0000],
        image: "Kebun_Raya_Unmul.jpg"
    },
    {
        name: "Air Terjun Tanjung Koyan",
        description: "Air terjun ini menawarkan pemandangan yang spektakuler dan suasana yang sejuk, ideal untuk kegiatan trekking dan menikmati alam.",
        coordinates: [-1.1000, 111.2000],
        image: "Air_Terjun_Tanjung_Koyan.jpg"
    },
    {
        name: "Tugu Khatulistiwa",
        description: "Sebagai ibu kota Kalimantan Barat, Pontianak memiliki berbagai tempat menarik seperti Tugu Khatulistiwa, yang menandai garis khatulistiwa. Selain itu, pengunjung dapat menikmati kuliner khas dan budaya lokal.",
        coordinates: [-0.0000, 109.3333],
        image: "Tugu_Khatulistiwa.jpg"
    },
    {
        name: "Air Terjun Sijunjung",
        description: "Terletak di Kabupaten Landak, air terjun ini menawarkan pemandangan yang menakjubkan dan suasana yang tenang. Tempat ini cocok untuk kegiatan trekking dan piknik.",
        coordinates: [-0.5000, 110.0000],
        image: "Air_Terjun_Sijunjung.jpg"
    },
    {
        name: "Danau Biru",
        description: "Terletak di Kabupaten Bengkayang, Danau Biru adalah danau yang terbentuk dari bekas galian tambang. Airnya yang jernih dan berwarna biru membuatnya menjadi tempat yang populer untuk berfoto dan bersantai.",
        coordinates: [-1.0000, 109.5000],
        image: "Danau_Biru.jpg"
    },
];

// Tambahkan Marker dengan Gambar di Pop-up
wisataJateng.forEach(wisata => {
    L.marker(wisata.coordinates).addTo(map)
        .bindPopup(`
            <div class="marker-popup">
                <h3>${wisata.name}</h3>
                <img src="${wisata.image}" alt="${wisata.name}">
                <p>${wisata.description}</p>
            </div>
        `);
});
