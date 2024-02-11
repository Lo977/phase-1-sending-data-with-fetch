// Add your code here

function submitData(name, email) {
    const url = "http://localhost:3000/users";
    const data = {name:name, email:email}
    const newObject = {
        method:"POST",
        headers: {
            "content-type":"application/json",
            "accept":"application/json"
        },
      body: JSON.stringify(data)
    }
    return fetch(url,newObject)
    .then(resp=>resp.json())
    .then(object=> {
          console.log(object);
          document.body.innerHTML+= object.id;
    })
    .catch(error =>{
           console.log(error.message);
           let message = "!!!!ERROR!!!!"
           document.body.innerHTML += error.message;
    })

}
  submitData();