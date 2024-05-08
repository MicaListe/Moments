const server = require("./server.js");
const { conn } = require('./db.js');
const PORT = 3001;

conn.sync({ force:false}).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))

