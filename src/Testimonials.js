import imageDaniel from "./images/image-daniel.jpg";
import imageJoanathan from "./images/image-jonathan.jpg";
import imageJeanette from "./images/image-jeanette.jpg";
import imagePatrick from "./images/image-patrick.jpg";
import imageKira from "./images/image-kira.jpg";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="main-container">
      <div className="the-last-column">
        <div className="two-columns">
          <div className="section-top">
            <div className="section-top-first"></div>

            <div className="daniel-container">
              <div className="daniel-status-with-picture">
                <img className="daniel-picture" src={imageDaniel} alt="" />
                <div className="daniel-status">
                  <div className="name-title-top">Daniel Clifford</div>
                  <div className="name-subtitle-top">Verified Graduate</div>
                </div>
              </div>
              <div className="section-top-about-daniels">
                I received a job offer mid-course, and the subjects I learned
                were current, if not more so, in the company I joined. I
                honestly feel I got every penny’s worth.
              </div>
              <div className="section-top-paragraph">
                “ I was an EMT for many years before I joined the bootcamp. I’ve
                been looking to make a transition and have heard some people who
                had an amazing experience here. I signed up for the free intro
                course and found it incredibly fun! I enrolled shortly
                thereafter. The next 12 weeks was the best - and most grueling -
                time of my life. Since completing the course, I’ve successfully
                switched careers, working as a Software Engineer at a VR
                startup. ”
              </div>
            </div>

            <div className="section-top-first">
              <div className="jonathan-container">
                <div className="jonathan-status-with-picture">
                  <img
                    className="jonathan-picture"
                    src={imageJoanathan}
                    alt=""
                  />
                  <div className="daniel-status">
                    <div className="jonathan-name-title-top">
                      Jonathan Walters
                    </div>
                    <div className="jonathan-name-subtitle-top">
                      Verified Graduate
                    </div>
                  </div>
                </div>
                <div className="section-top-about-daniels">
                  The team was very supportive and kept me motivated
                </div>
                <div className="jonathan-section-top-paragraph">
                  “ I started as a total newbie with virtually no coding skills.
                  I now work as a mobile engineer for a big company. This was
                  one of the best investments I’ve made in myself. ”
                </div>
              </div>
            </div>
          </div>

          <div className="section-second">
            <div className="jeanette">
              <div className="jeanette-status-with-picture">
                <img className="jeanette-picture" src={imageJeanette} alt="" />
                <div className="jeanette-status">
                  <div className="jeanette-name-title-top">Jeanette Harmon</div>
                  <div className="jeanette-name-subtitle-top">
                    Verified Graduate
                  </div>
                </div>
              </div>
              <div className="section-top-about-jeanette">
                An overall wonderful and rewarding experience
              </div>
              <div className="section-top-paragraph-jeanette">
                “ Thank you for the wonderful experience! I now have a job I
                really enjoy, and make a good living while doing something I
                love. ”
              </div>
            </div>

            <div className="section-top-first">
              <div className="patrick-container">
                <div className="patrick-status-with-picture">
                  <img className="patric-picture" src={imagePatrick} alt="" />
                  <div className="patrick-status">
                    <div className="patrick-name-title-top">Patrick Abrams</div>
                    <div className="patrick-name-subtitle-top">
                      Verified Graduate
                    </div>
                  </div>
                </div>
                <div className="section-top-about-patrick">
                  Awesome teaching support from TAs who did the bootcamp
                  themselves. Getting guidance from them and learning from their
                  experiences was easy
                </div>
                <div className="patrick-section-top-paragraph">
                  “ The staff seem genuinely concerned about my progress which I
                  find really refreshing. The program gave me the confidence
                  necessary to be able to go out in the world and present myself
                  as a capable junior developer. The standard is above the rest.
                  You will get the personal attention you need from an
                  incredible community of smart and amazing people. ”
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="last-second">
          <div className="kira">
            <div className="kira-status-with-picture">
              <img className="kira-picture" src={imageKira} alt="" />
              <div className="kira-status">
                <div className="kira-name-title-top">Jeanette Harmon</div>
                <div className="kira-name-subtitle-top">Verified Graduate</div>
              </div>
            </div>
            <div className="section-top-about-kira">
              Such a life-changing experience. Highly recommended!
            </div>
            <div className="section-top-paragraph-kira">
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
