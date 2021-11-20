const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:  {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },

});
// this will run everytime we create or update a "student " in the table
Student.beforeCreate(user => {
    let arr = user.firstName.split('')
    arr[0]= arr[0].toUpperCase;
    arr.join('');
})

module.exports = Student;
