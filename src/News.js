import newsImage from "./images/1.jpg";
import newsImageSecond from "./images/2.jpg";
import "./News.css";

export default function News() {
  return (
    <div className="container">
      <div className="page-content">
        <main className="main-content">
          <div className="news-section">
            <h1 className="page-title">Naujienos</h1>

            <div className="primary-news-list">
              <div className="news-item">
                <a href="./">
                  <div className="news-image-wrapper">
                    <img
                      className="news-image-wrapper"
                      src={newsImage}
                      alt=""
                    />
                  </div>

                  <div className="news-content-wrapper">
                    <span className="news-category">Programavimas</span>
                    <h2 className="news-title">
                      Vienas kvalifikacijos keitimo projektas valstybės
                      biudžetui atneš 51 mln. papildomų eurų
                    </h2>
                    <span className="news-date">2024-02-01</span>
                  </div>
                </a>
              </div>

              <div className="news-item">
                <a href="./">
                  <div className="news-image-wrapper">
                    {/* <img src="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" alt="" className="news-image"> */}
                    <img className="news-image" src={newsImageSecond} alt="" />
                  </div>

                  <div className="news-content-wrapper">
                    <span className="news-category">AI & Deep Learning</span>
                    <h2 className="news-title">
                      Ar „ChatGPT“ užims mūsų darbo vietas?
                    </h2>
                    <span className="news-date">2023-01-27</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="secondary-news-list">
              <div className="news-item">
                <a href="./">
                  <div className="news-image-wrapper">
                    {/* <img src="https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg" alt="" className="news-image"> */}
                  </div>

                  <div className="news-content-wrapper">
                    <span className="news-category">Programavimas</span>
                    <h2 className="news-title">
                      Vienas kvalifikacijos keitimo projektas valstybės
                      biudžetui atneš 51 mln. papildomų eurų
                    </h2>
                    <span className="news-date">2024-02-01</span>
                  </div>
                </a>
              </div>

              <div className="news-item">
                <a href="./">
                  <div className="news-image-wrapper">
                    {/* <img src="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" alt="" className="news-image"> */}
                  </div>

                  <div className="news-content-wrapper">
                    <span className="news-category">AI & Deep Learning</span>
                    <h2 className="news-title">
                      Ar „ChatGPT“ užims mūsų darbo vietas?
                    </h2>
                    <span className="news-date">2023-01-27</span>
                  </div>
                </a>
              </div>

              <div className="news-item">
                <a href="./">
                  <div className="news-image-wrapper">
                    {/* <img src="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" alt="" className="news-image"> */}
                  </div>

                  <div className="news-content-wrapper">
                    <span className="news-category">AI & Deep Learning</span>
                    <h2 className="news-title">
                      Ar „ChatGPT“ užims mūsų darbo vietas?
                    </h2>
                    <span className="news-date">2023-01-27</span>
                  </div>
                </a>
              </div>

              <div className="news-item">
                <a href="./">
                  <div className="news-image-wrapper">
                    {/* <img src="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" alt="" className="news-image"> */}
                  </div>

                  <div className="news-content-wrapper">
                    <span className="news-category">AI & Deep Learning</span>
                    <h2 className="news-title">
                      Ar „ChatGPT“ užims mūsų darbo vietas?
                    </h2>
                    <span className="news-date">2023-01-27</span>
                  </div>
                </a>
              </div>
            </div>

            <a href="./" className="large-button">
              Visos naujienos
            </a>
          </div>

          <div className="video-section">
            <h2 className="section-title">Vaizdo įrašai</h2>

            <div className="primary-video-wrapper">
              <div className="video-wrapper">
                <h3 className="video-title">
                  ./4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien
                </h3>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="secondary-video-wrapper">
              <div className="video-wrapper">
                <h3 className="video-title">
                  Susipažink su mūsų įdarbinimo partneriais – Danske Bank!
                </h3>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="video-wrapper">
                <h3 className="video-title">
                  ./3 Kaip atrodo Web Dizainerio (UX/UI) karjera?
                </h3>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <a href="./" className="large-button">
              Visi vaizdo įrašai
            </a>
          </div>
        </main>

        <aside className="sidebar-content">
          <div className="podcasts-section">
            <h2 className="section-title">Podcastai ir radijo laidos</h2>

            <div className="podcasts-list">
              <div className="podcast-item">
                {/* <img src="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png" alt="" className="podcast-image"> */}
                <span className="podcast-length">Trukmė: 7:55</span>
                <button className="podcast-play">Play</button>

                <div className="podcast-content">
                  <h3 className="podcast-title">
                    Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas
                  </h3>
                  <span className="podcast-date">2021-09-02</span>
                </div>
              </div>

              <div className="podcast-item">
                {/* <img src="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png" alt="" className="podcast-image"> */}
                <span className="podcast-length">Trukmė: 7:55</span>
                <button className="podcast-play">Play</button>

                <div className="podcast-content">
                  <h3 className="podcast-title">
                    Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas
                  </h3>
                  <span className="podcast-date">2021-09-02</span>
                </div>
              </div>

              <div className="podcast-item">
                {/* <img src="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png" alt="" className="podcast-image"> */}
                <span className="podcast-length">Trukmė: 7:55</span>
                <button className="podcast-play">Play</button>

                <div className="podcast-content">
                  <h3 className="podcast-title">
                    Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas
                  </h3>
                  <span className="podcast-date">2021-09-02</span>
                </div>
              </div>

              <div className="podcast-item">
                {/* <img src="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png" alt="" className="podcast-image"> */}
                <span className="podcast-length">Trukmė: 7:55</span>
                <button className="podcast-play">Play</button>

                <div className="podcast-content">
                  <h3 className="podcast-title">
                    Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas
                  </h3>
                  <span className="podcast-date">2021-09-02</span>
                </div>
              </div>
            </div>
          </div>

          <div className="events-section">
            <h2 className="section-title">Renginiai</h2>

            <div className="events-list">
              <div className="event-item">
                <a href="./">
                  <div className="event-image-wrapper">
                    {/* <img src="https://codeacademy.lt/wp-content/uploads/2024/02/CCBaltics-vizualas-1024x592-1.png" alt="" className="event-image"> */}
                  </div>

                  <div className="event-content-wrapper">
                    <div className="event-date">
                      <div className="event-day">24</div>
                      <div className="event-month">Geg</div>
                    </div>

                    <div className="event-content">
                      <span className="event location">
                        Lietuvos parodų ir kongresų centras LITEXPO
                      </span>
                      <h3 className="event-title">COMIC CON BALTICS 2024</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="event-item">
                <a href="./">
                  <div className="event-content-wrapper">
                    <div className="event-date">
                      <div className="event-day">2</div>
                      <div className="event-month">Bal</div>
                    </div>

                    <div className="event-content">
                      <h3 className="event-title">PyCon Lithuania 2024</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="event-item">
                <a href="./">
                  <div className="event-content-wrapper">
                    <div className="event-date">
                      <div className="event-day">24</div>
                      <div className="event-month">Geg</div>
                    </div>

                    <div className="event-content">
                      <span className="event location">Kaunas</span>
                      <h3 className="event-title">LT Game Jam 2024</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <a href="./" className="large-button">
              Daugiau
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
