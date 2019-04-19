var mongoose=require('mongoose');
var locationSchema=mongoose.Schema({
    name:{type:String,require:true,maxlength:50},
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
module.exports = mongoose.model('Location', locationSchema);