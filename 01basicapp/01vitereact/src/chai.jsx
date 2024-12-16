function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChilsd(domElement)
   const domElement =  document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
   }
   container.appendChild(domElement)

}

// const ReactElement = {
//     hitesh: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }
const anotherElement = <a href="https://google.com"target='_blank'>Visit Google</a>
const reactElement = React.createElement(
    'a',
    {
        href:'https://google.com',
        target:'_blank',
    },
    'Click me to visit google'

)


const mainContainer =(document.querySelector('#root')).render(

   reactElement
)


customRender(reactElement,mainContainer)