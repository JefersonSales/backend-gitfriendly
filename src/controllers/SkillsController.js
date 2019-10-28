const Dev = require('../models/Dev')

module.exports = {
	async update(req, res) {
		try {
			const { skills } = req.body
			const { devId } = req.params

			// const update = await Dev.findOneAndUpdate(devId, { $set: skills }, { new: true, runValidators: true })
			// return res.json(update)

			const update = await Dev.findById(devId)
			update.skills.push(skills)
			await update.save()
			return res.json(update)
		} catch (error) {
			return error
		}
	},
}
