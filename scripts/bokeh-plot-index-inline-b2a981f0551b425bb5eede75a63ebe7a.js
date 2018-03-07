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
      };var element = document.getElementById("2b84f7c8-70f1-4ca9-a7be-90510fc6d4df");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2b84f7c8-70f1-4ca9-a7be-90510fc6d4df' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"89e81161-33e1-4bca-ac99-f24843a5b08c":{"roots":{"references":[{"attributes":{"plot":null,"text":"example"},"id":"d6fcce3f-de7d-480c-b6d7-1e98eecd49d2","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"f4922c43-b264-45f6-982b-fd59fdf3fbe0","subtype":"Figure","type":"Plot"},"ticker":{"id":"34560ed3-9c8b-46b0-ae22-23c82e56f2da","type":"BasicTicker"}},"id":"432705b6-c261-4429-b371-4a4b2b1234a4","type":"Grid"},{"attributes":{"overlay":{"id":"83bb8189-dfd1-401c-99d6-1b053af658a7","type":"BoxAnnotation"}},"id":"26e55baf-ce45-40ef-a410-fa7d0fe9eb45","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"48a5062a-56d9-4c76-9825-3010f430a1ae","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9ea1a4b0-e893-4870-8063-ea65da1df4b0","type":"ColumnDataSource"}},"id":"45fcfa0c-d134-4bad-960f-2fa3f2cb6154","type":"CDSView"},{"attributes":{},"id":"34560ed3-9c8b-46b0-ae22-23c82e56f2da","type":"BasicTicker"},{"attributes":{"below":[{"id":"2dfdb7ad-235e-4e36-89b5-aafa87ae14ad","type":"LinearAxis"}],"left":[{"id":"9e3e6213-b74e-4d93-9fc1-d3be9151b4fa","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2dfdb7ad-235e-4e36-89b5-aafa87ae14ad","type":"LinearAxis"},{"id":"7aeeaacc-1526-47ff-baab-95ca99a5996e","type":"Grid"},{"id":"9e3e6213-b74e-4d93-9fc1-d3be9151b4fa","type":"LinearAxis"},{"id":"432705b6-c261-4429-b371-4a4b2b1234a4","type":"Grid"},{"id":"83bb8189-dfd1-401c-99d6-1b053af658a7","type":"BoxAnnotation"},{"id":"22bfbe0d-3c15-467a-af69-65e8706ae027","type":"GlyphRenderer"},{"id":"e48e4bf9-3fa4-4da3-a9f1-9ede9ba073e1","type":"GlyphRenderer"}],"title":{"id":"d6fcce3f-de7d-480c-b6d7-1e98eecd49d2","type":"Title"},"toolbar":{"id":"1a8c5ccd-af13-49d0-9d17-1e13482c5280","type":"Toolbar"},"x_range":{"id":"a558f0a3-eb7a-447f-b9bd-34455a9b5de4","type":"DataRange1d"},"x_scale":{"id":"9b523ec5-da62-482b-b083-c5900b6afa17","type":"LinearScale"},"y_range":{"id":"65540a54-277c-4a35-aac0-e3aa9aa237ae","type":"DataRange1d"},"y_scale":{"id":"f2757fef-51d6-4a98-a0f3-51ae644b7b11","type":"LinearScale"}},"id":"f4922c43-b264-45f6-982b-fd59fdf3fbe0","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"9b52e3b3-7b70-4db0-8d2b-cce739d99b1f","type":"BasicTickFormatter"},"plot":{"id":"f4922c43-b264-45f6-982b-fd59fdf3fbe0","subtype":"Figure","type":"Plot"},"ticker":{"id":"34560ed3-9c8b-46b0-ae22-23c82e56f2da","type":"BasicTicker"}},"id":"9e3e6213-b74e-4d93-9fc1-d3be9151b4fa","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"9ea1a4b0-e893-4870-8063-ea65da1df4b0","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ad04f424-b097-4bbf-b135-4fc4fcb498c2","type":"PanTool"},{"id":"3d2e1d58-a860-4858-acb4-7a3c80ad519c","type":"WheelZoomTool"},{"id":"26e55baf-ce45-40ef-a410-fa7d0fe9eb45","type":"BoxZoomTool"},{"id":"1b198206-7e60-4371-ba04-fe122ccfae72","type":"SaveTool"},{"id":"532ce2b0-81d3-43b1-921a-b51b1502b388","type":"ResetTool"},{"id":"a303731e-feeb-4a10-9b2a-1df84826fadf","type":"HelpTool"}]},"id":"1a8c5ccd-af13-49d0-9d17-1e13482c5280","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cecee852-73fa-47ed-9663-3412deea34d9","type":"Circle"},{"attributes":{},"id":"f2757fef-51d6-4a98-a0f3-51ae644b7b11","type":"LinearScale"},{"attributes":{},"id":"1b198206-7e60-4371-ba04-fe122ccfae72","type":"SaveTool"},{"attributes":{},"id":"1f641f41-5777-407d-a18d-0495fd7e827e","type":"BasicTickFormatter"},{"attributes":{},"id":"ad04f424-b097-4bbf-b135-4fc4fcb498c2","type":"PanTool"},{"attributes":{"callback":null},"id":"65540a54-277c-4a35-aac0-e3aa9aa237ae","type":"DataRange1d"},{"attributes":{"data_source":{"id":"9ea1a4b0-e893-4870-8063-ea65da1df4b0","type":"ColumnDataSource"},"glyph":{"id":"fb88e458-c957-4d8e-af3b-d8c84d88feee","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cecee852-73fa-47ed-9663-3412deea34d9","type":"Circle"},"selection_glyph":null,"view":{"id":"45fcfa0c-d134-4bad-960f-2fa3f2cb6154","type":"CDSView"}},"id":"e48e4bf9-3fa4-4da3-a9f1-9ede9ba073e1","type":"GlyphRenderer"},{"attributes":{},"id":"9b52e3b3-7b70-4db0-8d2b-cce739d99b1f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1f641f41-5777-407d-a18d-0495fd7e827e","type":"BasicTickFormatter"},"plot":{"id":"f4922c43-b264-45f6-982b-fd59fdf3fbe0","subtype":"Figure","type":"Plot"},"ticker":{"id":"0baabbe7-d43b-4f0f-b802-9026b6e01c20","type":"BasicTicker"}},"id":"2dfdb7ad-235e-4e36-89b5-aafa87ae14ad","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb88e458-c957-4d8e-af3b-d8c84d88feee","type":"Circle"},{"attributes":{},"id":"9b523ec5-da62-482b-b083-c5900b6afa17","type":"LinearScale"},{"attributes":{"source":{"id":"48a5062a-56d9-4c76-9825-3010f430a1ae","type":"ColumnDataSource"}},"id":"b1766271-71df-4641-9b61-b33a639cc6e2","type":"CDSView"},{"attributes":{},"id":"0baabbe7-d43b-4f0f-b802-9026b6e01c20","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c4f743ee-3954-40b4-84f8-a24318e463f1","type":"Line"},{"attributes":{},"id":"532ce2b0-81d3-43b1-921a-b51b1502b388","type":"ResetTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c93c8b64-f5c0-400b-82f8-ecbb02fde2b4","type":"Line"},{"attributes":{},"id":"a303731e-feeb-4a10-9b2a-1df84826fadf","type":"HelpTool"},{"attributes":{"plot":{"id":"f4922c43-b264-45f6-982b-fd59fdf3fbe0","subtype":"Figure","type":"Plot"},"ticker":{"id":"0baabbe7-d43b-4f0f-b802-9026b6e01c20","type":"BasicTicker"}},"id":"7aeeaacc-1526-47ff-baab-95ca99a5996e","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"83bb8189-dfd1-401c-99d6-1b053af658a7","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"48a5062a-56d9-4c76-9825-3010f430a1ae","type":"ColumnDataSource"},"glyph":{"id":"c93c8b64-f5c0-400b-82f8-ecbb02fde2b4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c4f743ee-3954-40b4-84f8-a24318e463f1","type":"Line"},"selection_glyph":null,"view":{"id":"b1766271-71df-4641-9b61-b33a639cc6e2","type":"CDSView"}},"id":"22bfbe0d-3c15-467a-af69-65e8706ae027","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"a558f0a3-eb7a-447f-b9bd-34455a9b5de4","type":"DataRange1d"},{"attributes":{},"id":"3d2e1d58-a860-4858-acb4-7a3c80ad519c","type":"WheelZoomTool"}],"root_ids":["f4922c43-b264-45f6-982b-fd59fdf3fbe0"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"89e81161-33e1-4bca-ac99-f24843a5b08c","elementid":"2b84f7c8-70f1-4ca9-a7be-90510fc6d4df","modelid":"f4922c43-b264-45f6-982b-fd59fdf3fbe0"}];
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