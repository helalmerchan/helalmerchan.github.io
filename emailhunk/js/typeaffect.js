function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const phrasesA = ["agency", "eCommerce", "marketers", "indivisuals"];
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

  const phrasesC = ["Gif", "video"];
  let elemCs = document.querySelectorAll('.typeaffect3');
      
  elemCs.forEach(elemC => {
    writeLoop(elemC, phrasesC);  
  });

  
  // PACKAGES
  // let pacKages = document.querySelectorAll('.package');
  // pacKages.forEach(package => {
  //   package.addEventListener('mouseenter', () => {
  //     document.querySelector('.heilighter')?.classList.remove('heilighter');
  //     document.querySelector('.heilight')?.classList.remove('heilight');
  //     package.classList.add('heilighter');
  //   });

  //   package.addEventListener('mouseleave', () => {
  //     document.querySelector('.standrad').classList.add('heilight');
  //   });
  // });