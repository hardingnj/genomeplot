(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("9f04740f-7d5c-44c1-a5e6-ee2048ac4532");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f04740f-7d5c-44c1-a5e6-ee2048ac4532' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"d1dbf9f8-ca7c-4f78-9c7c-cf1ddee2fa1b":{"roots":{"references":[{"attributes":{},"id":"1f2f14d3-ff7e-48a7-a13e-392b295095d7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1f2f14d3-ff7e-48a7-a13e-392b295095d7","type":"BasicTickFormatter"},"plot":{"id":"f0dfccd0-f12e-4b12-b1f8-137a22b1fdb0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f30837a3-60b9-474a-9632-d349975704df","type":"BasicTicker"}},"id":"704c8a99-42d4-4c94-8dbe-bcaa4efeb5a2","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2489abef-9041-480e-b5b1-229158233cce","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"c6ff6e4d-1627-456a-b70d-099dc5b94565","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"fe922696-afc1-4bbe-a61c-34f7395348f2","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"732d764c-445d-4c80-9ac6-6509b4bb3d89","type":"BasicTickFormatter"},"plot":{"id":"f0dfccd0-f12e-4b12-b1f8-137a22b1fdb0","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc87d9a3-d7a8-485f-970b-9fe3a16ddbbf","type":"BasicTicker"}},"id":"16fae42e-e6cb-4db5-9bb0-bb55ba6b657e","type":"LinearAxis"},{"attributes":{"plot":{"id":"f0dfccd0-f12e-4b12-b1f8-137a22b1fdb0","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc87d9a3-d7a8-485f-970b-9fe3a16ddbbf","type":"BasicTicker"}},"id":"1c91fa95-fdcd-45e2-8c90-a64c764ae9cc","type":"Grid"},{"attributes":{"below":[{"id":"16fae42e-e6cb-4db5-9bb0-bb55ba6b657e","type":"LinearAxis"}],"left":[{"id":"704c8a99-42d4-4c94-8dbe-bcaa4efeb5a2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16fae42e-e6cb-4db5-9bb0-bb55ba6b657e","type":"LinearAxis"},{"id":"1c91fa95-fdcd-45e2-8c90-a64c764ae9cc","type":"Grid"},{"id":"704c8a99-42d4-4c94-8dbe-bcaa4efeb5a2","type":"LinearAxis"},{"id":"647d5d3c-06d1-4038-9f94-dadceeffb3e7","type":"Grid"},{"id":"b4ed8009-305b-48d8-8636-8ddfe6cace7b","type":"BoxAnnotation"},{"id":"69a7b757-0124-4d73-9414-e52866708f69","type":"GlyphRenderer"},{"id":"b7a13cb0-51b6-4247-b958-25f7aa760509","type":"GlyphRenderer"}],"title":{"id":"ecd1edd3-536d-4ff1-88a9-8f41c2616009","type":"Title"},"toolbar":{"id":"c6c27035-2476-4e20-976a-dab0677a6adb","type":"Toolbar"},"x_range":{"id":"2489abef-9041-480e-b5b1-229158233cce","type":"DataRange1d"},"x_scale":{"id":"69cb7fcd-0061-45ec-979d-8453f049c190","type":"LinearScale"},"y_range":{"id":"c11dfa61-15ef-4e1b-a0f3-93bb34f6e762","type":"DataRange1d"},"y_scale":{"id":"b585f2f8-81df-411e-8c61-aa2cadceaadf","type":"LinearScale"}},"id":"f0dfccd0-f12e-4b12-b1f8-137a22b1fdb0","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"c6ff6e4d-1627-456a-b70d-099dc5b94565","type":"ColumnDataSource"}},"id":"9cc936d2-34ed-49c5-9ae1-7d0df611fc08","type":"CDSView"},{"attributes":{},"id":"732d764c-445d-4c80-9ac6-6509b4bb3d89","type":"BasicTickFormatter"},{"attributes":{},"id":"6f9b317d-9989-4b1c-bb72-34f1793dd760","type":"PanTool"},{"attributes":{},"id":"5c3e4b18-c8d3-4c5a-843c-fc53c9a90ab7","type":"HelpTool"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6f62b91-fad0-4e56-b7d2-81d4c504324d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e47fedbb-5e26-474d-9150-821edc9add92","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b4ed8009-305b-48d8-8636-8ddfe6cace7b","type":"BoxAnnotation"},{"attributes":{},"id":"b585f2f8-81df-411e-8c61-aa2cadceaadf","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"ddcf687d-514c-465a-835e-d6173e1be40f","type":"Line"},{"attributes":{},"id":"69cb7fcd-0061-45ec-979d-8453f049c190","type":"LinearScale"},{"attributes":{},"id":"573315dc-e0a6-4b88-95bd-693b7e5d4b39","type":"ResetTool"},{"attributes":{"data_source":{"id":"c6ff6e4d-1627-456a-b70d-099dc5b94565","type":"ColumnDataSource"},"glyph":{"id":"d6f62b91-fad0-4e56-b7d2-81d4c504324d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e47fedbb-5e26-474d-9150-821edc9add92","type":"Circle"},"selection_glyph":null,"view":{"id":"9cc936d2-34ed-49c5-9ae1-7d0df611fc08","type":"CDSView"}},"id":"b7a13cb0-51b6-4247-b958-25f7aa760509","type":"GlyphRenderer"},{"attributes":{},"id":"12449f02-2981-4424-b080-beb7a98bc1cd","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1732e105-d50f-48bd-ac29-ce069172db0a","type":"Line"},{"attributes":{"data_source":{"id":"fe922696-afc1-4bbe-a61c-34f7395348f2","type":"ColumnDataSource"},"glyph":{"id":"ddcf687d-514c-465a-835e-d6173e1be40f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1732e105-d50f-48bd-ac29-ce069172db0a","type":"Line"},"selection_glyph":null,"view":{"id":"75d3eb6c-b548-403a-897a-f583b1365a72","type":"CDSView"}},"id":"69a7b757-0124-4d73-9414-e52866708f69","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"b4ed8009-305b-48d8-8636-8ddfe6cace7b","type":"BoxAnnotation"}},"id":"991fccc3-70af-4fc9-954b-27ea98dffea6","type":"BoxZoomTool"},{"attributes":{"source":{"id":"fe922696-afc1-4bbe-a61c-34f7395348f2","type":"ColumnDataSource"}},"id":"75d3eb6c-b548-403a-897a-f583b1365a72","type":"CDSView"},{"attributes":{},"id":"48d852f0-698e-4018-aa59-4a096beb7388","type":"SaveTool"},{"attributes":{"callback":null},"id":"c11dfa61-15ef-4e1b-a0f3-93bb34f6e762","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"f0dfccd0-f12e-4b12-b1f8-137a22b1fdb0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f30837a3-60b9-474a-9632-d349975704df","type":"BasicTicker"}},"id":"647d5d3c-06d1-4038-9f94-dadceeffb3e7","type":"Grid"},{"attributes":{},"id":"fc87d9a3-d7a8-485f-970b-9fe3a16ddbbf","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6f9b317d-9989-4b1c-bb72-34f1793dd760","type":"PanTool"},{"id":"12449f02-2981-4424-b080-beb7a98bc1cd","type":"WheelZoomTool"},{"id":"991fccc3-70af-4fc9-954b-27ea98dffea6","type":"BoxZoomTool"},{"id":"48d852f0-698e-4018-aa59-4a096beb7388","type":"SaveTool"},{"id":"573315dc-e0a6-4b88-95bd-693b7e5d4b39","type":"ResetTool"},{"id":"5c3e4b18-c8d3-4c5a-843c-fc53c9a90ab7","type":"HelpTool"}]},"id":"c6c27035-2476-4e20-976a-dab0677a6adb","type":"Toolbar"},{"attributes":{},"id":"f30837a3-60b9-474a-9632-d349975704df","type":"BasicTicker"},{"attributes":{"plot":null,"text":"example"},"id":"ecd1edd3-536d-4ff1-88a9-8f41c2616009","type":"Title"}],"root_ids":["f0dfccd0-f12e-4b12-b1f8-137a22b1fdb0"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"d1dbf9f8-ca7c-4f78-9c7c-cf1ddee2fa1b","elementid":"9f04740f-7d5c-44c1-a5e6-ee2048ac4532","modelid":"f0dfccd0-f12e-4b12-b1f8-137a22b1fdb0"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.14.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();