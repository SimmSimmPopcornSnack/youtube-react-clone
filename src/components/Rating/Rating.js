import React from "react";
import "./Rating.scss";
import { Icon, Progress } from "semantic-ui-react";
import { getShortNumberString } from "../../services/number/number-format";

export function Rating(props) {
    let rating = null;
    let likeCount = props.likeCount !== 0 ? props.likeCount : null;
    let dislikeCount = null;
    if(props.likeCount && props.dislikeCount) {
        const amountLikes = parseFloat(props.likeCount);
        const amountDislikes = parseFloat(props.dislikeCount);
        const percentagePositiveRatings = 100. * (amountLikes / (amountLikes + amountDislikes));

        // Now that we have calculated the percentage, we brind the numbers into a better readable format
        likeCount = getShortNumberString(amountLikes);
        dislikeCount = getShortNumberString(amountDislikes);
        rating = <Progress className="progress" percent={percentagePositiveRatings} size="tiny"/>
    }

    return(
        <div className="rating">
            <div className="thumbs-up">
                <Icon name="thumbs up outline"/>
                <span>{likeCount}</span>
            </div>
            <div className="thumbs-down">
                <Icon name="thumbs down outline"/>
                <span>{dislikeCount}</span>
            </div>
            {rating}
        </div>
    );
}
