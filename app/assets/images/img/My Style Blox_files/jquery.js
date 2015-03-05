<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Action Controller: Exception caught</title>
  <style>
    body {
      background-color: #FAFAFA;
      color: #333;
      margin: 0px;
    }

    body, p, ol, ul, td {
      font-family: helvetica, verdana, arial, sans-serif;
      font-size:   13px;
      line-height: 18px;
    }

    pre {
      font-size: 11px;
      white-space: pre-wrap;
    }

    pre.box {
      border: 1px solid #EEE;
      padding: 10px;
      margin: 0px;
      width: 958px;
    }

    header {
      color: #F0F0F0;
      background: #C52F24;
      padding: 0.5em 1.5em;
    }

    h1 {
      margin: 0.2em 0;
      line-height: 1.1em;
      font-size: 2em;
    }

    h2 {
      color: #C52F24;
      line-height: 25px;
    }

    .details {
      border: 1px solid #D0D0D0;
      border-radius: 4px;
      margin: 1em 0px;
      display: block;
      width: 978px;
    }

    .summary {
      padding: 8px 15px;
      border-bottom: 1px solid #D0D0D0;
      display: block;
    }

    .details pre {
      margin: 5px;
      border: none;
    }

    #container {
      box-sizing: border-box;
      width: 100%;
      padding: 0 1.5em;
    }

    .source * {
      margin: 0px;
      padding: 0px;
    }

    .source {
      border: 1px solid #D9D9D9;
      background: #ECECEC;
      width: 978px;
    }

    .source pre {
      padding: 10px 0px;
      border: none;
    }

    .source .data {
      font-size: 80%;
      overflow: auto;
      background-color: #FFF;
    }

    .info {
      padding: 0.5em;
    }

    .source .data .line_numbers {
      background-color: #ECECEC;
      color: #AAA;
      padding: 1em .5em;
      border-right: 1px solid #DDD;
      text-align: right;
    }

    .line {
      padding-left: 10px;
    }

    .line:hover {
      background-color: #F6F6F6;
    }

    .line.active {
      background-color: #FFCCCC;
    }

    .hidden {
      display: none;
    }

    a { color: #980905; }
    a:visited { color: #666; }
    a.trace-frames { color: #666; }
    a:hover { color: #C52F24; }
    a.trace-frames.selected { color: #C52F24 }

      #route_table {
    margin: 0;
    border-collapse: collapse;
  }

  #route_table thead tr {
    border-bottom: 2px solid #ddd;
  }

  #route_table thead tr.bottom {
    border-bottom: none;
  }

  #route_table thead tr.bottom th {
    padding: 10px 0;
    line-height: 15px;
  }

  #route_table tbody tr {
    border-bottom: 1px solid #ddd;
  }

  #route_table tbody tr:nth-child(odd) {
    background: #f2f2f2;
  }

  #route_table tbody.exact_matches,
  #route_table tbody.fuzzy_matches {
    background-color: LightGoldenRodYellow;
    border-bottom: solid 2px SlateGrey;
  }

  #route_table tbody.exact_matches tr,
  #route_table tbody.fuzzy_matches tr {
    background: none;
    border-bottom: none;
  }

  #route_table td {
    padding: 4px 30px;
  }

  #path_search {
    width: 80%;
    font-size: inherit;
  }

  </style>

  <script>
    var toggle = function(id) {
      var s = document.getElementById(id).style;
      s.display = s.display == 'none' ? 'block' : 'none';
      return false;
    }
    var show = function(id) {
      document.getElementById(id).style.display = 'block';
    }
    var hide = function(id) {
      document.getElementById(id).style.display = 'none';
    }
    var toggleTrace = function() {
      return toggle('blame_trace');
    }
    var toggleSessionDump = function() {
      return toggle('session_dump');
    }
    var toggleEnvDump = function() {
      return toggle('env_dump');
    }
  </script>
</head>
<body>

<header>
  <h1>Routing Error</h1>
</header>
<div id="container">
  <h2>No route matches [GET] &quot;/males/js/jquery.js&quot;</h2>

  
<p><code>Rails.root: /Users/kassandram/mystyleblox</code></p>

