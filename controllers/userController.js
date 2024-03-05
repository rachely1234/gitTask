// userController.js

const UserList=[{
    id:1,
    name: "String",
    email: "String",
    password: "String",
   
},
{
    id:2,
    name: "s",
    email: "String",
    password: "111",
}
]

const id=111
exports.upDateUser = (req, res) => {
    const { id } = req.params
    console.log(req.params);
    const user = UserList.find(x => x.id === id)
    if (!user) {
        res.status(404).json({ massege: "emp not found" })
    }
    const index = UserList.findIndex(x => x.id === id)
    UserList.splice(index, 1)
    res.send(UserList)
    res.send(user)
}

exports.createUser = (req, res) => {
    
    const {name}=req.params
    const newUser={
        name:name,
        email:"email",
        password:"password",
        id:id++,
    }

    UserList.push(newUser)
    res.send(UserList)
}



exports.deleteUser = (req, res) => {
    const id = req.params.id

    const index = UserList.findIndex(x => x.id === id)
    UserList.splice(index, 1)
    res.send(UserList)
}

