const sentence = "hello there from lighthouse labs";
let delay = 0;

setTimeout(() => {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 500; // 50 ms is too fast, it all appears at once to me so I used 500 ms
  }
},1000);
  
