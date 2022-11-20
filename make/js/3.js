/* UI添加html button */
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

/*页面加载 整个JS被更新*/
var uids = []

is_stop_invite = localStorage.getItem("stop_invite")
if (is_stop_invite == undefined){
    is_stop_invite = "true"
    localStorage.setItem("stop_invite",is_stop_invite)
}

if (is_stop_invite == "false"){

    console.log("start")
    setTimeout(function(){
        console.log("================")
        // document.getElementById("action_invite_button").click()
        // 开始邀约
        startInvite()
    },3000)
}
else{
    // 邀约停止
    console.log("===> invite stopped！")
}

/* 停止邀约-按钮 */
document.getElementById("stop_invite_button").onclick=function(){
    is_stop_invite = "true"
    localStorage.setItem("stop_invite",is_stop_invite)
}

/* 获取UID */
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

/* 开始邀约-按钮 */
function do_it(){

    if (document.getElementById("daily-apply-buiz-btn")==null){
        next_do_it()
    }
    else if (document.getElementById("daily-apply-buiz-btn").disabled==false){

        setTimeout(function(){
            document.getElementById("daily-apply-buiz-btn").click()
            document.getElementsByClassName("add-product-last-operate")[0].click()
            setTimeout(function(){

                // document.getElementById("cos_ratio_3525387084720399074").value="27"
                document.getElementById("contact_name").value="书店w"
                document.getElementById("contact_mobile").value="13699153901"
                document.getElementById("contact_wechat").value="13699153901"
                document.getElementById("cooperation_desc").value="您好，\n我是人邮旗下的分社负责人艾德书店，我们有几本书想跟您合作，如果感兴趣交换下联系方式吧！\n微信：13699153901或者留下您的联系方式 我加您\n书籍种类多不及枚举，添加联系方式，佣金具体可谈"
                
                document.getElementsByClassName("auxo-drawer-body")[0].scrollTo(0,document.getElementsByClassName("auxo-drawer-body")[0].scrollHeight)
                setTimeout(function(){

                    document.getElementById("contact_name").value="书店w"
                    document.getElementById("contact_mobile").value="13699153901"
                    document.getElementById("contact_wechat").value="13699153901"
                    document.getElementById("cooperation_desc").value="您好，\n我是人邮旗下的分社负责人艾德书店，我们有几本书想跟您合作，如果感兴趣交换下联系方式吧！\n微信：13699153901或者留下您的联系方式 我加您\n书籍种类多不及枚举，添加联系方式，佣金具体可谈"
                    tmp_list = document.getElementsByClassName("auxo-input")
                    // if(tmp_list.length > 0){
                    //     for(var i=0; i < tmp_list.length; i++)
                    //     {
                    //        if(tmp_list[i].id != null){
                    //         // console.log("当前测试：",tmp_list[i].id)
                    //         if(tmp_list[i].id.includes("cos_ratio_"))
                    //         {
                    //             // 5 ~ 11
                    //             tmpvalue = Math.floor(Math.random() * 2) + parseInt(tmp_list[i].value)
                    //             console.log("id：",i,"value:",tmpvalue)
                    //             tmp_list[i].value = Math.floor(Math.random() * 4) + tmpvalue
                    //         }
                    //        } 
                    //     }
                    // }

                    if (document.getElementsByClassName("add-product-no-product").length==0){
                        document.getElementsByClassName("auxo-btn-primary")[2].click()
                    }
                    next_do_it()
                },1500)    
            },2000 + Math.floor(Math.random() * 6) * 100)
        } ,1500)    
    }else{
        next_do_it()
    }    
}

function next_do_it(){
    console.log("innext --->")
    a_nub=JSON.parse(localStorage.getItem("a_nub"))
    next_a_nub = a_nub+1
    // console.log(a[next_a_nub])
    if(a[next_a_nub] == undefined){

        is_stop_invite = "true"
        localStorage.setItem("stop_invite",is_stop_invite)
        setTimeout(function(){

            console.log("uid 解析错误: undefined ---> invite next stopped！")
            window.location.href="https://buyin.jinritemai.com/dashboard/servicehall/daren-square"
        },4000 + Math.floor(Math.random() * 6) * 100)
    }
    else{

        setTimeout(function(){

            localStorage.setItem("a_nub",next_a_nub)
            console.log("我在做---->")
            window.location.href="https://buyin.jinritemai.com/dashboard/servicehall/daren-profile?uid="+a[next_a_nub]
        },4000 + Math.floor(Math.random() * 6) * 100)
    }
}

function startInvite(){
    
    if (window.location.href.indexOf("buyin.jinritemai.com")>-1){
        console.log("当前为抖音界面")
        a=JSON.parse(localStorage.getItem("a"))
        a_nub= parseInt(localStorage.getItem("a_nub"))
        console.log("当前要打印的连接是：",a_nub)
        if (window.location.href.indexOf("https://buyin.jinritemai.com/dashboard/servicehall/daren-profile?")>-1){
            setTimeout(function(){
                do_it()
            },4000 + Math.floor(Math.random() * 6) * 100)
        }
        else{
            next_do_it()
        }
    }  
}

document.getElementById("action_invite_button").onclick=function(){

    is_stop_invite = "false"
    localStorage.setItem("stop_invite",is_stop_invite)
    startInvite()
}

