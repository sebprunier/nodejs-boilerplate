'use strict';

var Hello = function() {

    var _hello = function() {
        return "Hello World !"
    };

    return {
        hello : _hello
    };
};

module.exports = Hello;

