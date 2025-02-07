const cardContainer = document.querySelector(".container");
const longBio = document.getElementById("longBio");

document.getElementById("moreBtn").addEventListener("click", () => {
  cardContainer.classList.toggle("flipped");
  longBio.innerHTML = `<p> Passionate about creating responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React. I focus on building efficient, scalable applications and delivering seamless user experiences. Continuously learning new technologies, I aim to grow as a software engineer and contribute to innovative solutions. Eager to collaborate and make a meaningful impact in software development. </p>
  
  `;
});

document.getElementById("back").addEventListener("click", function () {
  cardContainer.classList.toggle("flipped");
});

function updateUTCTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  document.getElementById("utcTime").textContent = utcTime;
}

// Update the time every second
setInterval(updateUTCTime, 1000);

// Initialize the time display immediately
updateUTCTime();
