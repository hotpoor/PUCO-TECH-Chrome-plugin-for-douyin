console.log("this is background.js")
check_urls =[]
chrome.webRequest.onCompleted.addListener(
  function (details) {
    if (details.statusCode == 200) {
        console.log('status==200!')
        var is_get = false
        var is_get_num = 0
        check_urls_has = [
            "&platform_source=1&platform_channel=1&type=1&service_name=data.AdStarDataService&service_method=GetAuthorWatchedDistribution&sign_strict=1&sign=",
            "&platform_source=1&author_type=1&service_name=data.AdStarDataService&service_method=GetAuthorFansDistributionV2&sign_strict=1&sign=",
            "&platform_source=1&platform_channel=1&range=2&type=1&service_name=data.AdStarDataService&service_method=GetAuthorSpreadInfo&sign_strict=1&sign=",
            "&platform_channel=1&day_count=30&service_name=data.AdStarDataService&service_method=GetAuthorEcomDetail&sign_strict=1&sign=",
            "&service_name=go_author.AdStarGoAuthorService&service_method=AuthorGetBusinessCardInfo&sign_strict=1&sign=",
            "live_list_detail?aggr_type=3&req_type=1&page=",
        ]
        console.log(details.url)
        for (i=0;i<check_urls_has.length;i++){
            console.log('checking url...')
            if (details.url.indexOf(check_urls_has[i])>-1){
                is_get=true
                is_get_num = i
                console.log(i)
                break
            }
        }

        if (is_get){
            console.log('is_get is ',is_get)
            if (check_urls.indexOf(details.url)>-1){
                return
            }
            console.log(details.url)
            check_urls.push(details.url)
            console.log(details.url)
            console.log("==== 巨量星图 数据监听 is_get ====");
            $.ajax({
                url:details.url,
                type:"GET",
                dataType:"json",
                data:null,
                success:function(data){
                    console.log(data)
                    
                    if (is_get_num==4){
                        
                        $.ajax({
                            url:"https://buyin.jinritemai.com/api/authorStatData/seekAuthor?type=2&page=1&refresh=true&req_source=0&query="+data.data["card_info"]["nick_name"],
                            type:"GET",
                            dataType:"json",
                            data:null,
                            success:function(adata){
                                console.log("======>")
                                console.log(adata.data["list"][0]["author_base"]["uid"])
                                chrome.tabs.sendMessage(details.tabId,{ 
                                    "url":details.url, 
                                    "data":data ,
                                    "is_get_num":is_get_num,
                                    "redirect_url":"https://buyin.jinritemai.com/dashboard/servicehall/daren-profile?uid="+adata.data["list"][0]["author_base"]["uid"]
                                },(res)=>{
                                    console.log("send")
                                    console.log(is_get_num)
                                })

                            },
                            error:function(data){}
                        })

                    }else{


                        chrome.tabs.sendMessage(details.tabId,{ 
                            "url":details.url, 
                            "data":data ,
                            "is_get_num":is_get_num
                        },(res)=>{
                            console.log("send")
                            console.log(is_get_num)
                        })
                    }
                },
                error:function(data){}
            })
        }
    }
  },

  { urls: [
    "https://pgy.xiaohongshu.com/api/solar/cooperator/user/blogger/*",
    "https://www.xingtu.cn/h/api/gateway/handler_get/*",
    "https://buyin.jinritemai.com/api/authorStatData/*",
    "https://compass.jinritemai.com/business_api/*"
   ] }  //监听页面请求,你也可以通过*来匹配。
);



chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  const res = req.info
  console.log(res)
  if (res=="fensihuoyuedu"){
      check_urls = []
  }
})
