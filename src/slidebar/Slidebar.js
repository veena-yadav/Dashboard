import "./slidebar.css"

const Slidebar = ({ sidebarOpen, closeSlidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_img">
                <i class="fab fa-accusoft"></i>
                    <h1>Coderbite</h1>
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSlidebar()} />

            </div>
            <div className="sidebar_menu">
                <div className="sidebar_link active_menu"  >
                    <i className="fa fa-home"></i>
                    <a href="#">Dashnboard</a>
                </div>
                <h2>MNG</h2>
                <div className="sidebar_link "  >
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Admin Managment</a>
                </div>
                <div className="sidebar_link"  >
                <i class="fas fa-address-book"></i>
                    <a href="#">Company Managment</a>
                </div>
                <div className="sidebar_link " >
                    <i className="fa fa-wrench"></i>
                    <a href="#">Employee Managment</a>
                </div>
                <div className="sidebar_link " >
                    <i className="fa fa-archive"></i>
                    <a href="#">Warehouse</a>
                </div>
                <div className="sidebar_link " >
                <i class="fas fa-handshake"></i>
                    <a href="#">Contracts</a>
                </div>
                <h2>Leave</h2>
                <div className="sidebar_link " >
                    <i className="fa fa-question"></i>
                    <a href="#">Request</a>
                </div>
                <div className="sidebar_link " >
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Leave</a>
                </div>
                <div className="sidebar_link " >
                    <i className="fa fa-calender-check-o"></i>
                    <a href="#">Special Day</a>
                </div>
                <div className="sidebar_link " >
                    <i className="fa fa-files-o"></i>
                    <a href="#">Apply for leave </a>
                </div>
                <h2>PAYROLL</h2>
                <div className="sidebar_link " >
                    <i className="fa fa-money"></i>
                    <a href="#">Payroll</a>
                </div>
                <div className="sidebar_link " >
                    <i className="fa fa-files-briefcase"></i>
                    <a href="#">Paygrade </a>
                </div>
                <div className="sidebar_logout " >
                    <i className="fa fa-power-off"></i>
                    <a href="#">Paygrade </a>
                </div>
            </div>
        </div>
    )
}

export default Slidebar;