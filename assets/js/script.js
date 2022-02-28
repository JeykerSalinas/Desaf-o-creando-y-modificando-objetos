import Paciente from "./Paciente.js";
import pacientes from "./data.js";

//Función que imprime a pacientes en el DOM
const imprPaciente = (pacientes) =>
  pacientes.map((paciente, i) => {
    const datoPaciente = new Paciente(
      paciente.nombre,
      paciente.edad,
      paciente.rut,
      paciente.diagnostico
    );

    datoPaciente.renderNombre("pacientesId", i + 1);
  });

imprPaciente(pacientes);

//Función que hace la búsqueda en el input
const searchPactient = document.getElementById("searchPacient");
searchPactient.addEventListener("input", (a) => {
  const filterPacientes = pacientes.filter((paciente) =>
    paciente.nombre.toLowerCase().includes(a.target.value.toLowerCase())
  );
  console.log(filterPacientes);
  document.getElementById("pacientesId").innerHTML = "";

  imprPaciente(filterPacientes);
});
