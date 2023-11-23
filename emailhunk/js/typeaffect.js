function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const phrasesA = ["agency", "ecommerce", "marketers", "indivisuals"];
  const elemA = document.querySelector(".typeaffect");
  

  let sleepTime = 100;
  let curPhraseIndex = 0;  

  const writeLoop = async (el, phrss) => {
    while (true) {
      let curWord = phrss[curPhraseIndex];

      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (curPhraseIndex === phrss.length - 1) {
        curPhraseIndex = 0;
      } else {
        curPhraseIndex++;
      }
    }
  };  
  writeLoop(elemA, phrasesA);
  

  const phrasesB = ["PSD design", "AI design", "PDF design", "Figma design"];
  let elemBs = document.querySelectorAll('.typeaffect2');
      
  elemBs.forEach(elemB => {
    writeLoop(elemB, phrasesB);  
  });