AOS.init();
const scriptURL = "https://script.google.com/macros/s/AKfycbwFMVMmfcPYrIRN_OdIEr0mYeLRkK4TBzLy0icyo55auk-p3TG4VidT7ZeWVVbyif_O/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your message has been submitted successfully!",
      });
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Sorry, something went wrong. Please try again later.",
      });
    });
});
