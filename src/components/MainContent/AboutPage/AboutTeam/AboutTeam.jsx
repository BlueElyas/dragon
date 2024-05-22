import styles from "./AboutTeam.module.css"

function AboutTeam() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.aboutTeamImage}>
          <img src="/assets/team-dagron.png" className={styles.img} />
        </div>
        <div className={styles.aboutTeamWrapper}>
          <div className={styles.aboutTeamLeft}>
            <p>
              Meet the extraordinary minds behind DagronAI. Three adventurers /
              web-developers who have placated the dagronic oracle, Dargon, to
              answer any question your heart desires, and if you're lucky
              perhaps some treasures from the Dargons lair. It was no easy task
              taming the dragon, and it is written that only these three have
              the combined power necessary for such a gargantuan feat.
            </p>
            <br></br>
            <p>
              Meet Elyas, with one thousand years of experience under his belt.
              It was he who tamed the dragons senses before the team entered the
              ferocious dragons lair. His eloquent skill in wit and puns
              conjured raucous laughter from the dragon, exposing the weakest
              point, the throat.
            </p>
          </div>
          <div className={styles.aboutTeamRight}>
            <p>
              Meet Jo, with one thousand years of experience under her belt. It
              was she who conjured flame to ultimately tame and placate the
              dragon. Contrary to popular belief, a dragon does have a weakness
              to fire if targeted in just the right spot, given the dragons weak
              spot had just been revealed Jo takes aim and fires, with extreme
              accuracy.
            </p>
            <br></br>
            <p>
              Meet Seb, with one thousand years of experience under his belt. It
              was he who utilised the magical draconic glyph inscribed upon his
              arm to persuade the dragon to work for DagronAI, now we allow you
              to ask Dargon anything you'd like.
            </p>
          </div>
        </div>

        {/* Content for mobile width */}
        <div className={styles.aboutTeamSmall}>
          <p>
            Meet the extraordinary minds behind DagronAI. Three adventurers /
            web-developers who have placated the dagronic oracle, Dargon, to
            answer any question your heart desires, and if you're lucky perhaps
            some treasures from the Dargons lair. It was no easy task taming the
            dragon, and it is written that only these three have the combined
            power necessary for such a gargantuan feat.
          </p>
          <br></br>
          <img src="/assets/elyas.png" alt="" className={styles.mobileImg} />
          <p>
            Meet Elyas, with one thousand years of experience under his belt. It
            was he who tamed the dragons senses before the team entered the
            ferocious dragons lair. His eloquent skill in wit and puns conjured
            raucous laughter from the dragon, exposing the weakest point, the
            throat.
          </p>
          <br></br>
          <img src="/assets/jo.png" alt="" className={styles.mobileImg} />
          <p>
            Meet Jo, with one thousand years of experience under her belt. It
            was she who conjured flame to ultimately tame and placate the
            dragon. Contrary to popular belief, a dragon does have a weakness to
            fire if targeted in just the right spot, given the dragons weak spot
            had just been revealed Jo takes aim and fires, with extreme
            accuracy.
          </p>
          <br></br>
          <img
            src="/assets/seb.png"
            alt=""
            className={styles.mobileImg}
          />
          <p>
            Meet Seb, with one thousand years of experience under his belt. It
            was he who utilised the magical draconic glyph inscribed upon his
            arm to persuade the dragon to work for DagronAI, now we allow you to
            ask Dargon anything you'd like.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutTeam
