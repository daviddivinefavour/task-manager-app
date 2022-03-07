const taskRoutes = require('./taskRoutes')

module.exports = (app)=>{
          app.use('/api/v1',taskRoutes)
};
