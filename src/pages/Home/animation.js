// import React, { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";

// import withStyles from "@material-ui/core/styles/withStyles";

// const styles = {
//     p: {
//         padding: "5% 15%",
//         display: "block",
//         minHeight: "63vh",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//         backgroundColor: "#fff",
//         maxWidth: "50%",
//         margin: "auto",
//     },
//     boxes: {
//         textAlign: "center",
//         margin: "20px",
//         marginTop: "150px",
//         backgroundColor: "black",
//         color: "white",
//         height: "200px",
//         maxHeight: "35vh",
//         boxShadow: "0px 12px 18px -6px rgb(0 0 0)",
//         borderRadius: "10px 10px 10px 10px ",
//     },
// };


// function Pricing(props) {
//     useEffect(() => {
//         Aos.init({duration: 2000});
//     }, []);
//     const { classes } = props;
//         return (
//             <div className={classes.p}>
//                 <h1>Pricing</h1>
//                 <div data-aos="fade-up" className={classes.boxes}>1</div>
//                 <div data-aos="fade-right" className={classes.boxes}>2</div>
//                 <div data-aos="fade-left" className={classes.boxes}>3</div>
//                 <div data-aos="flip-right" className={classes.boxes}>4</div>
//                 <div data-aos="flip-left" className={classes.boxes}>5</div>
//                 <div data-aos="fade-up" className={classes.boxes}>6</div>
//             </div>
//     );
// };

   

// export default withStyles(styles)(Pricing);