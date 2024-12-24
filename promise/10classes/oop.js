const user = {
    username: "hitesh",
    login: 8,
    singedIn: true,

    getUserDetail: function(){
        // console.log("Got user details database");
        // console.log(`${this.username}`);
        console.log(this);
        
        
        
    }
}
// console.log(user.login);
// console.log(user.getUserDetail);

// console.log(this);


// const promiseOne = new Promise()
// const date = new Date();

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}

const userOne = new User("hitesh",12,true)
console.log(userOne.isLoggedIn);

const userTwo = new User("ChaiaurCode",11,true)
