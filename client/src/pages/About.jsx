import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">

              <h1>Why Choose Us? </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, animi temporibus. Ad similique, minima iure rem dicta aliquid consectetur ipsa dolorum aliquam recusandae officiis commodi quisquam exercitationem saepe vero tempore, eum nihil, explicabo magni doloremque ipsum. Incidunt sint distinctio sequi repellendus cum, libero, quis aperiam natus exercitationem provident  molestias temporibus veritatis a necessitatibus ratione nobis sequi. Distinctio.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, quasi atque ab dolorem labore dolorum deserunt distinctio aliquam repudiandae mollitia in corporis sit optio voluptate tenetur voluptas, delectus aliquid ut veniam facilis ipsam. Similique, debitis quasi nostrum, aspernatur ut optio nobis rerum quod harum et deleniti modi quia officiis. Ipsa.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, at unde? Dolores assumenda odio dolore voluptate ab modi vero distinctio doloribus nemo sunt? Consequatur culpa distinctio eos provident architecto illum?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi dolorem earum quam libero, minus dolores odio quo deleniti exercitationem amet. Vel et recusandae eligendi necessitatibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis, consectetur enim incidunt distinctio tenetur maiores rerum hic commodi id quia voluptate ab sapiente! Placeat iste explicabo, illum impedit dignissimos dolore harum veniam cumque facilis!
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/webdev.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};