import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best blogger</p>
              <h1>Welcome to Our page tech</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempore voluptatibus, nobis voluptates nisi autem deserunt debitis neque consequatur dicta aliquam facilis, iure, vel eos delectus maxime? At, eveniet aspernatur error nostrum impedit ipsa, a facere eaque cumque magnam, non quibusdam! Debitis consectetur adipisci neque voluptatem eligendi voluptatibus natus perspiciatis.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/ai.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/superhero.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Todayfor do something new</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veritatis? Impedit hic eveniet tempore, libero molestias tenetur laboriosam officiis, quaerat eaque doloribus eligendi repudiandae nesciunt ex doloremque aspernatur velit dolores, vel asperiores neque aliquam labore dolor eos fuga! Eligendi necessitatibus earum suscipit, est minus quo ut illum! Incidunt, veritatis consequatur?
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};