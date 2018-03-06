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
      };var element = document.getElementById("9fd9f63f-f705-4fcd-b05b-e1e0dcd075f8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9fd9f63f-f705-4fcd-b05b-e1e0dcd075f8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f5139262-e9ed-4069-93c6-47a7129b7517":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"38bde4f0-6a12-41ec-8b31-b94f53b27319","type":"Circle"},{"attributes":{},"id":"bcccdf02-0f3f-4975-a2ca-b9a48582a832","type":"BasicTicker"},{"attributes":{},"id":"d87875a2-b2e5-4dd3-b09a-66c7911884d1","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"f5cc0e23-ff81-4c0a-8cf9-fe95c6332b37","type":"ColumnDataSource"},"glyph":{"id":"a3b49599-2cb9-46b1-bddd-263866d008bf","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38bde4f0-6a12-41ec-8b31-b94f53b27319","type":"Circle"},"selection_glyph":null,"view":{"id":"e3abb331-fc98-4dbf-8654-e844830ac2fe","type":"CDSView"}},"id":"cc4cf302-1717-4724-a0a3-57aa2fdf64f9","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"c3202a91-5282-42ae-bcbe-65127c75c96c","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"79c1f2e0-ae10-4f1d-a791-7b443b9814f2","subtype":"Figure","type":"Plot"},"ticker":{"id":"bcccdf02-0f3f-4975-a2ca-b9a48582a832","type":"BasicTicker"}},"id":"6c68419d-ecaf-4ac4-9f27-3f3991f4863b","type":"Grid"},{"attributes":{"callback":null},"id":"58259a91-ef11-4bf9-86d3-37c774425b13","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1a1dee8c-c132-4e99-8d22-81d0f7c34b7e","type":"BoxAnnotation"}},"id":"10b87ce5-336a-4a69-958e-c8223635b9ce","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"31307141-607c-431d-98c0-8d56b1864daa","type":"BasicTickFormatter"},"plot":{"id":"79c1f2e0-ae10-4f1d-a791-7b443b9814f2","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f78c3ce-dc75-4a3e-8dd2-39d02f2dcda2","type":"BasicTicker"}},"id":"32e3d5b4-49d8-41c6-91e4-62e1ecfd51d8","type":"LinearAxis"},{"attributes":{},"id":"acbf90d9-dc53-4b6f-8abe-d944ec58c48c","type":"LinearScale"},{"attributes":{"formatter":{"id":"cada157d-66b9-4dd6-91be-df6b185d5f8c","type":"BasicTickFormatter"},"plot":{"id":"79c1f2e0-ae10-4f1d-a791-7b443b9814f2","subtype":"Figure","type":"Plot"},"ticker":{"id":"bcccdf02-0f3f-4975-a2ca-b9a48582a832","type":"BasicTicker"}},"id":"f2047979-4f0a-45fc-8c84-a9310722db04","type":"LinearAxis"},{"attributes":{"source":{"id":"f5cc0e23-ff81-4c0a-8cf9-fe95c6332b37","type":"ColumnDataSource"}},"id":"e3abb331-fc98-4dbf-8654-e844830ac2fe","type":"CDSView"},{"attributes":{},"id":"92c34be7-c973-4690-8a0e-b6e5ac3633b2","type":"ResetTool"},{"attributes":{"plot":null,"text":"example"},"id":"223bc1ff-8b21-40d1-bf98-545e017abae6","type":"Title"},{"attributes":{"plot":{"id":"79c1f2e0-ae10-4f1d-a791-7b443b9814f2","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f78c3ce-dc75-4a3e-8dd2-39d02f2dcda2","type":"BasicTicker"}},"id":"265295ac-51f1-4932-b027-e4c6c2bbc1cd","type":"Grid"},{"attributes":{"data_source":{"id":"c3202a91-5282-42ae-bcbe-65127c75c96c","type":"ColumnDataSource"},"glyph":{"id":"aa7e0dc9-6e48-4b77-a62b-ba303d7e7103","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"66bc01d9-3a5a-4704-97b4-add2c3ab9f18","type":"Line"},"selection_glyph":null,"view":{"id":"6b42aabf-bb0e-48cb-8240-8cc08f72197f","type":"CDSView"}},"id":"1916d54b-5ef3-4551-8a76-9e8b96f62aa7","type":"GlyphRenderer"},{"attributes":{},"id":"a7e47152-d4e6-49f0-8353-5bf760d5ba1b","type":"SaveTool"},{"attributes":{},"id":"31307141-607c-431d-98c0-8d56b1864daa","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"66bc01d9-3a5a-4704-97b4-add2c3ab9f18","type":"Line"},{"attributes":{},"id":"dee1e5d2-b36c-4ef4-9a29-cbd92c1bcae8","type":"LinearScale"},{"attributes":{},"id":"00b6db90-a33b-4b46-879e-f9e86df396d9","type":"HelpTool"},{"attributes":{"callback":null},"id":"019818d3-9900-4cbb-9116-43e5ab9684cd","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"aa7e0dc9-6e48-4b77-a62b-ba303d7e7103","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1a1dee8c-c132-4e99-8d22-81d0f7c34b7e","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3b49599-2cb9-46b1-bddd-263866d008bf","type":"Circle"},{"attributes":{"below":[{"id":"32e3d5b4-49d8-41c6-91e4-62e1ecfd51d8","type":"LinearAxis"}],"left":[{"id":"f2047979-4f0a-45fc-8c84-a9310722db04","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32e3d5b4-49d8-41c6-91e4-62e1ecfd51d8","type":"LinearAxis"},{"id":"265295ac-51f1-4932-b027-e4c6c2bbc1cd","type":"Grid"},{"id":"f2047979-4f0a-45fc-8c84-a9310722db04","type":"LinearAxis"},{"id":"6c68419d-ecaf-4ac4-9f27-3f3991f4863b","type":"Grid"},{"id":"1a1dee8c-c132-4e99-8d22-81d0f7c34b7e","type":"BoxAnnotation"},{"id":"1916d54b-5ef3-4551-8a76-9e8b96f62aa7","type":"GlyphRenderer"},{"id":"cc4cf302-1717-4724-a0a3-57aa2fdf64f9","type":"GlyphRenderer"}],"title":{"id":"223bc1ff-8b21-40d1-bf98-545e017abae6","type":"Title"},"toolbar":{"id":"a4ea3e0b-8d0b-4bdf-b7c8-9bee0e624f2c","type":"Toolbar"},"x_range":{"id":"019818d3-9900-4cbb-9116-43e5ab9684cd","type":"DataRange1d"},"x_scale":{"id":"dee1e5d2-b36c-4ef4-9a29-cbd92c1bcae8","type":"LinearScale"},"y_range":{"id":"58259a91-ef11-4bf9-86d3-37c774425b13","type":"DataRange1d"},"y_scale":{"id":"acbf90d9-dc53-4b6f-8abe-d944ec58c48c","type":"LinearScale"}},"id":"79c1f2e0-ae10-4f1d-a791-7b443b9814f2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b6251444-d943-4887-a440-c497d846e5d3","type":"PanTool"},{"attributes":{},"id":"cada157d-66b9-4dd6-91be-df6b185d5f8c","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"c3202a91-5282-42ae-bcbe-65127c75c96c","type":"ColumnDataSource"}},"id":"6b42aabf-bb0e-48cb-8240-8cc08f72197f","type":"CDSView"},{"attributes":{},"id":"9f78c3ce-dc75-4a3e-8dd2-39d02f2dcda2","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"f5cc0e23-ff81-4c0a-8cf9-fe95c6332b37","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b6251444-d943-4887-a440-c497d846e5d3","type":"PanTool"},{"id":"d87875a2-b2e5-4dd3-b09a-66c7911884d1","type":"WheelZoomTool"},{"id":"10b87ce5-336a-4a69-958e-c8223635b9ce","type":"BoxZoomTool"},{"id":"a7e47152-d4e6-49f0-8353-5bf760d5ba1b","type":"SaveTool"},{"id":"92c34be7-c973-4690-8a0e-b6e5ac3633b2","type":"ResetTool"},{"id":"00b6db90-a33b-4b46-879e-f9e86df396d9","type":"HelpTool"}]},"id":"a4ea3e0b-8d0b-4bdf-b7c8-9bee0e624f2c","type":"Toolbar"}],"root_ids":["79c1f2e0-ae10-4f1d-a791-7b443b9814f2"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"f5139262-e9ed-4069-93c6-47a7129b7517","elementid":"9fd9f63f-f705-4fcd-b05b-e1e0dcd075f8","modelid":"79c1f2e0-ae10-4f1d-a791-7b443b9814f2"}];
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