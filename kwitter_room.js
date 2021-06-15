
//ADD YOUR FIREBASE LINKS HERE

 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCCd2HD2eUIZnzrDq5g4vUt3-kkmDNatEo",
      authDomain: "kwitter-93064.firebaseapp.com",
      databaseURL: "https://kwitter-93064-default-rtdb.firebaseio.com",
      projectId: "kwitter-93064",
      storageBucket: "kwitter-93064.appspot.com",
      messagingSenderId: "1004645995980",
      appId: "1:1004645995980:web:809bdee3ce3d6ce3bf7969"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome   "+user_name+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"addingRoomName"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room Name"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}