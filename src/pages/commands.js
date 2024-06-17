import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Quadro's commands</title>
        <meta
          name="description"
          content="Explore Quadro's commands."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
               Utility
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/afk</kbd> -{" "}
                  <span className="p-color">Set your AFK on/off.</span>
                </li>
                <li>
                  <kbd>/clean</kbd> -{" "}
                  <span className="p-color">Cleans the last 100 bot messages from the channel.</span>
                </li>
                <li>
                  <kbd>/help</kbd> -{" "}
                  <span className="p-color">Shows the list of commands.</span>
                </li>
                <li>
                  <kbd>/invite</kbd> -{" "}
                  <span className="p-color">Invite Quadro to your server.</span>
                </li>
                <li>
                  <kbd>/ping</kbd> -{" "}
                  <span className="p-color">View the bot's latency.</span>
                </li>
                <li>
                  <kbd>/report</kbd> -{" "}
                  <span className="p-color">Report a bug to the developers.</span>
                </li>
                <li>
                  <kbd>/sourcebin</kbd> -{" "}
                  <span className="p-color">Post some code on SourceBin.</span>
                </li>
                <li>
                  <kbd>/translate</kbd> -{" "}
                  <span className="p-color">Translate any text.</span>
                </li>
                <li>
                  <kbd>/virustotal</kbd> -{" "}
                  <span className="p-color">Checks if a URL is dangerous</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Fun
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/8ball</kbd> -{" "}
                  <span className="p-color">A fortune teller.</span>
                </li>
                <li>
                  <kbd>/achievement</kbd> -{" "}
                  <span className="p-color">Get achievements like Minecraft!</span>
                </li>
                <li>
                  <kbd>/clyde</kbd> -{" "}
                  <span className="p-color">Make Clyde say something.</span>
                </li>
                <li>
                  <kbd>/joke</kbd> -{" "}
                  <span className="p-color">Get a random joke.</span>
                </li>
                <li>
                  <kbd>/meme</kbd> -{" "}
                  <span className="p-color">View memes.</span>
                </li>
                <li>
                  <kbd>/quote</kbd> -{" "}
                  <span className="p-color">Get an inspirational quote.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              Games
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/2048</kbd> -{" "}
                  <span className="p-color">Play a game of 2048!</span>
                </li>
                <li>
                  <kbd>/akinator</kbd> -{" "}
                  <span className="p-color">Play a game of akinator!</span>
                </li>
                <li>
                  <kbd>/chess</kbd> -{" "}
                  <span className="p-color">Play a game of chess!</span>
                </li>
                <li>
                  <kbd>/checkers</kbd> -{" "}
                  <span className="p-color">Play a game of checkers!</span>
                </li>
                <li>
                  <kbd>/connect4</kbd> -{" "}
                  <span className="p-color">Play a game of connect4!</span>
                </li>
                <li>
                  <kbd>/findemoji</kbd> -{" "}
                  <span className="p-color">Play a game of find the emoji!</span>
                </li>
                <li>
                  <kbd>/flood</kbd> -{" "}
                  <span className="p-color">Play a game of flood!</span>
                </li>
                <li>
                  <kbd>/guesstheflag</kbd> -{" "}
                  <span className="p-color">Play a game of guess the flag!</span>
                </li>
                <li>
                  <kbd>/guessthenumber</kbd> -{" "}
                  <span className="p-color">Play a game of guess the number!</span>
                </li>
                <li>
                  <kbd>/guessthepokemon</kbd> -{" "}
                  <span className="p-color">Play a game of guess the pokemon!</span>
                </li>
                <li>
                  <kbd>/guesstheword</kbd> -{" "}
                  <span className="p-color">Play a game of guess the word!</span>
                </li>
                <li>
                  <kbd>/hangman</kbd> -{" "}
                  <span className="p-color">Play a game of hangman!</span>
                </li>
                <li>
                  <kbd>/matchpairs</kbd> -{" "}
                  <span className="p-color">Play a game of match pairs!</span>
                </li>
                <li>
                  <kbd>/minesweeper</kbd> -{" "}
                  <span className="p-color">Play a game of minesweeper!</span>
                </li>
                <li>
                  <kbd>/oddoneout</kbd> -{" "}
                  <span className="p-color">Play a game of find the odd one out!</span>
                </li>
                <li>
                  <kbd>/quicktype</kbd> -{" "}
                  <span className="p-color">Play a game of quick type!</span>
                </li>
                <li>
                  <kbd>/repeat-the-color</kbd> -{" "}
                  <span className="p-color">Play a game of repeat the color!</span>
                </li>
                <li>
                  <kbd>/rps</kbd> -{" "}
                  <span className="p-color">Play a game of rock-paper-scissors!</span>
                </li>
                <li>
                  <kbd>/slots</kbd> -{" "}
                  <span className="p-color">Play a game of slots!</span>
                </li>
                <li>
                  <kbd>/snake</kbd> -{" "}
                  <span className="p-color">Play a game of snake!</span>
                </li>
                <li>
                  <kbd>/tictactoe</kbd> -{" "}
                  <span className="p-color">Play a game of tictactoe!</span>
                </li>
                <li>
                  <kbd>/trivia</kbd> -{" "}
                  <span className="p-color">Play a game of trivia!</span>
                </li>
                <li>
                  <kbd>/wordle</kbd> -{" "}
                  <span className="p-color">Play a game of wordle!</span>
                </li>
                <li>
                  <kbd>/wouldyourather</kbd> -{" "}
                  <span className="p-color">Play a game of would you rather!</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Information
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/avatar</kbd> -{" "}
                  <span className="p-color">View a user's or your avatar.</span>
                </li>
                <li>
                  <kbd>/banner</kbd> -{" "}
                  <span className="p-color">View a user's or your banner.</span>
                </li>
                <li>
                  <kbd>/changelog</kbd> -{" "}
                  <span className="p-color">View Quadro's latest changelog update</span>
                </li>
                <li>
                  <kbd>/colorinfo</kbd> -{" "}
                  <span className="p-color">Get information about a HEX color.</span>
                </li>
                <li>
                  <kbd>/country</kbd> -{" "}
                  <span className="p-color">Get information about any country.</span>
                </li>
                <li>
                  <kbd>/credits</kbd> -{" "}
                  <span className="p-color">A little thanks to a few awesome people.</span>
                </li>
                <li>
                  <kbd>/dictionary</kbd> -{" "}
                  <span className="p-color">View information about a word via the Urban Dictionary.</span>
                </li>
                <li>
                  <kbd>/emojis</kbd> -{" "}
                  <span className="p-color">List all the emojis in this server.</span>
                </li>
                <li>
                  <kbd>/feedback</kbd> -{" "}
                  <span className="p-color">Leave some feedback for the bot.</span>
                </li>
                <li>
                  <kbd>/geolocation</kbd> -{" "}
                  <span className="p-color">View the geolocation of any website.</span>
                </li>
                <li>
                  <kbd>/github</kbd> -{" "}
                  <span className="p-color">View information about a GitHub user.</span>
                </li>
                <li>
                  <kbd>/gradient</kbd> -{" "}
                  <span className="p-color">Get the gradients for a HEX color.</span>
                </li>
                <li>
                  <kbd>/http</kbd> -{" "}
                  <span className="p-color">View a http cat on the code you provided.</span>
                </li>
                <li>
                  <kbd>/info</kbd> -{" "}
                  <span className="p-color">Information about this bot.</span>
                </li>
                <li>
                  <kbd>/mc-server-status</kbd> -{" "}
                  <span className="p-color">Get information about a minecraft server.</span>
                </li>
                <li>
                  <kbd>/movie</kbd> -{" "}
                  <span className="p-color">Search for a movie or show.</span>
                </li>
                <li>
                  <kbd>/npm</kbd> -{" "}
                  <span className="p-color">Search for an npm package.</span>
                </li>
                <li>
                  <kbd>/serverinfo</kbd> -{" "}
                  <span className="p-color">View information about this server.</span>
                </li>
                <li>
                  <kbd>/stats</kbd> -{" "}
                  <span className="p-color">Get this bot's statistics.</span>
                </li>
                <li>
                  <kbd>/twitch</kbd> -{" "}
                  <span className="p-color">View a Twitch streamer's profile</span>
                </li>
                <li>
                  <kbd>/weather</kbd> -{" "}
                  <span className="p-color">Find the weather of a location.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Systems
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/anti-ghostping</kbd> -{" "}
                  <span className="p-color">Manage this server's anti-ghostping system.</span>
                </li>
                <li>
                  <kbd>/anti-link</kbd> -{" "}
                  <span className="p-color">Manage this server's anti-link system.</span>
                </li>
                <li>
                  <kbd>/auditlog</kbd> -{" "}
                  <span className="p-color">Manage this server's audit log system.</span>
                </li>
                <li>
                  <kbd>/counting</kbd> -{" "}
                  <span className="p-color">Manage this server's counting system.</span>
                </li>
                <li>
                  <kbd>/fotd</kbd> -{" "}
                  <span className="p-color">Manage this server's FOTD (Fact Of The Day) system.</span>
                </li>
                <li>
                  <kbd>/chatbot</kbd> -{" "}
                  <span className="p-color">Manage this server's AI chatbot system.</span>
                </li>
                <li>
                  <kbd>/giveaway</kbd> -{" "}
                  <span className="p-color">Manage giveaways within the server.</span>
                </li>
                <li>
                  <kbd>/suggestion</kbd> -{" "}
                  <span className="p-color">Manage this server's suggestion system.</span>
                </li>
                <li>
                  <kbd>/ticket</kbd> -{" "}
                  <span className="p-color">Manage this server's ticketing system.</span>
                </li>
              </ul>
            </div>
          </section>

<input type="radio" name="accordion" id="cb6" />
<section className="box">
  <label className="box-title p-color" htmlFor="cb6">
    Moderation
  </label>
  <label className="box-close" htmlFor="acc-close"></label>
  <div className="box-content p-color">
    <ul>
      <li>
        <kbd>/ban</kbd> -{" "}
        <span className="p-color">Ban a user.</span>
      </li>
      <li>
        <kbd>/mute</kbd> -{" "}
        <span className="p-color">Mute a user.</span>
      </li>
      <li>
        <kbd>/userinfo</kbd> -{" "}
        <span className="p-color">Get information about a user.</span>
      </li>
      {/* Add more commands as needed */}
    </ul>
  </div>
</section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
