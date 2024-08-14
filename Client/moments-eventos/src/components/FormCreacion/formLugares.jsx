import { createPlaces } from "../../Redux/actions"
import { useDispatch } from "react-redux"
import {useState } from "react"

export default function formularioLugares(){

    const dispatch = useDispatch()

  
    const initialForm={
        name: "",
        type: "",
        citiy: "",
        country: "",
        description: "",
        image: [],
        event: ""
    }
    const [places, setPlaces] = useState(initialForm)
    
    return(
        <div>

        </div>
    )
}