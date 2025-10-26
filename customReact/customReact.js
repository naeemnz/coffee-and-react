const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    }, //ye properties ka short form he aur ye ek object he ya hota he
    Children: 'Click me to go to google'
}
const mainContainer = document.querySelector('#root');

function customRender(reactElement, container) {
    //sub se pehle dom element banao aur phir us me react k element ko inject karo yani a or img or br
    /*
    const domElement = document.createElement(reactElement.type); //ye karne ki waja ye he k hum yahan direct ek element yani a ya 'p' de sakte the lekin hum modular tariqe se kam karrahe hen isliye koi bhi element is placeholder jo is function me he ki jagah aye ga wo use hoga 
    domElement.innerHTML = reactElement.children;
    domElement.setAttributes('href', reactElement.props.href);
    domElement.setAttributes('target', reactElement.props.target);
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; 
            domElement.setAttribute(prop, reactElement.props[prop])
             
    }
    container.appendChild(domElement);
}

customRender(reactElement, mainContainer);

