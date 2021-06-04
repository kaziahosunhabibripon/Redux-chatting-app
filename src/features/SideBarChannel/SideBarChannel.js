import React from 'react';
import { useDispatch } from 'react-redux';
import './SideBarChannel.css';
import {setChannelInfo} from '../counter/appSlice';
const SideBarChannel = ({id, channelName}) => {
    const dispatch = useDispatch();
    return (
        <div className="sideBarChannel" onClick={()=> dispatch
        (setChannelInfo({
            channelId: id,
            channelName: channelName,
        })
        )
        }
        >
            <h4>
                <span className="sidebarChannel_hash">#</span>
                {channelName}
            </h4>    
        </div>
    );
};

export default SideBarChannel;