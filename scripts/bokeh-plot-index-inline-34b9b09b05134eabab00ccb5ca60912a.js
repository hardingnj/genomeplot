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
      };var element = document.getElementById("ff17c09a-adf9-4041-acdf-344736768c45");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ff17c09a-adf9-4041-acdf-344736768c45' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6c49dd27-6053-4053-bbf5-e8bea72b3b53":{"roots":{"references":[{"attributes":{"formatter":{"id":"74944a61-878f-4465-baaa-5a9c53a685cb","type":"BasicTickFormatter"},"plot":{"id":"98b9acee-9172-4997-9d02-d9a635f734eb","subtype":"Figure","type":"Plot"},"ticker":{"id":"da63d99d-5731-4880-bd79-d990c5f8fbd7","type":"BasicTicker"}},"id":"bc3608f6-cc4b-46de-95d0-49717ab81b2b","type":"LinearAxis"},{"attributes":{},"id":"3038565d-c140-4d93-942b-837086a1dbe0","type":"SaveTool"},{"attributes":{"plot":null,"text":"example"},"id":"001a378d-99ef-4e20-bbc1-7ebf4386c2a2","type":"Title"},{"attributes":{},"id":"a89e2cd0-7b24-41ec-970a-702f70fb9f89","type":"HelpTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4389152f-4c3e-4160-a997-d180b963276e","type":"Line"},{"attributes":{"data_source":{"id":"6202b210-75cd-4390-99a9-89ffb7f97bf2","type":"ColumnDataSource"},"glyph":{"id":"b1545beb-1c76-4dbb-adf2-282ab1e1e728","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fde3bea0-254a-48fa-9aea-b8f6a73ab2b6","type":"Circle"},"selection_glyph":null,"view":{"id":"fbde785a-ec4e-4389-9cfd-bc618ab0b701","type":"CDSView"}},"id":"46ca4904-cc32-4da3-a757-23b2c4fbe154","type":"GlyphRenderer"},{"attributes":{},"id":"60593c63-0079-4cb6-8f9a-e566dbc44caa","type":"LinearScale"},{"attributes":{"source":{"id":"6202b210-75cd-4390-99a9-89ffb7f97bf2","type":"ColumnDataSource"}},"id":"fbde785a-ec4e-4389-9cfd-bc618ab0b701","type":"CDSView"},{"attributes":{"callback":null},"id":"2251f2d8-b0b5-4c35-9a61-33e43f08b08e","type":"DataRange1d"},{"attributes":{},"id":"3ccd99a0-c9ef-452e-935b-d3cc5c31f1fb","type":"PanTool"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b1545beb-1c76-4dbb-adf2-282ab1e1e728","type":"Circle"},{"attributes":{"source":{"id":"1318d7d0-28fc-4284-b958-e196cfa9b4cb","type":"ColumnDataSource"}},"id":"ceab697b-8ed3-48a5-a37e-7e45b3d34921","type":"CDSView"},{"attributes":{},"id":"19e11d2e-1f81-402a-91d6-c7dc4448b69c","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c0755088-639e-43d4-b966-43ef77c1718d","type":"BoxAnnotation"},{"attributes":{},"id":"62e589fb-507b-49ad-b9ab-e4dc8b194771","type":"LinearScale"},{"attributes":{},"id":"ce6ba81a-ec69-4bb2-a8ed-159199d6a1ee","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1318d7d0-28fc-4284-b958-e196cfa9b4cb","type":"ColumnDataSource"},"glyph":{"id":"4389152f-4c3e-4160-a997-d180b963276e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0cad1861-c62f-4e25-903a-e7e96a0d1036","type":"Line"},"selection_glyph":null,"view":{"id":"ceab697b-8ed3-48a5-a37e-7e45b3d34921","type":"CDSView"}},"id":"466b9be4-e4b5-487c-be16-1914ab704ecf","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"fb25591a-bd23-44eb-b0b2-ed98b6855d72","type":"DataRange1d"},{"attributes":{},"id":"da63d99d-5731-4880-bd79-d990c5f8fbd7","type":"BasicTicker"},{"attributes":{},"id":"10f15732-9a8e-4aa7-942e-6573bca2cd34","type":"ResetTool"},{"attributes":{"overlay":{"id":"c0755088-639e-43d4-b966-43ef77c1718d","type":"BoxAnnotation"}},"id":"96d84471-35ba-42bd-9b1d-55aeff4ad79d","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"64c9a0af-35ed-4676-a7e7-17f7e252698b","type":"LinearAxis"}],"left":[{"id":"bc3608f6-cc4b-46de-95d0-49717ab81b2b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"64c9a0af-35ed-4676-a7e7-17f7e252698b","type":"LinearAxis"},{"id":"9f94cc55-ec6c-4b46-a9d0-ddd558807663","type":"Grid"},{"id":"bc3608f6-cc4b-46de-95d0-49717ab81b2b","type":"LinearAxis"},{"id":"744dadbb-1b4b-49e1-8ce7-15d21b580594","type":"Grid"},{"id":"c0755088-639e-43d4-b966-43ef77c1718d","type":"BoxAnnotation"},{"id":"466b9be4-e4b5-487c-be16-1914ab704ecf","type":"GlyphRenderer"},{"id":"46ca4904-cc32-4da3-a757-23b2c4fbe154","type":"GlyphRenderer"}],"title":{"id":"001a378d-99ef-4e20-bbc1-7ebf4386c2a2","type":"Title"},"toolbar":{"id":"59f150d5-9166-4ef4-8f50-b103e36c41e2","type":"Toolbar"},"x_range":{"id":"fb25591a-bd23-44eb-b0b2-ed98b6855d72","type":"DataRange1d"},"x_scale":{"id":"60593c63-0079-4cb6-8f9a-e566dbc44caa","type":"LinearScale"},"y_range":{"id":"2251f2d8-b0b5-4c35-9a61-33e43f08b08e","type":"DataRange1d"},"y_scale":{"id":"62e589fb-507b-49ad-b9ab-e4dc8b194771","type":"LinearScale"}},"id":"98b9acee-9172-4997-9d02-d9a635f734eb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"549f2f72-d708-4908-b85b-0f8ef6f6b8c1","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fde3bea0-254a-48fa-9aea-b8f6a73ab2b6","type":"Circle"},{"attributes":{},"id":"74944a61-878f-4465-baaa-5a9c53a685cb","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"549f2f72-d708-4908-b85b-0f8ef6f6b8c1","type":"BasicTickFormatter"},"plot":{"id":"98b9acee-9172-4997-9d02-d9a635f734eb","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce6ba81a-ec69-4bb2-a8ed-159199d6a1ee","type":"BasicTicker"}},"id":"64c9a0af-35ed-4676-a7e7-17f7e252698b","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"98b9acee-9172-4997-9d02-d9a635f734eb","subtype":"Figure","type":"Plot"},"ticker":{"id":"da63d99d-5731-4880-bd79-d990c5f8fbd7","type":"BasicTicker"}},"id":"744dadbb-1b4b-49e1-8ce7-15d21b580594","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"6202b210-75cd-4390-99a9-89ffb7f97bf2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"98b9acee-9172-4997-9d02-d9a635f734eb","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce6ba81a-ec69-4bb2-a8ed-159199d6a1ee","type":"BasicTicker"}},"id":"9f94cc55-ec6c-4b46-a9d0-ddd558807663","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"1318d7d0-28fc-4284-b958-e196cfa9b4cb","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3ccd99a0-c9ef-452e-935b-d3cc5c31f1fb","type":"PanTool"},{"id":"19e11d2e-1f81-402a-91d6-c7dc4448b69c","type":"WheelZoomTool"},{"id":"96d84471-35ba-42bd-9b1d-55aeff4ad79d","type":"BoxZoomTool"},{"id":"3038565d-c140-4d93-942b-837086a1dbe0","type":"SaveTool"},{"id":"10f15732-9a8e-4aa7-942e-6573bca2cd34","type":"ResetTool"},{"id":"a89e2cd0-7b24-41ec-970a-702f70fb9f89","type":"HelpTool"}]},"id":"59f150d5-9166-4ef4-8f50-b103e36c41e2","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"0cad1861-c62f-4e25-903a-e7e96a0d1036","type":"Line"}],"root_ids":["98b9acee-9172-4997-9d02-d9a635f734eb"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"6c49dd27-6053-4053-bbf5-e8bea72b3b53","elementid":"ff17c09a-adf9-4041-acdf-344736768c45","modelid":"98b9acee-9172-4997-9d02-d9a635f734eb"}];
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