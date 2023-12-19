function expandOptions(boxId) {
    // Collapse all boxes first
    document.querySelectorAll('.box').forEach(box => {
        box.classList.remove('selected');
        box.querySelector('.options').style.display = 'none';
        // Uncheck the radio button
        box.querySelector('input[type="radio"]').checked = false;
    });

    // Expand the clicked box
    const box = document.getElementById(boxId);
    box.classList.add('selected');
    box.querySelector('.options').style.display = 'block';
    // Check the radio button
    box.querySelector('input[type="radio"]').checked = true;
}

function addToCart() {
    // Add your logic for adding to cart here
    alert('Item added to cart!');
}