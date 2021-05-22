import "./Main.css"
import Charts from "../charts/Charts"
import React ,{useState, useEffect} from 'react'

const Main = () => {

    const [users, setUsers] = useState([]);
    const getData = async () =>{
        const response = await fetch("http://dummy.restapiexample.com/api/v1/employees");
        setUsers(await response.json())    
    }
    useEffect(() => {
        getData(); 
    }, [])
    return (
        <main>
            <div className="main-container">
                <div className="main_title">
                    <i class="fas fa-snowman"></i>
                    <div className="greeting">
                        <h1>Hey,There</h1>
                        <p>Welcome To your Admin Dashboard</p>
                    </div>
                </div>

                <div className="main_cards">
                    <div className="card">
                        {/* <i className="fa fa-user-o fa-2x text-lightblue"></i> */}
                        <div className="inner_card">
                            <p className="text-primary-p">Number of Subscribe</p>
                            <span className="font-bold text-tittle">578</span>
                        </div>
                    </div>
                    <div className="card">
                        {/* <i className="fa fa-calender fa-2x text-red"></i> */}
                        <div className="inner_card">
                            <p className="text-primary-p">Times of Watching</p>
                            <span className="font-bold text-tittle">248</span>
                        </div>
                    </div>
                    <div className="card">
                        {/* <i className="fa fa-video-camera fa-2x text-yellow"></i> */}
                        <div className="inner_card">
                            <p className="text-primary-p">No. of videos</p>
                            <span className="font-bold text-tittle">340</span>
                        </div>
                    </div>
                    <div className="card">
                        {/* <i className="fa fa-thumbs-up fa-2x text-green"></i> */}
                        <div className="inner_card">
                            <p className="text-primary-p">No. of likes</p>
                            <span className="font-bold text-tittle">645</span>
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="charts_left">
                        <div className="charts_left_title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Calafornia</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Charts/>
                    </div>
                    {/* {
                        users.map((curData)=>{
                            return()
                        })
                    } */}
                    <div className="charts_right">
                        <div className="charts_right_title">
                            <div>
                                <h1>Stat Reports</h1>
                                <p>Calafornia, USA</p>
                            </div>
                            <i className="fa fa-use"></i>
                        </div>
                        <div className="charts_right_cards">
                            <div className="cards c1">
                                <h1>Income</h1>
                                <p>$75,3000</p>
                            </div>
                            <div className="cards c2">
                                <h1>Sales</h1>
                                <p>$175,3000</p>
                            </div>
                            <div className="cards c3">
                                <h1>Users</h1>
                                <p>$39,3000</p>
                            </div>
                            <div className="cards c4">
                                <h1>Order</h1>
                                <p>3000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;