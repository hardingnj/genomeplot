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
      };var element = document.getElementById("075b9cb2-69d3-41d8-980d-525260ec0979");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '075b9cb2-69d3-41d8-980d-525260ec0979' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8df7f8ee-e0e3-439d-a516-30764ac0c910":{"roots":{"references":[{"attributes":{"below":[{"id":"2b5bc385-39f0-482b-bdab-9a39db503735","type":"LinearAxis"}],"left":[{"id":"0efb3e5d-241e-446b-90d5-c3e5311f202e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2b5bc385-39f0-482b-bdab-9a39db503735","type":"LinearAxis"},{"id":"f4508ff8-73a2-456c-bbbb-31b1c1e6a638","type":"Grid"},{"id":"0efb3e5d-241e-446b-90d5-c3e5311f202e","type":"LinearAxis"},{"id":"0cff4453-6c4d-486a-9612-9f23cd4e6e5b","type":"Grid"},{"id":"86e429d1-2a06-4c89-9ed9-8ec63e9f7e1c","type":"BoxAnnotation"},{"id":"4d2e4321-071a-4705-827d-27a895d680fb","type":"GlyphRenderer"},{"id":"2ef58967-ac2c-43eb-ad0f-681792fcd5fb","type":"GlyphRenderer"}],"title":{"id":"a6867d65-3569-423e-acec-ac8b8f047db6","type":"Title"},"toolbar":{"id":"cebbf54e-de6d-4819-800f-b2f7aaea43cb","type":"Toolbar"},"x_range":{"id":"e557fec8-f527-44fd-976b-65566f6a9d8e","type":"DataRange1d"},"x_scale":{"id":"04a0bd1c-b348-4558-adef-bae7d82fd29a","type":"LinearScale"},"y_range":{"id":"2483d988-736d-412c-ab8b-2c9504735060","type":"DataRange1d"},"y_scale":{"id":"4ee2433a-d289-4604-9d56-5d2122655cc1","type":"LinearScale"}},"id":"218944ef-dceb-4382-bb22-864e72a6fc32","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"572eccbf-6a39-41c0-b75a-aec4099762a0","type":"PanTool"},{"id":"bbce667e-8d70-4cbd-90c0-5a20cba194b1","type":"WheelZoomTool"},{"id":"758694ce-329a-493c-b2d8-fae048342881","type":"BoxZoomTool"},{"id":"55f6c8a0-9efb-4aaa-939e-c091b92d1dad","type":"SaveTool"},{"id":"5ea4227e-9a62-45ea-a9b5-ffa1007aae25","type":"ResetTool"},{"id":"da10435d-e25e-48ca-ac84-aa4f2ee43308","type":"HelpTool"}]},"id":"cebbf54e-de6d-4819-800f-b2f7aaea43cb","type":"Toolbar"},{"attributes":{},"id":"da10435d-e25e-48ca-ac84-aa4f2ee43308","type":"HelpTool"},{"attributes":{},"id":"3542257f-4892-4ed2-aed1-031320bc8705","type":"BasicTicker"},{"attributes":{"plot":null,"text":"example"},"id":"a6867d65-3569-423e-acec-ac8b8f047db6","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"218944ef-dceb-4382-bb22-864e72a6fc32","subtype":"Figure","type":"Plot"},"ticker":{"id":"3542257f-4892-4ed2-aed1-031320bc8705","type":"BasicTicker"}},"id":"0cff4453-6c4d-486a-9612-9f23cd4e6e5b","type":"Grid"},{"attributes":{},"id":"55f6c8a0-9efb-4aaa-939e-c091b92d1dad","type":"SaveTool"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee7f5fb1-cf83-47e5-9a3d-b69a8b1bfd41","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"310b0fe0-77ff-4b2f-9dd7-5b8ac4638ff6","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"84bfdf8c-3ab1-4af6-8d0d-b42edee0bc33","type":"ColumnDataSource"},{"attributes":{},"id":"5ea4227e-9a62-45ea-a9b5-ffa1007aae25","type":"ResetTool"},{"attributes":{},"id":"572eccbf-6a39-41c0-b75a-aec4099762a0","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"38f0866e-719a-4c00-827b-bede0131aa0a","type":"ColumnDataSource"},{"attributes":{},"id":"4ee2433a-d289-4604-9d56-5d2122655cc1","type":"LinearScale"},{"attributes":{"callback":null},"id":"2483d988-736d-412c-ab8b-2c9504735060","type":"DataRange1d"},{"attributes":{"data_source":{"id":"84bfdf8c-3ab1-4af6-8d0d-b42edee0bc33","type":"ColumnDataSource"},"glyph":{"id":"ee7f5fb1-cf83-47e5-9a3d-b69a8b1bfd41","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22ad32eb-0c69-4581-95ac-13b0b5b85eb9","type":"Circle"},"selection_glyph":null,"view":{"id":"93db1446-3424-4cf0-b0c0-2185c5b16d9e","type":"CDSView"}},"id":"2ef58967-ac2c-43eb-ad0f-681792fcd5fb","type":"GlyphRenderer"},{"attributes":{"source":{"id":"38f0866e-719a-4c00-827b-bede0131aa0a","type":"ColumnDataSource"}},"id":"aab94569-b2ab-478a-a9bd-41330084f5dc","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22ad32eb-0c69-4581-95ac-13b0b5b85eb9","type":"Circle"},{"attributes":{"data_source":{"id":"38f0866e-719a-4c00-827b-bede0131aa0a","type":"ColumnDataSource"},"glyph":{"id":"d24bc175-05c9-43d0-b131-cc0feec61592","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"310b0fe0-77ff-4b2f-9dd7-5b8ac4638ff6","type":"Line"},"selection_glyph":null,"view":{"id":"aab94569-b2ab-478a-a9bd-41330084f5dc","type":"CDSView"}},"id":"4d2e4321-071a-4705-827d-27a895d680fb","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"d24bc175-05c9-43d0-b131-cc0feec61592","type":"Line"},{"attributes":{"callback":null},"id":"e557fec8-f527-44fd-976b-65566f6a9d8e","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"86e429d1-2a06-4c89-9ed9-8ec63e9f7e1c","type":"BoxAnnotation"},{"attributes":{},"id":"bbce667e-8d70-4cbd-90c0-5a20cba194b1","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"9f516c2f-1bb7-471d-8ce2-0a3d6f107c3a","type":"BasicTickFormatter"},"plot":{"id":"218944ef-dceb-4382-bb22-864e72a6fc32","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe24d981-b87c-4b4f-81e2-d520131e2ea9","type":"BasicTicker"}},"id":"2b5bc385-39f0-482b-bdab-9a39db503735","type":"LinearAxis"},{"attributes":{},"id":"e35fe991-f32b-4f8c-98ca-505ce09753d8","type":"BasicTickFormatter"},{"attributes":{},"id":"fe24d981-b87c-4b4f-81e2-d520131e2ea9","type":"BasicTicker"},{"attributes":{"formatter":{"id":"e35fe991-f32b-4f8c-98ca-505ce09753d8","type":"BasicTickFormatter"},"plot":{"id":"218944ef-dceb-4382-bb22-864e72a6fc32","subtype":"Figure","type":"Plot"},"ticker":{"id":"3542257f-4892-4ed2-aed1-031320bc8705","type":"BasicTicker"}},"id":"0efb3e5d-241e-446b-90d5-c3e5311f202e","type":"LinearAxis"},{"attributes":{"overlay":{"id":"86e429d1-2a06-4c89-9ed9-8ec63e9f7e1c","type":"BoxAnnotation"}},"id":"758694ce-329a-493c-b2d8-fae048342881","type":"BoxZoomTool"},{"attributes":{"source":{"id":"84bfdf8c-3ab1-4af6-8d0d-b42edee0bc33","type":"ColumnDataSource"}},"id":"93db1446-3424-4cf0-b0c0-2185c5b16d9e","type":"CDSView"},{"attributes":{},"id":"9f516c2f-1bb7-471d-8ce2-0a3d6f107c3a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"218944ef-dceb-4382-bb22-864e72a6fc32","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe24d981-b87c-4b4f-81e2-d520131e2ea9","type":"BasicTicker"}},"id":"f4508ff8-73a2-456c-bbbb-31b1c1e6a638","type":"Grid"},{"attributes":{},"id":"04a0bd1c-b348-4558-adef-bae7d82fd29a","type":"LinearScale"}],"root_ids":["218944ef-dceb-4382-bb22-864e72a6fc32"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"8df7f8ee-e0e3-439d-a516-30764ac0c910","elementid":"075b9cb2-69d3-41d8-980d-525260ec0979","modelid":"218944ef-dceb-4382-bb22-864e72a6fc32"}];
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