<div id="traces">
    <a href="#" onclick="hide(&#39;Framework-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Application-Trace&#39;);; return false;">Application Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Framework-Trace&#39;);; return false;">Framework Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Framework-Trace&#39;);show(&#39;Full-Trace&#39;);; return false;">Full Trace</a> 

    <div id="Application-Trace" style="display: block;">
      <pre><code></code></pre>
    </div>
    <div id="Framework-Trace" style="display: none;">
      <pre><code><a class="trace-frames" data-frame-id="0" href="#">web-console (2.0.0) lib/action_dispatch/debug_exceptions.rb:22:in `middleware_call&#39;</a><br><a class="trace-frames" data-frame-id="1" href="#">web-console (2.0.0) lib/action_dispatch/debug_exceptions.rb:13:in `call&#39;</a><br><a class="trace-frames" data-frame-id="2" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;</a><br><a class="trace-frames" data-frame-id="3" href="#">railties (4.2.0) lib/rails/rack/logger.rb:38:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="4" href="#">railties (4.2.0) lib/rails/rack/logger.rb:20:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="5" href="#">activesupport (4.2.0) lib/active_support/tagged_logging.rb:68:in `block in tagged&#39;</a><br><a class="trace-frames" data-frame-id="6" href="#">activesupport (4.2.0) lib/active_support/tagged_logging.rb:26:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="7" href="#">activesupport (4.2.0) lib/active_support/tagged_logging.rb:68:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="8" href="#">railties (4.2.0) lib/rails/rack/logger.rb:20:in `call&#39;</a><br><a class="trace-frames" data-frame-id="9" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="10" href="#">rack (1.6.0) lib/rack/methodoverride.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="11" href="#">rack (1.6.0) lib/rack/runtime.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="12" href="#">activesupport (4.2.0) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call&#39;</a><br><a class="trace-frames" data-frame-id="13" href="#">rack (1.6.0) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="14" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/static.rb:113:in `call&#39;</a><br><a class="trace-frames" data-frame-id="15" href="#">rack (1.6.0) lib/rack/sendfile.rb:113:in `call&#39;</a><br><a class="trace-frames" data-frame-id="16" href="#">railties (4.2.0) lib/rails/engine.rb:518:in `call&#39;</a><br><a class="trace-frames" data-frame-id="17" href="#">railties (4.2.0) lib/rails/application.rb:164:in `call&#39;</a><br><a class="trace-frames" data-frame-id="18" href="#">rack (1.6.0) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="19" href="#">rack (1.6.0) lib/rack/content_length.rb:15:in `call&#39;</a><br><a class="trace-frames" data-frame-id="20" href="#">rack (1.6.0) lib/rack/handler/webrick.rb:89:in `service&#39;</a><br><a class="trace-frames" data-frame-id="21" href="#">/usr/local/Cellar/ruby/2.2.0/lib/ruby/2.2.0/webrick/httpserver.rb:138:in `service&#39;</a><br><a class="trace-frames" data-frame-id="22" href="#">/usr/local/Cellar/ruby/2.2.0/lib/ruby/2.2.0/webrick/httpserver.rb:94:in `run&#39;</a><br><a class="trace-frames" data-frame-id="23" href="#">/usr/local/Cellar/ruby/2.2.0/lib/ruby/2.2.0/webrick/server.rb:294:in `block in start_thread&#39;</a><br></code></pre>
    </div>
    <div id="Full-Trace" style="display: none;">
      <pre><code><a class="trace-frames" data-frame-id="0" href="#">web-console (2.0.0) lib/action_dispatch/debug_exceptions.rb:22:in `middleware_call&#39;</a><br><a class="trace-frames" data-frame-id="1" href="#">web-console (2.0.0) lib/action_dispatch/debug_exceptions.rb:13:in `call&#39;</a><br><a class="trace-frames" data-frame-id="2" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;</a><br><a class="trace-frames" data-frame-id="3" href="#">railties (4.2.0) lib/rails/rack/logger.rb:38:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="4" href="#">railties (4.2.0) lib/rails/rack/logger.rb:20:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="5" href="#">activesupport (4.2.0) lib/active_support/tagged_logging.rb:68:in `block in tagged&#39;</a><br><a class="trace-frames" data-frame-id="6" href="#">activesupport (4.2.0) lib/active_support/tagged_logging.rb:26:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="7" href="#">activesupport (4.2.0) lib/active_support/tagged_logging.rb:68:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="8" href="#">railties (4.2.0) lib/rails/rack/logger.rb:20:in `call&#39;</a><br><a class="trace-frames" data-frame-id="9" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="10" href="#">rack (1.6.0) lib/rack/methodoverride.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="11" href="#">rack (1.6.0) lib/rack/runtime.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="12" href="#">activesupport (4.2.0) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call&#39;</a><br><a class="trace-frames" data-frame-id="13" href="#">rack (1.6.0) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="14" href="#">actionpack (4.2.0) lib/action_dispatch/middleware/static.rb:113:in `call&#39;</a><br><a class="trace-frames" data-frame-id="15" href="#">rack (1.6.0) lib/rack/sendfile.rb:113:in `call&#39;</a><br><a class="trace-frames" data-frame-id="16" href="#">railties (4.2.0) lib/rails/engine.rb:518:in `call&#39;</a><br><a class="trace-frames" data-frame-id="17" href="#">railties (4.2.0) lib/rails/application.rb:164:in `call&#39;</a><br><a class="trace-frames" data-frame-id="18" href="#">rack (1.6.0) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="19" href="#">rack (1.6.0) lib/rack/content_length.rb:15:in `call&#39;</a><br><a class="trace-frames" data-frame-id="20" href="#">rack (1.6.0) lib/rack/handler/webrick.rb:89:in `service&#39;</a><br><a class="trace-frames" data-frame-id="21" href="#">/usr/local/Cellar/ruby/2.2.0/lib/ruby/2.2.0/webrick/httpserver.rb:138:in `service&#39;</a><br><a class="trace-frames" data-frame-id="22" href="#">/usr/local/Cellar/ruby/2.2.0/lib/ruby/2.2.0/webrick/httpserver.rb:94:in `run&#39;</a><br><a class="trace-frames" data-frame-id="23" href="#">/usr/local/Cellar/ruby/2.2.0/lib/ruby/2.2.0/webrick/server.rb:294:in `block in start_thread&#39;</a><br></code></pre>
    </div>

  <script type="text/javascript">
    var traceFrames = document.getElementsByClassName('trace-frames');
    var selectedFrame, currentSource = document.getElementById('frame-source-0');

    // Add click listeners for all stack frames
    for (var i = 0; i < traceFrames.length; i++) {
      traceFrames[i].addEventListener('click', function(e) {
        e.preventDefault();
        var target = e.target;
        var frameId = target.dataset.frameId;

        // Change the binding of the console.
        changeBinding(frameId, function() {
          if (selectedFrame) {
            selectedFrame.className = selectedFrame.className.replace("selected", "");
          }

          target.className += " selected";
          selectedFrame = target;
        });

        // Change the extracted source code
        changeSourceExtract(frameId);
      });
    }

    function changeBinding(frameId, callback) {
      var consoleEl = document.getElementById('console');
      if (! consoleEl) { return; }
      var url = consoleEl.dataset.remotePath + "/trace";
      var params = "frame_id=" + encodeURIComponent(frameId);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(params);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          callback();
        }
      }
    }

    function changeSourceExtract(frameId) {
      var el = document.getElementById('frame-source-' + frameId);
      if (currentSource && el) {
        currentSource.className += " hidden";
        el.className = el.className.replace(" hidden", "");
        currentSource = el;
      }
    }
  </script>
</div>


    <h2>
      Routes
    </h2>

    <p>
      Routes match in priority from top to bottom
    </p>

    
