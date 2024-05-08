import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Quadro</h1>
        <h2 className="showcase-header-text h-color">
          The only Discord bot you need!
        </h2>
        <p className="showcase-para p-color">
          A multi-purpose Discord bot with features ranging from moderation, giveaways and ticketing to games, counting system and logging.  
        </p>

        <span className="p-color">Enhance your Discord experience with Quadro today!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=980797090718433301">
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.gg/8WCwW5wBPF">
              Join server!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
