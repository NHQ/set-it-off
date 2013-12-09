var getCSS = require('./getCSS');
var findPos = require('./findPos');

var elements = {};
var parent = {center : [window.innerWidth / 2,  window.innerHeight / 2]}
var e = module.exports

e.setParent = function(el, offset){
    if(!el && offset){
	parent.center[0]+=offset[0];
	parent.center[1]-=offset[1];	
    }
    else{
	if('string' == typeof el){
	    el = document.getElementById(el)
	}
	parent = objectify(el);
	if(offset){
	    parent.center[0]+=offset[0];
	    parent.center[1]-=offset[1];
	}
    }
}

HTMLElement.prototype.moveTo = function(x, y){
    if('array' == typeof x) {
	y = x[1];
	x = x[1];
    }
    this.cartesian = [x, y]
    var pos = findPos(this)
    var z = objectify(this)
    this.style['-webkit-transform'] = 'translate(' + (parent.center[0] + x - (z.width / 2)) + 'px,' + (parent.center[1] - y - (z.height / 2)) + 'px)';
}


function offsetDOM(x){
    x[0] = x[0] - parent.center[0]
    x[1] = parent.center[1] - x[1]
    return x
}

function objectify(el){
    var obj = {el: el};
    obj.width = parseFloat(getCSS(el, 'width'));
    obj.height = parseFloat(getCSS(el, 'height'));
    var p = obj.position = findPos(el);
    obj.center = [p[0] + (obj.width / 2), p[1] + (obj.height / 2)];
    obj.centerOffset = [obj.width / 2, obj.height / 2];
    if(el.id.length > 0) elements[el.id] = obj;
    return obj
}