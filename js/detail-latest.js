fetch('https://api.spacex.land/rest/launch-next')
.then(response => response.json())
.then(data => {

    dataHandler(data);

});


function dataHandler(data) {

    const title = document.querySelector('title');
    title.textContent = `${data.mission_name} Details`;

    const h1 = document.querySelector('h1');
    h1.textContent = `${data.mission_name} Details`;

    const rocketName = document.querySelector('.rocket-name');
    rocketName.textContent = data.rocket.rocket_name;

    const rocketId = document.querySelector('.rocket-id');
    rocketId.textContent = data.rocket.rocket.id;

    const rocketType = document.querySelector('.rocket-type');
    rocketType.textContent = data.rocket.rocket_type;

    const cores = document.querySelector('.cores');
    cores.textContent = `Cores: ${Object.keys(data.rocket.first_stage).length}`;

    // const rocketType = document.querySelector('.rocket-type');
    // rocketType.textContent = data.rocket.rocket_type;

    // const rocketType = document.querySelector('.rocket-type');
    // rocketType.textContent = data.rocket.rocket_type;

    // const rocketType = document.querySelector('.rocket-type');
    // rocketType.textContent = data.rocket.rocket_type;

    // const rocketType = document.querySelector('.rocket-type');
    // rocketType.textContent = data.rocket.rocket_type;

    // const rocketType = document.querySelector('.rocket-type');
    // rocketType.textContent = data.rocket.rocket_type;

    // const rocketType = document.querySelector('.rocket-type');
    // rocketType.textContent = data.rocket.rocket_type;

    // const rocketType = document.querySelector('.rocket-type');
    // rocketType.textContent = data.rocket.rocket_type;
    // console.log(data);

    // console.log(data);
}