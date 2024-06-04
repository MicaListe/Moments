import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCatering, orderByCatering } from "../../Redux/actions";

export default function FilterCatering() {
    const dispatch = useDispatch();
    const [selectedCatering, setSelectedCatering] = useState('');

    const handleCateringChange = (e) => {
        setSelectedCatering(e);
        dispatch(filterCatering(e));
    };

    const handleOrderCatering = (e) => {
        dispatch(orderByCatering(e.target.value)); // Asegúrate de pasar el valor correcto
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "-60px" }}>
            <div className="mb-3" style={{ width: '300px', marginTop: "80px" }}>
                <label className="form-label">FILTRAR POR CATERING:</label>
                <select
                    className="form-select"
                    value={selectedCatering}
                    name="catering"
                    onChange={(e) => handleCateringChange(e.target.value)}
                >
                    <option value='all'>Todo</option>
                    <option value='Torta'>Torta</option>
                    <option value='Menu'>Menu</option>
                </select>
            </div>

            <div className="mb-3" style={{ width: '300px', marginTop: "80px" }}>
                <label className="form-label">Orden Alfabetico</label>
                <select className="form-select" onChange={(e) => handleOrderCatering(e)}>
                    <option value="Ascendente">A-Z</option>
                    <option value="Descendente">Z-A</option>
                </select>
            </div>
        </div>
    );
}

