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
      };var element = document.getElementById("cde43207-0305-4175-8736-2102145e79c3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cde43207-0305-4175-8736-2102145e79c3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0b09a74b-e058-4275-b5cb-a7bf645d2b9b":{"roots":{"references":[{"attributes":{"below":[{"id":"89c36f3d-56f4-4b25-8bd0-0ca4086cd7af","type":"LinearAxis"}],"left":[{"id":"64d1d3ca-9286-44ea-9173-608a8812bc3e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"89c36f3d-56f4-4b25-8bd0-0ca4086cd7af","type":"LinearAxis"},{"id":"0d901e61-8c5c-499c-9588-b60125a3fcd2","type":"Grid"},{"id":"64d1d3ca-9286-44ea-9173-608a8812bc3e","type":"LinearAxis"},{"id":"5e0eccd0-4cec-4288-af3f-7fc39545bf4a","type":"Grid"},{"id":"8ab6691b-6da2-4c4d-a7e5-5a993766d0d9","type":"BoxAnnotation"},{"id":"cf0ea929-c980-4ce3-966a-99cfff0549e6","type":"GlyphRenderer"},{"id":"33eff17b-0e72-4cfd-950b-c6cb2b912519","type":"GlyphRenderer"}],"title":{"id":"0f931a8d-1ad0-4d36-8995-dfda47097007","type":"Title"},"toolbar":{"id":"787757d2-893f-4757-a9c6-18dd269780e4","type":"Toolbar"},"x_range":{"id":"3ef1c309-8f98-4cf3-beaf-fd087a677bf6","type":"DataRange1d"},"x_scale":{"id":"a82815ea-5aea-4768-bb4b-cbfe62b39c1e","type":"LinearScale"},"y_range":{"id":"11d58633-16a7-4fd4-b13b-ddbcde7260ee","type":"DataRange1d"},"y_scale":{"id":"9e3428bd-99c9-478c-89ab-4fb57f961a26","type":"LinearScale"}},"id":"fcea03bf-cb30-4047-a1e7-16d944d2f81d","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"11d58633-16a7-4fd4-b13b-ddbcde7260ee","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8ab6691b-6da2-4c4d-a7e5-5a993766d0d9","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"example"},"id":"0f931a8d-1ad0-4d36-8995-dfda47097007","type":"Title"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"87972fda-c79d-4970-81e5-ecdd85647764","type":"Line"},{"attributes":{"plot":{"id":"fcea03bf-cb30-4047-a1e7-16d944d2f81d","subtype":"Figure","type":"Plot"},"ticker":{"id":"db3340a3-df21-41f0-ba7f-cd27f8c75a5c","type":"BasicTicker"}},"id":"0d901e61-8c5c-499c-9588-b60125a3fcd2","type":"Grid"},{"attributes":{},"id":"c4dd7bdd-4f15-45eb-acee-d8d8e13600da","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"b63e9a70-7208-4605-b273-7cf5832fda98","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0af8bba7-e6ff-4013-a752-9556697e6700","type":"PanTool"},{"id":"c4dd7bdd-4f15-45eb-acee-d8d8e13600da","type":"WheelZoomTool"},{"id":"95f3480e-f47b-44c4-8547-d02ba117550f","type":"BoxZoomTool"},{"id":"31d9f371-312d-480d-ae0c-2a345e77f760","type":"SaveTool"},{"id":"be81b6a4-fc1d-428e-97e4-f3d0054530f2","type":"ResetTool"},{"id":"3db4d1c4-35e7-40e6-b08e-0dc91f932a01","type":"HelpTool"}]},"id":"787757d2-893f-4757-a9c6-18dd269780e4","type":"Toolbar"},{"attributes":{},"id":"69f00082-e769-4331-b206-ea0363a58511","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b63e9a70-7208-4605-b273-7cf5832fda98","type":"ColumnDataSource"},"glyph":{"id":"87972fda-c79d-4970-81e5-ecdd85647764","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ccf760d3-1775-4a4d-a5a6-a7d51230bf2c","type":"Line"},"selection_glyph":null,"view":{"id":"14b96f8e-fc96-4820-9b59-ee7b98a056e3","type":"CDSView"}},"id":"cf0ea929-c980-4ce3-966a-99cfff0549e6","type":"GlyphRenderer"},{"attributes":{},"id":"03a679e4-9879-4cd6-bbaf-6834405e33ff","type":"BasicTickFormatter"},{"attributes":{},"id":"3db4d1c4-35e7-40e6-b08e-0dc91f932a01","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"fcea03bf-cb30-4047-a1e7-16d944d2f81d","subtype":"Figure","type":"Plot"},"ticker":{"id":"69f00082-e769-4331-b206-ea0363a58511","type":"BasicTicker"}},"id":"5e0eccd0-4cec-4288-af3f-7fc39545bf4a","type":"Grid"},{"attributes":{"formatter":{"id":"8746e84a-ff6d-4ec8-bf8d-51bb0f7ee2d3","type":"BasicTickFormatter"},"plot":{"id":"fcea03bf-cb30-4047-a1e7-16d944d2f81d","subtype":"Figure","type":"Plot"},"ticker":{"id":"db3340a3-df21-41f0-ba7f-cd27f8c75a5c","type":"BasicTicker"}},"id":"89c36f3d-56f4-4b25-8bd0-0ca4086cd7af","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"e2a2d9f8-8ca8-4e97-8c3d-7b4b82859fb6","type":"ColumnDataSource"},{"attributes":{},"id":"0af8bba7-e6ff-4013-a752-9556697e6700","type":"PanTool"},{"attributes":{"source":{"id":"b63e9a70-7208-4605-b273-7cf5832fda98","type":"ColumnDataSource"}},"id":"14b96f8e-fc96-4820-9b59-ee7b98a056e3","type":"CDSView"},{"attributes":{},"id":"9e3428bd-99c9-478c-89ab-4fb57f961a26","type":"LinearScale"},{"attributes":{},"id":"31d9f371-312d-480d-ae0c-2a345e77f760","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"ccf760d3-1775-4a4d-a5a6-a7d51230bf2c","type":"Line"},{"attributes":{"overlay":{"id":"8ab6691b-6da2-4c4d-a7e5-5a993766d0d9","type":"BoxAnnotation"}},"id":"95f3480e-f47b-44c4-8547-d02ba117550f","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"e2a2d9f8-8ca8-4e97-8c3d-7b4b82859fb6","type":"ColumnDataSource"},"glyph":{"id":"b6bd757b-02a4-4b82-bd2b-a8f7920c3435","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5532641d-88ca-4d34-b49d-5b772a742c43","type":"Circle"},"selection_glyph":null,"view":{"id":"38697953-f23f-4d42-85c4-cc2a6115df15","type":"CDSView"}},"id":"33eff17b-0e72-4cfd-950b-c6cb2b912519","type":"GlyphRenderer"},{"attributes":{},"id":"8746e84a-ff6d-4ec8-bf8d-51bb0f7ee2d3","type":"BasicTickFormatter"},{"attributes":{},"id":"a82815ea-5aea-4768-bb4b-cbfe62b39c1e","type":"LinearScale"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6bd757b-02a4-4b82-bd2b-a8f7920c3435","type":"Circle"},{"attributes":{"callback":null},"id":"3ef1c309-8f98-4cf3-beaf-fd087a677bf6","type":"DataRange1d"},{"attributes":{},"id":"db3340a3-df21-41f0-ba7f-cd27f8c75a5c","type":"BasicTicker"},{"attributes":{"source":{"id":"e2a2d9f8-8ca8-4e97-8c3d-7b4b82859fb6","type":"ColumnDataSource"}},"id":"38697953-f23f-4d42-85c4-cc2a6115df15","type":"CDSView"},{"attributes":{"formatter":{"id":"03a679e4-9879-4cd6-bbaf-6834405e33ff","type":"BasicTickFormatter"},"plot":{"id":"fcea03bf-cb30-4047-a1e7-16d944d2f81d","subtype":"Figure","type":"Plot"},"ticker":{"id":"69f00082-e769-4331-b206-ea0363a58511","type":"BasicTicker"}},"id":"64d1d3ca-9286-44ea-9173-608a8812bc3e","type":"LinearAxis"},{"attributes":{},"id":"be81b6a4-fc1d-428e-97e4-f3d0054530f2","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5532641d-88ca-4d34-b49d-5b772a742c43","type":"Circle"}],"root_ids":["fcea03bf-cb30-4047-a1e7-16d944d2f81d"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"0b09a74b-e058-4275-b5cb-a7bf645d2b9b","elementid":"cde43207-0305-4175-8736-2102145e79c3","modelid":"fcea03bf-cb30-4047-a1e7-16d944d2f81d"}];
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