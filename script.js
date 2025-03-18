const items = [
    { name: 'Glass (250 pcs)', price: 135 },
    { name: 'Bisnu Glass (30 pcs)', price: 15 },
    { name: 'Cold Coffee Glass (30 pcs)', price: 37 },
    { name: 'Small Glass (10 pcs)', price: 10 },
    { name: 'Plate (20 pcs)', price: 20 },
    { name: 'Straw (200 pcs)', price: 50 },
    { name: 'Spoon (20 pcs)', price: 13 },
    { name: 'Jal Jeera (100 pcs)', price: 80 },
    { name: 'Aam Panna Syrup (3 bottles)', price: 270 },
    { name: 'Aam Panna Syrup (1 bottle)', price: 80 },
    { name: 'Coffee (16 pcs)', price: 31 },
    { name: 'Coffee Big Packet', price: 10 },
    { name: 'Butter (1 pkt)', price: 16 },
    { name: 'Marzarine (2 pkt)', price: 44 },
    { name: 'Sugar (3 kg)', price: 144 },
    { name: 'Nimbu (27 pcs)', price: 160 },
    { name: 'Pudina (1 bundle)', price: 20 },
    { name: 'Ice (8 kg)', price: 80 },
    { name: 'Ice Deposit', price: 50 },
    { name: 'Pasta', price: 50 },
    { name: 'Soda Water (3 bottles)', price: 60 },
    { name: 'Balls (2 pcs)', price: 12 },
    { name: 'Milk (2 pkt)', price: 50 }
];

function loadItems() {
    const itemsTable = document.getElementById('itemsTable');
    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
        `;
        itemsTable.appendChild(row);
    });
}

function calculateTotal() {
    let total = 0;

    // Sum all the prices for the total investment
    items.forEach(item => {
        total += item.price;
    });

    // Display the total amount
    document.getElementById('totalAmount').innerText = total;
}

loadItems();
