import React from "react";
import "../../css/Home.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
const Photographyresults = () => {
  return (
    <>
      <div className="container photoStories_home" style={{ paddingTop: "8%" }}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-10 col-xs-4 text-center">
            <p className="photoStoriesHead_home">
              Portray your fascinating adventures with exquisite photographs by
              us!
            </p>
          </div>
        </div>
        <div className="row photoStoryRow_home">
          <div className="col-1 extraCol_home"></div>
          <div className="col-md-3 col-xs-3">
            <span className="fa fa-adjust fa-2x" style={{ color: "steelblue" }}>
              {" "}
            </span>{" "}
            <span
              className="ml-3"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Easy
            </span>
            <p className="mt-4">
              Simply pick a photography package, and have an experienced
              photographer booked instantly. Receive edited photos within 48hrs
              after the photoshoot. It's just that easy!
            </p>
          </div>
          <div className="col-1 extraCol_home"></div>
          <div className="col-md-3 col-xs-3">
            <span style={{ color: "steelblue" }}>
              <ThumbUpIcon fontSize="large" />{" "}
            </span>{" "}
            <span
              className="ml-2"
              style={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Top Photographers Only
            </span>
            <p className="mt-4">
              We know quality is important to you, that's why only 2 out of 10
              photographers who apply get accepted, and all photos delivered to
              you are fine-tuned by our editing team.
            </p>
          </div>
          <div className="col-1 extraCol_home"></div>
          <div className="col-md-3 col-xs-3">
            <span style={{ color: "steelblue" }}>
              <AccountBalanceWalletIcon fontSize="large" />
            </span>{" "}
            <span
              className="ml-3"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Save money
            </span>
            <p className="mt-4">
              We reduce the costs to photographers and fill the gaps in their
              calendars. That's why our flat-fee packages are fair to everyone
              and ensure you always get great photos at the best price.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Photographyresults;
