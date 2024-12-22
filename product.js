$(document).ready(function() {
  const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        // Картинки для пагинации
        const images = [
          './images/iphone_ang_1.png',
          './images/iphone_ang_2.png',
          './images/iphone_ang_3.png',
        ];
        // Возвращаем HTML для каждого индикатора
        return `<span class="${className}"><img src="${images[index]}" alt="Slide ${index + 1}" class="pagination-image" /></span>`;
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
      992: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets', // Простые точки на маленьких экранах
        },
      },
    },

    on: {
      init: function() {
        this.update();  // Обновление состояния Swiper после инициализации
      }
    }
  });

  // Проверяем размер экрана при загрузке и изменении
  function checkWindowSize() {
    if ($(window).width() < 992) {
      // Если экран меньше 992px, скрываем изображения в пагинации
      $('.swiper-pagination .swiper-pagination-bullet img').hide();
    } else {
      // Если экран больше или равен 992px, показываем изображения
      $('.swiper-pagination .swiper-pagination-bullet img').show();
    }
  }

  // Вызов функции при загрузке страницы
  checkWindowSize();

  // Вызов функции при изменении размера окна
  $(window).resize(function() {
    checkWindowSize();
  });
});