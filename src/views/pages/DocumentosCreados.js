import { useState, useEffect } from "react";
/* import axios from "axios"
import { VER_DOCUMENTOS_GET_ENDPOINT } from "../../connections/helpers/endpoints"; */
import { CContainer, CCardBody, CRow, CCol } from "@coreui/react";
import { DocumentCard } from "../../components/DocumentosCreados/DocumentCard";
import dataDocumentosCreados from "../../connections/dataDocumentosCreados";
import axios from "axios";
import { OBTENER_FORMULARIOS_GET_ENDPOINT } from "../../connections/helpers/endpoints";

const DocumentosCreados = () => {
  const [documentos, setDocumentos] = useState([]);
  const [buscando, setBuscando] = useState(true);

  const obtenerFormularios = async () => {
    try {
      const response = await axios.get(OBTENER_FORMULARIOS_GET_ENDPOINT);
      return response.data;
    } catch (error) {
      console.error('Error al obtener formularios:', error);
      throw error; // Puedes manejar el error según tus necesidades
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await obtenerFormularios();
        setDocumentos(data);
      } catch (error) {
        // Manejar el error si es necesario
      } finally {
        setBuscando(false); // Este bloque se ejecutará independientemente de si hubo un error o no
      }
    };

    fetchData();
  }, []); // El segundo argumento es un array de dependencias, como estás usando un array vacío, se ejecutará solo al montar el componente



  return (
    <CContainer className="mt-3 mb-3">
      <CRow className="justify-content-md-center">
        <CCol sm="12" md="8" lg="6">
          <h3 className="text-center">Documentos creados</h3>
          <CCardBody>
            {buscando
              ? "Cargando..."
              : documentos.length === 0 && "No hay documentos disponibles"}
            {documentos.map((documento) => (
              <DocumentCard key={documento.acta_No} documento={documento} />
            ))}
          </CCardBody>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default DocumentosCreados;
