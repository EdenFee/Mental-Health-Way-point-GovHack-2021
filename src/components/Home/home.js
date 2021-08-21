import "./home.css";
import "./nicepage.css";
import { useEffect, useState } from "react";
import Health from "./health";
import { Chart } from "../Chart";

function Home() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchHealthData = async () => {
      const data = Health();

      setChartData({
        labels: data.map((row) => row.description),
        datasets: [
          {
            // label: "Numbers",
            data: data.map((row) => `${row.estimated / 1000}`),
            backgroundColor: ["#DB545A"],
          },
        ],
      });
    };
    fetchHealthData();
  }, []);

  return (
    <div>
      <section
        className="u-align-center u-black u-clearfix u-section-1"
        id="carousel_5e69"
      >
        <div className="healthChart">
          <Chart
            chartData={chartData}
            title="Common New Zealand Struggles"
            yTitle="Estimated Number"
          />
        </div>
        <div className="u-clearfix u-sheet u-sheet-1">
          <h2 className="u-custom-font u-font-merriweather u-text u-text-default u-text-palette-2-base u-text-1">
            Reaching out
          </h2>
          <img
            className="u-image u-image-default u-image-1"
            src="../images/datavisexample.webp"
            alt=""
            data-image-width="940"
            data-image-height="587"
          ></img>
          <h5 className="u-custom-font u-font-ubuntu u-text u-text-palette-2-base u-text-2">
            '"Sexy quote"
          </h5>
          <p className="u-align-justify u-text u-text-grey-40 u-text-3">
            {" "}
            Article evident arrived express highest men did boy. Mistress
            sensible entirely am so. Quick can manor smart money hopes worth
            too. Comfort produce husband boy her had hearing.&nbsp;Sit amet
            massa vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus
            arcu felis bibendum ut. Consectetur adipiscing elit duis tristique
            sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla
            urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel
            risus commodo viverra. Ipsum a arcu cursus vitae congue. Imperdiet
            dui accumsan sit amet nulla facilisi. Tincidunt dui ut ornare lectus
            sit. Phasellus faucibus scelerisque eleifend donec pretium vulputate
            sapien nec.&nbsp;Eget gravida cum sociis natoque.&nbsp;
          </p>
        </div>
      </section>
      <section className="u-black u-clearfix u-section-2" id="carousel_e222">
        <div className="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
          <div className="u-border-1 u-border-palette-2-base u-line u-line-horizontal u-line-1"></div>
          <h2 className="u-align-center u-custom-font u-font-merriweather u-text u-text-palette-2-base u-text-1">
            Let us know you
          </h2>
          <span className="u-icon u-icon-circle u-text-white u-icon-1">
            <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 512 512"
              styles=""
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#svg-6592"
              ></use>
            </svg>
            <svg
              className="u-svg-content"
              viewBox="0 0 512 512"
              x="0px"
              y="0px"
              id="svg-6592"
              styles="enable-background:new 0 0 512 512;"
            >
              <g>
                <g>
                  <path d="M374.108,373.328c-7.829-7.792-20.492-7.762-28.284,0.067L276,443.557V20c0-11.046-8.954-20-20-20    c-11.046,0-20,8.954-20,20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-0.067c-7.83,7.793-7.859,20.456-0.068,28.285    l104,104.504c0.006,0.007,0.013,0.012,0.019,0.018c7.792,7.809,20.496,7.834,28.314,0.001c0.006-0.007,0.013-0.012,0.019-0.018    l104-104.504C381.966,393.785,381.939,381.121,374.108,373.328z"></path>
                </g>
              </g>
            </svg>
          </span>
          <h5 className="u-align-center u-custom-font u-font-ubuntu u-text u-text-palette-2-base u-text-2">
            I Feel...
          </h5>
        </div>
      </section>
      <section
        className="u-align-center u-black u-clearfix u-section-3"
        id="carousel_3cbe"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <h5 className="u-custom-font u-font-ubuntu u-text u-text-default u-text-palette-2-base u-text-1">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution.&nbsp;
                    </h5>
                    <p className="u-text u-text-default u-text-2">
                      Living Life Tomorrow's fate, though thou be wise, Thou
                      canst not tell nor yet surmise; Pass, therefore, not today
                      in vain, For it will never come again. You know, my
                      friends, with what a brave carouse I made a Second
                      Marriage in my house; favored old barren reason from my
                      bed, and took the daughter of the vine to
                      spouse.&nbsp;&nbsp;The Worldly Hope men set their Hearts
                      upon Turns Ashes - or it prospers; and anon, Like Snow
                      upon the Desert's dusty Face, Lighting a little hour or
                      two - is gone.
                    </p>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <p className="u-text u-text-3">
                      Living Life Tomorrow's fate, though thou be wise, Thou
                      canst not tell nor yet surmise; Pass, therefore, not today
                      in vain, For it will never come again. You know, my
                      friends, with what a brave carouse I made a Second
                      Marriage in my house; favored old barren reason from my
                      bed, and took the daughter of the vine to
                      spouse.&nbsp;&nbsp;The Worldly Hope men set their Hearts
                      upon Turns Ashes - or it prospers; and anon, Like Snow
                      upon the Desert's dusty Face, Lighting a little hour or
                      two - is gone.
                    </p>
                    <img
                      src="../images/829-8293847_jake-corman-signature-jake-signaturecopy.png"
                      alt=""
                      className="u-image u-image-contain u-image-default u-image-1"
                      data-image-width="1280"
                      data-image-height="911"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="u-align-center u-clearfix u-footer u-grey-80 u-footer"
        id="sec-1514"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <p className="u-small-text u-text u-text-variant u-text-1">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
        </div>
      </footer>
      <section className="u-backlink u-clearfix u-grey-80">
        <a
          className="u-link"
          href="https://nicepage.com/website-templates"
          target="_blank"
        >
          <span>Website Templates</span>
        </a>
        <p className="u-text">
          <span>created with</span>
        </p>
        <a className="u-link" href="https://nicepage.com/" target="_blank">
          <span>Website Builder Software</span>
        </a>
        .
      </section>
    </div>
  );
}

export default Home;
