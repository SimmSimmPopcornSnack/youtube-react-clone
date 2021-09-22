import React from "react";
import "./Comment.scss";
import { Button, Image } from "semantic-ui-react";
import { Rating } from "../../../components/Rating/Rating";
import ReactLinkify from "react-linkify";

export function Comment(props) {
    if(!props.comment) {
        return <div/>;
    }
    const topLevelComment = props.comment.snippet.topLevelComment;
    const {authorProfileImageUrl, authorDisplayName, textOriginal} = topLevelComment.snippet;
    const textParagraphs = textOriginal.split("\n").map((para, index) => 
        <p><ReactLinkify>{para}</ReactLinkify></p>
    );
    const likeCount = topLevelComment.snippet.likeCount;

    return (
        <div className="comment">
            <Image className="user-image" src={authorProfileImageUrl} circular/>
            <div>
                <div className="user-name">{authorDisplayName}</div>
                <span>{textParagraphs}</span>
                <div className="comment-actions">
                    <Rating likeCount={likeCount}/><Button size='mini' compact>REPLY</Button>
                </div>
            </div>
        </div>
    );
}
