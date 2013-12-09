module.exports = function(el, prop){
        var propValue = document.defaultView.getComputedStyle(el).getPropertyValue(prop)
        if(!propValue) throw new Error("No prop valueValue. Is the element appended to the document yet?")
        if(!propValue) return false
        return (parseInt(propValue) || 0)
}
