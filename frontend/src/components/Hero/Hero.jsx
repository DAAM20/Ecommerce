import "./Hero.css"
import hero from "../../assets/hero.png"

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-text">
                <p className="subtitle"> NUESTROS BESTSELLERS</p>
                <h1 className="title"> ultimas llegadas</h1>
                <p className="cta">COMPRA AHORA</p>
            </div>
            <div>
                <img src={hero} alt="Hero image" />
            </div>
        </section>
    )
}

export default Hero