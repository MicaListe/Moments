import {React, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {getDecoration} from "../../Redux/actions"


export default function Decoration(){

    const dispatch= useDispatch()
    const deco= useSelector((state)=>state.decoration)

    useEffect(()=>{
        dispatch(getDecoration())
    },[])
}