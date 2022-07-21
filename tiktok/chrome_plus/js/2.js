for (j=0;j<document.getElementsByClassName("test_info").length;j++){
    document.getElementsByClassName("test_info")[j].remove()
}

function text_show(){
    a_json = {"data":null}
    uids = []
    for (i=0;i<document.getElementsByClassName("daren-card").length;i++){
        uids.push(document.getElementsByClassName("daren-card")[i].dataset.itemUid)
    }
    a_json["data"]=uids
    _html = document.createElement("textarea")
    _html.className="test_info"
    _html.style="position:fixed;top:0px;right:0px;z-index:999;width:200px;height:30px;"
    document.getElementsByTagName("body")[0].append(_html)
    document.getElementsByClassName("test_info")[0].value = JSON.stringify(a_json)
}

num =Math.ceil(document.querySelector(".daren-square-table-warp--card-menu").innerText.split("位达人")[0].split("共")[1]/20)
current_num = 0
function scroll_it(){
    if(current_num > num){
        console.log("已滚动完毕")
        text_show()
        return
    }else{
        setTimeout(function(){
            document.getElementById("portal").scrollTop = document.getElementById("portal").scrollHeight    
            current_num=current_num+1
            console.log("滚动",current_num,"/",num)
            scroll_it()
        },2000)
    }
}
scroll_it()