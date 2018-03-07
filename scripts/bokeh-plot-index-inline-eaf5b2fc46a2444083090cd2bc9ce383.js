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
      };var element = document.getElementById("26f6085b-df12-483b-900c-bb08ecabc743");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '26f6085b-df12-483b-900c-bb08ecabc743' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8a605f29-baec-4deb-ac1b-635a09845e96":{"roots":{"references":[{"attributes":{"below":[{"id":"d7ac6be8-3b72-425e-bd22-cd51edfe4977","type":"LinearAxis"}],"left":[{"id":"336c3038-5864-405b-afd1-377a823a8595","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d7ac6be8-3b72-425e-bd22-cd51edfe4977","type":"LinearAxis"},{"id":"36329c40-a4dd-448e-8f1b-36bee26c42be","type":"Grid"},{"id":"336c3038-5864-405b-afd1-377a823a8595","type":"LinearAxis"},{"id":"5144705d-9bf4-4deb-802c-1e67f93fe5e5","type":"Grid"},{"id":"888a902f-59d6-4f74-8dad-4ca86dc69407","type":"BoxAnnotation"},{"id":"87d597ea-d458-42b4-930f-949c9730ba8d","type":"GlyphRenderer"},{"id":"609fbd95-fafa-4acf-8f43-9fb457d52d9e","type":"GlyphRenderer"}],"title":{"id":"aac3567f-3f0a-40ac-8d3c-4b1fe8854c42","type":"Title"},"toolbar":{"id":"4d20b285-da3e-43a3-bdbd-60dff7e5c5db","type":"Toolbar"},"x_range":{"id":"96f5a0e2-aa6c-4cca-a877-52c4239bd891","type":"DataRange1d"},"x_scale":{"id":"9bc4f54d-19d0-4b5e-9ac6-10e7fae598ca","type":"LinearScale"},"y_range":{"id":"ce331173-3fd9-4216-b3b4-5f78824b5e71","type":"DataRange1d"},"y_scale":{"id":"1ec170ba-7510-417e-827e-c43f65093acf","type":"LinearScale"}},"id":"4d02016f-5959-4aa2-8ad6-4b75a32156d2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21ddd7e2-2db7-4799-9fbd-41bd249aed85","type":"HelpTool"},{"attributes":{"formatter":{"id":"1a3d7015-afda-43d8-bfe9-8bcc62a7fead","type":"BasicTickFormatter"},"plot":{"id":"4d02016f-5959-4aa2-8ad6-4b75a32156d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"857197a9-fe13-4535-8929-6670dcb3664e","type":"BasicTicker"}},"id":"336c3038-5864-405b-afd1-377a823a8595","type":"LinearAxis"},{"attributes":{},"id":"1ec170ba-7510-417e-827e-c43f65093acf","type":"LinearScale"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9766358-f744-4b9e-9a1c-3ceae36b0bea","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f9fb2d00-ad3b-4a7a-abc2-4044a59d80ec","type":"PanTool"},{"id":"2a9ccacd-2d61-4bbc-a36e-c9cb081b9ca7","type":"WheelZoomTool"},{"id":"6bef73bc-61f3-4ad7-b7d3-05ab6dd2d32e","type":"BoxZoomTool"},{"id":"8abcdc25-dfb7-4439-abec-eeda98ef83c6","type":"SaveTool"},{"id":"53ce296a-a031-44c7-8156-9e4700f13c9d","type":"ResetTool"},{"id":"21ddd7e2-2db7-4799-9fbd-41bd249aed85","type":"HelpTool"}]},"id":"4d20b285-da3e-43a3-bdbd-60dff7e5c5db","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"4d02016f-5959-4aa2-8ad6-4b75a32156d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"857197a9-fe13-4535-8929-6670dcb3664e","type":"BasicTicker"}},"id":"5144705d-9bf4-4deb-802c-1e67f93fe5e5","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"888a902f-59d6-4f74-8dad-4ca86dc69407","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"96f5a0e2-aa6c-4cca-a877-52c4239bd891","type":"DataRange1d"},{"attributes":{"formatter":{"id":"c898b310-8e4a-43ec-93ea-aa9b8a28b77b","type":"BasicTickFormatter"},"plot":{"id":"4d02016f-5959-4aa2-8ad6-4b75a32156d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"0683952b-c72a-44b1-89ea-3ee709b2d506","type":"BasicTicker"}},"id":"d7ac6be8-3b72-425e-bd22-cd51edfe4977","type":"LinearAxis"},{"attributes":{"plot":null,"text":"example"},"id":"aac3567f-3f0a-40ac-8d3c-4b1fe8854c42","type":"Title"},{"attributes":{"source":{"id":"3e194d85-3dca-4300-bc71-f73434a3ae3d","type":"ColumnDataSource"}},"id":"654d17df-8a26-4fc2-9816-5040e6fb93a4","type":"CDSView"},{"attributes":{"source":{"id":"70c8063c-15af-4882-adac-279198b146e3","type":"ColumnDataSource"}},"id":"d452fff6-ecf9-45e4-a09c-ac9a2ec6b00a","type":"CDSView"},{"attributes":{},"id":"f9fb2d00-ad3b-4a7a-abc2-4044a59d80ec","type":"PanTool"},{"attributes":{"data_source":{"id":"3e194d85-3dca-4300-bc71-f73434a3ae3d","type":"ColumnDataSource"},"glyph":{"id":"b9766358-f744-4b9e-9a1c-3ceae36b0bea","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8a18239e-c0fa-49b4-9771-14ca97347a01","type":"Circle"},"selection_glyph":null,"view":{"id":"654d17df-8a26-4fc2-9816-5040e6fb93a4","type":"CDSView"}},"id":"609fbd95-fafa-4acf-8f43-9fb457d52d9e","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"888a902f-59d6-4f74-8dad-4ca86dc69407","type":"BoxAnnotation"}},"id":"6bef73bc-61f3-4ad7-b7d3-05ab6dd2d32e","type":"BoxZoomTool"},{"attributes":{},"id":"857197a9-fe13-4535-8929-6670dcb3664e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"3e194d85-3dca-4300-bc71-f73434a3ae3d","type":"ColumnDataSource"},{"attributes":{},"id":"9bc4f54d-19d0-4b5e-9ac6-10e7fae598ca","type":"LinearScale"},{"attributes":{"callback":null},"id":"ce331173-3fd9-4216-b3b4-5f78824b5e71","type":"DataRange1d"},{"attributes":{},"id":"1a3d7015-afda-43d8-bfe9-8bcc62a7fead","type":"BasicTickFormatter"},{"attributes":{},"id":"c898b310-8e4a-43ec-93ea-aa9b8a28b77b","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a18239e-c0fa-49b4-9771-14ca97347a01","type":"Circle"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4fb629bb-8c59-417b-8a41-98f0afb5f0fe","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c50d6254-4bbc-4e54-9ef3-5114f0f454f2","type":"Line"},{"attributes":{},"id":"8abcdc25-dfb7-4439-abec-eeda98ef83c6","type":"SaveTool"},{"attributes":{"plot":{"id":"4d02016f-5959-4aa2-8ad6-4b75a32156d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"0683952b-c72a-44b1-89ea-3ee709b2d506","type":"BasicTicker"}},"id":"36329c40-a4dd-448e-8f1b-36bee26c42be","type":"Grid"},{"attributes":{},"id":"53ce296a-a031-44c7-8156-9e4700f13c9d","type":"ResetTool"},{"attributes":{},"id":"0683952b-c72a-44b1-89ea-3ee709b2d506","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"70c8063c-15af-4882-adac-279198b146e3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"70c8063c-15af-4882-adac-279198b146e3","type":"ColumnDataSource"},"glyph":{"id":"4fb629bb-8c59-417b-8a41-98f0afb5f0fe","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c50d6254-4bbc-4e54-9ef3-5114f0f454f2","type":"Line"},"selection_glyph":null,"view":{"id":"d452fff6-ecf9-45e4-a09c-ac9a2ec6b00a","type":"CDSView"}},"id":"87d597ea-d458-42b4-930f-949c9730ba8d","type":"GlyphRenderer"},{"attributes":{},"id":"2a9ccacd-2d61-4bbc-a36e-c9cb081b9ca7","type":"WheelZoomTool"}],"root_ids":["4d02016f-5959-4aa2-8ad6-4b75a32156d2"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"8a605f29-baec-4deb-ac1b-635a09845e96","elementid":"26f6085b-df12-483b-900c-bb08ecabc743","modelid":"4d02016f-5959-4aa2-8ad6-4b75a32156d2"}];
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