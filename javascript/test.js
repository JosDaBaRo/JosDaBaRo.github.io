window.onload=function(){
var test= ['apple', 'banana', 'orange', 'other fruit'];
var sel= document.getElementById('aSelect')
var i = 0;
test.forEach(function(element){
	sel.options[i] = new Option(element, i+1);
	i++;
})
};
$("li a").click(function(event){
		$("#destination").load("../apple.html", function(){
			alert("I loaded");
		});
	});
