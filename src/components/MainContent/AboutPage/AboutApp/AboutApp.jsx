import React from "react"
import styles from "./AboutApp.module.css"

function AboutApp() {
  return (
    <div className={styles.container}>
      <p className={styles.tagline}>
        <p>WE.</p>
        <p>LOVE.</p>
        <p>DAGRONS.</p>
      </p>
      <p>
        The world would be a better place with dagrons in it, so we put our puny
        human brains together to create the closest thing we could - dagron AI!
      </p>
      <h2 className={styles.mobileHeader}>Dargon the Dagron Bot</h2>
      <p>
        Dargon is our proof of concept. It's a LLM AI trained on ALL the
        possible dagron media we could find: from Game of Thrones to Pete's
        Magic Dragon. It can tell you all about the realm of Sovngarde, speak to
        you in basic Draconic and Dovazhul or explain how to behave with
        different castes of dagron - right up to the Golden Kings.
      </p>
      <p>
        We feel like everyone should be able to chat to a dagron whenever they
        want, so Dargon is free to use. Just try not to piss it off... Even as
        an AI, it's pretty temperamental.
      </p>
      <h2 className={styles.mobileHeader}>Dagron VR experiences</h2>
      <p>
        We've been developing Dargon's AI into full virtual reality experiences.
        Choose from a variety of dagron personalities and skins from a wide
        variety of dagron media.
      </p>
      <p>
        Whether you want your own trainable dagron pet, to fight a wiley beast
        or go on an evil burninating rampage - we've got you covered! Plus, you
        can develop a full and meaningful relationship with your dagron as you
        can save your VR AI experiences so your dagron remembers you between
        visits.
      </p>
    </div>
  )
}

export default AboutApp
