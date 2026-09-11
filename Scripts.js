/* =========================
   DEMO COUNTDOWN
========================= */

let totalSeconds = 9 * 60 + 53;

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


function updateTimer() {

    if (totalSeconds <= 0) {

        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;
    }

    const minutes =
        Math.floor(totalSeconds / 60);

    const seconds =
        totalSeconds % 60;

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");

    totalSeconds--;
}


updateTimer();

setInterval(updateTimer, 1000);


/* =========================
   COPY
========================= */

function copyText(text, button) {

    navigator.clipboard.writeText(text)
        .then(() => {

            const oldText = button.textContent;

            button.textContent = "COPIED";

            setTimeout(() => {
                button.textContent = oldText;
            }, 1500);

        })
        .catch(() => {

            alert("Copy is not available in this browser.");

        });
}


/* =========================
   PAYMENT APP DEMO
========================= */

function demoPayment(app) {

    const message =
        document.getElementById("demoMessage");

    message.textContent =
        app + " selected — Demo mode only.";

    setTimeout(() => {
        message.textContent = "";
    }, 2500);
}


/* =========================
   UTR DEMO VALIDATION
========================= */

function submitUTR() {

    const input =
        document.getElementById("utr");

    const error =
        document.getElementById("error");

    const utr =
        input.value.trim();


    error.textContent = "";


    if (!/^\d{11}$/.test(utr)) {

        error.textContent =
            "Please enter an 11-digit demo UTR number.";

        return;
    }


    error.style.color = "#1688ed";

    error.textContent =
        "Demo UTR accepted — no real payment was processed.";


    input.value = "";
}
