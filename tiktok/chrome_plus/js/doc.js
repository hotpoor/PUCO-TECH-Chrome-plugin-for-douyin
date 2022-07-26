// Generated by CoffeeScript 1.12.7
(function() {
  var Hs, WS_DEVICE, hotpoor_doc_info, hotpoor_doc_info_chrome, hotpoor_doc_json, hotpoor_doc_list, hotpoor_doc_move, hotpoor_timestamp, hotpoor_ws, hotpoor_ws_device, localStorage_save, localStorage_save_doc, root,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Hs || (root.Hs = {});

  Hs = root.Hs;

  hotpoor_ws = null;

  hotpoor_timestamp = null;

  hotpoor_ws_device = null;

  WS_DEVICE = {
    UNKNOWN: 0,
    READY: 1,
    OPEN: 2,
    POST: 3,
    BAD: 4
  };

  hotpoor_doc_move = false;

  hotpoor_doc_info_chrome = null;

  hotpoor_doc_list = [];

  hotpoor_doc_json = {};

  hotpoor_doc_info = JSON.parse(localStorage.getItem("hotpoor_doc_info"));

  if (hotpoor_doc_info == null) {
    hotpoor_doc_info = {
      "hotpoor_doc_page": "/",
      "hotpoor_doc_list": [],
      "hotpoor_doc_json": {}
    };
    localStorage.setItem("hotpoor_doc_info", JSON.stringify(hotpoor_doc_info));
  }

  hotpoor_doc_list = hotpoor_doc_info["hotpoor_doc_list"];

  hotpoor_doc_json = hotpoor_doc_info["hotpoor_doc_json"];

  localStorage_save = function(hotpoor_doc_info, key, value) {
    hotpoor_doc_info[key] = value;
    localStorage.setItem("hotpoor_doc_info", JSON.stringify(hotpoor_doc_info));
    return hotpoor_doc_info;
  };

  localStorage_save_doc = function(hotpoor_doc_info, doc_id) {
    var _section_line_content, _section_line_number, i, k, len, ref, section, section_dom, sections, v;
    sections = $(".doc_main>.section");
    hotpoor_doc_list = [];
    for (i = 0, len = sections.length; i < len; i++) {
      section = sections[i];
      section_dom = $(section);
      _section_line_number = "" + (section_dom.data("line_number"));
      _section_line_content = section_dom.html();
      hotpoor_doc_list.push(_section_line_number);
      hotpoor_doc_json[_section_line_number] = _section_line_content;
    }
    for (k in hotpoor_doc_json) {
      v = hotpoor_doc_json[k];
      if (ref = !k, indexOf.call(hotpoor_doc_list, ref) >= 0) {
        delete hotpoor_doc_json[k];
      }
    }
    hotpoor_doc_info["hotpoor_doc_list"] = hotpoor_doc_list;
    hotpoor_doc_info["hotpoor_doc_json"] = hotpoor_doc_json;
    localStorage.setItem("hotpoor_doc_info", JSON.stringify(hotpoor_doc_info));
    return hotpoor_doc_info;
  };

  $(function() {
    var auto_save_doc_action, auto_save_doc_timer, lastEditRange, load_doc_list;
    load_doc_list = function() {
      var _dom, _html, _section, i, len, section;
      $(".doc_main").empty();
      for (i = 0, len = hotpoor_doc_list.length; i < len; i++) {
        section = hotpoor_doc_list[i];
        _html = hotpoor_doc_json[section];
        _dom = "<div class=\"section\" data-line_number=\"" + section + "\" contenteditable=\"true\">\n    " + _html + "\n</div>";
        $(".doc_main").append(_dom);
      }
      if (hotpoor_doc_list.length === 0) {
        _section = (new Date()).getTime();
        _dom = "<div class=\"section\" data-line_number=\"" + _section + "\" contenteditable=\"true\">\n    <div contenteditable=\"false\" class=\"section_root\">键入以开始</div>\n</div>";
        return $(".doc_main").append(_dom);
      }
    };
    load_doc_list();
    auto_save_doc_timer = null;
    auto_save_doc_action = function() {
      clearTimeout(auto_save_doc_timer);
      return auto_save_doc_timer = setTimeout(function() {
        var _dom, _section;
        if ($(".section").length === 0) {
          _section = (new Date()).getTime();
          _html;
          _dom = "<div class=\"section\" data-line_number=\"" + _section + "\" contenteditable=\"true\"><br>\n</div>";
          $(".doc_main").append(_dom);
        }
        localStorage_save_doc(hotpoor_doc_info, null);
        if ($(".section").first().content === "") {
          $(".section").first().append("<div contenteditable=\"false\" class=\"section_root\">键入以开始</div>");
        }
        return auto_save_doc_action();
      }, 2000);
    };
    auto_save_doc_action();
    lastEditRange = null;
    $(".doc_main").on("click", ".section_root", function(evt) {
      return $(this).remove();
    });
    $(".doc_main").on("keydown", ".section", function(evt) {
      var _dom, _section, this_section;
      this_section = $(this).data("line_number");
      if (evt.key === "Enter") {
        evt.stopPropagation();
        evt.preventDefault();
        _section = (new Date()).getTime();
        _dom = "<div class=\"section\" data-line_number=\"" + _section + "\" contenteditable=\"true\"><br>\n</div>";
        $("[data-line_number=\"" + this_section + "\"]").after(_dom);
        $("[data-line_number=\"" + _section + "\"]").focus();
      }
    });
    $(".doc_main").on("keyup", ".section", function(evt) {
      if (evt.key === "Backspace") {
        if ($(this).html() === "") {
          $(this).remove();
          console.log("光标应该回到上一行的最后一个位置");
        }
      }
      return console.log(evt);
    });
    $(".doc_main").on("mousedown", function(evt) {
      var _dom, _section_now;
      _section_now = null;
      _dom = evt.target;
      while (!$(_dom).hasClass("section")) {
        _dom = $(_dom).parent();
      }
      $(".section").removeClass("current_here");
      return $(_dom).addClass("current_here");
    });
    return $(".doc_main").on("blur", function(evt) {
      return $(".section").removeClass("current_here");
    });
  });

}).call(this);