// Generated by CoffeeScript 1.12.7
(function() {
  var Hs, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Hs || (root.Hs = {});

  Hs = root.Hs;

  $(function() {
    return $(window).on("load", function(evt) {
      console.log("chrome plugin load");
      return setTimeout(function() {
        if (window.location.href.indexOf("https://pgy.xiaohongshu.com/solar/advertiser/kol/") > -1) {
          console.log(window.location.href.split("https://pgy.xiaohongshu.com/solar/advertiser/kol/"));
          console.log($("[data-v-7efc0192]").html());
          return console.log($(".noteData[data-v-4bab4de6]").html());
        }
      }, 5000);
    });
  });

}).call(this);


if ($(".request_console_area").length==0){
    $("body").append("<div class=\"request_console_area\" style=\"z-index: 9999;position:fixed;left:0px;top:0px;padding:10px;background:white;box-shadow:0px 4px 8px rgba(0,0,0,0.3);\"><button class=\"fensihuoyuedu\">不显示数据时点我</button></div>")
}
if(window.location.href=='https://compass.jinritemai.com/shop/realtime-merchandise'){
  console.log('true')
  $('.fensihuoyuedu').attr('class','total_sales')
}

$("body").on("click",".fensihuoyuedu",function(e){
  chrome.runtime.sendMessage({
    info: "fensihuoyuedu"
  }, res => {
    // 答复
    // alert(res)
  })
  window.location.reload();
})
var displayed=false
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) { 
    console.log("==== 巨量星图 数据监听 is_get request ====")
    console.log(request)
    
    if(request.is_get_num == 0){
      $(".request_console_area").append("<div>"+request.data["data"]["distributions"][2]["description"]+"</div>")
      $(".request_console_area").append("<div>"+request.data["data"]["distributions"][0]["description"]+"</div>")
      $(".request_console_area").append("<div>"+request.data["data"]["distributions"][1]["description"]+"</div>")
      
    }else if(request.is_get_num == 1){
      $(".request_console_area").append("<div>"+request.data["data"]["distributions"][2]["description"]+"</div>")
      $(".request_console_area").append("<div>"+request.data["data"]["distributions"][0]["description"]+"</div>")
      $(".request_console_area").append("<div>"+request.data["data"]["distributions"][1]["description"]+"</div>")
      var cu=window.location.href
      cu=cu.substring(0,cu.indexOf('/10')+2)
      console.log('----------- '+cu)
      $(".request_console_area").append("<button onclick=\"window.location.href='"+cu+"'\">点击跳转</button>")
    }else if(request.is_get_num == 2){
      $(".request_console_area").append("<div>20秒内cpm:"+request.data["data"]["expect_cpm"]["cpm_1_20"]/100.0+"</div>")
      $(".request_console_area").append("<div>20-60秒cpm:"+request.data["data"]["expect_cpm"]["cpm_21_60"]/100.0+"</div>")
      $(".request_console_area").append("<div>60以上cpm:"+request.data["data"]["expect_cpm"]["cpm_60"]/100.0+"</div>")
      $(".request_console_area").append("<div>完播率:"+request.data["data"]["playover_rate"]["value"]/100.0+"%</div>")
      
    }else if(request.is_get_num == 4){
      $(".request_console_area").append("<div><a href=\""+request.redirect_url+"\" target=\"_blank\">"+request.data["data"]["card_info"]["nick_name"]+"</a></div>")
    }else if (request.is_get_num == 3){
      var cu=window.location.href
      cu=cu.substring(0,cu.indexOf('/1')+2)
      console.log('----------- '+cu)
      $(".request_console_area").append("<button onclick=\"window.location.href='"+cu+'0'+"'\">点击跳转</button>")
    }
    else if(request.is_get_num == 5){

      console.log('555555555555555555555555555555555555555555555555')
      console.log(request.url.indexOf('page'))
      console.log('page is ',request.url[request.url.indexOf('page')+5])

      current_page=request.url[request.url.indexOf('page')+5]
      dataes=request.data['data']['entry_list']
      page_list =[]

      if (displayed==false && page_list.includes(current_page)==false){
        $(".request_console_area").append("<div>当前主播卖货信息</div>")
        for (i in dataes){ 
          console.log(i)
          product_name=dataes[i]['first_entity']['entity_name']
          quantity=dataes[i]['second_entity']
          console.log(product_name,quantity)
          $(".request_console_area").append("<div>"+product_name+":"+quantity+"</div>")
        }
        displayed=true
        current_page.push(page_list)
      }
      
        
    }

}); 


