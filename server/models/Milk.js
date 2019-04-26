var mongoose = require('mongoose');

var MilkSchema = new mongoose.Schema({
	shift: {
		type: String,
		enum: ['Morning', 'Evening'],
			required: true
	},
	farmer: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	milk_quantity: {
		type: mongoose.Schema.Types.Number,
		required: true,
		default: 0.0
	},
	lacto: {
		type: mongoose.Schema.Types.Number,
		min: 0,
		max: 35,
		default: 0.0,
		required: true
	},
	fat: {
		type: mongoose.Schema.Types.Number,
		min: 0,
		max: 7,
		default: 0.0,
		required: true
	},
	snf: {
		type: mongoose.Schema.Types.Number,
		min: 0,
		max: 30,
		default: 0.0,
		required: true
	},
	paid_status: {
		type: String,
		enum: ['Paid', 'Unpaid'],
			required: true
	},
	rate: {
		type: mongoose.Schema.Types.Number,
		min: 20,
		max: 40,
		default: 0.0,
		required: true,
	},
	amount:{
		type:Number,
		required:true
	}

});

module.exports = mongoose.model('Milk', MilkSchema);