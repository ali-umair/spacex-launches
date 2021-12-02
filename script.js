// const div = document.getElementsByClassName('test');

fetch('https://api.spacex.land/rest/launch-next')
.then(response => response.json())
.then(data => {
    // const parsedData = JSON.parse(data);

    console.log(data.id);
});