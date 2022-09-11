a=document.createElement("button")
a.innerText="抓取UID"
a.id="uid_button"
a.style="position:fixed;top:0px;right:0px;z-index:999;width:200px;height:30px;"
document.getElementsByTagName("body")[0].append(a)

b=document.createElement("button")
b.innerText="开始邀约"
b.id="action_invite_button"
b.style="position:fixed;top:0px;right:200px;z-index:999;width:200px;height:30px;"
document.getElementsByTagName("body")[0].append(b)

c=document.createElement("button")
c.innerText="停止邀约"
c.id="stop_invite_button"
c.style="position:fixed;top:0px;right:400px;z-index:999;width:200px;height:30px;"
document.getElementsByTagName("body")[0].append(c)

var uids = []

is_stop_invite = localStorage.getItem("stop_invite")
if (is_stop_invite == undefined){
    is_stop_invite = "true"
    localStorage.setItem("stop_invite",is_stop_invite)
}

document.getElementById("stop_invite_button").onclick=function(){
    is_stop_invite = "true"
    localStorage.setItem("stop_invite",is_stop_invite)
}
document.getElementById("uid_button").onclick=function(){
    function text_show(){
        // var uids = []
        for (i=0;i<document.getElementsByClassName("daren-card").length;i++){
            uids.push(document.getElementsByClassName("daren-card")[i].dataset.itemUid)
        }
    }
    
    var num =Math.ceil(document.querySelector(".daren-square-table-warp--card-menu").innerText.split("位达人")[0].split("共")[1]/20)
    var current_num = 0
    function scroll_it(){
        if(current_num > num){
            console.log("已滚动完毕")
            text_show()
            localStorage.setItem("a",JSON.stringify(uids))
            localStorage.setItem("a_nub","0")
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
}
document.getElementById("action_invite_button").onclick=function(){
    // localStorage.setItem("a",JSON.stringify(uids))
    // localStorage.setItem("a_nub","0")

    is_stop_invite = "false"
    localStorage.setItem("stop_invite",is_stop_invite)

    function do_it(){
        if (document.getElementById("daily-apply-buiz-btn")==null){
            next_do_it()
        }else if (document.getElementById("daily-apply-buiz-btn").disabled==false){

            setTimeout(function(){
                document.getElementById("daily-apply-buiz-btn").click()
                document.getElementsByClassName("add-product-last-operate")[0].click()
                setTimeout(function(){

                    // document.getElementById("cos_ratio_3525387084720399074").value="27"
                    document.getElementById("contact_name").value="赖先生"
                    document.getElementById("contact_mobile").value="15986708619"
                    document.getElementById("contact_wechat").value="15986708619"
                    document.getElementById("cooperation_desc").value="您好！看到您的带货销售额很好，我们也想真诚的邀约，我们是一家化妆刷生产工厂，之前做品牌代加工，现在想做自己的品牌，所以想请您帮忙带货，品质我们是有保证，期盼能合作！:-)"
                    document.getElementsByClassName("auxo-drawer-body")[0].scrollTo(0,document.getElementsByClassName("auxo-drawer-body")[0].scrollHeight)
                    setTimeout(function(){

                        document.getElementById("contact_name").value="赖先生"
                        document.getElementById("contact_mobile").value="15986708619"
                        document.getElementById("contact_wechat").value="15986708619"
                        document.getElementById("cooperation_desc").value="您好！看到您的带货销售额很好，我们也想真诚的邀约，我们是一家化妆刷生产工厂，之前做品牌代加工，现在想做自己的品牌，所以想请您帮忙带货，品质我们是有保证，期盼能合作！:-)"

                        // tmp_list = document.getElementsByClassName("auxo-input")
                        // if(tmp_list.length > 0){
                        //     for(var i=0; i < tmp_list.length; i++)
                        //     {
                        //        if(tmp_list[i].id != null){
                        //         // console.log("当前测试：",tmp_list[i].id)
                        //         if(tmp_list[i].id.includes("cos_ratio_"))
                        //         {
                        //             // 5 ~ 8
                        //             tmp_list[i].value = Math.floor(Math.random() * 4) + 5
                        //         }
                        //        } 
                        //     }
                        // }

                        if (document.getElementsByClassName("add-product-no-product").length==0){
                            document.getElementsByClassName("auxo-btn-primary")[2].click()
                        }
                        next_do_it()
                    },1500)    
                },3000)
            } ,1500)    
        }else{
            next_do_it()
        }
        
    }

    function next_do_it(){
        console.log("innext")
        setTimeout(function(){
            a_nub=JSON.parse(localStorage.getItem("a_nub"))
            next_a_nub = a_nub+1
            localStorage.setItem("a_nub",next_a_nub)
            console.log("我在做")
            window.location.href="https://buyin.jinritemai.com/dashboard/servicehall/daren-profile?uid="+a[next_a_nub]
            //console.log(a[next_a_nub])
        },3000)
    }   
    

    if (window.location.href.indexOf("buyin.jinritemai.com")>-1){
        console.log("当前为抖音界面")
        a=JSON.parse(localStorage.getItem("a"))
        a_nub= parseInt(localStorage.getItem("a_nub"))
        console.log("当前要打印的连接是：",a_nub)
        if (window.location.href.indexOf("https://buyin.jinritemai.com/dashboard/servicehall/daren-profile?")>-1){
            setTimeout(function(){
                do_it()
            },5000)
        }
        else{
            next_do_it()
        }
    }  
}

if (is_stop_invite == "false"){
    setTimeout(function(){
        console.log("================")
        document.getElementById("action_invite_button").click()
    },5000)
}
