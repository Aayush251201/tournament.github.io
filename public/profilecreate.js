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
  
  btnf = document.getElementById('btnlog');
  btnf.addEventListener('click', e => {
  
           firebase.auth().signOut();
  });
  var storage12 = localStorage.getItem("dataset1");
  var storage121 = localStorage.getItem("dataset2");
  var storage122 = localStorage.getItem("dataset3");
  document.getElementById("oijmn").value=storage12;
  document.getElementById("kliol").value=storage121;
  document.getElementById("kliol1").value=storage122;
 

  





  })()
function writedatayou(){
  var dt=document.getElementById("oijmn").value;
  var dt1=document.getElementById("kliol").value;
  var dt2=document.getElementById("kliol1").value;
  var dt8=document.getElementById("kliol2").value;
  var dt4=document.getElementById("kliol3").value;

  var dt3=firebase.auth().currentUser.uid;
writeUserData(dt3,dt,dt1,dt2,dt8,dt4);

}
  function writeUserData(uid2, fname, lname, phone,pubg,dob) {
    document.getElementById("kip").disabled=true;

    // var storage12299 = localStorage.getItem("dataset31").toString().toUpperCase();
//     firebase.database().ref().child('promocode').child(storage12299).push({
// userprof:firebase.auth().currentUser.email,
//     }).then(

   firebase.database().ref('users/' + uid2).set({
      firstname: fname,
      lastname: lname,
      phonenumber: phone,
      pubgusername:pubg,
      dateofbirth:dob,
  
  
     
      //some more user data
    }) .then(function() {
      console.log('Synchronization succeeded');
      window.location = 'main.html';
    })
    .catch(function(error) {
      console.log('Synchronization failed');
      
    });
  //   .catch(e => {

  //     if(e.message.toString()==""){
  //       window.location = 'main.html';
  //     }
  //     else{
  //       window.location = 'main.html';
  //     var dataoutput="";
  //     dataoutput=e.message.toString();

  //     var ttl=document.getElementById("pop2l");
  //   ttl.innerText=dataoutput;
  //     }
  
  // });
  
  // 
  
  }





firebase.auth().onAuthStateChanged(user => {
    if(user) {
      var user8 = firebase.auth().currentUser;
      document.getElementById("useridmail").innerText=user8.email.toString();
      // console.log(user);
  
      //After successful login, user will be redirected to home.html
      
    }
    else{window.location = 'login.html';}
    
   
  });
  
  
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  