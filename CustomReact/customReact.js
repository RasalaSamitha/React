
function createElement(renderElement, container){
    const tag = document.createElement(renderElement.type);
    tag.innerHTML = renderElement.Children;
    for(const prop in renderElement.props){
        if(prop == 'children') continue;
        tag.setAttribute(prop, renderElement.props[prop])
    }
    container.appendChild(tag);
}


const renderElement = {
    type : 'a',
    props : {
       href : "https://google.com",
       target : "_blank",
    },
    Children : 'click me to visit google'
}

const mainContainer = document.getElementById('root');

createElement(renderElement, mainContainer);