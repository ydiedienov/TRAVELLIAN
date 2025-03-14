document.querySelector('.burger-btn').addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('open');
})

document.querySelectorAll('.card-with-review').forEach((card, index) => {
    card.querySelectorAll('.raiting__input').forEach((input, starIndex) => {
        let uniqueName = `raiting-${index}`; // Уникальный name для каждой карточки
        let uniqueId = `raiting-${index}-${starIndex + 1}`; // Уникальный id для каждой звезды

        input.name = uniqueName;
        input.id = uniqueId;
        input.nextElementSibling.setAttribute('for', uniqueId);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const startDateInput = document.querySelector("#checkInInput");
    const endDateInput = document.querySelector("#checkOutInput");

    if (startDateInput && endDateInput) {
        const today = new Date().toISOString().split("T")[0]; // Сегодняшняя дата

        startDateInput.min = today; // Минимальная дата для первого инпута
        startDateInput.value = today; // Устанавливаем значение по умолчанию
        endDateInput.min = addDays(today, 1); // Минимальная дата для второго инпута
        endDateInput.value = addDays(today, 1); // Устанавливаем значение по умолчанию

        startDateInput.addEventListener("change", function () {
            const newMinDate = addDays(startDateInput.value, 1);
            endDateInput.min = newMinDate; // Обновляем минимальную дату второго инпута
            if (endDateInput.value < newMinDate) {
                endDateInput.value = newMinDate; // Автоматически меняем дату, если она некорректна
            }
        });
    }

    function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result.toISOString().split("T")[0];
    }
});

function updateSearchMargin() {

    if (window.innerWidth < 768) {
        // Если ширина экрана 768px или меньше, сбрасываем отступ и выходим
        document.querySelector('.search').style.paddingLeft = '';
        return;
    }

    const container = document.querySelector('.container');
    const search = document.querySelector('.search');

    if (!container || !search) return;

    // Вычисляем отступ слева
    const containerLeft = container.getBoundingClientRect().left;
    search.style.paddingLeft = `${containerLeft + 15}px`;
}

// Вызываем при загрузке
updateSearchMargin();

// Обновляем при изменении размера окна
window.addEventListener('resize', updateSearchMargin);

// SWIPER

const bannerSwiper = new Swiper('.banner__swiper', {

    direction: 'vertical',
    loop: true,
    allowTouchMove: false,

    pagination: {
        el: '.banner__swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.banner__swiper-button-next',
        prevEl: '.banner__swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
    },
});

const travelspotSwiper = new Swiper('.travelspot__swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,

    navigation: {
        nextEl: '.travelspot__swiper-button-next',
        prevEl: '.travelspot__swiper-button-prev',
    },

    breakpoints: {
        1152: {
            slidesPerView: "auto",
            spaceBetween: 32,
        },
    }

});

const offersSwiper = new Swiper('.offers__swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,

    navigation: {
        nextEl: '.offers__swiper-button-next',
        prevEl: '.offers__swiper-button-prev',
    },

    breakpoints: {
        1152: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    }
});

const toursSwiper = new Swiper('.tours__swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,

    navigation: {
        nextEl: '.tours__swiper-button-next',
        prevEl: '.tours__swiper-button-prev',
    },

    breakpoints: {
        1152: {
            slidesPerView: "auto",
            spaceBetween: 32,
        },
    },
});

const gallerySwiper = new Swiper('.gallery__swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,

    navigation: {
        nextEl: '.gallery__swiper-button-next',
        prevEl: '.gallery__swiper-button-prev',
    },

    breakpoints: {
        1152: {
            slidesPerView: 4,
            spaceBetween: 32,
        },
    },
});

const reviewsSwiper = new Swiper('.reviews__swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,

    navigation: {
        nextEl: '.reviews__swiper-button-next',
        prevEl: '.reviews__swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: "auto",
            spaceBetween: 32,
        },
    },
});

console.log("window.innerWidth:", window.innerWidth);
console.log("document.documentElement.clientWidth:", document.documentElement.clientWidth);
console.log("window.innerHeight:", window.innerHeight);
console.log("document.documentElement.clientHeight:", document.documentElement.clientHeight);