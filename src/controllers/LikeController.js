const Dev = require('../models/Dev')

module.exports = {
	async store(req, res) {
		const { user } = req.headers
		const { devId } = req.params

		const loggedDev = await Dev.findById(user)
		const targetDev = await Dev.findById(devId)

		if (!targetDev) {
			return res.status(400).json({ error: 'Dev não existe!' })
		}

		if (targetDev.likes.includes(loggedDev._id)) {
			console.log('Deu Match')
		}

		await loggedDev.save()

		loggedDev.likes.push(targetDev._id)

		return res.json({ ok: true })
	},
}
