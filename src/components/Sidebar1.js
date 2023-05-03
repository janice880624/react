import React from "react";
import styled from "styled-components";
import headphoto from "../../img/head.jpg";
import "./Sidebar.css";
import { BsPieChart } from "react-icons/bs";
import { BiFolder, BiBookOpen, BiShoppingBag } from "react-icons/bi";
import { TbBrandWechat, TbNotebook } from "react-icons/tb";
import { FaPeopleArrows, FaUser } from "react-icons/fa";
import { MdSwitchAccount} from "react-icons/md";

const Account = styled.div`
    text-align: center;
    display: flex;
    flow-wrap: nowrap;
    align-items: center;
    p{
        margin-left: 10px;
        font-size: 20px;
    }
`
const Favorites = styled.div`
    text-align: left;
    justify-content: center;
    div{
        display: flex;
        flow-wrap: nowrap;
        margin: 6px 0px;
        p {
            margin: 4px;
            margin-right: 10px;
            font-size: 18px;
        }
        ul{
            margin: 0;
            padding: 0;
            margin-left: 30px;
            li{
                margin: 4px;
                font-size: 18px;
            }
        }
    }
`
const Dashboards = styled.div`
    text-align: left;
    justify-content: center;
    margin-top: 20px;
    div{
        div{
            display: flex;
            flow-wrap: nowrap;
            align-items: center;
            margin: 6px 0px;
            margin-left: 10px;
            p{
                margin-left: 10px;
            }
        }
        p {
            margin: 4px;
            margin-right: 10px;
            font-size: 18px;
        }
        ul{
            margin: 0;
            padding: 0;
            margin-left: 20px;
            li{
                margin: 4px;
                font-size: 18px;
            }
        }
    }
`
const Pages = styled.div`
    text-align: left;
    justify-content: center;
    margin-top: 20px;
    div{
        div{
            display: flex;
            flow-wrap: nowrap;
            align-items: center;
            margin: 6px 0px;   
            margin-left: 10px;
        }
        p {
            margin: 4px;
            margin-right: 10px;
            font-size: 18px;
        }
        div{
            p{
                margin-left: 10px;
            }
            li{
                list-style-type: none;
                font-size: 18px;
            }
        }
    }
`

function Sidebar(){
    return (
        <div>
            <Account>
                <img src={headphoto} alt="headphoto" className="headphoto"/>
                <p> Username </p>
            </Account>

            <Favorites>
                <div>
                    <p style={{color: "rgba(0, 0, 0, 0.6)", fontWeight: "500"}}> Favorites </p>
                    <p style={{color: "rgba(0, 0, 0, 0.4)", fontWeight: "500"}}> Recently </p>
                </div>
                <div>
                    <ul>
                        <li> Overview </li>
                        <li> Project </li>
                    </ul>
                </div>
            </Favorites>

            <Dashboards>
                <div>
                    <p style={{color: "rgba(0, 0, 0, 0.4)", fontWeight: "500"}}> Dashboards </p>
                    <div>
                        <i className="arrow right"></i>
                        <BsPieChart />
                        <p> Default </p>
                    </div>
                    <div>
                        <i className="arrow right"></i>
                        <BiShoppingBag />
                        <p> E-commerce </p>
                    </div>
                    <div>
                        <i className="arrow right"></i>
                        <BiFolder />
                        <p> Projects </p>
                    </div>
                    <div>
                        <i className="arrow right"></i>
                        <BiBookOpen />
                        <p> Online Courses </p>
                    </div>
                </div>
            </Dashboards>

            <Pages>
                <div>
                    <p style={{color: "rgba(0, 0, 0, 0.4)", fontWeight: "500"}}> Pages </p>
                    <div>
                        <i className="arrow right"></i>
                        <FaUser />
                        <p> User Profile </p>
                    </div>
                    <div>
                        <i className="arrow right"></i>
                        <MdSwitchAccount />
                        <p> Account </p>
                    </div>
                    <div>
                        <i className="arrow right"></i>
                        <FaPeopleArrows />
                        <p> Corporate </p>
                    </div>
                    <div>
                        <i className="arrow right"></i>
                        <TbNotebook />
                        <p> Blog </p>
                    </div>
                    <div>
                        <i className="arrow right"></i>
                        <TbBrandWechat />
                        <p> Social </p>
                    </div>
                </div>
            </Pages>
        </div>
    );
}

export default Sidebar;
