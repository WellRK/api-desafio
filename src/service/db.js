const mongoose = require('mongoose');


module.exports = function () {
    return mongoose
    .connect(
        process.env.MONGO_URL
    )
}
