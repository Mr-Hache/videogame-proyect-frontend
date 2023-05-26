import aboutMessage from "../../utils/aboutMessage";
import style from "./_About.module.scss";

const About = () => {
    return (
        <div className={style.Container}>
            <h1 className={style.Title}>About</h1>
            <p className={style.Parr}>{aboutMessage}</p>
        </div>
    )
}

export default About;