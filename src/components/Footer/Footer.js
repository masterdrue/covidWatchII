import React from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styles from "./Footer.module.css";
import covidImage from "../../images/cv19.png";



const Footer = () => {
    return (
       
       
        <div className="container">
            <div className="row">
                <div className={styles.container}>
                    {<h1>
                    C
                    <span>
                    <img className={styles.image} alt="covid19" src={covidImage} />
                    </span>
                    VID WATCH
                    </h1>}
                </div>
                <div>
                    <ButtonGroup>
                        <Button variant="contained" color="secondary"href="/">Home</Button>
                        <Button variant="contained" color="disabled" href="/charts">Charts</Button>
                        <Button variant="contained" color="disabled" href="/graphs">Graphs</Button>
                        <Button variant="contained" color="disabled" href="/summary">Summary</Button>
                        <Button variant="contained" color="secondary"  href="https://druescloud.com" target="_blank">DruesCloud.com</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    
    );
}

export default Footer;