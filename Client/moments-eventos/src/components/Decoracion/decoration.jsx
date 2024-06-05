import {React, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {getDecoration} from "../../Redux/actions"
import Dorado from "../ramaDorada/rama";
import DecoParty from "./deco";
import video from "../../assets/video decoracion.mp4"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FilterDecoration from "../FiltroDecoration/FilterDeco";

export default function Decoration(){

    const dispatch= useDispatch()
    const deco= useSelector((state)=>state.decoration)
    console.log(deco)
    const [currentPage, setCurrentPage]= useState(1)

    useEffect(()=>{
        dispatch(getDecoration())
    },[])

    const paginado = () =>{
        const startIndex = (currentPage - 1) * 6
        const endIndex = (currentPage * 6)
        return deco.slice(startIndex, endIndex)
    }

    const handlePageChange =(page) =>{
        setCurrentPage(page)
    }

    return(
        <div>
            <Dorado/>
            <div className="  d-flex justify-content-center align-items-center">
                    <video src={video} loop autoPlay style={{width:"700px", marginTop:"100px"}}></video> 
            </div>
            <FilterDecoration/>
            <div className="row mb-5" style={{marginLeft:"200px", marginTop:"100px"}}>
                {paginado().map((element)=>(
                    <div className="card p-3 me-3 mb-4" key={element.id} style={{width:"350px", height:"300px", boxShadow:"1px 1px 2px black"}}>
                        <div className="card-body d-flex flex-column justify-content-center ">
                           <DecoParty
                                image={element.image}
                                description={element.description}
                            /> 
                        </div>
                    </div>
                    
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={()=>handlePageChange(currentPage - 1)} disabled={currentPage===1} className={`btn btn-costum ${currentPage===1 ? "btn-secondary disabled " : "btn-primary"} mx-1`}><FaArrowLeft/></button>
                {[...Array(Math.ceil(deco.length / 6)).keys()].map((page) => (
                    <button key={page + 1} onClick={() => handlePageChange(page + 1)} className={`btn btn-costum ${currentPage === page + 1 ? 'btn-primary' : 'btn-secondary'} mx-1`}>{page + 1}</button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} className={`btn btn-costum ${currentPage === Math.ceil(deco.length / 6) ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === Math.ceil(deco.length / 6)}><FaArrowRight /></button>
            </div>
        </div>
    )
}