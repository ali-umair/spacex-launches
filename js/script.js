// const div = document.getElementsByClassName('test');

fetch('https://api.spacex.land/rest/launch-next')
.then(response => response.json())
.then(data => {
    // const parsedData = JSON.parse(data);
    const name = document.querySelector('.name-latest');
    const date = document.querySelector('.date-latest');
    const site = document.querySelector('.site-latest');
    const details = document.querySelector('.details-latest');
    const patch = document.querySelector('img');
    name.textContent = data.mission_name;
    date.textContent = data.launch_date_utc;
    site.textContent = data.launch_site.site_name_long;
    details.textContent = data.details;
    patch.setAttribute('src', 'https://imgur.com/jHNFSY6.png')


    // console.log(data.id);
});