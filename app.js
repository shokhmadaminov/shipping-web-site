const burgerBtn = document.querySelector(".burger-btn")
const closeBtn = document.querySelector(".flow-navbar__close")
const flowNav = document.querySelector(".flow-navbar")



burgerBtn.addEventListener("click", function() {
    burgerBtn.classList.add("hidden")
    closeBtn.classList.remove("hidden")
    flowNav.classList.remove("flow-navbar__remove")
    flowNav.classList.add("flow-navbar__add")
})

closeBtn.addEventListener("click", function() {
    burgerBtn.classList.remove("hidden")
    closeBtn.classList.add("hidden")
    flowNav.classList.add("flow-navbar__remove")
    flowNav.classList.remove("flow-navbar__add")
})