if (navigator.serviceWorker) {
  navigator.serviceWorker.register("./sw.js");
}

const button = document.querySelector("#button-notification");

function requestPermission() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission((status) => {
      console.log("Notification permission status:", status);
    });
  }
}

button.addEventListener("click", (e) => {
  if (Notification.permission === "granted") {
    navigator.serviceWorker.getRegistration().then((reg) => {
      const options = {
        body: "Amelia Jones ha realizado una publicación",
        icon: `https://picsum.photos/id/1005/100/100`,
        badge: "img/favicon.ico",
        vibrate: [
          125,
          75,
          125,
          275,
          200,
          275,
          125,
          75,
          125,
          275,
          200,
          600,
          200,
          600,
        ],
      };

      reg.showNotification("Enterate de todo", options);
    });
  }
});

requestPermission();
