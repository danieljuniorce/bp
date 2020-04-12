function formatDate(date) {
  const intl = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "America/Fortaleza",
  }).format(date);

  return intl;
}

function formatHours(hours) {
  const intl = new Intl.DateTimeFormat("pt-BR", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "America/Fortaleza",
  }).format(hours);

  return intl;
}

module.exports = { formatDate, formatHours };
