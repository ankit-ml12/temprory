const createjob = async (req, res) => {
  res.send('create job')
}
const getAlljob = async (req, res) => {
  res.send('get all job')
}
const getSingleJob = async (req, res) => {
  res.send('get single job')
}
const deleteJob = async (req, res) => {
  res.send('delete job')
}

const updateJob = async (req, res) => {
  res.send('update job')
}

module.exports = { createjob, getAlljob, getSingleJob, updateJob, deleteJob }
