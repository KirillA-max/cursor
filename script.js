

const cursor = document.createElement('img')
cursor.src = 'img/cursor.png'
cursor.classList.add('cursor')

document.body.appendChild(cursor)
console.log(document.location.origin + '/config.json');


window.addEventListener('mousemove', function (event) {
    cursor.style.left = event.clientX - (cursor.offsetWidth / 2) + 'px'
    cursor.style.top = event.clientY - (cursor.offsetHeight / 2) + 'px'
})


fetch(document.location.origin + '/config.json')
.then(response => {
    return response.json();
})
.then(response => {
    console.log(response);
    cursor.style.width = response.width;
    cursor.style.height = response.height;
})