const router = require("express").Router()
const Task = require('../modules/Task')

router.get("/", async (req, res) => {
    try {
        const allTasks = await Task.find();
        res.render("index", { tasks: allTasks });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router