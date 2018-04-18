// const passport = require('passport');
const {
    Router,
} = require('express');

const JobsController = require('../controllers/jobs-controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new JobsController(data);
    app.use('', router);
    router
        .get('/carrers', async (req, res) => {
            const allJobs = await controller.getAllJobs();
            res.send(allJobs);
        })
        .get('/carrers/:id', async (req, res) => {
           const jobId = req.params.id;
           const allJobsById = await controller.getAllJobsById(jobId);
           res.send(allJobsById);
        });
};

module.exports = {
    init,
};
