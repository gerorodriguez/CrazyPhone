import {useEffect, useState} from "react";
import {deletePublication, getAllPublications} from "../../../services/publicationService.js";
import {Button, Col, Row} from "react-bootstrap";
import 'react-data-grid/lib/styles.css';

import DataGrid from 'react-data-grid';
import DeleteModal from "./DeleteModal.jsx";

const PublicationsAdmin = () => {

    const [rows, setRows] = useState([]);
    const [publicationsData, setPublicationsData] = useState([]);

    const [selectedId, setSelectedId] = useState();

    const handleDeleteSuccess = async () => {
        console.log("ondeletion")
        await getPublications();
    };

    const Ondelete = async () => {
        await deletePublication(selectedId)
        handleDeleteSuccess()
    }

    useEffect(() => {
        Ondelete();
    }, [selectedId])

    const getPublications = async () => {
        const fetchedPublications = await getAllPublications();
        setPublicationsData(fetchedPublications);
    }

    const generateRows = () => {
        console.log("dgdosjgfsdo")
        const publicationsWithActions = publicationsData.map(publication => ({
            ...publication,
            edit:
                <Row>
                    <Button variant="secondary">Editar</Button>
                </Row>,
            delete:
                <Row>
                    <DeleteModal id={publication.id} onDelete={deletePublication}/>
                </Row>
        }));
        setRows(publicationsWithActions);
    }

    useEffect(() => {
        getPublications();
    }, []);

    useEffect(() => {
        console.log(publicationsData)
        if (publicationsData.length > 0) {
            generateRows()
            console.log("hola")
        }
    }, [publicationsData])


    const defaultColumnProperties = {
        resizable: true,
        width: 120,
    };

    const columns = [
        {key: 'id', name: 'ID'},
        {key: 'title', name: 'Title'},
        {key: 'price', name: 'Price'},
        {key: 'storage', name: 'Storage'},
        {key: 'description', name: 'Description'},
        {key: 'phoneNumber', name: 'Tel'},
        {key: 'instagramAccount', name: 'Instagram'},
        {key: 'state', name: 'Provincia'},
        {key: 'edit', name: 'Editar'},
        {key: 'delete', name: 'Eliminar'},
    ].map(c => ({...c, ...defaultColumnProperties}));

    const handleRowsChange = (newRows) => {
        console.log(newRows)
        setRows(newRows); // Actualiza el estado con las nuevas filas
    };
    return (
        <Col className="p-5">
            <DataGrid style={{color: "white"}} columns={columns} rows={rows} rowHeight={38}
                      onRowsChange={handleRowsChange}/>
        </Col>
    );
}
export default PublicationsAdmin;