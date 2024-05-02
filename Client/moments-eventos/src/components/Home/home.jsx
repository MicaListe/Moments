import playa from "../../assets/playa.jpg"
import quinta from "../../assets/quinta.jpg"
import salon from "../../assets/salon.jpg"

export default function Home(){
    return(
        <div id="carouselExampleIndicators" class="carousel slide" dataRide="carousel">
            <ol class="carousel-indicators">
                <li dataTarget="#carouselExampleIndicators" dataSlideTo="0" class="active"></li>
                <li dataTarget="#carouselExampleIndicators" dataSlideTo="1"></li>
                <li dataTarget="#carouselExampleIndicators" dataSlideTo="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-50" src={quinta} alt="First slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-50" src={salon} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={playa} alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="" role="button" dataSlide="prev">
                <span class="carousel-control-prev-icon" ariaHidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="" role="button" data-slide="next">
                <span class="carousel-control-next-icon" ariaHidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}