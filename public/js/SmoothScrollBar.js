
window.scrollTrue = false; // Scrollactive Up Scroll Conditon

function init(){	
	// document.getElementById("loader").style.display = "none";
	// document.getElementById("splash").style.display = "none";
	new SmoothScroll(document,60,10)
}

function SmoothScroll(target, speed, smooth) {
	if (target === document)
		target = (document.scrollingElement 
              || document.documentElement 
              || document.body.parentNode 
              || document.body) // cross browser support for document scrolling
      
	var moving = false
	var pos = target.scrollTop	

			//  Globally Reset Scroll Position to Top 
			window.topsfunc = function () {
				pos = 0;	
				document.scrollingElement.scrollTop = 0;
				// console.log('Am here destroy Tools')        						
			}		

			// Scrollactive Up Scroll Fix mousewheel down scroll
			window.scrollFunc = function() {							
				if(window.scrollTrue){					
					// console.log('pos = '+pos);
					pos = document.scrollingElement.scrollTop;
					window.scrollTrue = false;
				}
			}
			

  var frame = target === document.body 
              && document.documentElement 
              ? document.documentElement 
              : target // safari is the new IE
  
	target.addEventListener('mousewheel', scrolled, { passive: false })
	target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

	function scrolled(e) {

		if(!moving){	
			pos = document.scrollingElement.scrollTop;						
		}

		e.preventDefault();  // disable default scrolling
		
		var delta = normalizeWheelDelta(e)			
		pos += -delta * speed

		pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

		if (!moving)update()
	}

	function normalizeWheelDelta(e){
		if(e.detail){
			if(e.wheelDelta)
				return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
			else
				return -e.detail/3 // Firefox
		}else
			return e.wheelDelta/120 // IE,Safari,Chrome
	}

	function update() {	

		moving = true	
		var delta = (pos - target.scrollTop) / smooth
		
		target.scrollTop += delta
		
		if (Math.abs(delta) > 0.5){
			requestFrame(update)			
		}
		else{
			moving = false;
		}

	}
	
	var requestFrame = function() { // requestAnimationFrame cross browser
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(func) {				
				window.setTimeout(func, 1000 / 50);
			}
		);
	}()
}