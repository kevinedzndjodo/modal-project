// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openModal = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", () => {
  if (modalOverlay.classList.contains("open-modal")) {
    modalOverlay.classList.remove("open-modal");
  } else {
    modalOverlay.classList.add("open-modal");
  }
  // add event listener to close modal when user clicks outside of the modal
  closeModal.addEventListener("click", () => {
    modalOverlay.classList.remove("open-modal");
  });
});
