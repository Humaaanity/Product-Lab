const swiper = new Swiper('.swiper', {
    // Optional parameters
   
    loop: true,
  
    // If we need pagination
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
        return `<img src="${images[index]}" class="${className}" alt="Slide ${index + 1}" />`;
    },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  
    // And if we need scrollbar
   
  });

  