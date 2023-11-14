document.addEventListener("DOMContentLoaded", function() {
    fetchNamebaseData();
});

function fetchNamebaseData() {
    // Replace with the correct API endpoint and add any required headers/parameters
    fetch('https://api.namebase.io/api/domain-sales')
        .then(response => response.json())
        .then(data => {
            createChart(data);
        })
        .catch(error => console.error('Error fetching Namebase data:', error));
}

function createChart(data) {
    const ctx = document.getElementById('salesChart').getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line', // or 'bar', 'pie', etc., depending on your data

        // The data for our dataset
        data: {
            labels: data.map(sale => sale.domain), // Assuming 'domain' is a property in your data
            datasets: [{
                label: 'Domain Sales',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data.map(sale => sale.price) // Assuming 'price' is a property in your data
            }]
        },

        // Configuration options go here
        options: {}
    });
}


