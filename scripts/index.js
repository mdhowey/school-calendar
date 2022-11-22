const columnHeaders = document.getElementById('column-headers')
const sidebar = document.getElementById('sidebar')
const days = document.getElementById('days')

const daysArray = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"]

for (let i = 0; i < 35; i++) {
  let newDay = document.createElement("div")
  newDay.className = "day"
  days.appendChild(newDay)
}

for (let i = 0; i < daysArray.length; i++) {
  let dayLabel = document.createElement("span")
  dayLabel.innerHTML = daysArray[i]
  dayLabel.className = "dayLabel"
  columnHeaders.appendChild(dayLabel)
}