const jokes = [
  {
    body: "A recent study has found that women who carry a little extra weight live longer than the men who mention it.",
  },
  {
    body: "Today a man knocked on my door and asked for a small donation towards the local swimming pool. I gave him a glass of water.",
  },
  {
    body: "If i had a dollar for every girl that found me unattractive, they would eventually find me attractive.",
  },
  {
    body: "When wearing a bikini, women reveal 90 % of their body... men are so polite they only look at the covered parts.",
  },
  {
    body: "I find it ironic that the colors red, white, and blue stand for freedom until they are flashing behind you.",
  },
  {
    body: "Just read that 4,153,237 people got married last year, not to cause any trouble but shouldn't that be an even number?",
  },
  {
    body: "I want to die peacefully in my sleep, like my grandfather.. Not screaming and yelling like the passengers in his car.",
  },
  {
    body: "Apparently I snore so loudly that it scares everyone in the car I'm driving.",
  },
];

function tellJoke() {
    const index = Math.round(Math.random()*8);
    const randomJokes = jokes[index].body;
    console.log(randomJokes);
}

const jokesInterval = setInterval(tellJoke, 2000);

setTimeout(()=> {
    clearInterval(jokesInterval);
}, 10000)

