'use client'

import ReactPlayer from "react-player";
import React from "react";

export default class Player extends React.Component {
    render() {
        return <ReactPlayer
                    width="180px"
                    height="445px"
                    style={{marginLeft: '13px'}}
                    url={'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'}
                    controls={true}
                    playing={true}
                    light={true}
                    pip={true}
                />    
    }
}
