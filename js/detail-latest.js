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