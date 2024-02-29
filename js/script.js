async function showImages() {
    const lowerLimit = parseInt(document.getElementById('lowerLimit').value);
    const upperLimit = parseInt(document.getElementById('upperLimit').value);
    const showOne = document.getElementById('showOne').checked;

    if (lowerLimit >= upperLimit) {
        alert('El limite inferior debe ser menor que el limite superior');
        return;
    } else if(upperLimit>=100){
        alert('El limite superior debe ser menor a 100');
        return;
    }

    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    if (showOne) {
        const imageUrl = `http://jsonplaceholder.typicode.com/photos/${lowerLimit}`;
        const response = await fetch(imageUrl);
        const imageData = await response.json();
        const img = document.createElement('img');
        img.src = imageData.url;
        imageContainer.appendChild(img);
    } else {
        for (let i = lowerLimit; i <= upperLimit; i++) {
            const imageUrl = `http://jsonplaceholder.typicode.com/photos/${i}`;
            const response = await fetch(imageUrl);
            const imageData = await response.json();
            const img = document.createElement('img');
            img.src = imageData.url;
            imageContainer.appendChild(img);
        }
    }
    
}