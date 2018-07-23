let user1={email:"pooja@gmail.com",password:"1234"};
let user2={email:"riya@gmail.com",password:"7834"};
let user3={email:"shreya@gmail.com",password:"9994"};

let checkLogin = (email,password,...allUsers)=>{
let isUsersFound =false;
let passwordCorrect =false;

for(currentUser of allUsers){
console.log(currentUser)
 if(currentUser.email==email){
   if(currentUser.password==password){
   isUsersFound =true;
   passwordCorrect=true;
   break;
 }
} else{
isUsersFound=false;
}
}
if(isUsersFound == true && passwordCorrect == true){
alert('You are logged in')
}
else if (isUsersFound == true && passwordCorrect == false){
alert('You have provided incorrect password')
}
else{
alert('No user with this email found');
}
}

checkLogin("riya@gmail.com","7834",user1,user2,user3);