<table id='route_table' class='route_table'>
  <thead>
    <tr>
      <th>Helper</th>
      <th>HTTP Verb</th>
      <th>Path</th>
      <th>Controller#Action</th>
    </tr>
    <tr class='bottom'>
      <th>
        <a data-route-helper="_path" title="Returns a relative path (without the http or domain)" href="#">Path</a> /
        <a data-route-helper="_url" title="Returns an absolute url (with the http and domain)" href="#">Url</a>
      </th>
      <th>
      </th>
      <th>
        <input id="search" placeholder="Path Match" type="search" name="path[]" />
      </th>
      <th>
      </th>
    </tr>
  </thead>
  <tbody class='exact_matches' id='exact_matches'>
  </tbody>
  <tbody class='fuzzy_matches' id='fuzzy_matches'>
  </tbody>
  <tbody>
    <tr class='route_row' data-helper='path'>
  <td data-route-name='image_create'>
      image_create<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/image/create(.:format)' data-regexp='^\/image\/create(?:\.([^\/.?]+))?$'>
    /image/create(.:format)
  </td>
  <td data-route-reqs='image#create'>
    image#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='image_show'>
      image_show<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/image/show(.:format)' data-regexp='^\/image\/show(?:\.([^\/.?]+))?$'>
    /image/show(.:format)
  </td>
  <td data-route-reqs='image#show'>
    image#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='image_destroy'>
      image_destroy<span class='helper'>_path</span>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/image/destroy(.:format)' data-regexp='^\/image\/destroy(?:\.([^\/.?]+))?$'>
    /image/destroy(.:format)
  </td>
  <td data-route-reqs='image#destroy'>
    image#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='unavailables'>
      unavailables<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/unavailables(.:format)' data-regexp='^\/unavailables(?:\.([^\/.?]+))?$'>
    /unavailables(.:format)
  </td>
  <td data-route-reqs='unavailables#index'>
    unavailables#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/unavailables(.:format)' data-regexp='^\/unavailables(?:\.([^\/.?]+))?$'>
    /unavailables(.:format)
  </td>
  <td data-route-reqs='unavailables#create'>
    unavailables#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_unavailable'>
      new_unavailable<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/unavailables/new(.:format)' data-regexp='^\/unavailables\/new(?:\.([^\/.?]+))?$'>
    /unavailables/new(.:format)
  </td>
  <td data-route-reqs='unavailables#new'>
    unavailables#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_unavailable'>
      edit_unavailable<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/unavailables/:id/edit(.:format)' data-regexp='^\/unavailables\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /unavailables/:id/edit(.:format)
  </td>
  <td data-route-reqs='unavailables#edit'>
    unavailables#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='unavailable'>
      unavailable<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/unavailables/:id(.:format)' data-regexp='^\/unavailables\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /unavailables/:id(.:format)
  </td>
  <td data-route-reqs='unavailables#show'>
    unavailables#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/unavailables/:id(.:format)' data-regexp='^\/unavailables\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /unavailables/:id(.:format)
  </td>
  <td data-route-reqs='unavailables#update'>
    unavailables#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/unavailables/:id(.:format)' data-regexp='^\/unavailables\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /unavailables/:id(.:format)
  </td>
  <td data-route-reqs='unavailables#update'>
    unavailables#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/unavailables/:id(.:format)' data-regexp='^\/unavailables\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /unavailables/:id(.:format)
  </td>
  <td data-route-reqs='unavailables#destroy'>
    unavailables#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='sessions_new'>
      sessions_new<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/sessions/new(.:format)' data-regexp='^\/sessions\/new(?:\.([^\/.?]+))?$'>
    /sessions/new(.:format)
  </td>
  <td data-route-reqs='sessions#new'>
    sessions#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='root'>
      root<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/' data-regexp='^\/$'>
    /
  </td>
  <td data-route-reqs='static_pages#index'>
    static_pages#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='signup'>
      signup<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/signup(.:format)' data-regexp='^\/signup(?:\.([^\/.?]+))?$'>
    /signup(.:format)
  </td>
  <td data-route-reqs='users#new'>
    users#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='static_pages_about'>
      static_pages_about<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/static_pages/about(.:format)' data-regexp='^\/static_pages\/about(?:\.([^\/.?]+))?$'>
    /static_pages/about(.:format)
  </td>
  <td data-route-reqs='static_pages#about'>
    static_pages#about
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='static_pages_contact'>
      static_pages_contact<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/static_pages/contact(.:format)' data-regexp='^\/static_pages\/contact(?:\.([^\/.?]+))?$'>
    /static_pages/contact(.:format)
  </td>
  <td data-route-reqs='static_pages#contact'>
    static_pages#contact
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='stylists'>
      stylists<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/stylists(.:format)' data-regexp='^\/stylists(?:\.([^\/.?]+))?$'>
    /stylists(.:format)
  </td>
  <td data-route-reqs='stylists#index'>
    stylists#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/stylists(.:format)' data-regexp='^\/stylists(?:\.([^\/.?]+))?$'>
    /stylists(.:format)
  </td>
  <td data-route-reqs='stylists#create'>
    stylists#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_stylist'>
      new_stylist<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/stylists/new(.:format)' data-regexp='^\/stylists\/new(?:\.([^\/.?]+))?$'>
    /stylists/new(.:format)
  </td>
  <td data-route-reqs='stylists#new'>
    stylists#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_stylist'>
      edit_stylist<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/stylists/:id/edit(.:format)' data-regexp='^\/stylists\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /stylists/:id/edit(.:format)
  </td>
  <td data-route-reqs='stylists#edit'>
    stylists#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='stylist'>
      stylist<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/stylists/:id(.:format)' data-regexp='^\/stylists\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /stylists/:id(.:format)
  </td>
  <td data-route-reqs='stylists#show'>
    stylists#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/stylists/:id(.:format)' data-regexp='^\/stylists\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /stylists/:id(.:format)
  </td>
  <td data-route-reqs='stylists#update'>
    stylists#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/stylists/:id(.:format)' data-regexp='^\/stylists\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /stylists/:id(.:format)
  </td>
  <td data-route-reqs='stylists#update'>
    stylists#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/stylists/:id(.:format)' data-regexp='^\/stylists\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /stylists/:id(.:format)
  </td>
  <td data-route-reqs='stylists#destroy'>
    stylists#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='muas'>
      muas<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/muas(.:format)' data-regexp='^\/muas(?:\.([^\/.?]+))?$'>
    /muas(.:format)
  </td>
  <td data-route-reqs='muas#index'>
    muas#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/muas(.:format)' data-regexp='^\/muas(?:\.([^\/.?]+))?$'>
    /muas(.:format)
  </td>
  <td data-route-reqs='muas#create'>
    muas#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_mua'>
      new_mua<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/muas/new(.:format)' data-regexp='^\/muas\/new(?:\.([^\/.?]+))?$'>
    /muas/new(.:format)
  </td>
  <td data-route-reqs='muas#new'>
    muas#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_mua'>
      edit_mua<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/muas/:id/edit(.:format)' data-regexp='^\/muas\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /muas/:id/edit(.:format)
  </td>
  <td data-route-reqs='muas#edit'>
    muas#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='mua'>
      mua<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/muas/:id(.:format)' data-regexp='^\/muas\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /muas/:id(.:format)
  </td>
  <td data-route-reqs='muas#show'>
    muas#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/muas/:id(.:format)' data-regexp='^\/muas\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /muas/:id(.:format)
  </td>
  <td data-route-reqs='muas#update'>
    muas#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/muas/:id(.:format)' data-regexp='^\/muas\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /muas/:id(.:format)
  </td>
  <td data-route-reqs='muas#update'>
    muas#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/muas/:id(.:format)' data-regexp='^\/muas\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /muas/:id(.:format)
  </td>
  <td data-route-reqs='muas#destroy'>
    muas#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='hairs'>
      hairs<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/hairs(.:format)' data-regexp='^\/hairs(?:\.([^\/.?]+))?$'>
    /hairs(.:format)
  </td>
  <td data-route-reqs='hairs#index'>
    hairs#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/hairs(.:format)' data-regexp='^\/hairs(?:\.([^\/.?]+))?$'>
    /hairs(.:format)
  </td>
  <td data-route-reqs='hairs#create'>
    hairs#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_hair'>
      new_hair<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/hairs/new(.:format)' data-regexp='^\/hairs\/new(?:\.([^\/.?]+))?$'>
    /hairs/new(.:format)
  </td>
  <td data-route-reqs='hairs#new'>
    hairs#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_hair'>
      edit_hair<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/hairs/:id/edit(.:format)' data-regexp='^\/hairs\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /hairs/:id/edit(.:format)
  </td>
  <td data-route-reqs='hairs#edit'>
    hairs#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='hair'>
      hair<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/hairs/:id(.:format)' data-regexp='^\/hairs\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /hairs/:id(.:format)
  </td>
  <td data-route-reqs='hairs#show'>
    hairs#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/hairs/:id(.:format)' data-regexp='^\/hairs\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /hairs/:id(.:format)
  </td>
  <td data-route-reqs='hairs#update'>
    hairs#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/hairs/:id(.:format)' data-regexp='^\/hairs\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /hairs/:id(.:format)
  </td>
  <td data-route-reqs='hairs#update'>
    hairs#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/hairs/:id(.:format)' data-regexp='^\/hairs\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /hairs/:id(.:format)
  </td>
  <td data-route-reqs='hairs#destroy'>
    hairs#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='photos'>
      photos<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/photos(.:format)' data-regexp='^\/photos(?:\.([^\/.?]+))?$'>
    /photos(.:format)
  </td>
  <td data-route-reqs='photos#index'>
    photos#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/photos(.:format)' data-regexp='^\/photos(?:\.([^\/.?]+))?$'>
    /photos(.:format)
  </td>
  <td data-route-reqs='photos#create'>
    photos#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_photo'>
      new_photo<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/photos/new(.:format)' data-regexp='^\/photos\/new(?:\.([^\/.?]+))?$'>
    /photos/new(.:format)
  </td>
  <td data-route-reqs='photos#new'>
    photos#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_photo'>
      edit_photo<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/photos/:id/edit(.:format)' data-regexp='^\/photos\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /photos/:id/edit(.:format)
  </td>
  <td data-route-reqs='photos#edit'>
    photos#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='photo'>
      photo<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/photos/:id(.:format)' data-regexp='^\/photos\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /photos/:id(.:format)
  </td>
  <td data-route-reqs='photos#show'>
    photos#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/photos/:id(.:format)' data-regexp='^\/photos\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /photos/:id(.:format)
  </td>
  <td data-route-reqs='photos#update'>
    photos#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/photos/:id(.:format)' data-regexp='^\/photos\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /photos/:id(.:format)
  </td>
  <td data-route-reqs='photos#update'>
    photos#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/photos/:id(.:format)' data-regexp='^\/photos\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /photos/:id(.:format)
  </td>
  <td data-route-reqs='photos#destroy'>
    photos#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='females'>
      females<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/females(.:format)' data-regexp='^\/females(?:\.([^\/.?]+))?$'>
    /females(.:format)
  </td>
  <td data-route-reqs='females#index'>
    females#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/females(.:format)' data-regexp='^\/females(?:\.([^\/.?]+))?$'>
    /females(.:format)
  </td>
  <td data-route-reqs='females#create'>
    females#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_female'>
      new_female<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/females/new(.:format)' data-regexp='^\/females\/new(?:\.([^\/.?]+))?$'>
    /females/new(.:format)
  </td>
  <td data-route-reqs='females#new'>
    females#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_female'>
      edit_female<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/females/:id/edit(.:format)' data-regexp='^\/females\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /females/:id/edit(.:format)
  </td>
  <td data-route-reqs='females#edit'>
    females#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='female'>
      female<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/females/:id(.:format)' data-regexp='^\/females\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /females/:id(.:format)
  </td>
  <td data-route-reqs='females#show'>
    females#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/females/:id(.:format)' data-regexp='^\/females\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /females/:id(.:format)
  </td>
  <td data-route-reqs='females#update'>
    females#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/females/:id(.:format)' data-regexp='^\/females\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /females/:id(.:format)
  </td>
  <td data-route-reqs='females#update'>
    females#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/females/:id(.:format)' data-regexp='^\/females\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /females/:id(.:format)
  </td>
  <td data-route-reqs='females#destroy'>
    females#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='males'>
      males<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/males(.:format)' data-regexp='^\/males(?:\.([^\/.?]+))?$'>
    /males(.:format)
  </td>
  <td data-route-reqs='males#index'>
    males#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/males(.:format)' data-regexp='^\/males(?:\.([^\/.?]+))?$'>
    /males(.:format)
  </td>
  <td data-route-reqs='males#create'>
    males#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_male'>
      new_male<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/males/new(.:format)' data-regexp='^\/males\/new(?:\.([^\/.?]+))?$'>
    /males/new(.:format)
  </td>
  <td data-route-reqs='males#new'>
    males#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_male'>
      edit_male<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/males/:id/edit(.:format)' data-regexp='^\/males\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /males/:id/edit(.:format)
  </td>
  <td data-route-reqs='males#edit'>
    males#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='male'>
      male<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/males/:id(.:format)' data-regexp='^\/males\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /males/:id(.:format)
  </td>
  <td data-route-reqs='males#show'>
    males#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/males/:id(.:format)' data-regexp='^\/males\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /males/:id(.:format)
  </td>
  <td data-route-reqs='males#update'>
    males#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/males/:id(.:format)' data-regexp='^\/males\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /males/:id(.:format)
  </td>
  <td data-route-reqs='males#update'>
    males#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/males/:id(.:format)' data-regexp='^\/males\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /males/:id(.:format)
  </td>
  <td data-route-reqs='males#destroy'>
    males#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='clients'>
      clients<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/clients(.:format)' data-regexp='^\/clients(?:\.([^\/.?]+))?$'>
    /clients(.:format)
  </td>
  <td data-route-reqs='clients#index'>
    clients#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/clients(.:format)' data-regexp='^\/clients(?:\.([^\/.?]+))?$'>
    /clients(.:format)
  </td>
  <td data-route-reqs='clients#create'>
    clients#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_client'>
      new_client<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/clients/new(.:format)' data-regexp='^\/clients\/new(?:\.([^\/.?]+))?$'>
    /clients/new(.:format)
  </td>
  <td data-route-reqs='clients#new'>
    clients#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_client'>
      edit_client<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/clients/:id/edit(.:format)' data-regexp='^\/clients\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /clients/:id/edit(.:format)
  </td>
  <td data-route-reqs='clients#edit'>
    clients#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='client'>
      client<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/clients/:id(.:format)' data-regexp='^\/clients\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /clients/:id(.:format)
  </td>
  <td data-route-reqs='clients#show'>
    clients#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/clients/:id(.:format)' data-regexp='^\/clients\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /clients/:id(.:format)
  </td>
  <td data-route-reqs='clients#update'>
    clients#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/clients/:id(.:format)' data-regexp='^\/clients\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /clients/:id(.:format)
  </td>
  <td data-route-reqs='clients#update'>
    clients#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/clients/:id(.:format)' data-regexp='^\/clients\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /clients/:id(.:format)
  </td>
  <td data-route-reqs='clients#destroy'>
    clients#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='images'>
      images<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/images(.:format)' data-regexp='^\/images(?:\.([^\/.?]+))?$'>
    /images(.:format)
  </td>
  <td data-route-reqs='images#index'>
    images#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/images(.:format)' data-regexp='^\/images(?:\.([^\/.?]+))?$'>
    /images(.:format)
  </td>
  <td data-route-reqs='images#create'>
    images#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_image'>
      new_image<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/images/new(.:format)' data-regexp='^\/images\/new(?:\.([^\/.?]+))?$'>
    /images/new(.:format)
  </td>
  <td data-route-reqs='images#new'>
    images#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_image'>
      edit_image<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/images/:id/edit(.:format)' data-regexp='^\/images\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /images/:id/edit(.:format)
  </td>
  <td data-route-reqs='images#edit'>
    images#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='image'>
      image<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/images/:id(.:format)' data-regexp='^\/images\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /images/:id(.:format)
  </td>
  <td data-route-reqs='images#show'>
    images#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/images/:id(.:format)' data-regexp='^\/images\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /images/:id(.:format)
  </td>
  <td data-route-reqs='images#update'>
    images#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/images/:id(.:format)' data-regexp='^\/images\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /images/:id(.:format)
  </td>
  <td data-route-reqs='images#update'>
    images#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/images/:id(.:format)' data-regexp='^\/images\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /images/:id(.:format)
  </td>
  <td data-route-reqs='images#destroy'>
    images#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_stylists'>
      user_stylists<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/stylists(.:format)' data-regexp='^\/users\/([^\/.?]+)\/stylists(?:\.([^\/.?]+))?$'>
    /users/:user_id/stylists(.:format)
  </td>
  <td data-route-reqs='stylists#index'>
    stylists#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/users/:user_id/stylists(.:format)' data-regexp='^\/users\/([^\/.?]+)\/stylists(?:\.([^\/.?]+))?$'>
    /users/:user_id/stylists(.:format)
  </td>
  <td data-route-reqs='stylists#create'>
    stylists#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_stylist'>
      new_user_stylist<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/stylists/new(.:format)' data-regexp='^\/users\/([^\/.?]+)\/stylists\/new(?:\.([^\/.?]+))?$'>
    /users/:user_id/stylists/new(.:format)
  </td>
  <td data-route-reqs='stylists#new'>
    stylists#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user_stylist'>
      edit_user_stylist<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/stylists/:id/edit(.:format)' data-regexp='^\/users\/([^\/.?]+)\/stylists\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /users/:user_id/stylists/:id/edit(.:format)
  </td>
  <td data-route-reqs='stylists#edit'>
    stylists#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_stylist'>
      user_stylist<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/stylists/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/stylists\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/stylists/:id(.:format)
  </td>
  <td data-route-reqs='stylists#show'>
    stylists#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/users/:user_id/stylists/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/stylists\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/stylists/:id(.:format)
  </td>
  <td data-route-reqs='stylists#update'>
    stylists#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/users/:user_id/stylists/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/stylists\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/stylists/:id(.:format)
  </td>
  <td data-route-reqs='stylists#update'>
    stylists#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/users/:user_id/stylists/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/stylists\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/stylists/:id(.:format)
  </td>
  <td data-route-reqs='stylists#destroy'>
    stylists#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_muas'>
      user_muas<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/muas(.:format)' data-regexp='^\/users\/([^\/.?]+)\/muas(?:\.([^\/.?]+))?$'>
    /users/:user_id/muas(.:format)
  </td>
  <td data-route-reqs='muas#index'>
    muas#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/users/:user_id/muas(.:format)' data-regexp='^\/users\/([^\/.?]+)\/muas(?:\.([^\/.?]+))?$'>
    /users/:user_id/muas(.:format)
  </td>
  <td data-route-reqs='muas#create'>
    muas#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_mua'>
      new_user_mua<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/muas/new(.:format)' data-regexp='^\/users\/([^\/.?]+)\/muas\/new(?:\.([^\/.?]+))?$'>
    /users/:user_id/muas/new(.:format)
  </td>
  <td data-route-reqs='muas#new'>
    muas#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user_mua'>
      edit_user_mua<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/muas/:id/edit(.:format)' data-regexp='^\/users\/([^\/.?]+)\/muas\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /users/:user_id/muas/:id/edit(.:format)
  </td>
  <td data-route-reqs='muas#edit'>
    muas#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_mua'>
      user_mua<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/muas/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/muas\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/muas/:id(.:format)
  </td>
  <td data-route-reqs='muas#show'>
    muas#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/users/:user_id/muas/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/muas\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/muas/:id(.:format)
  </td>
  <td data-route-reqs='muas#update'>
    muas#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/users/:user_id/muas/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/muas\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/muas/:id(.:format)
  </td>
  <td data-route-reqs='muas#update'>
    muas#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/users/:user_id/muas/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/muas\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/muas/:id(.:format)
  </td>
  <td data-route-reqs='muas#destroy'>
    muas#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_hairs'>
      user_hairs<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/hairs(.:format)' data-regexp='^\/users\/([^\/.?]+)\/hairs(?:\.([^\/.?]+))?$'>
    /users/:user_id/hairs(.:format)
  </td>
  <td data-route-reqs='hairs#index'>
    hairs#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/users/:user_id/hairs(.:format)' data-regexp='^\/users\/([^\/.?]+)\/hairs(?:\.([^\/.?]+))?$'>
    /users/:user_id/hairs(.:format)
  </td>
  <td data-route-reqs='hairs#create'>
    hairs#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_hair'>
      new_user_hair<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/hairs/new(.:format)' data-regexp='^\/users\/([^\/.?]+)\/hairs\/new(?:\.([^\/.?]+))?$'>
    /users/:user_id/hairs/new(.:format)
  </td>
  <td data-route-reqs='hairs#new'>
    hairs#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user_hair'>
      edit_user_hair<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/hairs/:id/edit(.:format)' data-regexp='^\/users\/([^\/.?]+)\/hairs\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /users/:user_id/hairs/:id/edit(.:format)
  </td>
  <td data-route-reqs='hairs#edit'>
    hairs#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_hair'>
      user_hair<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/hairs/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/hairs\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/hairs/:id(.:format)
  </td>
  <td data-route-reqs='hairs#show'>
    hairs#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/users/:user_id/hairs/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/hairs\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/hairs/:id(.:format)
  </td>
  <td data-route-reqs='hairs#update'>
    hairs#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/users/:user_id/hairs/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/hairs\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/hairs/:id(.:format)
  </td>
  <td data-route-reqs='hairs#update'>
    hairs#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/users/:user_id/hairs/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/hairs\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/hairs/:id(.:format)
  </td>
  <td data-route-reqs='hairs#destroy'>
    hairs#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_photos'>
      user_photos<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/photos(.:format)' data-regexp='^\/users\/([^\/.?]+)\/photos(?:\.([^\/.?]+))?$'>
    /users/:user_id/photos(.:format)
  </td>
  <td data-route-reqs='photos#index'>
    photos#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/users/:user_id/photos(.:format)' data-regexp='^\/users\/([^\/.?]+)\/photos(?:\.([^\/.?]+))?$'>
    /users/:user_id/photos(.:format)
  </td>
  <td data-route-reqs='photos#create'>
    photos#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_photo'>
      new_user_photo<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/photos/new(.:format)' data-regexp='^\/users\/([^\/.?]+)\/photos\/new(?:\.([^\/.?]+))?$'>
    /users/:user_id/photos/new(.:format)
  </td>
  <td data-route-reqs='photos#new'>
    photos#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user_photo'>
      edit_user_photo<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/photos/:id/edit(.:format)' data-regexp='^\/users\/([^\/.?]+)\/photos\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /users/:user_id/photos/:id/edit(.:format)
  </td>
  <td data-route-reqs='photos#edit'>
    photos#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_photo'>
      user_photo<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/photos/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/photos\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/photos/:id(.:format)
  </td>
  <td data-route-reqs='photos#show'>
    photos#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/users/:user_id/photos/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/photos\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/photos/:id(.:format)
  </td>
  <td data-route-reqs='photos#update'>
    photos#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/users/:user_id/photos/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/photos\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/photos/:id(.:format)
  </td>
  <td data-route-reqs='photos#update'>
    photos#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/users/:user_id/photos/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/photos\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/photos/:id(.:format)
  </td>
  <td data-route-reqs='photos#destroy'>
    photos#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_females'>
      user_females<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/females(.:format)' data-regexp='^\/users\/([^\/.?]+)\/females(?:\.([^\/.?]+))?$'>
    /users/:user_id/females(.:format)
  </td>
  <td data-route-reqs='females#index'>
    females#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/users/:user_id/females(.:format)' data-regexp='^\/users\/([^\/.?]+)\/females(?:\.([^\/.?]+))?$'>
    /users/:user_id/females(.:format)
  </td>
  <td data-route-reqs='females#create'>
    females#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_female'>
      new_user_female<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/females/new(.:format)' data-regexp='^\/users\/([^\/.?]+)\/females\/new(?:\.([^\/.?]+))?$'>
    /users/:user_id/females/new(.:format)
  </td>
  <td data-route-reqs='females#new'>
    females#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user_female'>
      edit_user_female<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/females/:id/edit(.:format)' data-regexp='^\/users\/([^\/.?]+)\/females\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /users/:user_id/females/:id/edit(.:format)
  </td>
  <td data-route-reqs='females#edit'>
    females#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_female'>
      user_female<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/females/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/females\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/females/:id(.:format)
  </td>
  <td data-route-reqs='females#show'>
    females#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/users/:user_id/females/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/females\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/females/:id(.:format)
  </td>
  <td data-route-reqs='females#update'>
    females#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/users/:user_id/females/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/females\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/females/:id(.:format)
  </td>
  <td data-route-reqs='females#update'>
    females#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/users/:user_id/females/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/females\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/females/:id(.:format)
  </td>
  <td data-route-reqs='females#destroy'>
    females#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_males'>
      user_males<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/males(.:format)' data-regexp='^\/users\/([^\/.?]+)\/males(?:\.([^\/.?]+))?$'>
    /users/:user_id/males(.:format)
  </td>
  <td data-route-reqs='males#index'>
    males#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/users/:user_id/males(.:format)' data-regexp='^\/users\/([^\/.?]+)\/males(?:\.([^\/.?]+))?$'>
    /users/:user_id/males(.:format)
  </td>
  <td data-route-reqs='males#create'>
    males#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_male'>
      new_user_male<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/males/new(.:format)' data-regexp='^\/users\/([^\/.?]+)\/males\/new(?:\.([^\/.?]+))?$'>
    /users/:user_id/males/new(.:format)
  </td>
  <td data-route-reqs='males#new'>
    males#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user_male'>
      edit_user_male<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/males/:id/edit(.:format)' data-regexp='^\/users\/([^\/.?]+)\/males\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /users/:user_id/males/:id/edit(.:format)
  </td>
  <td data-route-reqs='males#edit'>
    males#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_male'>
      user_male<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/males/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/males\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/males/:id(.:format)
  </td>
  <td data-route-reqs='males#show'>
    males#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/users/:user_id/males/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/males\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/males/:id(.:format)
  </td>
  <td data-route-reqs='males#update'>
    males#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/users/:user_id/males/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/males\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/males/:id(.:format)
  </td>
  <td data-route-reqs='males#update'>
    males#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/users/:user_id/males/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/males\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/males/:id(.:format)
  </td>
  <td data-route-reqs='males#destroy'>
    males#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_clients'>
      user_clients<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/clients(.:format)' data-regexp='^\/users\/([^\/.?]+)\/clients(?:\.([^\/.?]+))?$'>
    /users/:user_id/clients(.:format)
  </td>
  <td data-route-reqs='clients#index'>
    clients#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/users/:user_id/clients(.:format)' data-regexp='^\/users\/([^\/.?]+)\/clients(?:\.([^\/.?]+))?$'>
    /users/:user_id/clients(.:format)
  </td>
  <td data-route-reqs='clients#create'>
    clients#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_client'>
      new_user_client<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/clients/new(.:format)' data-regexp='^\/users\/([^\/.?]+)\/clients\/new(?:\.([^\/.?]+))?$'>
    /users/:user_id/clients/new(.:format)
  </td>
  <td data-route-reqs='clients#new'>
    clients#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user_client'>
      edit_user_client<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/clients/:id/edit(.:format)' data-regexp='^\/users\/([^\/.?]+)\/clients\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /users/:user_id/clients/:id/edit(.:format)
  </td>
  <td data-route-reqs='clients#edit'>
    clients#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_client'>
      user_client<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/clients/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/clients\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/clients/:id(.:format)
  </td>
  <td data-route-reqs='clients#show'>
    clients#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/users/:user_id/clients/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/clients\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/clients/:id(.:format)
  </td>
  <td data-route-reqs='clients#update'>
    clients#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/users/:user_id/clients/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/clients\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/clients/:id(.:format)
  </td>
  <td data-route-reqs='clients#update'>
    clients#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/users/:user_id/clients/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/clients\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/clients/:id(.:format)
  </td>
  <td data-route-reqs='clients#destroy'>
    clients#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_images'>
      user_images<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/images(.:format)' data-regexp='^\/users\/([^\/.?]+)\/images(?:\.([^\/.?]+))?$'>
    /users/:user_id/images(.:format)
  </td>
  <td data-route-reqs='images#index'>
    images#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/users/:user_id/images(.:format)' data-regexp='^\/users\/([^\/.?]+)\/images(?:\.([^\/.?]+))?$'>
    /users/:user_id/images(.:format)
  </td>
  <td data-route-reqs='images#create'>
    images#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_image'>
      new_user_image<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/images/new(.:format)' data-regexp='^\/users\/([^\/.?]+)\/images\/new(?:\.([^\/.?]+))?$'>
    /users/:user_id/images/new(.:format)
  </td>
  <td data-route-reqs='images#new'>
    images#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user_image'>
      edit_user_image<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/images/:id/edit(.:format)' data-regexp='^\/users\/([^\/.?]+)\/images\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /users/:user_id/images/:id/edit(.:format)
  </td>
  <td data-route-reqs='images#edit'>
    images#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_image'>
      user_image<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:user_id/images/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/images\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/images/:id(.:format)
  </td>
  <td data-route-reqs='images#show'>
    images#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/users/:user_id/images/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/images\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/images/:id(.:format)
  </td>
  <td data-route-reqs='images#update'>
    images#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/users/:user_id/images/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/images\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/images/:id(.:format)
  </td>
  <td data-route-reqs='images#update'>
    images#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/users/:user_id/images/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)\/images\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:user_id/images/:id(.:format)
  </td>
  <td data-route-reqs='images#destroy'>
    images#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='users'>
      users<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users(.:format)' data-regexp='^\/users(?:\.([^\/.?]+))?$'>
    /users(.:format)
  </td>
  <td data-route-reqs='users#index'>
    users#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/users(.:format)' data-regexp='^\/users(?:\.([^\/.?]+))?$'>
    /users(.:format)
  </td>
  <td data-route-reqs='users#create'>
    users#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user'>
      new_user<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/new(.:format)' data-regexp='^\/users\/new(?:\.([^\/.?]+))?$'>
    /users/new(.:format)
  </td>
  <td data-route-reqs='users#new'>
    users#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user'>
      edit_user<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:id/edit(.:format)' data-regexp='^\/users\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /users/:id/edit(.:format)
  </td>
  <td data-route-reqs='users#edit'>
    users#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user'>
      user<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:id(.:format)
  </td>
  <td data-route-reqs='users#show'>
    users#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/users/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:id(.:format)
  </td>
  <td data-route-reqs='users#update'>
    users#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/users/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:id(.:format)
  </td>
  <td data-route-reqs='users#update'>
    users#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/users/:id(.:format)' data-regexp='^\/users\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /users/:id(.:format)
  </td>
  <td data-route-reqs='users#destroy'>
    users#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='static_pages_all_talent_forms_page'>
      static_pages_all_talent_forms_page<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/static_pages/all_talent_forms_page(.:format)' data-regexp='^\/static_pages\/all_talent_forms_page(?:\.([^\/.?]+))?$'>
    /static_pages/all_talent_forms_page(.:format)
  </td>
  <td data-route-reqs='static_pages#all_talent_forms_page'>
    static_pages#all_talent_forms_page
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='login'>
      login<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/login(.:format)' data-regexp='^\/login(?:\.([^\/.?]+))?$'>
    /login(.:format)
  </td>
  <td data-route-reqs='sessions#new'>
    sessions#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/login(.:format)' data-regexp='^\/login(?:\.([^\/.?]+))?$'>
    /login(.:format)
  </td>
  <td data-route-reqs='sessions#create'>
    sessions#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='logout'>
      logout<span class='helper'>_path</span>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/logout(.:format)' data-regexp='^\/logout(?:\.([^\/.?]+))?$'>
    /logout(.:format)
  </td>
  <td data-route-reqs='sessions#destroy'>
    sessions#destroy
  </td>
