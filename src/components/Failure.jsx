import React from "react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import WriteButton from "./WriteButton";
import { withAppContext } from "./AppContext";

const TweetButton = ({ words }) => {
  const href = `https://twitter.com/intent/tweet?text=I+wrote+${words}+words+using+The+Most+Dangerous+Writing+App+-+until+it+deleted+everything+.+%23MDWA&url=https%3A%2F%2Fmaebert.github.io%2Fthemostdangerouswritingapp%2F`;
  const label = `I wrote ${words} words using The Most Dangerous Writing App - until it deleted everything.`;
  return (
    <a className="tweet" href={href}>
      {label}
    </a>
  );
};

const Failure = ({ limit, type, lost, words }) => {
  return (
    <TransitionGroup>
      {lost && (
        <CSSTransition classNames="failure" timeout={{ enter: 500, exit: 100 }}>
          <div className="failure" key="failScreen">
            <div className="inner">
              <h3>You almost did it!</h3>
              <div className="msg">A moment of self-judgement made you lose {words} words.</div>
              <WriteButton
                ghost
                noPanel
                color="white"
                label="Try
            Again"
                type={type}
                limit={limit}
              />
            </div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default withAppContext(Failure);
