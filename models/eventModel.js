'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


var eventSchema = mongoose.Schema({
    title: 'string',
    host: 'string',
    state: 'string',
    location: "string",
    details: "string",
    date: "string"


});

eventSchema.methods.serialize = function() {
    return {
        id: this._id,
		    title: this.title,
		    host: this.host,
		    state: this.state,
		    location: this.location,
		    details: this.details,
		    date: this.date

    };
};

const Events = mongoose.model('Events', eventSchema);

module.exports = {Events};