function sendMail(){
    let params = {
        name: document.getElementById("fullname").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("drop").value ,
    };

const serviceID = "service_3mkrrav";
const templateID = "template_vbik63e";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("fullname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("drop").value = "";
        console.log(res);
        alert("successfully")
    }
)
.catch((err) => console.log(err));

}