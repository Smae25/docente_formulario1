import {
  CCard,
  CButton,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText,
} from "@coreui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DESCARGAR_FORMULARIO_GET_ENDPOINT } from "../../connections/helpers/endpoints";

const DocumentCard = ({ documento }) => {
  const [actaNo, setActaNo] = useState(documento.actaNo);
  const sendId = async (acta_No) => {
    const response = await axios.get(
      `${DESCARGAR_FORMULARIO_GET_ENDPOINT}/${acta_No}`,
      { responseType: "blob" }
    );

    const url = URL.createObjectURL(response.data);
    window.open(url, "_blank");
  };

  const handleActaNoChange = (e) => {
    setActaNo(e.target.value);
  };

  return (
    <CCard className="mt-3 mb-3">
      <CCardHeader className="mi-card">
        <CCardTitle>
          <strong>{documento.name}</strong>
        </CCardTitle>
      </CCardHeader>

      <CCardBody>
       
        <CCardText> Acta No: {documento.acta_No}</CCardText>

        <CCardText> Fecha: {documento.fecha}</CCardText>

        <CCardText> Semestre al que pertenece: {documento.semestre_al_que_pertenece}</CCardText>

        <CCardText> Nivel de formacion : {documento.nivel_de_formacion}</CCardText>

        <CCardText> Programa: {documento.programa}</CCardText>

        <CCardText>Docente: {documento.docente}</CCardText>

        <CCardText>Asignatura: {documento.asignatura}</CCardText>

        <CCardText>Grupo o modalidad: {documento.grupo_o_modalidad}</CCardText>

        {/* <div className="d-flex w-100 justify-content-center"> */}
        <CButton color="success" type="submit" onClick={() => sendId(documento.acta_No)}>
          descargar
        </CButton>
        {/* </Form> */}
      </CCardBody>
    </CCard>
  );
};

export { DocumentCard };
