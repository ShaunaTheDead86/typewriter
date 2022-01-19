let sentence = "hello there from lighthouse labs";

const typewriter = function(string) {
  string += '\n\n';
  let delay = 0;

  setTimeout(() => {
    for (const char of string) {
      setTimeout(() => {
        process.stdout.write(char);
      }, delay);
      delay += 50;
    }
  },1000);
};

typewriter(sentence);