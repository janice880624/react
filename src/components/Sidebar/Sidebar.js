import React from "react";
import styled from "styled-components";
import headphoto from "../../img/head.jpg";
import "./Sidebar.css";
import { BsPieChart } from "react-icons/bs";
import { BiFolder, BiBookOpen, BiShoppingBag } from "react-icons/bi";
import { TbBrandWechat, TbNotebook } from "react-icons/tb";
import { FaPeopleArrows, FaUser } from "react-icons/fa";
import { MdSwitchAccount} from "react-icons/md";
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

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

function Sidebar(){
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <div>
                <Account>
                    <img src={headphoto} alt="headphoto" className="headphoto"/>
                    <p> Username </p>
                </Account>
            </div>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <BsPieChart />
                            </ListItemIcon>
                            <ListItemText primary="Default" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <BiShoppingBag />
                            </ListItemIcon>
                            <ListItemText primary="E-commerce" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <BiFolder />
                            </ListItemIcon>
                            <ListItemText primary="Projects" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <BiBookOpen />
                            </ListItemIcon>
                            <ListItemText primary="Online Courses" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>

            <Divider />

            <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <FaUser />
                        </ListItemIcon>
                        <ListItemText primary="User Profile" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Overview" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Projects" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Campaigns" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Documents" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Followers" />
                            </ListItemButton>                          
                        </List>
                    </Collapse>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MdSwitchAccount />
                            </ListItemIcon>
                            <ListItemText primary="Account" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FaPeopleArrows />
                            </ListItemIcon>
                            <ListItemText primary="Corporate" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TbNotebook />
                            </ListItemIcon>
                            <ListItemText primary="Blog" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TbBrandWechat />
                            </ListItemIcon>
                            <ListItemText primary="Social" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
}

export default Sidebar;
