function enviar(){
    var emailValue = document.getElementById('emailtxt').value;
    
    console.log(emailValue);
    

// a variavel databse vai receber as funçoes de acesso ao banco de dados

   var database = firebase.database();

   database.ref(timestamp).set({
       email: emailValue,
       
   });
}