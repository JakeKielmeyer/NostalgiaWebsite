import jakeAndGrandpa from "../ReadMore/Jake and Grandpa.png";
import Cherub from "../ReadMore/Cherub.png";
import Commercial from "../../images/tv/Commercial.PNG";
import Boomer from "../../images/radio/Boomer1-100.jpg";
import Pumpkin from "../../images/puzzles/pumpkin.jpg";


const Card = ({number}) => <div 
    style = 
        {{width: "100%",
        height: "100%",
        background: "black",
        fontSize: "30px",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        }}
        >{number}</div>
// 

export default Card;