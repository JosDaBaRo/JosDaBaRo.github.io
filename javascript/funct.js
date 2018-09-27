window.onload=function(){
	$("#contendio").load("../ejemplos.html", function(){
		alert("Bienvenido al laboratorio SQL")
	});
};
$("li a").click(function(event){
		$("#contendio").load("../ejercicios.html", function(){
			alert("Cargando ejercicios")
		});
});


