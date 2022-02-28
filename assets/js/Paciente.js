class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
      this.__nombre = () => nombre;
      this.__edad = () => edad;
      this.__rut = () => rut;
      this.__diagnostico = () => diagnostico;
    }
    get nombre() {
      return this.__nombre();
    }
    get edad() {
      return this.__edad();
    }
    get rut() {
      return this.__rut();
    }
    get diagnostico() {
      return this.__diagnostico();
    }
    renderNombre(id,i) {
      const pacientesId = document.getElementById(id);
      pacientesId.innerHTML += `<tr>
        <th scope="row">${i}</th>
        <td>${this.nombre}</td>
        <td>${this.edad}</td>
        <td>${this.rut}</td>
        <td>${this.diagnostico}</td>
      </tr>`;
    }
}
  export default Paciente
