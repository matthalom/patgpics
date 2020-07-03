const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    image: {
        type: String,
        required: true
    },

    series: {
        type: String,
        required: true
    }

    // TODO: Add the fields that will change the colors in the templating engine
    //       to correspond with the colors in the image
});

module.exports = mongoose.model('Photo', PhotoSchema);