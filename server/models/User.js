var mongoose = require('mongoose');
var Location = require('./Location');

var UserSchema = new mongoose.Schema({
	// _id: Number,
	firstName: { type: String, required: true, maxlength: 30 },
	middleName: { type: String, required: true, maxlength: 30 },
	lastName: { type: String, required: true, maxlength: 30 },
	// location:{type: String,required: true ,maxlength:50},
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
	location:{ type: mongoose.Schema.Types.ObjectId},

	created_at: {
		type: Date, default: Date.now
	},
	updated_at: {
		type: Date
	},
	created_by: {
		type: Number
	},
	updated_by: {
		type: Number
	}
});

module.exports = mongoose.model('User', UserSchema);