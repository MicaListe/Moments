import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCatering } from "../../Redux/actions";

export default function FilterCatering() {
    const dispatch = useDispatch();
    const [selectedCatering, setSelectedCatering] = useState('');

    const handleCateringChange = (e) => {
        setSelectedCatering(e);
        dispatch(filterCatering(e));
    };


    return (
        <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "-60px" }}>
            <div className="filter-item mb-3 mx-3" style={{ width: '300px', marginTop: "80px", textAlign: "center" }}>
                <label className="form-label" style={{ textAlign: "center" }}>FILTRAR POR CATERING:</label>
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
        </div>
    );
}
