 
 module.exports = function(mongoose, connection) {

 	var partnerSchema = mongoose.Schema({
 		name: {
 			type: String,
 			required: true,
 		},
 		status: {
 			type: Number,
 			default: 1 // 1 is Enabled
 		},
 		partners: [
 			{
 				title: String,
 				locale: String,
 				link: String,
 				image: String,
 				sort_order: Number
 			}
 		]
 	},
 	{
 		timestamps: {
 			createdAt: 'created_at',
 			updatedAt: 'updated_at'
 		}
 	});

 	return connection.model('Partner', partnerSchema);
 }