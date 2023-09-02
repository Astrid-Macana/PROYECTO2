const form = document.getElementById("form");
const listaEmpleados = document.getElementById("listaEmpleados");
const eliminarEmpledos = document.getElementById("eliminarEmpleados");

form.addEventListener('submit',function(event){
  event.preventDefault();
  const empleado = document.getElementById("nombre").value;
  const empleados = document.createElement('li') 
  empleados.innerText = empleado;

 empleados.addEventListener('click', function(){
    empleados.classList.toggle("completada");
    });
   listaEmpleados.appendChild(empleados);
 
  document.getElementById("nombre", ).value = " ";

   eliminarEmpledos.addEventListener('click',function () {
    const empleadosalist= document.querySelectorAll('completada')
    empleadosalist.forEach(function (empleadoslist) {
        empleadoslist.remove()
    });
   })

})