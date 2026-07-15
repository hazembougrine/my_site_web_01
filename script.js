const whatsappNumber = "216XXXXXXXX";

function updateAvailability() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const open = day >= 1 && day <= 6 && hour >= 9 && hour < 19;

  const statusText = document.getElementById("statusText");
  const openBadge = document.getElementById("openBadge");
  const availabilityStatus = document.getElementById("availabilityStatus");
  const availabilityNote = document.getElementById("availabilityNote");

  if (open) {
    statusText.textContent = "Ouvert";
    openBadge.textContent = "Disponible maintenant";
    openBadge.className = "badge open";
    availabilityStatus.textContent = "Ouvert الآن";
    availabilityNote.textContent = "Le salon est actuellement disponible selon les horaires affichés.";
  } else {
    statusText.textContent = "Fermé";
    openBadge.textContent = "Fermé maintenant";
    openBadge.className = "badge closed";
    availabilityStatus.textContent = "Fermé";
    availabilityNote.textContent = "Le salon est actuellement fermé. Réservation possible pour plus tard.";
  }
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const branch = document.getElementById("branch").value;
  const message = document.getElementById("message").value.trim();

  const text =
`Bonjour, je veux réserver chez Hathemi Haloui.
Nom: ${name}
Téléphone: ${phone}
Service: ${service}
Date: ${date}
Heure: ${time}
Salon: ${branch}
Message: ${message || "Aucun"}`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});

updateAvailability();
setInterval(updateAvailability, 60000);