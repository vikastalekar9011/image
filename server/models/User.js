var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	_id: Number,
	first_name: { type: String, required: true, maxlength: 30 },
	middle_name: { type: String, required: true, maxlength: 30 },
	last_name: { type: String, required: true, maxlength: 30 },
	mobile: {
		type: String,
		unique: true,
		validate: {
			validator: function (v) {
				return /^([0-9]{10}$)/.test(v);
			}
		},
		required: true
	},
	password: String,
	email: { type: String, maxlength: 60 },
	status: {
		type: String,
		enum: ['Active', 'Inactive'],
			required: true
	},
	role: {
		type: String,
		enum: ['Admin', 'Milk Collector', 'Farmer', 'Checking', 'Account'],
			required: true
	},
	created_at: {
		type: Date, default: Date.now
	},
	updated_at: {
		type: Date
	},
	created_by: {
		type: number
	},
	updated_by: {
		type: number
	}
});

module.exports = mongoose.model('User', UserSchema);