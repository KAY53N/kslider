# Kslider

 jQuery Image/HTML Slider Plugin 

#### Usage
Include the required files.
```Javascript
<link type="text/css" rel="stylesheet" href="./css/css.css" />
<script type="text/javascript" src="./js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/jquery.Kslider-1.2.js"></script>
</script>
```

Add some markup. All top level elements inside the slider div are assumed to be "slides".
```Javascript
<div id="slider1" class="slider">
	<ul>				
		<li><a href=""><img width="800" height="300" border="0" src="./images/01.jpg" alt="1111111111" /></a></li>
		<li><a href=""><img width="800" height="300" border="0" src="./images/02.jpg" alt="22222222222" /></a></li>
		<li><a href=""><img width="800" height="300" border="0" src="./images/03.jpg" alt="333333333333" /></a></li>
		<li><a href=""><img width="800" height="300" border="0" src="./images/04.jpg" alt="444444444444" /></a></li>
		<li><a href=""><img width="800" height="300" border="0" src="./images/05.jpg" alt="555555555555" /></a></li>
	</ul>
  
  <span id="prevBtn" type="PREV" class="sliderBtn"></span>
  <span id="nextBtn" type="NEXT" class="sliderBtn"></span>
  ...
</div>
```

Hook up the jQuery.
```Javascript
$(function(){
  $("#slider1").Kslider();
});
```

#### API Documentation
```Javascript
  autoPlay        :       0
  speeds          :       400
  preNexBtnShow   :       1
  delays          :       4000
  widthVal        :       800
  heightVal       :       300
  effect          :       'horizontal'    // horizontal、vertical、fade、none
  numBtnSty       :       'num'
```
