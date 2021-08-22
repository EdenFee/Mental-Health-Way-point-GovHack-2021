import "./home.css";
import "./nicepage.css";
import "./chart.css";
import "./custom.css";
import { useEffect, useState } from "react";
import Health from "./health";
import { Chart } from "../Chart";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Reveal from "react-reveal/Reveal";

function example() {
     document.getElementById("example").innerHTML = "Paragraph changed.";
 }

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
        <div
          class="chart-container"
          styles="position: relative; height:40vh; width:40vw"
        >
          <Zoom top>
            <Chart
              chartData={chartData}
              title="Common New Zealand Struggles"
              yTitle="Estimated Number x1000"
            />
          </Zoom>
        </div>
      </section>


      <section class="u-black u-clearfix u-section-2" id="carousel_e222">
        <div class="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
          <div class="u-border-1 u-border-palette-2-base u-line u-line-horizontal u-line-1"></div>

          <Zoom>
            <div>
              <h2 class="u-align-center u-custom-font u-font-merriweather u-text u-text-palette-2-base u-text-1">
                Struggling with depression?
              </h2>
            </div>
          </Zoom>
          <Flip left>
            <div>
              <h2 class="u-align-center u-text u-text-grey-10 u-text-2">
                Lifestyle changes<br></br>
              </h2>
            </div>
          </Flip>

          <p class="u-align-center u-large-text u-text u-text-grey-5 u-text-variant u-text-3">
            <ol>
              <Reveal effect="fadeInUp">
                <div>
                  <li class="">
                    <a href="https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm">Excercise</a>
                    <p>Regular exercise can be as effective at treating depression as medicine. Not only does exercise boost serotonin, endorphins, and other feel-good brain chemicals, it triggers the growth of new brain cells and connections, just like antidepressants do. Best of all, you don’t have to train for a marathon in order to reap the benefits. Even a half-hour daily walk can make a big difference. For maximum results, aim for 30 to 60 minutes of aerobic activity on most days.</p>
                  </li>
                </div>
              </Reveal>
              <Reveal effect="fadeInUp">
                <div>
                  <li class="">
                    <a href="https://www.helpguide.org/articles/healthy-living/volunteering-and-its-surprising-benefits.htm">Social support</a>
                    <p>Strong social networks reduce isolation, a key risk factor for depression. Keep in regular contact with friends and family, or consider joining a class or group. Volunteering is a wonderful way to get social support and help others while also helping yourself.</p>
                  </li>
                </div>
              </Reveal>
              <Reveal effect="fadeInUp">
                <div>
                  <li class="">
                    <a href="https://www.helpguide.org/articles/healthy-eating/choosing-healthy-carbs.htm">Nutrition</a>
                    <p>Eating well is important for both your physical and mental health. Eating small, well-balanced meals throughout the day will help you keep your energy up and minimize mood swings. While you may be drawn to sugary foods for the quick boost they provide, complex carbohydrates are a better choice. They’ll get you going without the all-too-soon sugar crash.</p>
                  </li>
                </div>
              </Reveal>
              <Reveal effect="fadeInUp">
                <div>
                  <li class="">
                    <a href="https://www.helpguide.org/articles/sleep/sleep-needs-get-the-sleep-you-need.htm">Sleep</a>
                    <p>Sleep has a strong effect on mood. When you don’t get enough sleep, your depression symptoms will be worse. Sleep deprivation exacerbates irritability, moodiness, sadness, and fatigue. Make sure you're getting enough sleep each night. Very few people do well on less than seven hours a night. Aim for somewhere between seven to nine hours each night.</p>
                  </li>
                </div>
              </Reveal>
              <Reveal effect="fadeInUp">
                <div>
                  <li class="">
                    <a href="https://www.helpguide.org/articles/stress/stress-management.htm">Stress reduction</a>
                    <p>Make changes in your life to help manage and reduce stress.Too much stress exacerbates depression and puts you at risk for future depression. Take the aspects of your life that stress you out, such as work overload or unsupportive relationships, and find ways to minimize their impact.</p>
                  </li>
                </div>
              </Reveal>
            </ol>
          </p>
          <div>
            <h2 class="u-align-center u-text u-text-grey-10 u-text-4">
              Anti-depressants<br></br>
            </h2>
            <p class="u-align-center u-text-4">
