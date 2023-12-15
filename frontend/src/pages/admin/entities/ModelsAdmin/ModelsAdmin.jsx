import { useEffect, useState } from 'react';
import DataGrid, { textEditor } from 'react-data-grid';
import { Col, Container, Row } from 'react-bootstrap';
import {
  createModel,
  deleteModel,
  getModels,
  updateModel,
} from '../../../../services/ModelsService.js';
import DeleteModelModal from './components/DeleteModelModal.jsx';
import CreateModelModal from './components/CreateModelModal.jsx';
import { getBrands } from '../../../../services/BrandService.js';

const ModelsAdmin = () => {
  const [rows, setRows] = useState([]);
  const [brands, setBrands] = useState([]);

  const defaultColumnProperties = {
    resizable: true,
  };

  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'modelName', name: 'Nombre', renderEditCell: textEditor },
    {
      key: 'brand',
      name: 'Marca',
    },
    { key: 'delete', name: 'Eliminar' },
  ].map((c) => ({ ...c, ...defaultColumnProperties }));

  const handleRowsChange = (newRows, data) => {
    const modelToUpdate = newRows.find(
      (r) => r.id === newRows[data.indexes[0]].id,
    );
    fetchUpdateModel(modelToUpdate);
    setRows(newRows);
  };

  const fetchUpdateModel = (model) => {
    updateModel(model.id, model)
      .then((updateModel) => {
        setRows([
          ...rows,
          {
            ...updateModel,
            brand: updateModel?.brand?.brandName,
            delete: (
              <Row>
                <DeleteModelModal
                  onDelete={fetchDeleteModel}
                  id={updateModel.id}
                />
              </Row>
            ),
          },
        ]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchCreateModel = (model) => {
    createModel(model)
      .then((createModel) => {
        setRows([
          ...rows,
          {
            ...createModel,
            brand: createModel?.brand?.brandName,
            delete: (
              <Row>
                <DeleteModelModal
                  onDelete={fetchDeleteModel}
                  id={createModel.id}
                />
              </Row>
            ),
          },
        ]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchDeleteModel = (id) => {
    setRows([]);
    deleteModel(id)
      .then(() => {
        fetchModel();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchModel = () => {
    getModels()
      .then((data) => {
        setRows(
          data.map((d) => ({
            ...d,
            brand: d?.brand?.brandName,
            delete: (
              <Row>
                <DeleteModelModal onDelete={fetchDeleteModel} id={d.id} />
              </Row>
            ),
          })),
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const fetchBrands = () => {
    getBrands()
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchModel();
    fetchBrands();
  }, []);

  return (
    <Container>
      <Col className="p-5">
        <Row className="mb-3">
          <Col>
            <CreateModelModal onSubmit={fetchCreateModel} brands={brands} />
          </Col>
        </Row>
        <DataGrid
          style={{ color: 'white' }}
          columns={columns}
          rows={rows}
          rowHeight={38}
          onRowsChange={(rows, data) => handleRowsChange(rows, data)}
        />
      </Col>
    </Container>
  );
};

export default ModelsAdmin;
