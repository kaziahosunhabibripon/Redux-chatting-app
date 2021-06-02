import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SideBarChannel from '../SideBarChannel/SideBarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h3>Lazy Codder</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_header">
                        <h4> <ExpandMoreIcon /> This is Channel</h4>
                    </div>

                    <AddIcon className="sidebar_addChannel" />
                </div>
                <div className="sidebar_channelsList">
                    <SideBarChannel />
                    <SideBarChannel />
                    <SideBarChannel />
                    <SideBarChannel />
                </div>
            </div>
            <div className="sidebar_voice">
                <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large"/>
            </div>
        </div>
    );
};

export default Sidebar;