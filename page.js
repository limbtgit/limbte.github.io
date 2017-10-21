console.log("script loaded");
// reference  both the INPUT and MESSAGE DIV into variables

var input = $('#name-id');
var msg = $('#name-error-id');
console.log(msg);

// when I change the input's value (by typing)

input.change(function(){
	// get the length of the value
	var length = input.val().length;

	// if length <4 then remove the hidden class
	if(length<4){
		msg.removeClass('hidden');

	} else {
		    // otherwise, add the class name hidden
		   msg.addClass('hidden'); 
	} 
});

var inpute = $('#email-id');
var msge = $('#email-error-id');
console.log(msg);

// when I change the input's value (by typing)

inpute.change(function(){
	// get the length of the value
	var length = inpute.val().length;

	// if length <8 then remove the hidden class
	if(length<8){
		msge.removeClass('hidden');

	} else {
		    // otherwise, add the class name hidden
		   msge.addClass('hidden'); 
	} 
});

//get the cb and submit
var cb = $('#cb-id');
var submit = $('#submit-id');

// when i chnage the check box value, trigger the code
cb.change(function(){
	//if cb is checked, then disable button == false
	// else disable button == true
	if(cb.prop('checked')){
		submit.prop('disabled', false);
	}
	else{
		submit.prop('disabled', true);
	}	


});


 // Java code for Pagination selection
var img1 = [ 
    "DSC03810.JPG", 
    "DSC03815.JPG", 
    "DSC03816.JPG",
    "DSC04023.JPG"
];
img1.current = 0;
function showImage1(i) { 
img1.current=i;	
$('#imag1').fadeOut( function() { 
this.src = img1[img1.current]; 
$(this).fadeIn(); 
}); 
}

function NextImage1() { 
img1.current = (img1.current+1) % img1.length; 
showImage1(img1.current); 
}

function PreviousImage1() { 
if (--img1.current < 0) { img1.current = img1.length - 1; } 
showImage1(img1.current);
}
onload = function(){ 
showImage1(0);
};
 // end of code for Pagination selection of photo

var img2 = [ 
    "DSC04186.JPG", 
    "DSC04213.JPG", 
    "DSC04266.JPG",
    "DSC04279.JPG" 
];
img2.current = 0;
function showImage2(i) { 
img2.current=i;	
$('#imag2').fadeOut( function() { 
this.src = img2[img2.current]; 
$(this).fadeIn(); 
}); 
}

var img3 = [ 
    "DSC04433.JPG", 
    "DSC04448.JPG", 
    "DSC04525.JPG",
    "DSC04539.JPG" 
];
img3.current = 0;
function showImage3(i) { 
img3.current=i;	
$('#imag3').fadeOut( function() { 
this.src = img3[img3.current]; 
$(this).fadeIn(); 
}); 
}