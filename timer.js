// Set the date your relationship began here: YYYY-MM-DDTHH:MM:SS
const relationshipStart = new Date("2025-03-20T00:00:00").getTime();

function showTimeTogether() {
  const secondsTogether = Math.max(0, Math.floor((Date.now() - relationshipStart) / 1000));
  const values = {
    days: Math.floor(secondsTogether / 86400),
    hours: Math.floor((secondsTogether % 86400) / 3600),
    minutes: Math.floor((secondsTogether % 3600) / 60),
    seconds: secondsTogether % 60
  };

  for (const [id, value] of Object.entries(values)) {
    const digits = id === "days" ? 3 : 2;
    const box = document.getElementById(id);
    if (box) box.textContent = String(value).padStart(digits, "0");
  }
}

showTimeTogether();
window.setInterval(showTimeTogether, 1000);
