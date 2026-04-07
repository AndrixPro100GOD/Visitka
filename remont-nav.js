/**
 * Модальное меню страницы «Ремонт квартир»: <dialog> + showModal/close по рекомендациям доступности (фокус, Escape, клик по фону).
 */
document.addEventListener("DOMContentLoaded", function () {
  if (!document.body.classList.contains("page-remont")) return;

  var dialog = document.getElementById("remont-menu-dialog");
  var openBtn = document.querySelector(".remont-menu-trigger");
  if (!dialog || !openBtn || typeof dialog.showModal !== "function") return;

  var closeBtn = dialog.querySelector(".remont-nav-dialog__close");

  function setExpanded(open) {
    openBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function openMenu() {
    dialog.showModal();
    setExpanded(true);
  }

  function closeMenu() {
    if (dialog.open) dialog.close();
  }

  openBtn.addEventListener("click", function () {
    openMenu();
  });

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) closeMenu();
  });

  dialog.addEventListener("close", function () {
    setExpanded(false);
    openBtn.focus();
  });

  dialog.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      dialog.close();
    });
  });
});
