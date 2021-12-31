import Menu from "../includes/Menu";
import HeaderComponent from "../includes/HeaderComponent";
import "../css/Dashboard.css";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function Dashboard() {

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

    return (
        <div className="dashboard">
            <div className="col-12">
                <HeaderComponent />
                <div className="d-flex">
                    <div className="col-2">
                        <Menu />
                    </div>
                    <div className="col-10">
                        <div className="col-md-12">
                            <div className="col-md-12 row section1 container" style={{ paddingLeft: '0', paddingRight: '0' }}>
                                <div className="col-md-4 stat users">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr style={{ textAlign: 'center' }}>
                                                <td>
                                                    <i className="fa fa-users"></i>
                                                </td>
                                            </tr>
                                            <tr style={{ textAlign: 'center' }}>
                                                <td>Nombre total de clients <br/> 78</td>
                                            </tr>
                                            <tr style={{ textAlign: 'center' }}>
                                                <td>Voir tout</td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className="col-md-4 stat">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr style={{ textAlign: 'center' }}>
                                                <td>
                                                    <i className="fa fa-user-circle"></i>
                                                </td>
                                            </tr>
                                            <tr style={{ textAlign: 'center' }}>
                                                <td>Nombre total de users</td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className="col-md-4 stat">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr style={{ textAlign: 'center' }}>
                                                <td>
                                                    <i className="fa fa-gear"></i>
                                                </td>
                                            </tr>
                                            <tr style={{ textAlign: 'center' }}>
                                                <td>Nombre total de admins et sous admins</td>
                                            </tr>
                                        </thead>
                                    </table>

                                </div>
                                <div className="col-md-4 stat">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr style={{ textAlign: 'center' }}>
                                                <td>
                                                    <i className="fa fa-dollar"></i>
                                                </td>
                                            </tr>
                                            <tr style={{ textAlign: 'center' }}>
                                                <td>Gestion monétaire</td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-12 section2">
                                <div className="d-flex">
                                    <div className="col-md-7">
                                        <Bar data={data4} options={options2} />
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 section3 section3">Graphiques ultra</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;