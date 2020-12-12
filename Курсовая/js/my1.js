const mumultiDefault = () => {
  const elements = document.querySelectorAll('.header_bot_selects');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
      position: true,
      shouldSort: false,

    })
  })

}
mumultiDefault();



if (document.documentElement.clientWidth > 1919) {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  })
}


if (document.documentElement.clientWidth < 1920 && document.documentElement.clientWidth > 1439) {

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 25,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  })


}

if (document.documentElement.clientWidth < 1440 && document.documentElement.clientWidth > 1199) {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 25,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  })
}

if (document.documentElement.clientWidth < 1200 && document.documentElement.clientWidth > 767) {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 34,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  })
}

if (document.documentElement.clientWidth < 768 && document.documentElement.clientWidth > 479) {
    var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 10,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  })
}

if (document.documentElement.clientWidth < 480) {
  var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination


  // Navigation arrows

  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 10,
  loop: true,
  // grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
})
}

