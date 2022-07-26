var start_uid = document.getElementById("uid_start");
var start_action = document.getElementById("action_start");

run=start_uid.addEventListener("click", function(){
    for (j=0;j<document.getElementsByClassName("test_info").length;j++){
        document.getElementsByClassName("test_info")[j].remove()
    }
    
})