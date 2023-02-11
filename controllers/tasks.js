const Task  = require('../models/Task')


const getStates = async (req, res) => {
  try{
    const tasks = await Task.find({})
    let states = []
    tasks.map((item)=>{
      states.push({name:item.name,code:item.code})
    })
    res.status(200).json({ states })
  }catch{
    res.status(500).json({msg:error})
  }

  }


  const getCities = async (req, res, next) => {
    try{
      const {id: taskID } = req.params
      const task = await Task.findOne({code:taskID})
      if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
      }
      res.status(200).json( {cities:task.cities} )
    }catch{
      res.status(500).json({msg:error})
    }
  }



module.exports = {
  getStates,getCities
}