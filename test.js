// Add your code here
const url = "http://localhost:3000/users"
function submitData(name, email) {
    const newObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify ({
                name: name,
                email:email
            })
            
        }
    return fetch(url,newObject)
    .then(resp =>resp.json())
     .then(object => {
        console.log(object);
        document.querySelector('body').append(object.id);
    })
    .catch(error => {
        console.log(error);
    document.querySelector('body').append(error)
    })
}
    
      submitData();