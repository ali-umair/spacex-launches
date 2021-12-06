// const div = document.getElementsByClassName('test');

fetch('https://api.spacex.land/rest/launch-next')
.then(response => response.json())
.then(data => {
    // const parsedData = JSON.parse(data);
    const id = document.querySelector('.id-latest');
    const date = document.querySelector('.date-latest');
    const site = document.querySelector('.site-latest');
    const details = document.querySelector('.details-latest');
    const patch = document.querySelector('img');
    id.textContent = data.id;
    date.textContent = data.launch_date_utc;
    site.textContent = data.launch_site.site_name_long;
    details.textContent = data.details;
    patch.setAttribute('src', 'https://imgur.com/jHNFSY6.png')


    // console.log(data.id);
});