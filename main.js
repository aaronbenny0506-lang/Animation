const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

async function sequenceAlice() {
  try {
    // Wait for alice1 to finish spinning
    const anim1 = alice1.animate(aliceTumbling, aliceTiming);
    await anim1.finished;
    
    // Wait for alice2 to finish spinning
    const anim2 = alice2.animate(aliceTumbling, aliceTiming);
    await anim2.finished;
    
    // Finally, spin alice3
    alice3.animate(aliceTumbling, aliceTiming);
  } catch (error) {
    console.error(`Error animating Alice: ${error}`);
  }
}

// Start the sequence
sequenceAlice();
