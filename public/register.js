/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function() {


        // Your web app's Firebase configuration
        var firebaseConfig = {
          apiKey: "AIzaSyCtWtXifmXNjyDhVClnApzKacpuhmnfWP0",
          authDomain: "tournament-6d6e1.firebaseapp.com",
          databaseURL: "https://tournament-6d6e1.firebaseio.com",
          projectId: "tournament-6d6e1",
          storageBucket: "tournament-6d6e1.appspot.com",
          messagingSenderId: "123494838273",
          appId: "1:123494838273:web:e222b6cdbaf8a9bab19000",
          measurementId: "G-LXQWECD8CZ"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        emailf = document.getElementById('validationCustom031');
        passf = document.getElementById('validationCustom041');
        btnf = document.getElementById('btnsignup');
        btnf.addEventListener('click', e => {
        emailqf = emailf.value;
        
                passff = passf.value;
                authf = firebase.auth();
                promise = authf.createUserWithEmailAndPassword(emailqf, passff);
                
                promise.catch(e => {
                  var dataoutput="";
                  dataoutput=e.message.toString();

                  var tt=document.getElementById("popl");
                tt.innerText=dataoutput;});
                if (typeof(Storage) !== "undefined") {
                  // Store
                 var data112 = document.getElementById("validationCustom01").value;
                 var data1121 = document.getElementById("validationCustom02").value;
                 var data1122 = document.getElementById("vali").value;
                //  var data112299 = document.getElementById("validf12").value;


                  localStorage.setItem("dataset1",data112);
                  
                  localStorage.setItem("dataset2",data1121);
                  localStorage.setItem("dataset3",data1122);
                  // localStorage.setItem("dataset31",data112299);


                }
                
        });
        })()



firebase.auth().onAuthStateChanged(user => {
  if(user) {
    // console.log(user);
    window.location = 'profilecreate.html';
    //After successful login, user will be redirected to home.html
  }
  
 
});