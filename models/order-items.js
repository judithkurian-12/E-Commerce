const Sequelize=require('sequelize');
const sequelize=require("../util/database");

const orderItem=sequelize.define('orderitem',{
	id:{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		allowNull:false,
		primaryKey:true
	},
	quantity:Sequelize.INTEGER
});

module.exports=orderItem;