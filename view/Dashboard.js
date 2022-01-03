import Menu from "../includes/Menu";
import HeaderComponent from "../includes/HeaderComponent";
import "../css/Dashboard.css";
import { Line, Bar, Pie } from "react-chartjs-2";
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

    const data3 = {

        labels: ['Nov 01', 'Nov 02', 'Nov 03', 'Nov 04', 'Nov 05'],

        datasets: [
            {

                label: 'Garages',
                data: [11, 15, 10, 15],
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'silver'],
                borderColor: 'silver',
                width: "23px",
                fill: false,
            },
        ],
    };


    return (
        <div className="dashboard">
            <div className="col-12">
                <HeaderComponent />
                <div className="d-flex">
                    <div className="col-2 mt-5">
                        <Menu />
                    </div>
                    <div className="col-10 mt-5">
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
                                                <td>Nombre total de clients <br /> 78</td>
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
                                    <div className="col-md-6">
                                        <Bar data={data4} options={options2} />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <Line
                                                data={data5}
                                                options={options}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 section3">
                                <div className="d-flex">
                                    <div className="col-md-3">
                                        <div className="card pie">
                                            <Pie
                                                data={data3}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card">
                                            <div className="card-body">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <td>
                                                                <i>50 % Achat</i>
                                                                <div className="progress progress-md">
                                                                    <div className="progress-bar bg-yellow" role="progressbar" style={{ width: '50%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <i>90 % Ventes</i>
                                                                <div className="progress progress-md">
                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <i>40 % uers connectés</i>
                                                                <div className="progress progress-md">
                                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5>Admin</h5>
                                                <i className="fa fa-gear fa-spin fa-2x"></i>
                                                <div>
                                                    <button className="btn btn-primary">Détail</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;