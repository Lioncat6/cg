let url = window.location.href
let maybe = url.includes("innerturtle123");
if (maybe != "true") {
  document.documentElement.innerHTML = "And you thought I woulnt notice... smh... also heber please delete your copy of my repl before more people fork it...";
  setTimeout(() => {
    window.location.assign("https://cg.innerturtle123.repl.co/");
  }, 5000);

}
