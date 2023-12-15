import { useEffect, useState } from 'react';
import {
  deletePublication,
  getAllPublications,
} from '../../../services/publicationService.js';
import { Col, Container, Row } from 'react-bootstrap';
import 'react-data-grid/lib/styles.css';

import DataGrid from 'react-data-grid';
import DeleteModelModal from './ModelsAdmin/components/DeleteModelModal.jsx';

const PublicationsAdmin = () => {
  const [rows, setRows] = useState([]);

  const defaultColumnProperties = {
    resizable: true,
  };

  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'price', name: 'Price' },
    { key: 'storage', name: 'Storage' },
    { key: 'description', name: 'Description' },
    { key: 'phoneNumber', name: 'Tel' },
    { key: 'instagramAccount', name: 'Instagram' },
    { key: 'state', name: 'Provincia' },
    { key: 'delete', name: 'Eliminar' },
  ].map((c) => ({ ...c, ...defaultColumnProperties }));

  const fetchPublications = () => {
    getAllPublications()
      .then((data) => {
        setRows(
          data.map((d) => ({
            ...d,
            brand: d?.brand?.brandName,
            delete: (
              <Row>
                <DeleteModelModal onDelete={fetchDeletePublication} id={d.id} />
              </Row>
            ),
          })),
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchDeletePublication = (id) => {
    setRows([]);
    deletePublication(id)
      .then(() => {
        fetchPublications();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  return (
    <Container>
      <Col className="p-5">
        <Row className="mb-3">
          <Col></Col>
        </Row>
        <DataGrid
          style={{ color: 'white' }}
          columns={columns}
          rows={rows}
          rowHeight={38}
        />
      </Col>
    </Container>
  );
};
export default PublicationsAdmin;
