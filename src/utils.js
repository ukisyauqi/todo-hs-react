export function convertDayAndDate(date) {
  return `${
    ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][
      date.getDay()
    ]
  }, ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}