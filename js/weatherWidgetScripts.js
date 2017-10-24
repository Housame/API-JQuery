window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; 
 window.myWidgetParam.push({id: 11,cityid: '2673730',appid: 'e046ca394c2949a3e27ae4835e80a2a5',units: 'metric',containerid: 'openweathermap-widget-11',  }); 
  (function() {
      var script = document.createElement('script');
      script.async = true;script.charset = "utf-8";
      script.src = "http://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(script, s);
      })();
