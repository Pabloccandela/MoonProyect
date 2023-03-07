const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, "users.json");

module.exports = {
    getUsers(){
        const FileContent = fs.readFileSync(usersFilePath, "utf-8");
        const users = JSON.parse(FileContent);
        return users
    },
    saveProduct(user){
        const users = this.getUsers();
        users.push(user);
        const FileContent = JSON.stringify(users, null, 4);
        fs.writeFileSync(usersFilePath, FileContent, "utf-8");
    },
    verificateUser(user){
        const users = this.getUsers();
        users.forEach(usr => {
            if(usr.username==user.username && usr.pass==user.pass){
                return true;
            }
        });
        return false;
    }
}