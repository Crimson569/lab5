document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion-item");

    accordions.forEach(item => {
        const header = item.querySelector(".accordion-header");

        header.addEventListener("click", () => {
            // закрываем все остальные
            accordions.forEach(i => {
                if (i !== item) i.classList.remove("active");
            });

            // переключаем текущее
            item.classList.toggle("active");
        });
    });
});
