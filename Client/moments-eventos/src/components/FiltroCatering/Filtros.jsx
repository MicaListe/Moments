import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCatering } from "../../Redux/actions";

export default function FilterCatering() {
    const dispatch = useDispatch();
    const caterr = useSelector((state) => state.filtered.length > 0 ? state.filtered : state.catering);

    const [selectedCatering, setSelectedCatering] = useState('all');

    const handleCateringChange = (e) => {
        const selectedCatering = e.target.value;
        setSelectedCatering(selectedCatering);
        dispatch(filterCatering(selectedCatering));
    };

    console.log("Caterr", caterr)
    return (
        <div className="mb-3">
            <label className="form-label">Filtrar por Catering:</label>
            <select 
                className="form-select" 
                value={selectedCatering} 
                name="catering" 
                onChange={handleCateringChange}
            >
                <option value='all'>Todo</option>
                <option value='Torta'>Torta</option>
                <option value='Menu'>Menu</option>
            </select>
        </div>
    );
}
