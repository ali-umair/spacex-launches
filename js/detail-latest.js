fetch('https://api.spacex.land/rest/launch-next')
.then(response => response.json())
.then(data => {

    dataHandler(data);

});


function nodeHandler() {

    const title = document.querySelector('title');
    const h1 = document.querySelector('h1');
    const rocketName = document.querySelector('.rocket-name');
    const rocketId = document.querySelector('.rocket-id');
    const rocketType = document.querySelector('.rocket-type');
    const cores = document.querySelector('.cores');
    const block = document.querySelector('.block');
    const flight = document.querySelector('.flight');
    const gridfins = document.querySelector('.gridfins');
    const landingIntent = document.querySelector('.landing-intent');
    const landingType = document.querySelector('.landing-type');
    const legs = document.querySelector('.legs');
    const reused = document.querySelector('.reused');

    return [
        title, h1, rocketName, rocketId, rocketType, cores, block, flight, gridfins, 
        landingIntent, landingType, legs, reused
    ];
}


function dataHandler(data) {

    const nodes = nodeHandler();

    nodes[0].textContent = `${data.mission_name} Details`;

    nodes[1].textContent = `${data.mission_name} Details`;

    nodes[2].textContent = data.rocket.rocket_name;

    nodes[3].textContent = data.rocket.rocket.id;

    nodes[4].textContent = data.rocket.rocket_type;

    nodes[5].textContent = `Cores: ${Object.keys(data.rocket.first_stage).length}`;

    nodes[6].textContent = data.rocket.first_stage.cores[0].block;

    nodes[7].textContent = data.rocket.first_stage.cores[0].flight;

    nodes[8].textContent = data.rocket.first_stage.cores[0].gridfins;

    nodes[9].textContent = data.rocket.first_stage.cores[0].landing_intent;

    nodes[10].textContent = data.rocket.first_stage.cores[0].landing_type;

    nodes[11].textContent = data.rocket.first_stage.cores[0].legs;

    nodes[12].textContent = data.rocket.first_stage.cores[0].reused;

    // console.log(data);
}