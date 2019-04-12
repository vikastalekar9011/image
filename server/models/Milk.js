var mongoose = require('mongoose');

var MilkSchema = new mongoose.Schema({
	_id: Number,
	shift: {
		type: String,
		enum: ['Morning', 'Evening']
			required: true
	},
	farmer_id: {
		type: Number,
		required: true
	},
	milk_quantity: {
		type: decimal,
		required: true
	},
	lacto: {
		type: number,
		min: 0,
		max: 1,
		required: true
	},
	fat: {
		type: decimal,
		min: 0.0,
		max: 1.0,
		required: true
	},
	paid_status: {
		type: String,
		enum: ['Paid', 'Unpaid']
			required: true
	},
	rate: {
		type: decimal,
		min: 0.0,
		max: 1.0,
		required: true,
	}

});

module.exports = mongoose.model('Milk', MilkSchema);