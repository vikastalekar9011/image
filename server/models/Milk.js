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
		type: mongoose.Types.Decimal128,
		required: true
	},
	lacto: {
		type: mongoose.Types.Decimal128,
		min: 0,
		max: 35,
		required: true
	},
	fat: {
		type: mongoose.Types.Decimal128,
		min: 0,
		max: 7,
		required: true
	},
	snf: {
		type: mongoose.Types.Decimal128,
		min: 0,
		max: 30,
		required: true
	},
	paid_status: {
		type: String,
		enum: ['Paid', 'Unpaid'],
			required: true
	},
	rate: {
		type: mongoose.Types.Decimal128,
		min: 20,
		max: 40,
		required: true,
	}

});

module.exports = mongoose.model('Milk', MilkSchema);