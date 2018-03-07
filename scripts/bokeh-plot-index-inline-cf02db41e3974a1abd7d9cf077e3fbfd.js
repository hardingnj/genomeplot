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
      };var element = document.getElementById("d5509c19-40b3-4903-82ba-13f2bc088874");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd5509c19-40b3-4903-82ba-13f2bc088874' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"76997abd-ac92-4195-b743-1e13b8a2c892":{"roots":{"references":[{"attributes":{"below":[{"id":"91c7538d-2b5c-4463-8c34-72aca468402c","type":"LinearAxis"}],"left":[{"id":"e2b62d07-aa69-43ce-9be4-5d88dd10137f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"91c7538d-2b5c-4463-8c34-72aca468402c","type":"LinearAxis"},{"id":"f49f29df-ae03-4a2c-9737-116c65f31030","type":"Grid"},{"id":"e2b62d07-aa69-43ce-9be4-5d88dd10137f","type":"LinearAxis"},{"id":"fd745568-f76f-4d64-9425-aa07aea4d1ce","type":"Grid"},{"id":"6d3c9f9f-466f-44b7-9b44-5ef7774dad73","type":"BoxAnnotation"},{"id":"79034016-732c-45d0-9dea-0ca287dfd520","type":"GlyphRenderer"},{"id":"f1d5c11f-1856-4fdf-80aa-e1a5617e76a8","type":"GlyphRenderer"}],"title":{"id":"f8ae5d17-9b37-4421-8a71-30b897189edf","type":"Title"},"toolbar":{"id":"6e3a8bef-3393-4ed3-b8fe-39a0bbbbb0f3","type":"Toolbar"},"x_range":{"id":"5fca40b3-c0fa-4a04-b296-2554fda62df7","type":"DataRange1d"},"x_scale":{"id":"1c0f8e72-10e5-45a4-8902-43090f0c2878","type":"LinearScale"},"y_range":{"id":"818d3b8e-3bc8-4efa-b6c6-87970f714a22","type":"DataRange1d"},"y_scale":{"id":"a6439a56-bca7-403a-9d45-b2684ba60e78","type":"LinearScale"}},"id":"bea7ba01-923e-432c-bd85-0db0322e17bd","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"818d3b8e-3bc8-4efa-b6c6-87970f714a22","type":"DataRange1d"},{"attributes":{},"id":"2245d792-9461-4ef3-9570-a1aa8317cba2","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"53329f6b-e83f-4750-9596-07d998d4200c","type":"PanTool"},{"id":"95889a04-9553-4d3c-8a89-ae4dc3d6503c","type":"WheelZoomTool"},{"id":"bf57abf7-5bf0-48ef-956e-577db1cf4309","type":"BoxZoomTool"},{"id":"a0868815-da4f-4b14-83e3-ef15a82432a8","type":"SaveTool"},{"id":"2245d792-9461-4ef3-9570-a1aa8317cba2","type":"ResetTool"},{"id":"df49232f-adc2-4160-a00a-1140e69b5801","type":"HelpTool"}]},"id":"6e3a8bef-3393-4ed3-b8fe-39a0bbbbb0f3","type":"Toolbar"},{"attributes":{"data_source":{"id":"d967cf00-f148-4d98-8875-132f9703639e","type":"ColumnDataSource"},"glyph":{"id":"87d36977-7b53-4010-9de6-5706e8dc1e0e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69ec9798-f886-4716-9179-0af3e43e58bd","type":"Line"},"selection_glyph":null,"view":{"id":"0781d38c-ffb2-43cb-b5f2-098e96aa36a3","type":"CDSView"}},"id":"79034016-732c-45d0-9dea-0ca287dfd520","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6d3c9f9f-466f-44b7-9b44-5ef7774dad73","type":"BoxAnnotation"},{"attributes":{"source":{"id":"d967cf00-f148-4d98-8875-132f9703639e","type":"ColumnDataSource"}},"id":"0781d38c-ffb2-43cb-b5f2-098e96aa36a3","type":"CDSView"},{"attributes":{"plot":null,"text":"example"},"id":"f8ae5d17-9b37-4421-8a71-30b897189edf","type":"Title"},{"attributes":{},"id":"a6439a56-bca7-403a-9d45-b2684ba60e78","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"d967cf00-f148-4d98-8875-132f9703639e","type":"ColumnDataSource"},{"attributes":{},"id":"1c0f8e72-10e5-45a4-8902-43090f0c2878","type":"LinearScale"},{"attributes":{"formatter":{"id":"132c578e-acc7-49c9-9a02-197afcdb8b3c","type":"BasicTickFormatter"},"plot":{"id":"bea7ba01-923e-432c-bd85-0db0322e17bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"b9c8cdb8-8e60-4434-88f5-51d703243174","type":"BasicTicker"}},"id":"e2b62d07-aa69-43ce-9be4-5d88dd10137f","type":"LinearAxis"},{"attributes":{"source":{"id":"16674faa-ef6e-4e7c-bb61-cf922122d650","type":"ColumnDataSource"}},"id":"c55bf931-0fdf-4ba0-af38-847b02715f06","type":"CDSView"},{"attributes":{},"id":"132c578e-acc7-49c9-9a02-197afcdb8b3c","type":"BasicTickFormatter"},{"attributes":{},"id":"596a5400-d99b-4ac6-9b76-dcf9c2fa420d","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"87d36977-7b53-4010-9de6-5706e8dc1e0e","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"bea7ba01-923e-432c-bd85-0db0322e17bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"b9c8cdb8-8e60-4434-88f5-51d703243174","type":"BasicTicker"}},"id":"fd745568-f76f-4d64-9425-aa07aea4d1ce","type":"Grid"},{"attributes":{},"id":"95889a04-9553-4d3c-8a89-ae4dc3d6503c","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8558b12a-300c-413c-8d60-3e4d22e94c94","type":"Circle"},{"attributes":{"callback":null},"id":"5fca40b3-c0fa-4a04-b296-2554fda62df7","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7fa32c02-5e1f-47df-bcf3-4659d3d95e64","type":"BasicTickFormatter"},"plot":{"id":"bea7ba01-923e-432c-bd85-0db0322e17bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"596a5400-d99b-4ac6-9b76-dcf9c2fa420d","type":"BasicTicker"}},"id":"91c7538d-2b5c-4463-8c34-72aca468402c","type":"LinearAxis"},{"attributes":{"data_source":{"id":"16674faa-ef6e-4e7c-bb61-cf922122d650","type":"ColumnDataSource"},"glyph":{"id":"8558b12a-300c-413c-8d60-3e4d22e94c94","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21ac50d4-defb-4d30-8532-b3c9723967b3","type":"Circle"},"selection_glyph":null,"view":{"id":"c55bf931-0fdf-4ba0-af38-847b02715f06","type":"CDSView"}},"id":"f1d5c11f-1856-4fdf-80aa-e1a5617e76a8","type":"GlyphRenderer"},{"attributes":{},"id":"a0868815-da4f-4b14-83e3-ef15a82432a8","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"16674faa-ef6e-4e7c-bb61-cf922122d650","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"69ec9798-f886-4716-9179-0af3e43e58bd","type":"Line"},{"attributes":{"plot":{"id":"bea7ba01-923e-432c-bd85-0db0322e17bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"596a5400-d99b-4ac6-9b76-dcf9c2fa420d","type":"BasicTicker"}},"id":"f49f29df-ae03-4a2c-9737-116c65f31030","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21ac50d4-defb-4d30-8532-b3c9723967b3","type":"Circle"},{"attributes":{},"id":"7fa32c02-5e1f-47df-bcf3-4659d3d95e64","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"6d3c9f9f-466f-44b7-9b44-5ef7774dad73","type":"BoxAnnotation"}},"id":"bf57abf7-5bf0-48ef-956e-577db1cf4309","type":"BoxZoomTool"},{"attributes":{},"id":"df49232f-adc2-4160-a00a-1140e69b5801","type":"HelpTool"},{"attributes":{},"id":"b9c8cdb8-8e60-4434-88f5-51d703243174","type":"BasicTicker"},{"attributes":{},"id":"53329f6b-e83f-4750-9596-07d998d4200c","type":"PanTool"}],"root_ids":["bea7ba01-923e-432c-bd85-0db0322e17bd"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"76997abd-ac92-4195-b743-1e13b8a2c892","elementid":"d5509c19-40b3-4903-82ba-13f2bc088874","modelid":"bea7ba01-923e-432c-bd85-0db0322e17bd"}];
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