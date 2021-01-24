import React from "react";

export default function Lists() {
  return (
    <div>
      <div className="prose prose-sm prose-green">
        <p>
          I like to write lists as a less formal way of expressing my ideas on
          many subjects without pressure of extensive writing.
        </p>
        <p>
          This list of lists is an endless work in progress, so come back to
          check frequently.
        </p>
        <h3>Books</h3>
        <ul>
          <li>
            <a href="https://www.amazon.com/Last-Empire-Final-Soviet-Union/dp/0465046711">
              The Last Empire: The Final Days of the Soviet Union
            </a>
            <ul>
              <li>Little known secret about me: I'm a huge history nerd.</li>
              <li>
                I don't believe in Marxist ideas, but learning about societies
                inspired by those ideas is very interesting to me.
              </li>
              <li>
                I figure that learning about systems and ideas so different to
                the ones I am exposed to daily is just very fascinating to me.
              </li>
              <li>
                I have a particular interest in the Soviet Union for some
                reason. I guess it's just interesting to me how a superpower can
                collapse from one year to the next.
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.amazon.com/Essentialism-Disciplined-Pursuit-Greg-McKeown/dp/0804137382">
              Essentialism: The Disciplined Pursuit of Less
            </a>
            <ul>
              <li>
                This is a time-management bible for folks who want to reach
                their goals.
              </li>
              <li>
                Thanks JC for forever impacting my life with this book rec.
              </li>
              <li>Do less, but better.</li>
            </ul>
          </li>
        </ul>

        <h3>Music</h3>
        <ul>
          <li>
            <a href="https://open.spotify.com/playlist/6Pt9dnYstk7x8NcqTZJ00V?si=zMOV0dYIRmqThhKWhCJs7Q">
              My Life Mixtape
            </a>
            <ul>
              <li>
                Put simply, every song in this playlist has significant personal
                meaning.
              </li>
              <li>
                Name me a song in this playlist and I can tell you exactly the
                memory it brings back.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
