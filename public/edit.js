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
    // var storage12 = localStorage.getItem("dataset1");
    // var storage121 = localStorage.getItem("dataset2");
    // var storage122 = localStorage.getItem("dataset3");
    firebase.auth().onAuthStateChanged(user => {
        if(user) {

    
   var gtn =firebase.auth().currentUser;
   var rrr=gtn.uid;
    var test28 = firebase.database().ref('users/' + rrr );
    test28.on('value', function(snapshot){

//           snapshot.forEach(function(childSnapshot){
    var childdata = snapshot.val();
    document.getElementById("oijmn").value=childdata['firstname'];
    document.getElementById("kliol").value=childdata['lastname'];
    document.getElementById("kliol1").value=childdata['phonenumber'];
    document.getElementById("kliol2").value=childdata['pubgusername'];
    document.getElementById("kliol3").value=childdata['dateofbirth'];

    });
}})
  
  
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
    
     firebase.database().ref('users/' + uid2).set({
        firstname: fname,
        lastname: lname,
        phonenumber: phone,
        pubgusername:pubg,
        dateofbirth:dob,
    
    
       
        //some more user data
      }) .then(function() {
        console.log('Synchronization succeeded');
      window.history.back();
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
        var yyy= firebase.auth().currentUser.uid;
        test66= firebase.database().ref('users/' + yyy );
        test66.on('value', function(snapshot){
    
         //           snapshot.forEach(function(childSnapshot){
                         var childdata = snapshot.val();
                         document.getElementById("lol12").innerText= "Hi,"+childdata['firstname'];
                       })
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
    