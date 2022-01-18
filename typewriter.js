let sentence = "hello there from lighthouse labs";

const typewriter = function(string) {
  string += '\n';
  let delay = 0;

  setTimeout(() => {
    for (const char of string) {
      setTimeout(() => {
        process.stdout.write(char);
      }, delay);
      delay += 300; // 50 ms is too fast, it all appears at once to me so I used 300 ms
    }
  },1000);
};

typewriter(sentence);