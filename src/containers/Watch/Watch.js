import React from "react";
import "./Watch.scss";
import { Video } from "../../components/Video/Video";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";

export class Watch extends React.Component {
    render() {
        return (
            <>
                <VideoPreview horizontal={true}/>
                <VideoPreview/>
            </>
            // <div style={{maxWidth: "80%"}}>
            //     <Video id="-7fuHEEmEjs"/>
            // </div>
        );
    }
}
