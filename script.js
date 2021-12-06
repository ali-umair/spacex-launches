// const div = document.getElementsByClassName('test');

fetch('https://api.spacex.land/rest/launch-next')
.then(response => response.json())
.then(data => {
    // const parsedData = JSON.parse(data);
    const p = document.querySelector('p');
    p.textContent = data.id;

    console.log(data.id);
});