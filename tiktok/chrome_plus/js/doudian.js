//18-30年龄占比
nianLing18_30=100-(parseFloat(a["data"]["fans_data"][1]["author"][0].split(" ")[1])+parseFloat(a["data"]["fans_data"][1]["author"][1].split(" ")[1])+parseFloat(a["data"]["fans_data"][1]["author"][2].split(" ")[1]))+("%")
//概览
var a=[3,4,8,9,12,13]
for (j=0;j<a.length;){
    console.log(document.querySelectorAll(".data-overview-dashboard-items-item")[a[j]].innerText);
    j=j+1
}
//女性占比
woman_zhanbi=a["data"]["fans_data"][0]["shop"][0]
//粉丝量
a["data"]["author_data"][0]["current_author"]

////-----------------------------------------------------------------------------------------------------------------------
for (i=0;i<a["data"]["author_data"].length;i++){
    console.log(a["data"]["author_data"][i]["title"]+":"+a["data"]["author_data"][i]["current_author"])
}
// VM5704:2 粉丝量:10.0万
// VM5704:2 达人等级:LV4
// VM5704:2 场均GMV:¥2500-¥5000
// VM5704:2 直播观看人数:8,998
// VM5704:2 单视频GMV:-
// VM5704:2 视频播放量:0

//------------------------------------------------------------------------------------------------------------------------------
for (i=0;i<a["data"]["fans_data"].length;i++){
    console.log(a["data"]["fans_data"][i]["title"]+":"+a["data"]["fans_data"][i]["author"])
}
// VM6964:2 性别分布:男性 54.8%,女性 45.2%
// VM6964:2 年龄分布:50-岁 43.1%,41-50岁 38.7%,31-40岁 16.1%
// VM6964:2 城市分布:三线城市 21.7%,四线城市 21.2%,二线城市 19.8%
//------------------------------------------------------------------------------------------------------------------------------
