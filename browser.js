var cart = require('./')
var getids = require('getids')
document.body.style.height = window.innerHeight-1 + 'px'
document.body.style.width = window.innerWidth-1 + 'px'
var ui = getids(document.body)

setTimeout(function(){
    ui.firstControl.moveTo(0,0)
}, 1)
setTimeout(function(){
    ui.firstControl.moveTo(100,-100)
}, 1000)
setTimeout(function(){
    ui.firstControl.moveTo(0,0)
}, 2000)

console.log(cart.offset([0,0]))
