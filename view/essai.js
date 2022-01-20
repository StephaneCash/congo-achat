import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import LeftBar from "../includes/LeftBar";
import NavBar from "../includes/NavBar";
import { db } from "../config/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import "../css/essai.css";
import { Link } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    containerGlobal: {
        display: "flex",
        flexWrap: "wrap",
        width: "20%",
        margin: "0 auto"
    },
}));

const Annonces = () => {

    const annoncesData = collection(db, 'ads');
    const [data, setData] = useState([]);

    const classes = useStyles();

    const getAnnonces = async () => {
        const dataAnnonces = await getDocs(annoncesData);
        setData(dataAnnonces.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    useEffect(() => {
        getAnnonces();
    }, []);

    console.log(data);

    return (
        <>
            <div className="gallery">
                {data.map((val, index) => {
                    return (
                        <div className="pics" key={index}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={val.photos}
                                    alt="Paella dish"
                                />
                                <CardActions disableSpacing>
                                    <Typography>
                                        {val.productName} <br />
                                        {val.province}, {val.city} 
                                    </Typography>
                                    <Typography variant="h5"></Typography>
                                </CardActions>
                                <CardActions>
                                    <Button >Détail</Button>
                                </CardActions>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Annonces;