const users=[
    { id:'wodus', password:'123'},
    {id:'kim', password:'456'},
]

export function signIn({id,password}){
    const user=users.find(user=>user.id===id && user.password===password);
    if (user===undefined) throw new Error();
    return user;
}

export function isAuthenticated(){
    const userId = localStorage.getItem("loginStatus")
    if (userId) {
        return userId
    } else {
        return false
    }
}