var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
		{ 
			email : {
				type : String, trim : true, unique : true
			},
			firstname : {
				type : String, trim : true
			},
			lastname : {
				type : String, trim : true
			},
			phone : {
				type : String, trim : true
			}
		}
	);
module.exports = mongoose.model('people', userSchema);
