function customRender(reactElement,container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href) 
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (prop in reactElement.props) {
        if (prop === 'children') {
            continue
        }
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "click here (google)"
}
const mainContainer = document.getElementById("root")

customRender(reactElement,mainContainer)