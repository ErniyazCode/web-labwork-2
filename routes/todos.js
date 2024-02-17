const router = require('express').Router()
const Task = require('../modules/Task')

router.post("/add/todo", (req, res) => {
    const { todo } = req.body;
    const task = new Task({ todo })
    task.save()
        .then(() => res.redirect('/'))
        .catch(err => res.status(400).send(err.message))
    console.log(todo)
})

router.get("/delete/todo/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        console.log("Deleted task with ID:", req.params.id);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});


module.exports = router