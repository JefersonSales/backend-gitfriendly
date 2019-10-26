const { Schema, model } = require('mongoose')

const DevSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		user: {
			type: String,
			required: true,
			trim: true,
		},
		bio: String,
		avatar: {
			type: String,
			required: true,
		},
		likes: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Dev',
			},
		],
		skils: [String],
		dislikes: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Dev',
			},
		],
	},
	{
		timestamps: true,
	},
)

module.exports = model('Dev', DevSchema)
