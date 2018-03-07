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
      };var element = document.getElementById("9bedbcea-0f55-4598-b310-2e0de83ba5ef");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9bedbcea-0f55-4598-b310-2e0de83ba5ef' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"17845c7b-0879-4008-a5bb-1fd0c1187587":{"roots":{"references":[{"attributes":{"plot":null,"text":"example"},"id":"9471e033-4602-467d-b8ed-bceba9994d30","type":"Title"},{"attributes":{},"id":"46ed5ada-d09c-4239-aa1e-477ac05e05c7","type":"LinearScale"},{"attributes":{},"id":"8f9a3e06-d0a1-4a2c-9d72-322e1ef21fef","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"915f58dc-5609-4a8a-82a2-7b55975688e6","type":"Circle"},{"attributes":{"data_source":{"id":"109bbd1d-2a38-4bd9-9262-a1368dc84ec1","type":"ColumnDataSource"},"glyph":{"id":"915f58dc-5609-4a8a-82a2-7b55975688e6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"333525bd-5f9d-40f6-b80b-5fb3a04bfdde","type":"Circle"},"selection_glyph":null,"view":{"id":"a0c38b35-ad66-43fb-9c57-3d62bb3063d3","type":"CDSView"}},"id":"46ecebc3-b09b-4fb3-89a5-1123dcc15c6a","type":"GlyphRenderer"},{"attributes":{},"id":"94f7171e-8ac5-4ec6-ba18-d607297e5e73","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"78d46728-88e0-4b03-b72e-3ca1bda1e30b","subtype":"Figure","type":"Plot"},"ticker":{"id":"94f7171e-8ac5-4ec6-ba18-d607297e5e73","type":"BasicTicker"}},"id":"8a1cd827-daf3-4ae2-96ed-133936b9d125","type":"Grid"},{"attributes":{"overlay":{"id":"0ae3cfd2-308f-4ab2-9348-1f4fadfa7579","type":"BoxAnnotation"}},"id":"cdf143b3-af55-4e05-87c5-36c9c56b88cc","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"109bbd1d-2a38-4bd9-9262-a1368dc84ec1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"d7ee17b9-ec57-4cb2-9aa9-839f9cc0eefa","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"78d46728-88e0-4b03-b72e-3ca1bda1e30b","subtype":"Figure","type":"Plot"},"ticker":{"id":"461d41b0-eeef-4f9b-a7a9-8434cf673df4","type":"BasicTicker"}},"id":"5034f27e-7f07-489d-b04e-0d679dba1aa7","type":"Grid"},{"attributes":{"source":{"id":"109bbd1d-2a38-4bd9-9262-a1368dc84ec1","type":"ColumnDataSource"}},"id":"a0c38b35-ad66-43fb-9c57-3d62bb3063d3","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0ae3cfd2-308f-4ab2-9348-1f4fadfa7579","type":"BoxAnnotation"},{"attributes":{},"id":"948bb3fa-9182-4d12-bc96-33e5bc268b5f","type":"PanTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"548580f4-5968-4f3a-b9b8-701b1afcbb66","type":"Line"},{"attributes":{},"id":"c19d6dc1-fdfe-43dc-807a-8acc7bb5b82b","type":"HelpTool"},{"attributes":{"source":{"id":"d7ee17b9-ec57-4cb2-9aa9-839f9cc0eefa","type":"ColumnDataSource"}},"id":"7d521810-44d2-4d39-a02c-b498d2c771f6","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"644791b8-2e07-4fb6-9c8f-1ec50d094a9e","type":"Line"},{"attributes":{},"id":"461d41b0-eeef-4f9b-a7a9-8434cf673df4","type":"BasicTicker"},{"attributes":{"below":[{"id":"ee25edf3-c9c5-429f-b15d-caca9d6e308a","type":"LinearAxis"}],"left":[{"id":"a1c03a57-4a23-488c-b2b4-540ac2800e07","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ee25edf3-c9c5-429f-b15d-caca9d6e308a","type":"LinearAxis"},{"id":"5034f27e-7f07-489d-b04e-0d679dba1aa7","type":"Grid"},{"id":"a1c03a57-4a23-488c-b2b4-540ac2800e07","type":"LinearAxis"},{"id":"8a1cd827-daf3-4ae2-96ed-133936b9d125","type":"Grid"},{"id":"0ae3cfd2-308f-4ab2-9348-1f4fadfa7579","type":"BoxAnnotation"},{"id":"7263f379-002d-419c-902c-6bc79f4e7bc0","type":"GlyphRenderer"},{"id":"46ecebc3-b09b-4fb3-89a5-1123dcc15c6a","type":"GlyphRenderer"}],"title":{"id":"9471e033-4602-467d-b8ed-bceba9994d30","type":"Title"},"toolbar":{"id":"2e602ffc-6c94-4f55-b629-6203d371f8ae","type":"Toolbar"},"x_range":{"id":"d9a8e637-3404-497f-ad87-b63f8441c8e4","type":"DataRange1d"},"x_scale":{"id":"b9c7efde-130a-4cac-b054-b19adfeb79a0","type":"LinearScale"},"y_range":{"id":"d848c924-b6a7-40ee-9b02-38446036568e","type":"DataRange1d"},"y_scale":{"id":"46ed5ada-d09c-4239-aa1e-477ac05e05c7","type":"LinearScale"}},"id":"78d46728-88e0-4b03-b72e-3ca1bda1e30b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5f61e5d8-aeae-42c3-961b-20f8104581e6","type":"SaveTool"},{"attributes":{"formatter":{"id":"6f6dcbfd-f4a6-4771-bf37-6c988293516e","type":"BasicTickFormatter"},"plot":{"id":"78d46728-88e0-4b03-b72e-3ca1bda1e30b","subtype":"Figure","type":"Plot"},"ticker":{"id":"461d41b0-eeef-4f9b-a7a9-8434cf673df4","type":"BasicTicker"}},"id":"ee25edf3-c9c5-429f-b15d-caca9d6e308a","type":"LinearAxis"},{"attributes":{"data_source":{"id":"d7ee17b9-ec57-4cb2-9aa9-839f9cc0eefa","type":"ColumnDataSource"},"glyph":{"id":"548580f4-5968-4f3a-b9b8-701b1afcbb66","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"644791b8-2e07-4fb6-9c8f-1ec50d094a9e","type":"Line"},"selection_glyph":null,"view":{"id":"7d521810-44d2-4d39-a02c-b498d2c771f6","type":"CDSView"}},"id":"7263f379-002d-419c-902c-6bc79f4e7bc0","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"d9a8e637-3404-497f-ad87-b63f8441c8e4","type":"DataRange1d"},{"attributes":{},"id":"792e926b-2a15-4405-9a15-d84019db84e0","type":"ResetTool"},{"attributes":{"callback":null},"id":"d848c924-b6a7-40ee-9b02-38446036568e","type":"DataRange1d"},{"attributes":{},"id":"afad25fa-1d8c-4071-9c12-5608a28ab72a","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"948bb3fa-9182-4d12-bc96-33e5bc268b5f","type":"PanTool"},{"id":"afad25fa-1d8c-4071-9c12-5608a28ab72a","type":"WheelZoomTool"},{"id":"cdf143b3-af55-4e05-87c5-36c9c56b88cc","type":"BoxZoomTool"},{"id":"5f61e5d8-aeae-42c3-961b-20f8104581e6","type":"SaveTool"},{"id":"792e926b-2a15-4405-9a15-d84019db84e0","type":"ResetTool"},{"id":"c19d6dc1-fdfe-43dc-807a-8acc7bb5b82b","type":"HelpTool"}]},"id":"2e602ffc-6c94-4f55-b629-6203d371f8ae","type":"Toolbar"},{"attributes":{},"id":"6f6dcbfd-f4a6-4771-bf37-6c988293516e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8f9a3e06-d0a1-4a2c-9d72-322e1ef21fef","type":"BasicTickFormatter"},"plot":{"id":"78d46728-88e0-4b03-b72e-3ca1bda1e30b","subtype":"Figure","type":"Plot"},"ticker":{"id":"94f7171e-8ac5-4ec6-ba18-d607297e5e73","type":"BasicTicker"}},"id":"a1c03a57-4a23-488c-b2b4-540ac2800e07","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"333525bd-5f9d-40f6-b80b-5fb3a04bfdde","type":"Circle"},{"attributes":{},"id":"b9c7efde-130a-4cac-b054-b19adfeb79a0","type":"LinearScale"}],"root_ids":["78d46728-88e0-4b03-b72e-3ca1bda1e30b"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"17845c7b-0879-4008-a5bb-1fd0c1187587","elementid":"9bedbcea-0f55-4598-b310-2e0de83ba5ef","modelid":"78d46728-88e0-4b03-b72e-3ca1bda1e30b"}];
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