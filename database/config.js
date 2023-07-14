const mongoose = require('mongoose');

const dbCnn = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);

        console.log('base de datos mela')
    } catch (error) {
        console.log(error)
        throw new Error('Something went wrong with the DB')
    }
}


module.exports = {
    dbCnn
}