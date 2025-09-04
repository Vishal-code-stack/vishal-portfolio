// Display current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Card 3D hover effect
const card = document.getElementById("card");

function handleMove(e) {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  const rotateX = y * -20;
  const rotateY = x * 20;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function resetCard() {
  card.style.transform = "rotateX(0) rotateY(0)";
}

card.addEventListener("mousemove", handleMove);
card.addEventListener("mouseleave", resetCard);