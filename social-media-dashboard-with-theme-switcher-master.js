'use strict'; 


const colors ={
	'White': 'hsl(0, 0%, 100%)',
	'Lighter Gray': 'hsl(11, 2%, 95%)',
	'Very Dark Blue': 'hsl(230, 17%, 14%)'
};

$(window).resize(function(){
	location.reload();
	
});

function addCarets(){
	let caret_up= `<span class="caret-up"></span>`;
	let caret_down= `<span class="caret-down"></span>`;
	//get all the document elements with class .up
	document.querySelectorAll('.up').forEach(function(element) {
		 //for each such element get the parent node.
         const parentDiv = element.parentNode;
		 //create an element of type span.
		 const el = document.createElement('span');
		 // Create a class attribute
		 const att = document.createAttribute("class");
		 //set the newly created class attribute value to 'caret-up'
		 att.value = "caret-up";
		 // Add the class attribute to the created span element
		 el.setAttributeNode(att);
		 //insert this newly created span element before the element with class .up.
		 parentDiv.insertBefore(el,element);
		 
         /*element.innerHTML += caret_up;*/
    });
	document.querySelectorAll('.down').forEach(function(element) {
         const parentDiv = element.parentNode;
		 const el = document.createElement('span');
		 const att = document.createAttribute("class");
		 att.value = "caret-down";
		 el.setAttributeNode(att);
		 parentDiv.insertBefore(el,element);
		 
         /*element.innerHTML += caret_down;*/
    });
}	
	
$(window).on('load',function(){
	let counter=0;
	//a dynamic way to add the carets instead of just hard-coding them in with font-awesome.
    addCarets();
	$('.toggle__switcher').css('background-color','colors[White]');
	
	//the toggle button was clicked , toggle the color themes.
	$('#dark').click(function(){
		//console.log('in #dark click');
		let container_light = $('.container').hasClass('light');
	    if(container_light){
		    $('.container').removeClass('light');
		}
		$('.container').addClass('dark');	 
	});
	$('#light').click(function(){
		//console.log('in #light click');
		let container_dark = $('.container').hasClass('dark');
		if(container_dark){
			$('.container').removeClass('dark');
		} 
		$('.container').addClass('light');
	});
});