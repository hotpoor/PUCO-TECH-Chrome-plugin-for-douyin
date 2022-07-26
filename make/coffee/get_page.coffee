root = exports ? this
# !!!! Hotpoor root object
root.Hs or= {}
Hs = root.Hs
$ ->
    $(window).on "load",(evt)->
        console.log "chrome plugin load"
        setTimeout ()->
                if window.location.href.indexOf("https://pgy.xiaohongshu.com/solar/advertiser/kol/")>-1
                    console.log window.location.href.split("https://pgy.xiaohongshu.com/solar/advertiser/kol/")
                    console.log $("[data-v-7efc0192]").html()
                    console.log $(".noteData[data-v-4bab4de6]").html()
            ,5000
