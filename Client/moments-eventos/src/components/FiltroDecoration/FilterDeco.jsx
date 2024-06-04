import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { filterDecoration } from "../../Redux/actions";


export default function FilterDecoration () {

    const dispatch=useDispatch();
    const[selectedecoration, setSelectedDecoration]=useState('');


    const handleDecorationChange = (e) => {
        setSelectedDecoration(e);
        dispatch(filterDecoration(e));
    }

    return(
        <div className="d-flex justify-content-center align-items-center" style={{ marginTop:"-60px" }}>
        <div className="mb-3" style={{ width: '300px', marginTop:"80px" }}>
            <label className="form-label">FILTRAR POR TIPO DE EVENTO:</label>
            <select
                className="form-select"
                value={selectedecoration}
                name="catering"
                onChange={(e) => handleDecorationChange(e.target.value)}
            >
                <option value='all'>Todos</option>
                <option value='Bautismos'>Bautismos</option>
                <option value='Bodas'>Bodas</option>
                <option value='Fiestas Corporativas'>Fiestas Corporativas</option>
                <option value='Fiestas de Egresados'>Fiestas de Egresados</option>
                <option value='Fiestas de XV'>Fiestas de XV</option>
            </select>
        </div>
    </div>
    )


}