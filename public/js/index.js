var matrixText = [
  "Installing malware ...",
  "##########............ 48%",
  "Done.",
  "Activating drivers ...",
  "Launching virus ...",
  "Pegasus installation complete!",
  "Client successfully added to botnet",
  "Checking for system configuration ####......... 30%",
  "Rewriting application scripts -> bcdboot.exe ntoskrnl.exe ...",
  `${Math.random()}`,
  `${Math.random()}`,
  `${Math.random()}`,
  `${Math.random()}`,
  "Connecting to external server ...",
  "################### 100%",
  "Decrypting data ...",
  "Uploading files - #####.......... 33%",
  "Re-encrypting hard drive SHA-256 ... 21%",
  "Partitioning disk space - overwriting files ...",
  "Location data detected",
  "Notifying local terrorist cell ... 100%",
  "Missiles inbound ...",
  "Ready to lock device on command",
  "All set, awaiting further instruction - 200",
];

class Typewriter {
  constructor(word, speed) {
    this.word = word;
    this.speed = speed;
  }
  scroll(s, i, i2) {
    document.querySelector(".matrix-text").innerHTML +=
      matrixText[i2].charAt(i);
    if (i < matrixText[i2].length) {
      setTimeout(() => {
        this.scroll(s, i + 1, i2);
      }, s);
    } else {
      setTimeout(() => {
        if (matrixText[i2 + 1]) {
          document.querySelector(".matrix-text").innerHTML += "<br/>";
          this.scroll(s, 0, i2 + 1);
        } else {
          matrixText[i2 + 1] =
            ".........................................................";
          document.querySelector(".matrix-text").innerHTML += "<br/>";
          this.scroll(500, 0, i2 + 1);
        }
      }, s);
    }
  }
}

function close() {
  console.log("hi");
  document.querySelector(".heading-container").style.visibility = "hidden";
}

document.addEventListener("DOMContentLoaded", () => {
  var tw = new Typewriter("helloworld", 75);
  tw.scroll(tw.speed, 0, 0);

  var socket = io();
});

document.getElementById("buttons").onclick = close;
