import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Dashboard.css";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography, makeStyles } from "@material-ui/core";
import NavBar from "../includes/NavBar";
import LeftBar from "../includes/LeftBar";
import { Group, PeopleRounded, PostAddTwoTone } from "@material-ui/icons";
Chart.register(...registerables);

const useStyles = makeStyles((theme) => ({
    griddash: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
    },
    stat: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            marginTop: "10px"
        }
    },
    courb: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            marginTop: "10px"
        }
    }, 
    courbStatist: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
    },
}));


function Dashboard() {

    const classes = useStyles();

    const [data, setData] = useState([]);

    const getUsers = () => {
        axios.get(`http://localhost:8000/api/users`).then(res => {
            if (res.data.status === 200) {
                setData(res.data.data);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getUsers();
    }, []);

    const data4 = {
        labels: ['Nov 01', 'Nov 02', 'Nov 03', 'Nov 04', 'Nov 05', 'Nov 06', 'Nov 07'],
        datasets: [
            {
                label: 'Users',
                data: [2, 9, 3, 5, 2, 3, 6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options2 = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    const data5 = {
        labels: ['Nov 01', 'Nov 02', 'Nov 03', 'Nov 04', 'Nov 05', 'Nov 06', 'Nov 07', 'Nov 08', 'Nov 09', 'Nov 10', 'Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17', 'Nov 18', 'Nov 19', 'Nov 20', 'Nov 21'],
        datasets: [
            {
                label: 'Statistics ',
                data: [10, 16, 4, 6, 17, 11, 18, 11, 12, 9, 5, 26, 13, 7, 8, 12, 3, 12, 14, 14, 14, 11, 9, 7, 5],
                fill: false,
                backgroundColor: '#3a68ad',
                borderColor: 'black',
                width: "23px"
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="dashboard">
            <NavBar />
            <Grid container>
                <Grid sm={2} xs={2}>
                    <LeftBar />
                </Grid>
                <Grid sm={10} xs={10} style={{ marginTop: "70px", padding: "10px", backgroundColor: "#efefef" }}>
                    <Grid sm={12} xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="body">
                                    <div className={classes.griddash}>
                                        <Grid sm={4} xs={4} className={classes.stat} id="stat">
                                            <Card>
                                                <CardHeader
                                                    title="Users"
                                                    avatar={
                                                        <Group />
                                                    }
                                                    subheader="Nombre total des utilisateurs"
                                                />
                                                <div className="d-flex">
                                                    <CardContent variant="body">
                                                        <Typography variant="h5" style={{ color: "#555" }}>{data.length}</Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Link to="/users">
                                                            <Button variant="contained" size="small" color="primary">V<span className="span">oir tout</span></Button>
                                                        </Link>
                                                    </CardActions>
                                                </div>
                                            </Card>
                                        </Grid>
                                        <Grid sm={4} xs={4} className={classes.stat} id="stat">
                                            <Card>
                                                <CardHeader
                                                    title="Postes"
                                                    avatar={
                                                        <Group />
                                                    }
                                                    subheader="Nombre total des utilisateurs"
                                                />
                                                <div className="d-flex">
                                                    <CardContent variant="body">
                                                        <Typography variant="h5" style={{ color: "#555" }}>{data.length}</Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Link to="/users">
                                                            <Button variant="contained" size="small" color="primary">
                                                                V<span className="span">oir tout</span>
                                                            </Button>
                                                        </Link>
                                                    </CardActions>
                                                </div>
                                            </Card>
                                        </Grid>

                                        <Grid sm={4} xs={4} className={classes.stat} id="stat">
                                            <Card>
                                                <CardHeader
                                                    title="Users"
                                                    avatar={
                                                        <Group />
                                                    }
                                                    subheader="Nombre total des utilisateurs"
                                                />
                                                <div className="d-flex">
                                                    <CardContent variant="body">
                                                        <Typography variant="h5" style={{ color: "#555" }}>{data.length}</Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Link to="/users">
                                                            <Button variant="contained" size="small" color="primary">
                                                                V<span className="span">oir tout</span>
                                                            </Button>
                                                        </Link>
                                                    </CardActions>
                                                </div>
                                            </Card>
                                        </Grid>

                                        <Grid sm={4} xs={4} className={classes.stat}>
                                            <Card>
                                                <CardHeader
                                                    title="Users"
                                                    avatar={
                                                        <Group />
                                                    }
                                                    subheader="Nombre total des utilisateurs"
                                                />
                                                <div className="d-flex">
                                                    <CardContent variant="body">
                                                        <Typography variant="h5" style={{ color: "#555" }}>{data.length}</Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Link to="/users">
                                                            <Button variant="contained" size="small" color="primary">
                                                                V<span className="span">oir tout</span>
                                                            </Button>
                                                        </Link>
                                                    </CardActions>
                                                </div>
                                            </Card>
                                        </Grid>

                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid sm={12} xs={12}>
                        <Card className={classes.courbStatist} style={{ padding: "10px", marginTop: "10px" }}>
                            <Grid sm={6} xs={6} className={classes.courb} id="courb">
                                <Card>
                                    <CardHeader
                                        title="Statistics postes"
                                        avatar={
                                            <PostAddTwoTone />
                                        }
                                        subheader="Représentation graphique de postes"
                                    />
                                    <CardContent variant="body">
                                        <Bar data={data4} options={options2} />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid sm={6} xs={6} className={classes.courb} id="statics">
                                <Card>
                                    <CardHeader
                                        title="Statistics achats"
                                        avatar={
                                            <PeopleRounded />
                                        }
                                        subheader="Représentation graphique d'achats"
                                    />
                                    <CardContent variant="body">
                                        <Line
                                            data={data5}
                                            options={options}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid >
        </div >
    )
}

export default Dashboard;