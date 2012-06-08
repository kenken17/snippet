var myApp = myApp || {};
myApp = function () {
    // MagicInit function
    var __init__=function(){if(this.beforeAutoInit&&$.isFunction(this.beforeAutoInit))this.beforeAutoInit();for(var i in this){if($.isPlainObject(this[i])&&$.isFunction(this[i].init)){if(this[i].autoInit==undefined||(this[i].autoInit!=undefined&&(($.isFunction(this[i].autoInit)&&this[i].autoInit())||($.type(this[i].autoInit)==='boolean'&&this[i].autoInit)))){this[i].init();}}} if(this.afterAutoInit&&$.isFunction(this.afterAutoInit))this.afterAutoInit();};

    var _privateProperty = 'This is a private property';

    var _privateMethod = function () {
        console.log('This is a private method.');
    };

    var obj = {
        init: __init__,
        
        property: {
            autoInit: function() {
                return true;
            },
            init: function() {
                
            }
        }
    };
    
    return obj;
}();

$(document).ready(function () {
    myApp.init();
});