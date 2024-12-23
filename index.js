$(document).ready(function () {
  // Инициализация Swiper
  const swiper = new Swiper('.swiper', {
    loop: true, // Зацикливание слайдов
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        const slides = document.querySelectorAll('.swiper-slide img');
        if (slides[index]) {
          const slideImg = slides[index].src;
          return `<span class="${className}" style="background-image: url('${slideImg}')"></span>`;
        }
        return `<span class="${className}"></span>`; // Возвращаем стандартную точку, если изображений нет
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Обработка адаптивности
      992: {
        pagination: {
          type: 'bullets', // Простые точки пагинации на маленьких экранах
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`; // Просто точки без изображения
          },
        },
      },
    },
  });

  // Функция обновления видимости буллетов
  function updateVisibleBullets() {
    const bullets = document.querySelectorAll('.swiper-pagination .swiper-pagination-bullet');
    const activeIndex = swiper.realIndex; // Текущий индекс активного слайда
    const totalBullets = bullets.length;

    // Показываем только три буллета: активный и два соседних
    bullets.forEach((bullet, index) => {
      if (
        index === activeIndex || // Активный буллет
        index === (activeIndex + 1) % totalBullets || // Следующий
        index === (activeIndex - 1 + totalBullets) % totalBullets // Предыдущий
      ) {
        bullet.style.display = 'inline-block'; // Показываем активный и два соседних
      } else {
        bullet.style.display = 'none'; // Скрываем остальные буллеты
      }
    });
  }

  // Функция для изменения пагинации при изменении размера окна
  function checkWindowSize() {
    const windowWidth = $(window).width();
    
    if (windowWidth < 992) {
      // Убираем изображения в пагинации для маленьких экранов
      $('.swiper-pagination .swiper-pagination-bullet').css('background-image', 'none');
    } else {
      // Восстанавливаем изображения для больших экранов
      $('.swiper-pagination .swiper-pagination-bullet').each(function (index) {
        const slideImg = document.querySelectorAll('.swiper-slide img')[index]?.src;
        if (slideImg) {
          $(this).css('background-image', `url('${slideImg}')`);
        }
      });
    }
  }

  // Функция для управления видимостью блоков в зависимости от ширины экрана
  function checkScreenWidth() {
    const windowWidth = $(window).width();
    
    if (windowWidth <= 992) {
      $('.color_choice').hide();
      $('.color_choice_2').show();
      $('.memory_choice').hide();
      $('.memory_choice_2').show();
      $('.info_1').hide();
      $('.info_2').show();
    } else {
      $('.color_choice').show();
      $('.color_choice_2').hide();
      $('.memory_choice').show();
      $('.memory_choice_2').hide();
      $('.info_1').show();
      $('.info_2').hide();
    }
  }

  // Вызываем функции при загрузке и изменении размера окна
  checkWindowSize();
  checkScreenWidth();

  $(window).resize(function () {
    checkWindowSize();
    checkScreenWidth();
  });

  // Обработчики для переключения активных кнопок
  $('.memories .button_memory').on('click', function () {
    $('.memories .button_memory').removeClass('active');
    $(this).addClass('active');
  });

  $('.memory_choice .button_memory').on('click', function () {
    $('.memory_choice .button_memory').removeClass('active');
    $(this).addClass('active');
  });

  $('.color_choice .button_color').on('click', function () {
    $('.color_choice .button_color').removeClass('active');
    $(this).addClass('active');
  });

  $('.color_choice_2 .button_color').on('click', function () {
    $('.color_choice_2 .button_color').removeClass('active');
    $(this).addClass('active');
  });

  // Отключение стандартного поведения для Bootstrap кнопок
  $(document).on('click', '.button_memory', function (event) {
    event.preventDefault(); // Отключает поведение Bootstrap, связанное с 'active'
  });

  // Убираем 'active' с кнопок
  $('.btn').button('dispose');
});