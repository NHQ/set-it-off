# set-it-off

4 quadrant positioning for your DOM.  Use it with browserify.

```
npm install set-it-off
```

## Use
This module adds a moveTo(x, y) method to the HTMLElement prototype.  

```js
var offSet = require('set-it-off')
var marker = document.getElementById('marker')
marker.moveTo(0,0) // centers the element

```
This method will translate the element to that position as if the window was a 4 quadrant grid.  Ergo, moveTo(0, 0) will center the element.  Not only that, it positions the element by its center, rather than its top-left corner.  This is for absolute positioned interfaces.

## Method.setParent
The module itself returns a method setParent(el, [offSetX, offSetY]) for setting the parent container for your grid, and offsetting the point [0,0]. So you could set [0,0] to be anywhere on your page, or anywhere in relation to the center of any element, such as a canvas.  Note that the offset value is in relation to the center of the element/window.

If you don't set a parent element, it uses the window.

```js
var offSet = require('set-it-off')
offSet.setParent(document.body, [-100, -100])
```
or pass null for the element to offset the center coordinate of the window
```js
var offSet = require('set-it-off')
offSet.setParent(null, [-100, -100])
var marker = document.getElementById('marker')
marker.moveTo(0,0) // centers the element
```

## demo

Clone the repo and open public/index.html

browser.js is the pre-browserified code.  Here's that code:
```js
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
```