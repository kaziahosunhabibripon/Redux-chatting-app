import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SideBarChannel from '../SideBarChannel/SideBarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedICon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';
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
                <div className="sidebar_voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar_voiceIcons">
                    <InfoOutlinedICon/>
                    <CallIcon/>
                </div>
            </div>
            <div className="sidebar_profile">
                <Avatar src="https://avatars.githubusercontent.com/u/34180396?s=400&u=33c37e1de46508de23b1c5a2f7de06cd0b657edb&v=4"/>
                <div className="sidebar_profileInfo">
                    <h3>@KAHaR</h3>
                    <p>#thisIsMyId</p>
                </div>
                <div className="sidebar_profileIcons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;