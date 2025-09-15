const boxes = document.querySelectorAll("div");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        let rect = box.getBoundingClientRect();

        if (rect.bottom <= 0 && !box.classList.contains("done")) {
            if (box.classList.contains("box1")) {
                alert("Qizil rangli ma'lumot tugadi");
            }
            if (box.classList.contains("box2")) {
                alert("Ko'k rangli ma'lumot tugadi");
            }
            if (box.classList.contains("box3")) {
                alert("Yashil rangli ma'lumot tugadi");
            }

            box.classList.add("done");
        }
    });
});