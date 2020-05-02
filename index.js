function setdate() {
  var option = {
    day: "numeric",
    weekday: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  var day = new Date();
  var x = day.getHours();

  var today = day.toLocaleDateString("en-US",option);

  document.querySelector("h1.date").innerHTML = today;

  if(x <= 12) {
      document.querySelector("h1.sentence").innerHTML = "Good Morning , Nisarg.";
  } else if(x <= 18){
    document.querySelector("h1.sentence").innerHTML = "Good Afternoon , Nisarg.";
  } else {
    document.querySelector("h1.sentence").innerHTML = "Good Night , Nisarg.";
  }

}

setInterval(setdate,1000);