</tr>

  </tbody>
</table>

<script type='text/javascript'>
  // Iterates each element through a function
  function each(elems, func) {
    if (!elems instanceof Array) { elems = [elems]; }
    for (var i = 0, len = elems.length; i < len; i++) {
      func(elems[i]);
    }
  }

  // Sets innerHTML for an element
  function setContent(elem, text) {
    elem.innerHTML = text;
  }

  // Enables path search functionality
  function setupMatchPaths() {
    // Check if the user input (sanitized as a path) matches the regexp data attribute
    function checkExactMatch(section, elem, value) {
      var string = sanitizePath(value),
          regexp = elem.getAttribute("data-regexp");

      showMatch(string, regexp, section, elem);
    }

    // Check if the route path data attribute contains the user input
    function checkFuzzyMatch(section, elem, value) {
      var string = elem.getAttribute("data-route-path"),
          regexp = value;

      showMatch(string, regexp, section, elem);
    }

    // Display the parent <tr> element in the appropriate section when there's a match
    function showMatch(string, regexp, section, elem) {
      if(string.match(RegExp(regexp))) {
        section.appendChild(elem.parentNode.cloneNode(true));
      }
    }

    // Check if there are any matched results in a section
    function checkNoMatch(section, defaultText, noMatchText) {
      if (section.innerHTML === defaultText) {
        setContent(section, defaultText + noMatchText);
      }
    }

    // Ensure path always starts with a slash "/" and remove params or fragments
    function sanitizePath(path) {
      var path = path.charAt(0) == '/' ? path : "/" + path;
      return path.replace(/\#.*|\?.*/, '');
    }

    var regexpElems     = document.querySelectorAll('#route_table [data-regexp]'),
        searchElem      = document.querySelector('#search'),
        exactMatches    = document.querySelector('#exact_matches'),
        fuzzyMatches    = document.querySelector('#fuzzy_matches');

    // Remove matches when no search value is present
    searchElem.onblur = function(e) {
      if (searchElem.value === "") {
        setContent(exactMatches, "");
        setContent(fuzzyMatches, "");
      }
    }

    // On key press perform a search for matching paths
    searchElem.onkeyup = function(e){
      var userInput         = searchElem.value,
          defaultExactMatch = '<tr><th colspan="4">Paths Matching (' + escape(sanitizePath(userInput)) +'):</th></tr>',
          defaultFuzzyMatch = '<tr><th colspan="4">Paths Containing (' + escape(userInput) +'):</th></tr>',
          noExactMatch      = '<tr><th colspan="4">No Exact Matches Found</th></tr>',
          noFuzzyMatch      = '<tr><th colspan="4">No Fuzzy Matches Found</th></tr>';

      // Clear out results section
      setContent(exactMatches, defaultExactMatch);
      setContent(fuzzyMatches, defaultFuzzyMatch);

      // Display exact matches and fuzzy matches
      each(regexpElems, function(elem) {
        checkExactMatch(exactMatches, elem, userInput);
        checkFuzzyMatch(fuzzyMatches, elem, userInput);
      })

      // Display 'No Matches' message when no matches are found
      checkNoMatch(exactMatches, defaultExactMatch, noExactMatch);
      checkNoMatch(fuzzyMatches, defaultFuzzyMatch, noFuzzyMatch);
    }
  }

  // Enables functionality to toggle between `_path` and `_url` helper suffixes
  function setupRouteToggleHelperLinks() {

    // Sets content for each element
    function setValOn(elems, val) {
      each(elems, function(elem) {
        setContent(elem, val);
      });
    }

    // Sets onClick event for each element
    function onClick(elems, func) {
      each(elems, function(elem) {
        elem.onclick = func;
      });
    }

    var toggleLinks = document.querySelectorAll('#route_table [data-route-helper]');
    onClick(toggleLinks, function(){
      var helperTxt   = this.getAttribute("data-route-helper"),
          helperElems = document.querySelectorAll('[data-route-name] span.helper');

      setValOn(helperElems, helperTxt);
    });
  }

  setupMatchPaths();
  setupRouteToggleHelperLinks();
</script>


  

<h2 style="margin-top: 30px">Request</h2>
<p><b>Parameters</b>:</p> <pre>None</pre>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleSessionDump()">Toggle session dump</a></div>
  <div id="session_dump" style="display:none"><pre>_csrf_token: &quot;rOmAZ9Iv1Yq/h2duN2FSjXy5nomCzhqclGuhmhc0mB4=&quot;
session_id: &quot;3a3236ec36c22e0dba1888e86061aace&quot;
user_id: 2</pre></div>
</div>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleEnvDump()">Toggle env dump</a></div>
  <div id="env_dump" style="display:none"><pre>GATEWAY_INTERFACE: &quot;CGI/1.1&quot;
HTTP_ACCEPT_ENCODING: &quot;gzip, deflate, sdch&quot;
HTTP_ACCEPT_LANGUAGE: &quot;en-US,en;q=0.8&quot;
REMOTE_ADDR: &quot;::1&quot;
REMOTE_HOST: &quot;::1&quot;
SERVER_NAME: &quot;localhost&quot;
SERVER_PROTOCOL: &quot;HTTP/1.1&quot;</pre></div>
</div>

<h2 style="margin-top: 30px">Response</h2>
<p><b>Headers</b>:</p> <pre>None</pre>

</div>

  <div id="console"
    data-remote-path='console/repl_sessions/bcb8b0896bbaf5ef987e6d957fdb63cc'
    data-initial-prompt='&gt;&gt; '>
  </div>

  <script type="text/javascript">
    (function() {
      // DOM helpers
      function hasClass(el, className) {
        var regex = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g');
        return el.className.match(regex);
      }

      function addClass(el, className) {
        el.className += " " + className;
      }

      function removeClass(el, className) {
        var regex = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g');
        el.className = el.className.replace(regex, '');
      }

      function removeAllChildren(el) {
        while (el.firstChild) {
          el.removeChild(el.firstChild);
        }
      }

      function escapeHTML(html) {
        return html
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;')
          .replace(/`/g, '&#x60;');
      }

      // Add CSS styles dynamically. This probably doesnt work for IE <8.
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML =
        "#console { position: fixed; left: 0; bottom: 0; width: 100%; height: 150px; border: 1px solid; padding: 0 0 20px 0; overflow: none; margin: 0; background: none repeat scroll 0% 0% #333; } " +
        "#console div.console-inner { font-family: monospace; font-size: 11px; height: 100%; overflow: auto; background: #333; border: 0; padding: 0 margin: 0; } " +
        "#console div.console-prompt-box { color: #FFF; } " +
        "#console pre.console-message { color: #1AD027; margin: 0; border: 0; white-space: pre-wrap; background-color: #333; padding: 0; } " +
        "#console div.console-focus span.console-cursor { background: #FEFEFE; color: #333; font-weight: bold; }";
      document.getElementsByTagName('head')[0].appendChild(style);

      /**
       * Constructor for command storage.
       * It uses localStorage if available. Otherwise fallback to normal JS array.
       */
      function CommandStorage() {
        this.previousCommands = [];
        var previousCommandOffset = 0;
        var hasLocalStorage = typeof window.localStorage !== 'undefined';
        var STORAGE_KEY = "web_console_previous_commands";
        var MAX_STORAGE = 100;

        if (hasLocalStorage) {
          this.previousCommands = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
          previousCommandOffset = this.previousCommands.length;
        }

        this.addCommand = function(command) {
          previousCommandOffset = this.previousCommands.push(command);

          if (previousCommandOffset > MAX_STORAGE) {
            this.previousCommands.splice(0, 1);
            previousCommandOffset = MAX_STORAGE;
          }

          if (hasLocalStorage) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.previousCommands));
          }
        };

        this.navigate = function(offset) {
          previousCommandOffset += offset;

          if (previousCommandOffset < 0) {
            previousCommandOffset = -1;
            return null;
          }

          if (previousCommandOffset >= this.previousCommands.length) {
            previousCommandOffset = this.previousCommands.length;
            return null;
          }

          return this.previousCommands[previousCommandOffset];
        }
      }

      // HTML strings for dynamic elements.
      var consoleInnerHtml = [
        "<div id='resizer' style='width: 100%; height: 3px; cursor: ns-resize;'></div>",
        "<div class='console-inner'></div>",
        "<input id='clipboard' type='text' style='visibility: hidden;'>"
      ].join("");

      var promptBoxHtml = [
        "<span class='console-prompt-label' style='display: inline; color: #FFF; background: none repeat scroll 0% 0% #333; border: 0; padding: 0;'></span>",
        "<pre class='console-prompt-display' style='display: inline; color: #FFF; background: none repeat scroll 0% 0% #333; border: 0; padding: 0;'></pre>"
      ].join("");

      // REPLConsole Constructor
      function REPLConsole(config) {
        this.commandStorage = new CommandStorage();
        this.prompt = config && config.promptLabel ? config.promptLabel : ' >>';
        this.commandHandle = config && config.commandHandle ? config.commandHandle : function() { return this; }
      }


      REPLConsole.prototype.install = function(container) {
        var _this = this;

        document.onkeydown = function(ev) {
          if (_this.focused) { _this.onKeyDown(ev); }
        };

        document.onkeypress = function(ev) {
          if (_this.focused) { _this.onKeyPress(ev); }
        };

        document.addEventListener('mousedown', function(ev) {
          var el = ev.target || ev.srcElement;

          if (el) {
            do {
              if (el === container) {
                _this.focus();
                return;
              }
            } while (el = el.parentNode);

            _this.blur();
          }
        });

        // Render the console.
        container.innerHTML = consoleInnerHtml;
        // Make the console resizable.
        document.getElementById('resizer').addEventListener('mousedown', function(ev) {
          var startY = ev.clientY;
          var startHeight = parseInt(document.defaultView.getComputedStyle(consoleDiv).height, 10);

          var doDrag = function(e) {
            consoleDiv.style.height = (startHeight + startY - e.clientY) + 'px';
          };

          var stopDrag = function(e) {
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
          };

          document.documentElement.addEventListener('mousemove', doDrag, false);
          document.documentElement.addEventListener('mouseup', stopDrag, false);
        });

        // Initialize
        this.inner = container.getElementsByClassName('console-inner')[0];
        this.clipboard = document.getElementById('clipboard');
        this.newPromptBox();
        this.focus();
      };

      REPLConsole.prototype.focus = function() {
        if (! this.focused) {
          this.focused = true;
          if (! hasClass(this.inner, "console-focus")) {
            addClass(this.inner, "console-focus");
          }
          this.scrollToBottom();
        }
      };

      REPLConsole.prototype.blur = function() {
        this.focused = false;
        removeClass(this.inner, "console-focus");
      };

      /**
       * Add a new empty prompt box to the console.
       */
      REPLConsole.prototype.newPromptBox = function() {
        // Remove the caret from previous prompt display if any.
        if (this.promptDisplay) {
          this.removeCaretFromPrompt();
        }

        var promptBox = document.createElement('div');
        promptBox.className = "console-prompt-box";
        promptBox.innerHTML = promptBoxHtml;
        this.promptLabel = promptBox.getElementsByClassName('console-prompt-label')[0];
        this.promptDisplay = promptBox.getElementsByClassName('console-prompt-display')[0];
        // Render the prompt box
        this.setInput("");
        this.promptLabel.innerHTML = this.prompt;
        this.inner.appendChild(promptBox);
        this.scrollToBottom();
      };

      /**
       * Remove the caret from the prompt box,
       * mainly before adding a new prompt box.
       * For simplicity, just re-render the prompt box
       * with caret position -1.
       */
      REPLConsole.prototype.removeCaretFromPrompt = function() {
        this.setInput(this._input, -1);
      };

      REPLConsole.prototype.setInput = function(input, caretPos) {
        this._caretPos = caretPos === undefined ? input.length : caretPos;
        this._input = input;
        this.renderInput();
      };

      /**
       * Add some text to the existing input.
       */
      REPLConsole.prototype.addToInput = function(val, caretPos) {
        caretPos = caretPos || this._caretPos;
        var before = this._input.substring(0, caretPos);
        var after = this._input.substring(caretPos, this._input.length);
        var newInput =  before + val + after;
        this.setInput(newInput, caretPos + val.length);
      };

      /**
       * Render the input prompt. This is called whenever
       * the user input changes, sometimes not very efficient.
       */
      REPLConsole.prototype.renderInput = function() {
        // Clear the current input.
        removeAllChildren(this.promptDisplay);

        var promptCursor = document.createElement('span');
        promptCursor.className = "console-cursor";
        var before, current, after;

        if (this._caretPos < 0) {
          before = this._input;
          current = after = "";
        } else if (this._caretPos === this._input.length) {
          before = this._input;
          current = "\u00A0";
          after = "";
        } else {
          before = this._input.substring(0, this._caretPos);
          current = this._input.charAt(this._caretPos);
          after = this._input.substring(this._caretPos + 1, this._input.length);
        }

        this.promptDisplay.appendChild(document.createTextNode(before));
        promptCursor.appendChild(document.createTextNode(current));
        this.promptDisplay.appendChild(promptCursor);
        this.promptDisplay.appendChild(document.createTextNode(after));
      };

      REPLConsole.prototype.writeOutput = function(output) {
        var consoleMessage = document.createElement('pre');
        consoleMessage.className = "console-message";
        consoleMessage.innerHTML = escapeHTML(output);
        this.inner.appendChild(consoleMessage);
        this.newPromptBox();
      };

      REPLConsole.prototype.onEnterKey = function() {
        var input = this._input;

        if(input != "" && input !== undefined) {
          this.commandStorage.addCommand(input);
        }

        this.commandHandle(input);
      };

      REPLConsole.prototype.onNavigateHistory = function(offset) {
        var command = this.commandStorage.navigate(offset) || "";
        this.setInput(command);
      };

      /**
       * Handle control keys like up, down, left, right.
       */
      REPLConsole.prototype.onKeyDown = function(ev) {
        switch (ev.keyCode) {
          case 13:
            // Enter key
            this.onEnterKey();
            ev.preventDefault();
            break;
          case 80:
            // Ctrl-P
            if (! ev.ctrlKey) break;
          case 38:
            // Up arrow
            this.onNavigateHistory(-1);
            ev.preventDefault();
            break;
          case 78:
            // Ctrl-N
            if (! ev.ctrlKey) break;
          case 40:
            // Down arrow
            this.onNavigateHistory(1);
            ev.preventDefault();
            break;
          case 37:
            // Left arrow
            var caretPos = this._caretPos > 0 ? this._caretPos - 1 : this._caretPos;
            this.setInput(this._input, caretPos);
            ev.preventDefault();
            break;
          case 39:
            // Right arrow
            var length = this._input.length;
            var caretPos = this._caretPos < length ? this._caretPos + 1 : this._caretPos;
            this.setInput(this._input, caretPos);
            ev.preventDefault();
            break;
          case 8:
            // Delete
            this.deleteAtCurrent();
            ev.preventDefault();
            break;
          case 86:
            // ctrl/command-v
            if (ev.ctrlKey || ev.metaKey) {
              // Let the pasted text go to our clipboard.
              this.clipboard.focus();

              // Pasting to clipboard doesn't happen immediately,
              // so we have to wait for a while to get the pasted text.
              var _this = this;
              setTimeout(function() {
                _this.addToInput(_this.clipboard.value);
                _this.clipboard.value = "";
                _this.clipboard.blur();
              }, 10);
            }
            break;
          default:
            break;
        }

        ev.stopPropagation();
      };

      /**
       * Handle input key press.
       */
      REPLConsole.prototype.onKeyPress = function(ev) {
        // Only write to the console if it's a single key press.
        if (ev.ctrlKey || ev.metaKey) { return; }
        var keyCode = ev.keyCode || ev.which;
        this.insertAtCurrent(String.fromCharCode(keyCode));
        ev.stopPropagation();
        ev.preventDefault();
      };

      /**
       * Delete a character at the current position.
       */
      REPLConsole.prototype.deleteAtCurrent = function() {
        if (this._caretPos > 0) {
          var caretPos = this._caretPos - 1;
          var before = this._input.substring(0, caretPos);
          var after = this._input.substring(this._caretPos, this._input.length);
          this.setInput(before + after, caretPos);
        }
      };

      /**
       * Insert a character at the current position.
       */
      REPLConsole.prototype.insertAtCurrent = function(char) {
        var before = this._input.substring(0, this._caretPos);
        var after = this._input.substring(this._caretPos, this._input.length);
        this.setInput(before + char + after, this._caretPos + 1);
      };

      REPLConsole.prototype.scrollToBottom = function() {
        this.inner.scrollTop = this.inner.scrollHeight;
      };

      window.REPLConsole = REPLConsole;
    })();

    // Install the console
    var consoleDiv = document.getElementById('console');
    var replConsole = new REPLConsole({
      promptLabel: consoleDiv.dataset.initialPrompt,
      commandHandle: function(line) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        var url = consoleDiv.dataset.remotePath;
        var params = "input=" + encodeURIComponent(line);

        xhr.open("PUT", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(params);

        xhr.onreadystatechange = function() {
          if(xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            _this.writeOutput(response.output);
          }
        }
      }
    });

    replConsole.install(consoleDiv);
  </script>



</body>
</html>
