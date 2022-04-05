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
            if(document.getElementById("bingonew3").value!=""&&document.getElementById("bingonew2").value!=""&&
            document.getElementById("bingonew1").value!=""&&document.getElementById("bingonew4").value!=""){document.getElementById("mybtn22").disabled = false;
            document.getElementById("ght").style.display =" none";
    
    }else{
                     document.getElementById("ght").style.display = "block";
                     document.getElementById("mybtn22").disabled = true;
            }
    btnf = document.getElementById('btnlog');
            btnf.addEventListener('click', e => {
            
                     firebase.auth().signOut();
            });
            
           var storage = localStorage.getItem("programming");
                  var storage2 = localStorage.getItem("factor");
    
           var test2 = firebase.database().ref().child("lite").child(storage2).child(storage);
                    test2.on('value', function(snapshot){
    
    //           snapshot.forEach(function(childSnapshot){
                    var childdata = snapshot.val();
                    //  if( document.getElementById("player").value=="solo"){abc=childdata['entryfee'];document.getElementById("bingonew").value=abc;}
                   
                    document.getElementById("mybtn22").onclick= changeListener1;
                    function changeListener1(){
                
                            var abc="";
                            if( document.getElementById("player").value=="solo"){abc=childdata['entryfee'];}
                            else if(document.getElementById("player").value=="duo"){
                                    abc=childdata['entryfee'];
                                   var hy= parseInt(abc, 10);
                                   abc=(hy*2).toString();
                    
                    
                                    }else if(document.getElementById("player").value=="squad"){
                                            abc=childdata['entryfee'];
                                           var hy= parseInt(abc, 10);
                                           abc=(hy*4).toString();
                            
                                            }
    
                                            document.getElementById("bingonew").value=abc;
                                            document.getElementById("bingonew12").value=storage2;
                                            document.getElementById("bingonew13").value=storage;
    

                                            if(abc!=""&&document.getElementById("bingonew").value!=""){
                                                    document.lolp.submit();
                                            }
                                          
    
    
                    }
                   
                     document.getElementById("player").onchange = changeListener;
    
                    function changeListener(){
                            // var value = this.value
                            //   console.log(value);
                              
                            //   if (value == "min"){
                            //     document.body.style.background = "red";
                            //   }else if (value == "hr"){
                            //     document.body.style.background = "blue";
                            //   }
                              
                            
    
                            // document.getElementById("mybtn22").disabled = true;
           
            
            if(document.getElementById("bingonew3").value!=""&&document.getElementById("bingonew2").value!=""&&
            document.getElementById("bingonew1").value!=""&&document.getElementById("bingonew4").value!=""){document.getElementById("mybtn22").disabled = false;
            document.getElementById("ght").style.display =" none";
    
    }else{
                     document.getElementById("ght").style.display = "block";
                     document.getElementById("mybtn22").disabled = true;
            }
        }
            
        //     document.getElementById("bingo").textContent="Rs: "+childdata['entryfee']+"/-";
        if(childdata['entryfee']=="0"){document.getElementById("bingo").textContent="FREE EVENT"}else{
                document.getElementById("bingo").textContent="Rs: "+childdata['entryfee']+"/-";}
                if(childdata['entryfee']=="0"){
                    document.getElementById("mybtn22").style.display="none";
                    document.getElementById("mybtn22").disabled="true";
                    document.getElementById("player").style.display="none";
                    document.getElementById("bingonew1367").style.display="none";
                    var tdh=   document.getElementById("rthl");
                    var div1 = document.createElement("button");
                    var div2 = document.createElement("a");
                    div1.innerText="REGISTER FREE";
                    div1.className="btn btn-success";
                    div1.id="new23";
                    div2.href=childdata['cashless'];
                    div2.appendChild(div1);
                                   tdh.appendChild(div2);   
                }else{
                    // document.getElementById("mybtn22").style.display="none";
                    document.getElementById("mybtn22").style.display="inline";
                    // document.getElementById("mybtn22").disabled="false";
                    if(document.getElementById("bingonew3").value!=""&&document.getElementById("bingonew2").value!=""&&
                    document.getElementById("bingonew1").value!=""&&document.getElementById("bingonew4").value!=""){document.getElementById("mybtn22").disabled = false;
                    document.getElementById("ght").style.display =" none";
            
            }else{
                             document.getElementById("ght").style.display = "block";
                             document.getElementById("mybtn22").disabled = true;
                    }
                    document.getElementById("player").style.display="inline";
                    document.getElementById("bingonew1367").style.display="inline";
    
                    var tdh=   document.getElementById("rthl");
                   tdh.innerHTML="";
                }
            document.getElementById("bingo1").textContent="By "+childdata['organizer'];
                    document.getElementById("bingo2").textContent="ONLINE,"+childdata['eventplace'];
                            document.getElementById("bingo3").textContent= childdata['from']+"-"+childdata['to'];
                            document.getElementById("w12").textContent=childdata['banner'];
                                    
                                    document.getElementById("bingo4").href=childdata['discord'];
                                    document.getElementById("bingo77").href=childdata['telegramlink'];
                                    document.getElementById("bingo5").textContent=childdata['timezone'];
                                                                    document.getElementById("bingo6").innerHTML=childdata['prizemoney'];
                                                                    document.getElementById("rost").innerHTML=childdata['game'];
                                                                  
                                                                  
                                                                //     document.getElementById("bingo771").href=childdata['cashless'];
                                                                            
    
    
    
    
    
    
                    })
                    firebase.auth().onAuthStateChanged(user => {
                            if(user) {
                    
                    var gtn =firebase.auth().currentUser;
                    var rrr=gtn.uid;
                     var test28 = firebase.database().ref('users/' + rrr );
                     test28.on('value', function(snapshot){
                 
                 //           snapshot.forEach(function(childSnapshot){
                     var childdata = snapshot.val();
                     document.getElementById("bingonew1").value=childdata['firstname'];
                     document.getElementById("bingonew2").value=gtn.email.toString();
                     document.getElementById("bingonew3").value=childdata['phonenumber'];
                     document.getElementById("bingonew4").value=childdata['pubgusername'];
    
                    
                     if(document.getElementById("bingonew3").value!=""&&document.getElementById("bingonew2").value!=""&&
                     document.getElementById("bingonew1").value!=""&&document.getElementById("bingonew4").value!=""){document.getElementById("mybtn22").disabled = false;
                     document.getElementById("ght").style.display =" none";
            }else{
                     document.getElementById("ght").style.display = "block";
                     document.getElementById("mybtn22").disabled = true;
                     }
                     });}})
             })()
             
             
             
             firebase.auth().onAuthStateChanged(user => {
      if(user) { var user8 = firebase.auth().currentUser;
            document.getElementById("useridmail").innerText=user8.email.toString();
            var yyy= firebase.auth().currentUser.uid;
            test66= firebase.database().ref('users/' + yyy );
            test66.on('value', function(snapshot){
        
             //           snapshot.forEach(function(childSnapshot){
                             var childdata = snapshot.val();
                             document.getElementById("lol12").innerText= "Hi,"+childdata['firstname'];
                           })
            //   console.log(user);
    
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