import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import DataGrid, {textEditor} from "react-data-grid";
import {createBrand, deleteBrand, getBrands, updateBrand} from "../../../../services/BrandService.js";
import CreateBrandModal from "./components/CreateBrandModal.jsx";
import DeleteBrandModal from "./components/DeleteBrandModal.jsx";

const BrandsAdmin = () => {

    const [rows, setRows] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const defaultColumnProperties = {
        resizable: true,
    };

    const columns = [
        {key: 'id', name: 'ID'},
        {key: 'brandName', name: 'Nombre', renderEditCell: textEditor},
        {key: 'delete', name: 'Eliminar'}
    ].map(c => ({...c, ...defaultColumnProperties}));


    const handleRowsChange = (newRows, data) => {
        const brandToUpdate = newRows.find(r => r.id === newRows[data.indexes[0]].id)
        fetchUpdateBrand(brandToUpdate);
        setRows(newRows);
    }

    const fetchUpdateBrand = (brand) => {
        updateBrand(brand.id, brand).then(updatedBrand => {
            // const index = rows.findIndex(row => row.id === updatedBrand.id);
            // const updatedRows = [...rows];
            // updatedRows[index] = updatedBrand;
            setRows([...rows, { ...updatedBrand,
                delete:
                    <Row>
                        <DeleteBrandModal onDelete={fetchDeleteBrand} id={updatedBrand.id}/>
                    </Row>
            }]);
        }).catch(error => {
            console.error(error);
        })
    }

    const fetchCreateBrand = (brand) => {
        setIsLoading(true)
        createBrand(brand).then(createBrand => {
            setRows([...rows, {...createBrand, delete:
                    <Row>
                        <DeleteBrandModal onDelete={fetchDeleteBrand} id={createBrand.id}/>
                    </Row>}])
        }).catch(error => {
            console.error(error);
        }).finally(() => setIsLoading(false))
    }

    const fetchDeleteBrand = (id) => {
        setIsLoading(true);
        setRows([]);
        deleteBrand(id).then(() => {
            fetchBrands()
        }).catch(error => {
            console.error(error);
        }).finally(() => setIsLoading(false))
    }

    const fetchBrands = () => {
        setIsLoading(true)

        getBrands()
            .then(data => {
                setRows(data.map(d => ({
                    ...d,
                    delete:
                        <Row>
                            <DeleteBrandModal onDelete={fetchDeleteBrand} id={d.id} isLoading={isLoading}/>
                        </Row>
                })));
            })
            .catch(error => {
                console.error(error);
            }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        fetchBrands();
    }, []);


    return (
        <Container>
            <Col className="p-5">
                <Row className="mb-3">
                    <Col>
                        <CreateBrandModal onSubmit={fetchCreateBrand} isLoading={isLoading}/>
                    </Col>
                </Row>
                <DataGrid style={{color: "white"}} columns={columns} rows={rows} rowHeight={38}
                          onRowsChange={(rows, data) => handleRowsChange(rows, data)}/>
            </Col>
        </Container>
    );
}

export default BrandsAdmin;