const mongoose = require("mongoose");

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('Base de datos Online');
    } catch (error) {
        throw new Error("Error en la base de dato");
    }
};

module.exports = {
    dbConnection,
};