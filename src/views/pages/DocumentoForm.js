import axios from "axios";
import React, { useState } from "react";
import { CREAR_FORMULARIOS_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import { Navigate, useNavigate } from "react-router-dom";

function DocumentFomr() {
  const [acta_No, setacta_No] = useState("");
  const [grupo_o_modalidad, setgrupo_o_modalidad] = useState("");
  const [semestre_al_que_pertenece, setsemestre_al_que_pertenece] =
    useState("");
  const [fecha, setFecha] = useState("");
  const [programa, setPrograma] = useState("");
  const [asignatura, setAsignatura] = useState("");
  const [docente, setDocente] = useState("");
  const [nivel_de_formacion, setnivel_de_formacion] = useState("");
  const [horario_entrada, sethorario_entrada] = useState("");
  const [inicio_de_la_clase, setinicio_de_la_clase] = useState("");
  const [finalizacion_de_la_clase, setfinalizacion_de_la_clase] = useState("");
  const [presentacion_personal, setpresentacion_personal] = useState("");
  const [
    conservacion_del_orden_y_el_aseo_en_el_aula_de_clase,
    setconservacion_del_orden_y_el_aseo_en_el_aula_de_clase,
  ] = useState("");
  const [microcurriculo, setMicrocurriculo] = useState("");
  const [planeacion_academica_semestral, setplaneacion_academica_semestral] =
    useState("");
  const [guias_de_aprendizaje, setguias_de_aprendizaje] = useState("");
  const [rol_del_docente, setrol_del_docente] = useState("");
  const [rol_del_estudiante, setrol_del_estudiante] = useState("");
  const [
    calidad_de_los_trabajos_individuales_o_de_grupo,
    setcalidad_de_los_trabajos_individuales_o_de_grupo,
  ] = useState("");
  const [proyectos_pedagogicos_de_aula, setproyectos_pedagogicos_de_aula] =
    useState("");
  const [evaluacion_del_aprendizaje, setevaluacion_del_aprendizaje] =
    useState("");
  const [credito_academico, setcredito_academico] = useState("");
  const [evaluacion_del_docente, setevaluacion_del_docente] = useState("");
  const [
    servicios_de_permanencia_academica_de_bienestar,
    setservicios_de_permanencia_academica_de_bienestar,
  ] = useState("");

  const navegar = useNavigate();

  const sendForm = async (e) => {
    e.preventDefault();
    const data = {
      acta_No,
      grupo_o_modalidad,
      semestre_al_que_pertenece,
      fecha,
      programa,
      asignatura,
      docente,
      nivel_de_formacion,
      horario_entrada,
      inicio_de_la_clase,
      finalizacion_de_la_clase,
      presentacion_personal,
      conservacion_del_orden_y_el_aseo_en_el_aula_de_clase,
      microcurriculo,
      planeacion_academica_semestral,
      guias_de_aprendizaje,
      rol_del_docente,
      rol_del_estudiante,
      calidad_de_los_trabajos_individuales_o_de_grupo,
      proyectos_pedagogicos_de_aula,
      evaluacion_del_aprendizaje,
      credito_academico,
      evaluacion_del_docente,
      servicios_de_permanencia_academica_de_bienestar,
    };

    await axios
      .post(CREAR_FORMULARIOS_POST_ENDPOINT, data)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
      navegar("/");

  };

  return (
    <div>
      <br></br>
      <h2>
        <center>
          <strong> PACTO EDUCATIVO DOCENTE ESTUDIANTE </strong>
        </center>
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={sendForm}>
        <div className="row">
          <div className="col-3">
            <div className="mb-3">
              <label>
                <strong> ACTA No: </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={acta_No}
                onChange={(e) => setacta_No(e.target.value)}
              />
            </div>
          </div>

          <div className="col-3">
            <div className="mb-3">
              <label>
                <strong> GRUPO O MODALIDAD: </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={grupo_o_modalidad}
                onChange={(e) => setgrupo_o_modalidad(e.target.value)}
              />
            </div>
          </div>

          <div className="col-3">
            <div className="mb-3">
              <label>
                <strong> SEMESTRE AL QUE PERTENECE: </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={semestre_al_que_pertenece}
                onChange={(e) => setsemestre_al_que_pertenece(e.target.value)}
              />
            </div>
          </div>

          <div className="col-3">
            <div className="mb-1">
              <label>
                <strong> FECHA: </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
          </div>
        </div>

        <br></br>

        <div className="row">
          <div className="col-6">
            <div className="mb-4">
              <label>
                <strong> PROGRAMA: </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={programa}
                onChange={(e) => setPrograma(e.target.value)}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-4">
              <label>
                <strong> ASIGNATURA: </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={asignatura}
                onChange={(e) => setAsignatura(e.target.value)}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-5">
              <label>
                <strong> DOCENTE: </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={docente}
                onChange={(e) => setDocente(e.target.value)}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-4">
              <label>
                <strong> NIVEL DE FORMACION: </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={nivel_de_formacion}
                onChange={(e) => setnivel_de_formacion(e.target.value)}
              />
            </div>
          </div>

          <div className="col-4">
            <div className="mb-5">
              <label>
                <strong> HORARIO ENTRADA: </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={horario_entrada}
                onChange={(e) => sethorario_entrada(e.target.value)}
              />
            </div>
          </div>

          <div className="col-4">
            <div className="mb-5">
              <label>
                <strong> INICIO DE LA CLASE: </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={inicio_de_la_clase}
                onChange={(e) => setinicio_de_la_clase(e.target.value)}
              />
            </div>
          </div>

          <div className="col-4">
            <div className="mb-5">
              <label>
                <strong> FINALIZACION DE LA CLASE: </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={finalizacion_de_la_clase}
                onChange={(e) => setfinalizacion_de_la_clase(e.target.value)}
              />
            </div>
          </div>
        </div>

        <br></br>

        <div className="row">
          <div className="col-6">
            <div className="mb-5">
              <label>
                <strong> PRESENTACION PERSONAL: </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={presentacion_personal}
                onChange={(e) => setpresentacion_personal(e.target.value)}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-5">
              <label>
                <strong>
                  {" "}
                  CONSERVACION DEL ORDEN Y EL ASEO EN EL AULA DE CLASE:{" "}
                </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={conservacion_del_orden_y_el_aseo_en_el_aula_de_clase}
                onChange={(e) =>
                  setconservacion_del_orden_y_el_aseo_en_el_aula_de_clase(
                    e.target.value
                  )
                }
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-5">
              <label>
                <strong> MICROCURRICULO: </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={microcurriculo}
                onChange={(e) => setMicrocurriculo(e.target.value)}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-5">
              <label>
                <strong> PLANEACION ACADEMICA SEMESTRAL: </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={planeacion_academica_semestral}
                onChange={(e) =>
                  setplaneacion_academica_semestral(e.target.value)
                }
              />
            </div>
          </div>

          <div className="col-4">
            <div className="mb-5">
              <label>
                <strong> GUIAS DE APRENDIZAJE: </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={guias_de_aprendizaje}
                onChange={(e) => setguias_de_aprendizaje(e.target.value)}
              />
            </div>
          </div>

          <div className="col-4">
            <div className="mb-5">
              <label>
                <strong> ROL DEL DOCENTE: </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={rol_del_docente}
                onChange={(e) => setrol_del_docente(e.target.value)}
              />
            </div>
          </div>

          <div className="col-4">
            <div className="mb-5">
              <label>
                <strong> ROL DEL ESTUDIANTE: </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={rol_del_estudiante}
                onChange={(e) => setrol_del_estudiante(e.target.value)}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-5">
              <label>
                <strong>
                  {" "}
                  CALIDAD DE LOS TRABAJOS INDIVIDUALES O DE GRUPO:{" "}
                </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={calidad_de_los_trabajos_individuales_o_de_grupo}
                onChange={(e) =>
                  setcalidad_de_los_trabajos_individuales_o_de_grupo(
                    e.target.value
                  )
                }
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-5">
              <label>
                <strong> PROYECTOS PEDAGOGICOS DE AULA </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={proyectos_pedagogicos_de_aula}
                onChange={(e) =>
                  setproyectos_pedagogicos_de_aula(e.target.value)
                }
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-5">
              <label>
                <strong> EVALUACION DEL APRENDIZAJE </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={evaluacion_del_aprendizaje}
                onChange={(e) => setevaluacion_del_aprendizaje(e.target.value)}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-5">
              <label>
                <strong> CREDITO ACADEMICO </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={credito_academico}
                onChange={(e) => setcredito_academico(e.target.value)}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label>
                <strong> EVALUACION DEL DOCENTE </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={evaluacion_del_docente}
                onChange={(e) => setevaluacion_del_docente(e.target.value)}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label>
                <strong>
                  {" "}
                  SERVICIOS DE PERMANENCIA ACADEMICA DE BIENESTAR{" "}
                </strong>
              </label>
              <textarea
                type="text"
                className="form-control"
                value={servicios_de_permanencia_academica_de_bienestar}
                onChange={(e) =>
                  setservicios_de_permanencia_academica_de_bienestar(
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-success">
          {" "}
          CREAR{" "}
        </button>
      </form>
    </div>
  );
}

export default DocumentFomr;
