const City = require('./city');
const Country = require('./country');
const Countrylanguage = require('./language');
const config = require('../config.json');

module.exports = (Sequelize) =>{
    const connection = new Sequelize(config.db.name, config.db.user, config.db.pass, config.db.options);

    const city = City(Sequelize, connection);
    const country = Country(Sequelize, connection);
    const countrylanguage = Countrylanguage(Sequelize, connection);

    country.hasMany(city, {foreignKey: 'CountryCode', primaryKey: 'Code'});
    country.hasMany(countrylanguage, {foreignKey: 'CountryCode', primaryKey: 'Code'});

    return {
        Sequelize,
        connection,
        models: {
            city,
            country,
            countrylanguage,
        }
    };
};