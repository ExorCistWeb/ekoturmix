  document.addEventListener('DOMContentLoaded', function() {
      const burgerBtn = document.querySelector('.burger-btn');
      const mobileMenu = document.querySelector('.mobile-menu');

      burgerBtn.addEventListener('click', function() {
          this.classList.toggle('active');
          mobileMenu.classList.toggle('active');

          // Блокировка скролла при открытом меню
          if (mobileMenu.classList.contains('active')) {
              document.body.style.overflow = 'hidden';
          } else {
              document.body.style.overflow = '';
          }
      });

      // Закрытие меню при клике на ссылку
      const menuLinks = document.querySelectorAll('.mobile-nav a');
      menuLinks.forEach(link => {
          link.addEventListener('click', function() {
              burgerBtn.classList.remove('active');
              mobileMenu.classList.remove('active');
              document.body.style.overflow = '';
          });
      });
  });

  var swiper = new Swiper(".mainSwiper", {
      pagination: {
          el: ".swiper-pagination",
          clickable: true, // Позволяет переходить к слайду по клику на пагинацию
      },
      autoplay: {
          delay: 2000,
          pauseOnMouseEnter: true, // Пауза при наведении мыши на слайдер
          disableOnInteraction: false,
      },
      loop: true,
      speed: 800, // Более плавный переход
      effect: 'slide', // или 'fade', 'cube', 'coverflow' и др.
      grabCursor: true, // Изменение курсора при захвате слайда
  });

  document.addEventListener('DOMContentLoaded', function() {
      const swiper = new Swiper('.swiperReviews', {
          // Параметры по умолчанию
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: {
              delay: 3000,
              disableOnInteraction: false,
          },

          navigation: {
              nextEl: '.next',
              prevEl: '.prev',
          },
          // Адаптивность
          breakpoints: {
              // при 576px и больше
              576: {
                  slidesPerView: 1,
                  spaceBetween: 20
              },
              // при 768px и больше
              768: {
                  slidesPerView: 2,
                  spaceBetween: 20
              },
              // при 992px и больше
              992: {
                  slidesPerView: 2,
                  spaceBetween: 30
              },
              // при 1200px и больше
              1200: {
                  slidesPerView: 3,
                  spaceBetween: 30
              }
          }
      });
  });
  document.addEventListener('DOMContentLoaded', function() {
      // Получаем все кнопки открытия модальных окон
      const openButtons = document.querySelectorAll('.open-modal-btn');
      // Получаем все модальные окна
      const modals = document.querySelectorAll('.modal');
      // Получаем все кнопки закрытия
      const closeButtons = document.querySelectorAll('.close');
      // Запоминаем текущую позицию скролла
      let scrollPosition = 0;

      // Функция для блокировки скролла
      function disableScroll() {
          // Запоминаем текущую позицию скролла
          scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
          // Блокируем скролл
          document.body.style.overflow = 'hidden';
          document.body.style.position = 'fixed';
          document.body.style.top = `-${scrollPosition}px`;
          document.body.style.width = '100%';
      }

      // Функция для разблокировки скролла
      function enableScroll() {
          // Разблокируем скролл
          document.body.style.overflow = '';
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          // Восстанавливаем позицию скролла
          window.scrollTo(0, scrollPosition);
      }

      // Обработчик для кнопок открытия
      openButtons.forEach(button => {
          button.addEventListener('click', function() {
              const modalName = this.getAttribute('data-modal');
              const modal = document.querySelector(`.modal[data-modal-content="${modalName}"]`);
              if (modal) {
                  modal.style.display = 'flex';
                  disableScroll();
              }
          });
      });

      // Обработчик для кнопок закрытия
      closeButtons.forEach(button => {
          button.addEventListener('click', function() {
              const modal = this.closest('.modal');
              modal.style.display = 'none';
              enableScroll();
          });
      });

      // Закрытие при клике вне модального окна
      window.addEventListener('click', function(event) {
          modals.forEach(modal => {
              if (event.target === modal) {
                  modal.style.display = 'none';
                  enableScroll();
              }
          });
      });


  });