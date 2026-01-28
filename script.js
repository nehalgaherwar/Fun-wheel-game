let wheel = document.getElementById("wheel");
let result = document.getElementById("result");

let sections = [
  { type: "🎁 GIFT", text: "Free Chocolate 🍫" },
  { type: "😈 PUNISHMENT", text: "10 Push-ups 💪" },
  { type: "🎁 GIFT", text: "Extra Break ☕" },
  { type: "😈 PUNISHMENT", text: "Sing a Song 🎤" },
  { type: "🎁 GIFT", text: "Movie Night 🎬" },
  { type: "😈 PUNISHMENT", text: "Dance for 30 sec 💃" }
];

let rotation = 0;

function spinWheel() {
  let spin = Math.floor(Math.random() * 360) + 1440;
  rotation += spin;

  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    let actualDeg = rotation % 360;
    let index = Math.floor((360 - actualDeg) / 60) % sections.length;

    result.innerHTML = `
      <strong>${sections[index].type}</strong><br>
      ${sections[index].text}
    `;
  }, 4000);
}
