var mongoose = require('mongoose');

var MilkSchema = new mongoose.Schema({
	// _id: Number,
	shift: {
		type: String,
		enum: ['Morning', 'Evening'],
		required: true
	},
	farmerId: {
		type: Number,
		required: true
	},
	milkQuantity: {
		type: Number,
		required: true
	},
	lacto: {
		type: Number,
		min: 0,
		max: 1,
		required: true
	},
	fat: {
		type: Number,
		min: 0.0,
		max: 1.0,
		required: true
	},
	paidStatus: {
		type: String,
		enum: ['Paid', 'Unpaid'],
		required: true
	},
	rate: {
		type: Number,
		min: 0.0,
		max: 1.0,
		required: true,
	},
	created_at: {
		type: Date, default: Date.now
	}

});

module.exports = mongoose.model('Milk', MilkSchema);