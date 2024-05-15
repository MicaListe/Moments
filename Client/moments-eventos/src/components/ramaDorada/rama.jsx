import rama from "../../assets/ramaDorada.png"

export default function Dorado(){

    return(
        <div>
            <img src={rama} style={{width:"100px",}} />
            <img src={rama} style={{width:"120px", position:"absolute", transform:"rotate(-5deg)", right:"1395px", top:"800px", }} />
            <img src={rama} style={{width:"100px", transform:"rotate(180deg)", position:"absolute", left:"1410px", }} />
            <img src={rama} style={{width:"90px", transform:"rotate(200deg)", position:"absolute", left:"1420px", top:"700px", }} />
            <img src={rama} style={{width:"100px", transform:"rotate(230deg)", position:"absolute", left:"1420px", top:"1200px",}} />
        </div>
    )
}