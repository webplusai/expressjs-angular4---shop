 
 module.exports = function(mongoose, connection) {

 	var slideshowSchema = mongoose.Schema({
 		name: {
 			type: String,
 			required: true,
 		},
 		status: {
 			type: Number,
 			default: 1 // 1 is Enabled
 		},
 		slideshows: [
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

 	return connection.model('Slideshow', slideshowSchema);
 }