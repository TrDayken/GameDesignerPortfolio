const btns = document.querySelectorAll(".acc-btn")
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const panel = btn.nextElementSibling
        if (panel.style.maxHeight) {
            panel.style.maxHeight = 0
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    })
})
