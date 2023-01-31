
import React, { useEffect } from 'react'

const TypeAnimation = () => {

  useEffect(() => {
    // Target selectors
    const text = document.getElementById("text")
    const allSentences = document.getElementsByClassName("sentences-te16")
    const underscore = document.getElementById('underscore')

    //Correction trick to hide the text before the component is mounted
    text.classList.remove("invisible")

    // We get our arrays of data used as parameters of the main function
    const sentencesArray = Array.from(allSentences).map(span => span.textContent)
    const colorArray = Array.from(allSentences).map(span => span.classList[span.classList.length - 1])

    // Clear all the text
    text.innerHTML = "";

    // Main function, typing animation
    const typingAnimation = (wordsList, colors) => {
      let words = wordsList
      let stop = false
      let visible = true;
      let letterCount = 1;
      let x = 1;
      let waiting = false;
      text.classList.add(`${colors[0]}`)

      const intervalID = window.setInterval(() => {

        // Stop the animation when there is one word left
        if (stop) {
          window.clearInterval(intervalID);
        }

        // When the word is erased
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          text.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(() => {
            text.classList.remove(`${colors[0]}`)
            let usedColor = colors.shift();
            colors.push(usedColor);
            words.shift(); // Comment this line if you want to run this animation indefinitely
            // let usedWord = words.shift(); // Uncomment this line if you want to run this animation indefinitely
            // words.push(usedWord); // Uncomment this line if you want to run this animation indefinitely
            x = 1;
            text.classList.add(`${colors[0]}`)
            letterCount += x;
            waiting = false;
          }, 1000)
        }

        // Waiting time set when the word is finished
        else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000)
          if (words.length === 1) {
            stop = true;
          } // Comment this line if you want to run this animation indefinitely
        }

        // Typing text
        else if (waiting === false) {
          text.innerHTML = words[0].substring(0, letterCount)
          letterCount += x;
        }

      }, 120)

      // Underscore
      window.setInterval(() => {
        if (visible === true) {
          underscore.classList.add('opacity-0')
          visible = false;

        } else {
          underscore.classList.remove('opacity-0')
          visible = true;
        }
      }, 400)
    }
    typingAnimation(sentencesArray, colorArray);

  }, [])

  return (
    <h1
      style={{
        fontFamily: "Azonix",
        transformStyle: "preserve-3d",
      }}
      className="relative font-extrabold bg-clip-text bg-gradient-to-br from-pc to-sc text-transparent"
    > 
    <span className='invisible md:hidden'>
      &#95;
      
    </span>
      <span id="text" className="invisible w-44 align-top">
        <span className="sentences-te16">HACKATHON</span>
        <span className="sentences-te16">CODATHON</span>
        <span className="sentences-te16">GAMETHON</span>
        <span className="sentences-te16">YOUNG SCIENTIST AWARD</span>
        <span className="sentences-te16">MECHATHON</span>
        <span className="sentences-te16">CIVILATHON</span>
        <span className="sentences-te16">BIZTHON</span>
        <span className="sentences-te16">CODATHON</span>
        <span className="sentences-te16">GAMETHON</span>
        <span className="sentences-te16">YOUNG SCIENTIST AWARD</span>
        <span className="sentences-te16">MECHATHON</span>
        <span className="sentences-te16">CIVILATHON</span>
        <span className="sentences-te16">BIZTHON</span>
        <span className="sentences-te16">CODATHON</span>
        <span className="sentences-te16">GAMETHON</span>
        <span className="sentences-te16">YOUNG SCIENTIST AWARD</span>
        <span className="sentences-te16">MECHATHON</span>
        <span className="sentences-te16">CIVILATHON</span>
        <span className="sentences-te16">BIZTHON</span>
        <span className="sentences-te16">HACKATHON</span>
      </span>
      <span id='underscore' className="inline-block relative -top-1.5 left-1.5 font-extrabold bg-clip-text bg-gradient-to-br from-sc to-sc text-transparent">&#95;</span>
    </h1>
  )
}

export default TypeAnimation
