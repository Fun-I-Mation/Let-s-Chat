var firebaseConfig = {
    apiKey: "AIzaSyApSkLKi6R6WWRJ7Nskfgbj5EtDE8xOmkM",
    authDomain: "let-s-chat-67c7f.firebaseapp.com",
    databaseURL: "https://let-s-chat-67c7f-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-67c7f",
    storageBucket: "let-s-chat-67c7f.appspot.com",
    messagingSenderId: "336127819128",
    appId: "1:336127819128:web:143233028d333c4926dc8d"
  };

  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function addRoom(){
    Room_names = document.getElementById("room_name").value;

    firebase.database().ref("/").child(Room_names).update({
          purpose : "adding room name"
    });

    localStorage.setItem("Room_names",Room_names);

    window.location = "LetsChatRoom.html"
}

function getData() 
{
    firebase.database().ref("/").on('value',
    function(snapshot) 
    {
        document.getElementById("output").innerHTML ="";
        snapshot.forEach(function(childSnapshot) 
        {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logOut(){
    localStorage.removeItem("user name");
    localStorage.removeItem("Room_names");
    window.location = "LetsChat.html";
}