import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import LeftBar from "../includes/LeftBar";
import NavBar from "../includes/NavBar";

const useStyles = makeStyles((theme) => ({}));

const Annonces = () => {

    const classes = useStyles();

    return (
        <>
            <NavBar />
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <LeftBar />
                </Grid>
                <Grid item sm={10} xs={10} style={{ marginTop: "80px" }}>
                    <Grid sm={12}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="h5">Annonces</Typography>
                                    <Typography variant="body">Body</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Annonces;