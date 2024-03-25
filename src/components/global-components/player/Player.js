'use client'

import ReactPlayer from "react-player";
import React from "react";

export default class Player extends React.Component {
    render() {
        return <ReactPlayer
                    width="180px"
                    height="445px"
                    style={{marginLeft: '13px'}}
                    url={'https://youtube.com/shorts/IpDJ8hFgxlU'}
                    controls={true}
                    playing={true}
                    light={true}
                    pip={true}
                />    
    }
}
