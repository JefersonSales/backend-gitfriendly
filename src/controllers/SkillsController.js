const Dev = require('../models/Dev')

module.exports = {
	async store(req, res) {
		const { user } = req.headers

		const loggedDev = await Dev.findById(user)

		loggedDev.skills.push()
		return res.json({ ok: true })
	},
}
