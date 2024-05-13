"user strict";

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

// функція, що приймає число, привлдить до рядка, і добавляє на почанок '0', якщо чісло менше 2 - х знаків;
function pad(value) {
  return String(value).padStart(2, "0");
}

console.log(getTimeComponents(3666774488));
