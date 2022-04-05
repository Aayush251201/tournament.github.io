/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function() {
    // Set the configuration for your app
    // TODO: Replace with your project's config object
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
            // Get a reference to the database service
    
            btnf = document.getElementById('btnlog');
            btnf.addEventListener('click', e => {    
            firebase.auth().signOut();
            });
            preobject404 = document.getElementById("qwg123");//ongoing
            preobject4041 = document.getElementById("qwg1231");  //ongoing
            preobject4042 = document.getElementById("qwg1232");  //ongoing
            preobjectgjj = document.getElementById("qwg1");   //upcoming
            preobject = document.getElementById("qwe");//morning
            preobjectf = document.getElementById("qwf");  //afternoon           
            preobjectg = document.getElementById("qwg");  //night
            var databaset = firebase.database().ref().child("pubg").child('morning');
           
            databaset.on('value', snap => {
            console.log(snap.val());
                    var noofelements = 0;
                    for (var j = 0; j < 10; j++){
            var key = Object.keys(snap.val())[j];
                    if (!key){noofelements = j; break; }
    
            }
            // console.log(noofelements);
                    document.getElementById("qwe").innerHTML = "";  
                    document.getElementById("qwg123").innerHTML="";  
    
                    for (var i = 0; i < noofelements; i++){
            var key = Object.keys(snap.val())[i];
                    var test2 = firebase.database().ref().child("pubg").child('morning').child(key.toString());
                    test2.on('value', function(snapshot){
    //           snapshot.forEach(function(childSnapshot){
                    var childdata = snapshot.val();
                    var checkStatus= childdata['registration_status'];
                    document.getElementById("qwg123").innerHTML=`
                    <div class="po">
                        <a class="po" style="text-decoration:none">
                            <div class="row">
                                <div class="feature col-lg-4 rty">
                                    <h2 style="margin:0px;">
                                        ${childdata['banner']}
                                    </h2>
                                    <h6 class="organizerclass">
                                        PUBG(MOBILE)-By " + ${childdata['organizer'].toUpperCase()}
                                    </h6>
                                </div>

                                <div class="feature col-lg-4 eventplaceclass rty">
                                    <h5>online, ${childdata['eventplace'].toUpperCase()} </h5>
                                </div>
                                ${checkStatus == 'open'? `<div class="registration_statusclass feature col-lg-4 rty">
                                    <div class="rty">
                                        <h5>Registration </h5>
                                        <h5>${checkStatus} </h5>
                                    </div>
                                </div>` : 
                                `<div class="registration_statusclass1 feature col-lg-4 rty">
                                    <div class="rty">
                                        <h5>Registration </h5>
                                        <h5>${checkStatus} </h5>
                                    </div>
                                </div>`}
                                
                            </div>
                        </a>
                    </div>
                    <div class="rt">
                        <a href="oneventpubg.html">
                            <button id=${key.toString()} onclick=${onveiw(this.id)} class="btn btn-outline-warning">
                                BOOK EVENT
                            </button>
                        </a>
                    </div>`

                  
             
    
    
    
    
    
                    })
    
    
    
    
    
    
    
    
                    // console.log(key);
             }
            });
        });
            // databaset.onUpdate( ()=>location.reload());
           

    function onveiw(value){if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("programming",value);
        
        localStorage.setItem("factor","morning");
            
    
            }}
            

    
    
    
    
    
    
            var variable = 1;
            firebase.auth().onAuthStateChanged(user => {
    if (user) { var user8 = firebase.auth().currentUser;
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
    else{window.location = 'login.html'; }
    
    
    });
    
    
    function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
          }
          
          /* Set the width of the side navigation to 0 */
          function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
          }
          