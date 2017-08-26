'use strict';

exports.handler = (event, context, callback) => {
    console.log("LOG: name is " + event.name);
    callback(null, "hello, " + event.name);
}