Antidepressants are a group of medications that are used to help manage depression.
            </p>
          </div>
          <div>
            <h2 class="u-align-center u-text u-text-grey-10 u-text-5">
              Councilling:
            </h2>
            <div>
            <blockquote class="u-align-center u-border-black u-text u-text-grey-10 u-text-4">
              Nine tenths of helpline callers feel helped, half say their
              problem was less severe at follow up.
            </blockquote>
          </div>
            <h5 class="u-align-center u-text u-text-grey-10 u-text-5"><a>National Help Call</a></h5>
            <p class="u-align-center u-text-4">National free call line to get support from a trained counsellor.<a href="tel:1737"> Call: 1737</a></p> 
            <h5 class="u-align-center u-text u-text-grey-10 u-text-5"><a href="https://depression.org.nz/">Depression Helpline</a></h5>
            <p class="u-align-center u-text-4">Depression Helpline is a helpline service for anxiety and depression as well as having various stories from those who have/are struggling with anxiety and/or depression and how it has affected them.<a href="tel:0800 111 757"> Call: 0800 111 757</a></p>
            <h5 class="u-align-center u-text u-text-grey-10 u-text-5"><a href="https://www.samaritans.org.nz/">Samaritans</a></h5>
            <p class="u-align-center u-text-4">Samaritans is a helpline service for depression, loneliness, despair, etc who take confidentiality and no judgment seriously.<a href="tel:0800 726 666"> Call: 0800 726 666</a></p>
          </div>
        </div>
      </section>

      <section class="u-black u-clearfix u-section-3" id="carousel_0ecf">
        <div class="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
          <div class="u-border-1 u-border-palette-2-base u-line u-line-horizontal u-line-1"></div>
          <Zoom>
            <div>
              <h2 class="u-align-center u-custom-font u-font-merriweather u-text u-text-palette-2-base u-text-1">
                Struggling with Anxiety?
              </h2>
            </div>
          </Zoom>
            <Flip left>
            <div>
              <h2 class="u-align-center u-text u-text-grey-10 u-text-2">
                Lifestyle changes<br></br>
              </h2>
            </div>
          </Flip>
          
          
            <p class="u-align-center u-large-text u-text u-text-grey-5 u-text-variant u-text-3">
            <ol>
            <Reveal effect="fadeInUp">
                <div>
                  <li class="">
                    <a href="https://www.helpguide.org/articles/anxiety/therapy-for-anxiety-disorders.htm">Psychotherapy</a>
                    <p class="u-align-center u-text u-text-3">
            Psychotherapy or “talk therapy” can help people with anxiety
            disorders. To be effective, psychotherapy must be directed at the
            person’s specific anxieties and tailored to his or her needs.
                    </p>
                  </li>
                </div>
            </Reveal>
            
            <Reveal effect="fadeInUp">
                <div>
                  <li class="">
                    <a href="">Anti-depressants</a>
                    <p>Antidepressants are used to treat depression, but they can also be
            helpful for treating anxiety disorders. They may help improve the
            way your brain uses certain chemicals that control mood or stress.
            You may need to try several different antidepressant medicines
            before finding the one that improves your symptoms and has
            manageable side effects.</p>
                  </li>
                </div>
              </Reveal>
            </ol>
            </p>
            
            
          <div>
            <h2 class="u-align-center u-text u-text-grey-10 u-text-5">
              Councilling:
            </h2>
            <div>
            <blockquote class="u-align-center u-border-black u-text u-text-grey-10 u-text-4">
              Nine tenths of helpline callers feel helped, half say their
              problem was less severe at follow up.
            </blockquote>
          </div>
            <h5 class="u-align-center u-text u-text-grey-10 u-text-5"><a>National Help Call</a></h5>
            <p class="u-align-center u-text-4">National free call line to get support from a trained counsellor.<a href="tel:1737"> Call: 1737</a></p> 
            <h5 class="u-align-center u-text u-text-grey-10 u-text-5"><a href="https://depression.org.nz/">Depression Helpline</a></h5>
            <p class="u-align-center u-text-4">Depression Helpline is a helpline service for anxiety and depression as well as having various stories from those who have/are struggling with anxiety and/or depression and how it has affected them.<a href="tel:0800 111 757"> Call: 0800 111 757</a></p>
            <h5 class="u-align-center u-text u-text-grey-10 u-text-5"><a href="https://www.anxiety.org.nz/">Anxiety NZ</a></h5>
            <p class="u-align-center u-text-4">Axiety NZ is a help service for all things axiety, depression, etc related mental health issues and are there to \"help the 1 in 4 Kiwi who experience anxiety, depression, panic attacks, OCD or phobias.<a href="tel:0800 269 4389"> Call: 0800 269 4389</a></p>
          </div>
          <h1></h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
