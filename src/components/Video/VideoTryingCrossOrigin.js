import { TYPES } from "@babel/types";
import React, { useEffect, useRef } from "react";
import { Component, PropTypes } from "react";
import "./Video.scss";

const BASE_EMBED_URL = "https://www.youtube.com/embed/";
// let loadYT;

// export default class Video extends React.Component {
//     componentDidMount() {
//         if(!loadYT) {
//             loadYT = new Promise((resolve) => {
//                 const tag = document.createElement('script');
//                 tag.src = 'https://www.youtube.com/iframe_api';
//                 const firstScriptTag = document.getElementsByTagName('script')[0];
//                 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//                 window.onYouTubeIframeAPIReady = () => resolve(window.YT);
//             })
//         }
//         loadYT.then((YT) => {
//             this.player = new YT.Player(this.youtubePlayerAnchor, {
//                 height: 315,
//                 width: 560,
//                 videoId: this.props.id,
//                 events: {
//                     'onReady': this.onPlayerReady,
//                     'onStateChange': this.onPlayerStateChange
//                 }
//             });
//         });
//     }

//     onPlayerReady(event) {
//         // this.player.mute();
//         event.target.playVideo();
//         event.target.mute();
//         // setTimeout(function () {
//         //     console.log("10 seconds passed");
//         //     event.target.unMute();
//         // }, 10000);
//         // player.mute();
//     }
//     onPlayerStateChange = (e) => {
//         if(typeof this.props.onStateChange == 'function') {
//             this.props.onStateChange(e);
//         }
//     };

//     render () {
//         return (
//             <section className="youtubeComponent-wrapper">
//                 <div ref={(r) => { this.youtubePlayerAnchor = r}} />
//             </section>
//         );
//     }
// }

export function Video(props) {
    const videoElement = useRef(null);
    if(!props.id) {
        return null;
    }
    const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=1&mute=1&enablejsapi=1`;
    // const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=1`;

    // let unmute = () => {
    //     const event = new KeyboardEvent('keydown', {
    //         'KeyCode': 32,
    //         'which': 32,
    //     });
    //     // videoElement.current.dispatchEvent(event);
    //     // console.log(event);
    // };

    // var player;

    let unmute = (e) => {
        const event = new KeyboardEvent('keydown', {
            'KeyCode': 32,
            'which': 32,
        });
        // e.target.contentWindow.document.addEventListener('keydown', this.onKeydown)
        e.target.contentWindow.document.dispatchEvent(event);
        // videoElement.current.dispatchEvent(event);
        // console.log(event);
    };

    return (
        // <iframe width={"560"} height={"315"} src={embedUrl} frameBorder="0"
        //         allow="autoplay; encrypted-media" allowFullScreen title={"video"} />

    //     // <iframe width={"560"} height={"315"} src={embedUrl} frameBorder="0"
    //     //     allow="autoplay; encrypted-media" allowFullScreen title={"video"}
    //     //     ref={videoElement} onLoad={unmute.bind(this, "video")} />

        <iframe width={"560"} height={"315"} src={embedUrl} frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen title={"video"}
            ref={videoElement} onLoad={unmute} />
    );
}

// // var player;

// // function onYouTubeIframeAPIReady() {
// //     player = new YT.Player('ytplayer', {
// //         events: {
// //             'onReady': onPlayerReady,
// //         }
// //     });
// // }

// // function onPlayerReady(event) {
// //     player.unMute();
// // }

// import React, { useRef } from "react";
// import YouTube from "react-youtube";

// // ...

// export function Video(props) {
//   // Initialises a 'ref' for the player
//   const playerRef = useRef(null);

//   // You can now access the player in your component
//   // by using "playerRef.current.internalPlayer.API_METHOD"
//   // ... See below for an example:

//   // Our own custom function to pause the video
//   const pauseVideo = () => {
//     playerRef.current.internalPlayer.pauseVideo();
//   };

//   return (
//     <>
//       {/* Rest of your component */}
//       <YouTube
//         id="9Wna8flXwLs"
//         // Your other props
//         ref={playerRef} // This sets the ref above to be linked to the player now
//       />
//       {/* Using a button to pause the video, for example */}
//       <button onClick={pauseVideo}>Pause Video</button>
//     </>
//   );
// };