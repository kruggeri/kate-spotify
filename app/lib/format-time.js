export function formattedHours(time) {
  if (time >= 10) {
    return `${time}:`
  } else if (time >= 1) {
    return `0${time}:`;
  } else {
    return '';
  }
}

export function formattedMinutes(time) {
  if (time < 1) {
    return '0:'
  } else if (time < 10) {
    return `0${time}:`
  } else {
    return `${time}:`
  }
}

export function formattedSeconds(time) {
  if (time > 9) {
    return `${time}`;
  } else {
    return `0${time}`
  }
}

export function formattedTime(time) {
  let hours = formattedHours(Math.round(time / 3600));
  let timeLeft = time % 3600;

  let minutes = formattedMinutes(Math.round(timeLeft / 60));
  timeLeft = timeLeft % 60;

  let seconds = formattedSeconds(Math.round(timeLeft));

  return `${hours}${minutes}${seconds}`
}
