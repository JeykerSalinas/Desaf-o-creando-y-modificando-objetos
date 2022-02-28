"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var pacientes = [{
  nombre: "Franco Urra",
  edad: 47,
  rut: "12345678-9",
  diagnostico: "Hipertensión Arterial"
}, {
  nombre: "Matías Mesa",
  edad: 27,
  rut: "12345678-9",
  diagnostico: "Diabetes Mellitus 1"
}, {
  nombre: "Enrique Flores",
  edad: 37,
  rut: "12345678-9",
  diagnostico: "Disfunción de la vista"
}, {
  nombre: "Milagros Acosta",
  edad: 17,
  rut: "12345678-9",
  diagnostico: "Hipertensión Pulmonar"
}, {
  nombre: "Victor Fernandez",
  edad: 47,
  rut: "12345678-9",
  diagnostico: "Diabetes Mellitus 2"
}, {
  nombre: "Is Pinto",
  edad: 15,
  rut: "12345678-9",
  diagnostico: "Pancreatitis Aguda"
}, {
  nombre: "Francisco Lobos",
  edad: 2,
  rut: "12345678-9",
  diagnostico: "Neuroblastoma"
}, {
  nombre: "Jean Jaque",
  edad: 67,
  rut: "12345678-9",
  diagnostico: "Enfermedad de Parkinson"
}, {
  nombre: "Cesar Riveros",
  edad: 87,
  rut: "12345678-9",
  diagnostico: "Alopecia por Radiación"
}, {
  nombre: "Joshua Espinoza",
  edad: 77,
  rut: "12345678-9",
  diagnostico: "Enfermedad de Creutzfeldt-Jakob"
}];

var Paciente = /*#__PURE__*/function () {
  function Paciente(nombre, edad, rut, diagnostico) {
    _classCallCheck(this, Paciente);

    this.__nombre = function () {
      return nombre;
    };

    this.__edad = function () {
      return edad;
    };

    this.__rut = function () {
      return rut;
    };

    this.__diagnostico = function () {
      return diagnostico;
    };
  }

  _createClass(Paciente, [{
    key: "nombre",
    get: function get() {
      return this.__nombre();
    }
  }, {
    key: "edad",
    get: function get() {
      return this.__edad();
    }
  }, {
    key: "rut",
    get: function get() {
      return this.__rut();
    }
  }, {
    key: "diagnostico",
    get: function get() {
      return this.__diagnostico();
    }
  }, {
    key: "renderNombre",
    value: function renderNombre(id, i) {
      var pacientesId = document.getElementById(id);
      pacientesId.innerHTML += "<tr>\n      <th scope=\"row\">".concat(i, "</th>\n      <td>").concat(this.nombre, "</td>\n      <td>").concat(this.edad, "</td>\n      <td>").concat(this.rut, "</td>\n      <td>").concat(this.diagnostico, "</td>\n    </tr>");
    }
  }]);

  return Paciente;
}();

var imprPaciente = function imprPaciente(pacientes) {
  return pacientes.map(function (paciente, i) {
    var datoPaciente = new Paciente(paciente.nombre, paciente.edad, paciente.rut, paciente.diagnostico);
    datoPaciente.renderNombre("pacientesId", i + 1);
  });
};

imprPaciente(pacientes);
var searchPactient = document.getElementById("searchPacient");
searchPactient.addEventListener("input", function (a) {
  var filterPacientes = pacientes.filter(function (paciente) {
    return paciente.nombre.toLowerCase().includes(a.target.value.toLowerCase());
  });
  console.log(filterPacientes);
  document.getElementById("pacientesId").innerHTML = "";
  imprPaciente(filterPacientes);
});