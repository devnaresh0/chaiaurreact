function SetUsername (username){
    //complex calculation
    this.username = username
    console.log("called");
    

}
function createUser(username,email,password){
    SetUsername.call(this,username)

    
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chia@fb.com","123")
console.log(chai);