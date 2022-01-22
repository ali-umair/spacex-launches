fetch('https://api.spacex.land/rest/launch-next')
.then(response => response.json())
.then(data => {

    renderTemplate(data);

});


function renderTemplate(data) {
    let body = document.querySelector('body');
    let template = document.querySelector('#template');
    let templateHTML = template.textContent;
    let renderedTemplate = swig.compile(templateHTML);
    let result = renderedTemplate({data: data});
    body.innerHTML = result;
    
}


// function nodeHandler() {

//     const title = document.querySelector('title');
//     const h1 = document.querySelector('h1');
//     const rocketName = document.querySelector('.rocket-name');
//     const rocketId = document.querySelector('.rocket-id');
//     const rocketType = document.querySelector('.rocket-type');
//     const cores = document.querySelector('.cores');
//     const block = document.querySelector('.block');
//     const flight = document.querySelector('.flight');
//     const gridfins = document.querySelector('.gridfins');
//     const landingIntent = document.querySelector('.landing-intent');
//     const landingType = document.querySelector('.landing-type');
//     const legs = document.querySelector('.legs');
//     const reused = document.querySelector('.reused');
//     const coreId = document.querySelector('.core-id');
//     const coreBlock = document.querySelector('.core-block');
//     const asdsAttempts = document.querySelector('.asds-attempts');
//     const asdsLandings = document.querySelector('.asds-landings');
//     const coreReuseCount = document.querySelector('.core-reuse-count');
//     const previousMissionCount = document.querySelector('.previous-missions-count');
//     const previousMissionName = document.querySelector('.previous-missions-name');
//     const previousMissionFlight = document.querySelector('.previous-missions-flight');

//     return [
//         title, h1, rocketName, rocketId, rocketType, cores, block, flight, gridfins, 
//         landingIntent, landingType, legs, reused, coreId, coreBlock, asdsAttempts, asdsLandings,
//         coreReuseCount, previousMissionCount, previousMissionName, previousMissionFlight
//     ];
// }


// function dataHandler(data) {

//     const nodes = nodeHandler();

//     // const n = () => {
//     //     let i = 0;
//     //     for(let i=0; i<=16; i++){
//     //         return i;   
//     //     }
//     //     return i;
//     // }

//     // console.log(n);

//     nodes[6].textContent = data.rocket.first_stage.cores[0].block;

//     nodes[7].textContent = data.rocket.first_stage.cores[0].flight;

//     nodes[8].textContent = data.rocket.first_stage.cores[0].gridfins;

//     nodes[9].textContent = data.rocket.first_stage.cores[0].landing_intent;

//     nodes[10].textContent = data.rocket.first_stage.cores[0].landing_type;

//     nodes[11].textContent = data.rocket.first_stage.cores[0].legs;

//     nodes[12].textContent = data.rocket.first_stage.cores[0].reused;

//     nodes[13].textContent = data.rocket.first_stage.cores[0].core.id;

//     nodes[14].textContent = data.rocket.first_stage.cores[0].core.block;

//     nodes[15].textContent = data.rocket.first_stage.cores[0].core.asds_attempts;

//     nodes[16].textContent = data.rocket.first_stage.cores[0].core.asds_landings;

//     nodes[17].textContent = data.rocket.first_stage.cores[0].core.reuse_count;

//     console.log(data.rocket.first_stage.cores[0].core.missions[0].name);

//     nodes[18].textContent = data.rocket.first_stage.cores[0].core.missions.length;

//     nodes[19].textContent = `"${data.rocket.first_stage.cores[0].core.missions[0].name}" - 
//     "${data.rocket.first_stage.cores[0].core.missions[1].name}" - 
//     "${data.rocket.first_stage.cores[0].core.missions[2].name}"`;

//     // nodes[20].textContent = data.rocket.first_stage.cores[0].core.reuse_count;

//     // console.log(data);
// }
