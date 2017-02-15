# Kslider
A jQuery slider plugin. See live demo at [http://www.xujiantao.com/jquery_plugins/kslider/examples/basic.html](http://www.xujiantao.com/jquery_plugins/kslider/examples/basic.html "http://www.xujiantao.com/jquery_plugins/kslider/examples/basic.html")

#### Usage
Include the required files.
```Javascript
<link type="text/css" rel="stylesheet" href="./../source/css/jquery.Kslider.css" />

<script type="text/javascript" src="./../source/js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="./../source/js/jquery.Kslider-1.2.js"></script>
```
<br><br>

#### The HTML :
```Javascript
	<div id="demo" class="slider">
		<ul>				
			<li><a href=""><img src="./../source/images/01.jpg" /></a></li>
			<li><a href=""><img src="./../source/images/02.jpg" /></a></li>
			<li><a href=""><img src="./../source/images/03.jpg" /></a></li>
			<li><a href=""><img src="./../source/images/04.jpg" /></a></li>
		</ul>
		
		
		<div class="controls">
			<span class="sliderBtn prevBtn"></span>
			<span class="sliderBtn nextBtn"></span>
			<div class="paginator"></div>
		</div>
	</div>
```
<br><br>

#### Hook up the jQuery.
```Javascript
$(function(){
  $("#demo").Kslider();
});
```
<br><br>

#### Initialization options
```Javascript
autoPlay        :        0
delays          :        4000
widthVal        :        800
heightVal       :        300
effect          :	     'horizontal'  // horizontal、vertical、fade、none
```
<br><br>
