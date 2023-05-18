const todayDiv = document.getElementById("today");
const timeDiv = document.getElementById("time");

function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  todayDiv.textContent = `${year}년 ${month}월 ${date}일`;
}

function getTime() {
  let now = new Date();
  timeDiv.textContent = now;
  let year = padZero(now.getFullYear());
  let month = padZero(now.getMonth() + 1);
  let date = padZero(now.getDate());
  let hour = padZero(now.getHours());
  let minute = padZero(now.getMinutes());
  let second = padZero(now.getSeconds());

  todayDiv.textContent = `${year}년 ${month}월 ${date}일`;
  timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`;
}

function padZero(data) {
  return data < 10 ? `0${data}` : data;
}

getTime();
setInterval(getTime, 1000);
