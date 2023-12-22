const fs = require('fs');

const getUsers =()=>{
    return fs.readFileSync('./src/data/users.json')
}
module.exports=getUsers;