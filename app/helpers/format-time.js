import { helper } from '@ember/component/helper';

export function formattedHours(time) {
  if (time > 0) {
    const hours = time.toString()
    return `${hours.padStart(2, '0')}:`;
  } else {
    return ''
  }
}

export function formattedMinutes(time) {
  if (time > 0) {
    const minutes = time.toString();
    return `${minutes.padStart(2, '0')}:`;
  } else {
    return '0:'
  }
}

export function formattedSeconds(time) {
  const seconds = time.toString();
  return `${seconds.padStart(2, '0')}`;
}

export function formatTime(time) {
  let hours = formattedHours(Math.round(time / 3600));
  let timeLeft = time % 3600;

  let minutes = formattedMinutes(Math.round(timeLeft / 60));
  timeLeft = timeLeft % 60;

  let seconds = formattedSeconds(Math.round(timeLeft));

  return `${hours}${minutes}${seconds}`
}

export default helper(formatTime);
