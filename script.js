// var h1 = React.createElement('h1',null,'Hello from React');
// var h2 = React.createElement('h2', null, "Hello i am Achyuta");

// var div = React.createElement('div',{id:'parent'},[h1,h2])
// var container = document.querySelector('#root')

// var root = ReactDOM.createRoot(container)

// root.render(div)

// import box from './app.js'
// import circle from './test.js'

import parent from "./parent.js"

const h1 = ()=> React.createElement('h1',null,'hello from Achyuta')

var root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(h1())
root.render(parent())