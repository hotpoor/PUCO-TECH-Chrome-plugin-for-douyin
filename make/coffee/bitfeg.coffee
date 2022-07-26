root = exports ? this
# !!!! Hotpoor root object
root.Hs or= {}
Hs = root.Hs
$ ->
    $(".menus").on "click",".menu_item",(evt)->
        $(".menu_item").removeClass("menu_item_current")
        $(".menu_main").addClass("hide")
        data_name = $(this).attr("data-name")
        $(".menu_item[data-name=#{data_name}]").addClass("menu_item_current")
        $(".menu_main[data-name=#{data_name}]").removeClass("hide")

    start_action = ()->
        $(".menu_item[data-name=bitfeg_create]").click()
    start_action()