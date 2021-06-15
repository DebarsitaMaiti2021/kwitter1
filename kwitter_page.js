//YOUR FIREBASE LINKS
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

    room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");

function send(){
      msg=document.getElementsById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name1=message_data['name'];
like=message_data['like'];
message=message_data['message'];

name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphiton glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();





function updateLike(message_id){
      console.log("Click on like button:"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}