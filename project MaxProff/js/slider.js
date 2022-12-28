

 var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        },
      });

 var swiper = new Swiper(".mySwiper1", {
        spaceBetween: 5,
        slidesPerView: 4,
        direction: "vertical",
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          731: {
            direction: "horizontal",
          },
          769: {
            direction: "vertical",
            slidesPerView: 5,
          },
         },
       });

     var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        effect: "fade",
         navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

        var swiper = new Swiper(".mySwiper1_tabs", {
        spaceBetween: 5,
        slidesPerView: 4,
        direction: "vertical",
        freeMode: true,
        watchSlidesProgress: true,
          breakpoints: {
          731: {
            direction: "horizontal"
          },
          769: {
            direction: "vertical"
          },
         },
      });

      var swiper2 = new Swiper(".mySwiper2_tabs", {
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      }); 

      var swiper = new Swiper(".mySwiper1_tabs_1", {
        spaceBetween: 5,
        slidesPerView: 4,
        direction: "vertical",
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          731: {
            direction: "horizontal"
          },
          769: {
            direction: "vertical"
          },
         },
       });

     var swiper2 = new Swiper(".mySwiper2_tabs_2", {
        slidesPerView: 1,
         navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });



      var swiper = new Swiper(".mySwiper1_tabs_1_1", {
        spaceBetween: 5,
        slidesPerView: 4,
        direction: "vertical",
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          731: {
            direction: "horizontal"
          },
          769: {
            direction: "vertical"
          },
         },
       });

     var swiper2 = new Swiper(".mySwiper2_tabs_2_2", {
        slidesPerView: 1,
         navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

      var swiper = new Swiper(".mySwiper1_tabs_1_1_1", {
        spaceBetween: 5,
        slidesPerView: 4,
        direction: "vertical",
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          731: {
            direction: "horizontal"
          },
          769: {
            direction: "vertical"
          },
         },
       });

     var swiper2 = new Swiper(".mySwiper2_tabs_2_2_2", {
        slidesPerView: 1,
         navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

        var swiper = new Swiper(".mySwiper3", {
            slidesPerView: "auto",
            spaceBetween: 20,
            freeMode: true,
            pagination: {
              el: ".swiper-pagination_2",
              clickable: true,
          },
          breakpoints: {
            1180: {
              slidesPerView: 3,
            }
          }
      });

        var swiper = new Swiper(".mySwiper4", {
        cssMode: true,
        // spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
      });

        var swiper = new Swiper(".mySwiper5", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
      });

         var swiper = new Swiper(".mySwiper6", {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
         pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          587: {
            centeredSlides: false,
            slidesPerView: 2,
          },
          822: {
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween:12,
          },
        }
      });

       var swiper = new Swiper(".mySwiper8", {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
            swipe: true,
            pagination: {
               el: ".swiper-pagination",
               clickable: true,
          },
          breakpoints: {
            460: {
              slidesPerView: 4,
            },
            615: {
              slidesPerView: 5,
            }
          },
        });
       var swiper2 = new Swiper(".mySwiper7", {
        spaceBetween: 10,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          460: {
            slidesPerView: 1,
          },
          615: {
            slidesPerView: 2,
          }
        },
        thumbs: {
          swiper: swiper,
        },

      });


     



