import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why Quadro?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Commands</h4>
              <p className="p-color">
                More than 90+ commands to fulfill your every need.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">🔄 Frequent Updates</h4>
              <p className="p-color">
                Quadro is updated very frequently with new updates and features every week!
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✏️ Customization</h4>
              <p className="p-color">
                A fully customizable Discord bot - completely FREE!
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Explore our commands &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">40</h4>
            <p className="p-color">Total Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">2k+</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">10k+</h4>
            <p className="p-color">Total commands ran</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
