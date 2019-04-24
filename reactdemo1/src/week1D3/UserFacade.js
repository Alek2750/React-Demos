const URL = "http://localhost:3333/api/users";

function handleHttpErrors(res){
 if(!res.ok){
   return Promise.reject({status: res.status, fullError: res.json() })
 }
 return res.json();
}

function makeOptions(method, body) {
    var opts =  {
      method: method,
      headers: {
        "Content-type": "application/json"
      }
    }
    if(body){
      opts.body = JSON.stringify(body);
    }
    return opts;
   }
   

class UserFacade {
 getUsers = ()=> {
   return fetch(URL).then(handleHttpErrors)
 }

 deleteUser(index){
    //const options = {
      //  method: "DELETE",
        //headers: {"Content-type":"application/json"}, 
      //}
      const options = makeOptions("DELETE")
      return fetch(`${URL}/${index}`,options).then(handleHttpErrors);
    }

 addUser = (user)=> {
   //const options = {
     //method: "POST",
     //headers: {"Content-type":"application/json"},
     //body : JSON.stringify(user)
   //}
   const options = makeOptions("POST",user)
   return fetch(URL,options).then(handleHttpErrors)
 }
}

export default new UserFacade();