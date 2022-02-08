import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1489364686436974606"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="murata187"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/murata187"}
          options={{ text: "#reactjs with #java is awesome", via: "murata187" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
