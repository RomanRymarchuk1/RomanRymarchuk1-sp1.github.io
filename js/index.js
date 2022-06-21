"use strict";

const ourServicesMenu = document.querySelector(".our-services-menu");
const serviceDescriptionBox = document.querySelector(
  ".service-description-box"
);
const serviceDescriptionColection = document.querySelectorAll(
  ".service-description"
);

ourServicesMenu.addEventListener("click", (evt) => {
  document.querySelector("#active-services-menu-item").id = "";
  evt.target.id = "active-services-menu-item";
  serviceDescriptionColection.forEach((elem) => {
    elem.className = "none";
    if (evt.target.dataset.index === elem.dataset.index) {
      elem.className = "service-description";
    }
  });
});

//________________________________________________________________________________________________________________________________________________________________________________
const amazinWorkMenu = document.querySelector(".amazin-work-menu");

amazinWorkMenu.addEventListener("click", (event) => {
  document
    .querySelector(".active-amazin-work-item")
    ?.classList.remove("active-amazin-work-item");

  const dataMenuItem = event.target.dataset.photoType;
  const amazinWorkImgCollection = document.querySelectorAll(".flip-card");

  switch (dataMenuItem) {
    case "all":
      amazinWorkImgCollection.forEach((elem) => {
        elem.classList.remove("none");
      });

      break;
    case "graphic-design":
      amazinWorkImgCollection.forEach((elem) => {
        elem.classList.remove("none");
        if (elem.dataset.photoType !== "graphic-design") {
          elem.classList.add("none");
        }
      });

      break;
    case "web-design":
      amazinWorkImgCollection.forEach((elem) => {
        elem.classList.remove("none");
        if (elem.dataset.photoType !== "web-design") {
          elem.classList.add("none");
        }
      });

      break;
    case "landing-pages":
      amazinWorkImgCollection.forEach((elem) => {
        elem.classList.remove("none");
        if (elem.dataset.photoType !== "landing-pages") {
          elem.classList.add("none");
        }
      });

      break;
    case "wordpress":
      amazinWorkImgCollection.forEach((elem) => {
        elem.classList.remove("none");
        if (elem.dataset.photoType !== "wordpress") {
          elem.classList.add("none");
        }
      });

      break;
  }
});

//________________________________________________________________________________________________________________________________________________________________________________

const loadMoreButton = document.querySelector(".load-more-button");
const amazingWorkImgs = document.querySelector(".amazing-work-imadges");
const amazingWorkImgsHTML = amazingWorkImgs.innerHTML;
let i = 0;

loadMoreButton.addEventListener("click", () => {
  i += 1;
  amazingWorkImgs.innerHTML += amazingWorkImgsHTML;
  if (i === 2) {
    loadMoreButton.className = "none";
  }
});

//________________________________________________________________________________________________________________________________________________________________________________

const usersCollection = document.querySelectorAll(".user");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const currentUserListItem = document.querySelector(".current-user-list-item");

previousBtn.addEventListener("click", (event) => {
  const currentUserListItem = document.querySelector(".current-user-list-item");

  const dataUser = currentUserListItem.dataset.user;

  if (dataUser === "lili-cupper") {
    return;
  }

  const dataPreviousUser =
    currentUserListItem.previousElementSibling.dataset.user;

  document.querySelector(".current-user").className = "none";

  document.querySelector(`[data-user="${dataPreviousUser}"]`).className =
    "current-user";

  currentUserListItem.classList.remove("current-user-list-item");
  currentUserListItem.previousElementSibling.classList.add(
    "current-user-list-item"
  );
});

usersCollection.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    const currentUser = document.querySelector(".current-user");
    const dataUser = event.currentTarget.dataset.user;
    const focusUser = document.querySelector(`[data-user='${dataUser}']`);
    const currentUserListItem = document.querySelector(
      ".current-user-list-item"
    );

    if (event.currentTarget.classList.contains("current-user-list-item")) {
      return;
    } else {
      currentUserListItem.classList.remove("current-user-list-item");
      event.currentTarget.classList.add("current-user-list-item");
      currentUser.className = "none";
      focusUser.className = "current-user";
    }
  });
});

nextBtn.addEventListener("click", (event) => {
  const currentUserListItem = document.querySelector(".current-user-list-item");
  const dataUser = currentUserListItem.dataset.user;

  if (dataUser === "lara-smith") {
    return;
  }

  const dataNextUser = currentUserListItem.nextElementSibling.dataset.user;

  document.querySelector(".current-user").className = "none";

  document.querySelector(`[data-user="${dataNextUser}"]`).className =
    "current-user";

  currentUserListItem.classList.remove("current-user-list-item");
  currentUserListItem.nextElementSibling.classList.add(
    "current-user-list-item"
  );
});
