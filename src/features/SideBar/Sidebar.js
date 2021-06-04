import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { selectUser } from '../counter/userSlice';
import db, { auth } from '../firebaseConfig/firebase';

const Sidebar = () => {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);
    useEffect(() =>{
        db.collection('channels').onSnapshot(snapshot =>(
            setChannels(snapshot.docs.map(doc=>({
                id: doc.id,
                channel: doc.data(),
            })))
        )
        );
    }, []);

    const handleAddChannel = ()=>{
        const channelName = prompt("Enter channel name");
        if(channelName){
            db.collection('channels').add({
                channelName: channelName,
            });
        }
    };
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

                    <AddIcon onClick={handleAddChannel} className="sidebar_addChannel" />
                </div>
                <div className="sidebar_channelsList">
                    {
                    channels.map(({id, channel}) =>(
                        <SideBarChannel key={id} id={id} channelName={channel.channelName}/>
                    ))
                    }
                   
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
                <Avatar onClick={()=>auth.signOut()} src={user.photo}/>
                <div className="sidebar_profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>{user.uid.substring(0,5)}</p>
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