<template>
  <header>
    <SideBar v-show="isMobileModelVisible" @close="closeMenu"></SideBar>
    <div class="secondary-header__show" v-show="isScrolled">
      <div class="secondary-header__show-options">
        <img src="@/assets/img/englogo.svg" alt="logo">
        <a href="#why" class="secondary-header__show-options-text">Почему мы?</a>
        <a href="#programs" class="secondary-header__show-options-text">Услуги</a>
        <a href="#teachers" class="secondary-header__show-options-text">Преподаватели</a>
        <a href="#test" class="secondary-header__show-options-text">Пройти тест</a>
        <a href="#company" class="secondary-header__show-options-text">О компании</a>
        <a href="#price" class="secondary-header__show-options-text">Стоимость</a>
        <a href="#review" class="secondary-header__show-options-text">Отзывы</a>
        <a href="#questions" class="secondary-header__show-options-text">Вопросы</a>
        <button class="secondary-header__btn" @click="showModal">Оставить заявку</button>
      </div>
    </div>
    <div class="header">
      <div class="header__address">
        <img src="@/assets/img/location.svg" alt="location">
        <p class="header__address-text">{{ this.contact_headers.address }}</p>
      </div>
      <div class="header__contacts">
        <div class="header__contacts-telephone">
          <img src="@/assets/img/telephone.svg" alt="location">
          <p class="header__contacts-telepone-text">{{ this.contact_headers.contact_phone }} / {{
            this.contact_headers.contact_phone2 }}</p>
        </div>
        <div class="header__contacts-mail">
          <img src="@/assets/img/maill.svg" alt="mail">
          <p class="header__contacts-mail-text">{{ this.contact_headers.contact_email }}</p>
        </div>
      </div>
    </div>
    <div class="secondary-header">
      <div class="secondary-header__school">
        <img src="@/assets/img/school.svg" alt="logo" class="secondary-header__school-logo">
        <img src="@/assets/img/menu.svg" alt="menu" class="burger-menu-icon" v-show="isMobile" @click="openMenu">
      </div>
      <div class="secondary-header__options">
        <a href="#why" class="secondary-header__options-text">Почему мы?</a>
        <a href="#programs" class="secondary-header__options-text">Услуги</a>
        <a href="#teachers" class="secondary-header__options-text">Преподаватели</a>
        <a href="#test" class="secondary-header__options-text">Пройти тест</a>
        <a href="#company" class="secondary-header__options-text">О компании</a>
        <a href="#price" class="secondary-header__options-text">Стоимость</a>
        <a href="#review" class="secondary-header__options-text">Отзывы</a>
        <a href="#questions" class="secondary-header__options-text">Вопросы</a>
      </div>
      <div class="secondary-header__button">
        <button class="secondary-header__btn" @click="showModal">Оставить заявку</button>
      </div>
    </div>
  </header>

  <div class="banner__learn-eng">
    <div class="banner__learn-eng-info">
      <h1>{{ this.main_texts.text }}</h1>
      <p class="banner__learn-eng-info-text">{{ this.main_texts.description }}</p>
      <div class="banner__learn-eng-info-btns">
        <button class="banner__learn-eng-info-btns_red" @click="showModal">Получить консультацию</button>
        <button class="banner__learn-eng-info-btns_blue" @click="openTest">Узнать свой уровень</button>
      </div>
      <div class="banner__learn-eng-info-benefits">
        <div class="banner__learn-eng-info-benefits_row">
          <div class="banner__learn-eng-info-benefits_scheduled">
            <img src="@/assets/img/time.svg" alt="time">
            <p class="banner__learn-eng-info-benefits_scheduled-text">Удобное расписание</p>
          </div>
          <div class="banner__learn-eng-info-benefits_results">
            <img src="@/assets/img/results.svg" alt="results">
            <p class="banner__learn-eng-info-benefits_results-text">Высокие результаты</p>
          </div>
        </div>
        <div class="banner__learn-eng-info-benefits_row">
          <div class="banner__learn-eng-info-benefits_literature">
            <img src="@/assets/img/book.svg" alt="book">
            <p class="banner__learn-eng-info-benefits_literature-text">Зарубежная литература</p>
          </div>
          <div class="banner__learn-eng-info-benefits_learning">
            <img src="@/assets/img/laptop.svg" alt="laptop" style="width: 50px;">
            <p class="banner__learn-eng-info-benefits_learning-text">Онлайн обучение</p>
          </div>
        </div>
      </div>
    </div>
    <div class="banner__learn-eng-pic">
      <img src="@/assets/img/lesson.svg" alt="lesson" class="banner__learn-eng-pic-lesson">
      <img src="@/assets/img/test.svg" alt="test" class="banner__learn-eng-pic-test">
      <img src="@/assets/img/london.svg" alt="London" class="banner__learn-eng-pic-london">
    </div>
  </div>
  <div id="why" class="banner__advantages">
    <h2>{{ this.advantage_blocks.text }}</h2>
    <div class="banner__advantages_first-row">
      <div class="banner__advantages_first-row-col1">
        <div>
          <img src="@/assets/img/bookss.svg" alt="books" class="banner__advantages_first-row-col1-img">
        </div>
        <div class="banner__advantages_first-row-col1-info">
          <h3>{{ this.advantages.text }}</h3>
          <p class="banner__advantages_first-row-col1-text">{{ this.advantages.description }}</p>
        </div>
      </div>
      <div class="banner__advantages_first-row-col1">
        <div>
          <img src="@/assets/img/bookss.svg" alt="books" class="banner__advantages_first-row-col1-img">
        </div>
        <div class="banner__advantages_first-row-col1-info">
          <h3>{{ this.advantages1.text }}</h3>
          <p class="banner__advantages_first-row-col1-text">{{ this.advantages1.description }}</p>
        </div>
      </div>
    </div>
    <div class="banner__advantages_second-row">
      <div class="banner__advantages_first-row-col1">
        <div>
          <img src="@/assets/img/bookss.svg" alt="books" class="banner__advantages_first-row-col1-img">
        </div>
        <div class="banner__advantages_first-row-col1-info">
          <h3>{{ this.advantages2.text }}</h3>
          <p class="banner__advantages_first-row-col1-text">{{ this.advantages2.description }}</p>
        </div>
      </div>
      <div class="banner__advantages_first-row-col1">
        <div>
          <img src="@/assets/img/bookss.svg" alt="books" class="banner__advantages_first-row-col1-img">
        </div>
        <div class="banner__advantages_first-row-col1-info">
          <h3>{{ this.advantages4.text }}</h3>
          <p class="banner__advantages_first-row-col1-text">{{ this.advantages4.description }}</p>
        </div>
      </div>
    </div>
    <div class="banner__advantages_third-row">
      <div class="banner__advantages_first-row-col1">
        <div>
          <img src="@/assets/img/bookss.svg" alt="books" class="banner__advantages_first-row-col1-img">
        </div>
        <div class="banner__advantages_first-row-col1-info">
          <h3>{{ this.advantages3.text }}</h3>
          <p class="banner__advantages_first-row-col1-text">{{ this.advantages3.description }}</p>
        </div>
      </div>
      <div class="banner__advantages_first-row-col1">
        <div>
          <img src="@/assets/img/bookss.svg" alt="books" class="banner__advantages_first-row-col1-img">
        </div>
        <div class="banner__advantages_first-row-col1-info">
          <h3>{{ this.advantages5.text }}</h3>
          <p class="banner__advantages_first-row-col1-text">{{ this.advantages5.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="banner__programs" id="programs">
    <h4>{{ this.programs.text }}</h4>
    <div class="banner__programs-all">
      <div>
        <div class="banner__programs_row-one">
          <div class="banner__programs-first">
            <div class="banner__programs-first-base">
              <h5>01</h5>
              <img src="@/assets/img/base.svg" alt="base" class="banner__programs-first-base-img">
            </div>
            <h6>{{ this.program_types.text }}</h6>
            <p class="banner__programs-first-info">{{ this.program_types.description }}</p>
            <div class="banner__programs-first-link" @click="showFirstModal">
              <p class="banner__programs-first-link-info-more">Узнать подробнее</p>
              <img src="@/assets/img/line.svg" alt="line" class="banner__programs-first-link-arrow">
            </div>
          </div>
          <div class="banner__programs-second">
            <div class="banner__programs-second-top">
              <p class="banner__programs-second-topic">02</p>
              <img src="@/assets/img/top.svg" alt="top" class="banner__programs-first-base-img">
            </div>
            <p class="banner__programs-second-eng">{{ this.program_types2.text }}</p>
            <p class="banner__programs-second-eng-info">{{ this.program_types2.description }}</p>
            <div class="banner__programs-second-link" @click="showFirstModal">
              <p class="banner__programs-second-link-info-more">Узнать подробнее</p>
              <img src="@/assets/img/line2.svg" alt="line" class="banner__programs-first-link-arrow">
            </div>
          </div>
        </div>

        <div class="banner__programs_row-two">
          <div class="banner__programs-second">
            <div class="banner__programs-second-top">
              <p class="banner__programs-second-topic">03</p>
              <img src="@/assets/img/base.svg" alt="base" class="banner__programs-first-base-img">
            </div>
            <p class="banner__programs-second-eng">{{ this.program_types1.text }}</p>
            <p class="banner__programs-second-eng-info">{{ this.program_types1.description }}</p>
            <div class="banner__programs-second-link" @click="showFirstModal">
              <p class="banner__programs-second-link-info-more">Узнать подробнее</p>
              <img src="@/assets/img/line2.svg" alt="line" class="banner__programs-first-link-arrow">
            </div>
          </div>
          <div class="banner__programs-first">
            <div class="banner__programs-fourth-base">
              <h5>04</h5>
              <img src="@/assets/img/top.svg" alt="top" class="banner__programs-first-base-img">
            </div>
            <h6>{{ this.program_types3.text }}</h6>
            <p class="banner__programs-first-info">{{ this.program_types3.description }}</p>
            <div class="banner__programs-first-link" @click="showFirstModal">
              <p class="banner__programs-first-link-info-more">Узнать подробнее</p>
              <img src="@/assets/img/line.svg" alt="line" class="banner__programs-first-link-arrow">
            </div>
          </div>
        </div>
      </div>
      <Modal v-show="isFirstModalVisible" @close="closeFirstModal">
        <template #header>
          <div class="modal__english">
            <div class="modal__english-img">
              <img src="@/assets/img/family.svg" alt="family" v-if="!isMobile">
              <img src="@/assets/img/family_mob.svg" alt="family" v-if="isMobile" class="modal__english-img-family">
            </div>
            <div class="modal__english-adults">
              <p class="modal__english-adults-topic">Английский для взрослых</p>
              <img src="@/assets/img/base.svg" alt="base" class="modal__english-adults-base">
              <p class="modal__english-adults-text">В нашей языковой школе курсы английского языка для взрослых проходят
                в следующих форматах: в группе от
                4 до 8 человек мини группе 2-3 человека индивидуально Прежде чем определить форму обучения мы проводим
                бесплатное тестирование на определение уровня знания английского языка, а также даем рекомендации по
                подбору программы и типа занятий. Занимаясь в группе, вы быстрее преодолеете языковой барьер, научитесь
                воспринимать речь на слух, познакомитесь с интересными людьми и возможно заведете новых друзей,
                недостаток только один — программа расписана по занятиям и рассчитана на среднего слушателя, поэтому
                освоить курс раньше срока у вас не получится.</p>
            </div>
          </div>
        </template>
      </Modal>
      <div class="banner__programs-form">
        <p class="banner__programs-form-level">Не знаете какой уровень Вам подойдет?</p>
        <div class="banner__programs-form-name">
          <label>Ваше ФИО</label>
          <input type="text" class="banner__programs-form-name-input" placeholder="Введите имя" v-model="name">
        </div>
        <div class="banner__programs-form-telephone">
          <label>Номер телефона</label>
          <input type="text" class="banner__programs-form-name-input" placeholder="+7" v-model="telephone">
        </div>
        <div class="banner__programs-form-comment">
          <label>Комментарий</label>
          <div class="banner__programs-form-comment-input-wrapper">
            <input type="text" class="banner__programs-form-comment-input"
              placeholder="Напишите свой вопрос или комментарий..." v-model="comment">
          </div>
        </div>
        <div class="banner__programs-form-btn">
          <button class="banner__programs-form-button" @click="createConsultation">Получить консультацию</button>
          <Modal v-show="isModalVisible" @close="closeModal">
            <template #header>
              <div class="modal__request-form">
                <div class="modal__request">
                  <img src="@/assets/img/school2.svg" alt="logo">
                  <p class="modal__request-topic">Оставьте нам заявку</p>
                  <p class="modal__request-text">Наши менеджеры свяжутся с Вами в ближайшее время и ответят на все
                    вопросы</p>
                </div>
                <div class="modal__form">
                  <div class="banner__programs-form-name">
                    <label>Ваше имя</label>
                    <input type="text" class="banner__programs-form-name-input" placeholder="Введите имя"
                      v-model="name">
                  </div>
                  <div class="banner__programs-form-telephone">
                    <label>Номер телефона</label>
                    <input type="text" class="banner__programs-form-name-input" placeholder="+7" v-model="telephone">
                  </div>
                  <div class="banner__programs-form-comment">
                    <label>Комментарий</label>
                    <div class="banner__programs-form-comment-input-wrapper">
                      <input type="text" class="banner__programs-form-comment-input"
                        placeholder="Напишите свой вопрос или комментарий..." v-model="comment">
                    </div>
                  </div>
                  <div class="banner__programs-form-btn">
                    <button class="banner__programs-form-button" @click="createConsultation">Получить
                      консультацию</button>
                  </div>
                  <div class="modal__form-terms">
                    <p class="modal__form-terms-text" v-if="!isMobile">Нажимая на “Получить консультацию”, я даю
                      согласие на обработку
                      персональных данных</p>
                  </div>
                </div>
              </div>
            </template>
          </Modal>
        </div>
        <p class="banner__programs-form-personal">Нажимая на “Получить консультацию”, я даю согласие на обработку
          персональных данных</p>
      </div>
    </div>
  </div>

  <Modal v-show="isModalApplicationVisible" @close="closeApplication" :showWhiteCloseIcon="showWhiteCloseIcon"
    :showDefaultCloseIcon="showDefaultCloseIcon" :applyHeaderNewStyle="applyHeaderNewStyle">
    <template #header>
      <div class="modal__application">
        <img src="@/assets/img/school2.svg" alt="logo">
        <p class="modal__application-topic">Спасибо за заявку!</p>
        <p class="modal__application-text">Ждите звонка от наших менеджеров в ближайшее время</p>
        <button class="modal__application-button" @click="closeApplication">На главную</button>
      </div>
    </template>
  </Modal>

  <div class="banner__teachers" id="teachers">
    <h4>{{ this.teacher_blocks.text }}</h4>
    <p class="banner__teachers_about">{{ this.teacher_blocks.description }}</p>

    <swiper ref="{swiperRef}" :slidesPerView="4" :centeredSlides="false" :spaceBetween="30" :pagination="{
      type: 'fraction',
    }" :navigation="true" :modules="modules"
      :breakpoints="{ 300: { slidesPerView: 1 }, 1920: { slidesPerView: 4 }, 1440: { slidesPerView: 4, spaceBetween: 400 }, 1366: { slidesPerView: 3, spaceBetween: 80 }, 1200: { slidesPerView: 3, spaceBetween: 150 }, 1024: { slidesPerView: 2, spaceBetween: 100 } }"
      class="mySwiper">
      <swiper-slide>
        <div>
          <img src="@/assets/img/andrey.svg" alt="person" style="width: 412px;height: 521px;">
          <p class="banner__teachers-name">{{ this.teachers.full_name }}</p>
          <p class="banner__teachers-info">{{ this.teachers.description }}</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img src="@/assets/img/valya.svg" alt="person" style="width: 412px;height: 521px;">
          <p class="banner__teachers-name">{{ this.teachers1.full_name }}</p>
          <p class="banner__teachers-info">{{ this.teachers1.description }}</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img src="@/assets/img/kris.svg" alt="person" style="width: 412px;height: 521px;">
          <p class="banner__teachers-name">{{ this.teachers2.full_name }}</p>
          <p class="banner__teachers-info">{{ this.teachers2.description }}</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img src="@/assets/img/leila.svg" alt="person" style="width: 412px;height: 521px;">
          <p class="banner__teachers-name">{{ this.teachers3.full_name }}</p>
          <p class="banner__teachers-info">{{ this.teachers3.description }}</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img src="@/assets/img/andrey.svg" alt="person" style="width: 412px;height: 521px;">
          <p class="banner__teachers-name">Иванов Александр</p>
          <p class="banner__teachers-info">Международная квалификация: Cambridge CELTA.</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img src="@/assets/img/kris.svg" alt="person" style="width: 412px;height: 521px;">
          <p class="banner__teachers-name">Иванова Дарья</p>
          <p class="banner__teachers-info">Международная квалификация: Cambridge CELTA.</p>
        </div>
      </swiper-slide>
    </swiper>
    <p class="append-buttons"></p>
  </div>

  <div class="banner__level" id="test">
    <div class="banner__level-bar-question">
      <div class="banner__level-bar">
        <div class="container">
          <div class="container_line" v-if="!isMobile">
            <div class="container_line-wrap1">
              <p class="bar_level">A1</p>
              <img src="@/assets/img/moreinfo.svg" alt="info" class="more-info">
            </div>
            <div class="container_line-wrap2">
              <p class="bar_level">A2</p>
              <img src="@/assets/img/moreinfo.svg" alt="info" class="more-info">
            </div>
            <div class="container_line-wrap3">
              <p class="bar_level">B1</p>
              <img src="@/assets/img/moreinfo.svg" alt="info" class="more-info">
            </div>
            <div class="container_line-wrap4">
              <p class="bar_level">B2</p>
              <img src="@/assets/img/moreinfo.svg" alt="info" class="more-info">
            </div>
            <div class="container_line-wrap5">
              <p class="bar_level">C1</p>
              <img src="@/assets/img/moreinfo.svg" alt="info" class="more-info">
            </div>
            <div class="container_line-wrap6">
              <p class="bar_level">C2</p>
              <img src="@/assets/img/moreinfo.svg" alt="info" class="more-info">
            </div>
          </div>

          <div class="barcontainer">
            <p class="bar_level" v-if="isMobile">A1</p>
            <div class="bar_red bar" style="height:30%">
              <div class="hide"><img src="@/assets/img/beginner.svg" alt="beginner"></div>
            </div>
            <img src="@/assets/img/moreinfo.svg" alt="info" class="more-info" v-if="isMobile">
            <p class="bar_level-text1" v-if="isMobile">Beginner</p>
          </div>
          <div class="barcontainer">
            <p class="bar_level" v-if="isMobile">A2</p>
            <div class="bar_orange bar" style="height:40%">
              <div class="hide"><img src="@/assets/img/elementary.svg" alt="beginner"></div>
            </div>
            <img src="@/assets/img/moreinfo.svg" alt="info" class="more-info" v-if="isMobile">
            <p class="bar_level-text2" v-if="isMobile">Elementary</p>
          </div>
          <div class="barcontainer">
            <p class="bar_level" v-if="isMobile">B1</p>
            <div class="bar_yellow bar" style="height:44%">
              <div class="hide"><img src="@/assets/img/beginner.svg" alt="beginner"></div>
            </div>
            <img src="@/assets/img/moreinfo.svg" alt="info" class="more-info" v-if="isMobile">
            <p class="bar_level-text3" v-if="isMobile">Pre-Intermediate</p>
          </div>
          <div class="barcontainer">
            <p class="bar_level" v-if="isMobile">B2</p>
            <div class="bar_green bar" style="height:50%">
              <div class="hide"><img src="@/assets/img/elementary.svg" alt="beginner"></div>
            </div>
            <img src="@/assets/img/moreinfo.svg" alt="info" class="more-info" v-if="isMobile">
            <p class="bar_level-text4" v-if="isMobile">Upper Intermediate</p>
          </div>
          <div class="barcontainer">
            <p class="bar_level" v-if="isMobile">C1</p>
            <div class="bar_blue bar" style="height:65%">
              <div class="hide"><img src="@/assets/img/beginner.svg" alt="beginner"></div>
            </div>
            <img src="@/assets/img/moreinfo.svg" alt="info" class="more-info" v-if="isMobile">
            <p class="bar_level-text5" v-if="isMobile">Advanced</p>
          </div>
          <div class="barcontainer" style="margin-right: 0;">
            <p class="bar_level" v-if="isMobile">C2</p>
            <div class="bar_violet bar" style="height:80%">
              <div class="hide"><img src="@/assets/img/elementary.svg" alt="beginner"></div>
            </div>
            <img src="@/assets/img/moreinfo.svg" alt="info" class="more-info" v-if="isMobile">
            <p class="bar_level-text6" v-if="isMobile">Proficiency</p>
          </div>
        </div>

        <div class="banner__level-text" v-if="!isMobile">
          <p class="banner__level-text1">Beginner</p>
          <p class="banner__level-text2">Elementary</p>
          <p class="banner__level-text3">Pre-Intermediate</p>
          <p class="banner__level-text4">Upper Intermediate</p>
          <p class="banner__level-text5">Advanced</p>
          <p class="banner__level-text6">Proficiency</p>
        </div>
      </div>

      <div class="banner__guestion">
        <p class="banner__level-question-topic">А Вы знаете свой уровень английского языка?</p>
        <p class="banner__level-question-more">Пройдите БЕСПЛАТНЫЙ тест, и узнайте какой у Вас уровень английского</p>
        <button class="banner__level-question-button" @click="openTest">Пройти тест</button>
      </div>
    </div>
  </div>

  <Modal v-show="isModalTestVisible" @close="closeTest" :showTestCloseIcon="showTestCloseIcon">
    <template #header v-if="!isMobile">
      <div class="modal__test">
        <img src="@/assets/img/school.svg" alt="logo">
        <p class="modal__test-topic">Тест на определение уровня английского языка</p>
        <p class="modal__test-text">Сейчас Вы пройдете тест из 20 вопросов, который определит уровень Ваших знаний.
          Результат мы вышлем на Ваш e-mail</p>
        <button class="modal__test-button" @click="startTest">Начать тест</button>
      </div>
    </template>

    <template #header v-if="isMobile">
      <div class="modal__test_mb">
        <img src="@/assets/img/school.svg" alt="logo">
        <p class="modal__test-topic_mb">Тест на определение уровня английского языка</p>
        <p class="modal__test-text_mb">Сейчас Вы пройдете тест из 20 вопросов, который определит уровень Ваших знаний.
          Результат мы вышлем на Ваш e-mail</p>
        <button class="modal__test-button_mb" @click="startTest">Начать тест</button>
      </div>
    </template>
  </Modal>

  <Modal v-show="isTestVisible" @close="cancelresultsReady" :showTestCloseIcon="showTestCloseIcon">
    <template #header v-if="!isMobile">
      <div class="modal__eng-test">
        <p class="modal__eng-test-topic">Выберите правильный ответ</p>
        <div v-show="index === questionIndex" v-for="(testQuestion, index) in testQuestions" :key="testQuestion.id">
          <div class="modal__eng-test-question">
            <p class="modal__eng-test-question-text">{{ testQuestion.question_text }}</p>
          </div>
          <div class="modal__eng-test-answers">
            <div class="modal__eng-test-answers-input">
              <input type="checkbox" :id="'a' + index" :name="'a' + index" value="a" @change="selectAnswer(index, 'a')">
              <label :for="'a' + index"> a) {{ testQuestion.option_a }}</label>
            </div>
            <div class="modal__eng-test-answers-input">
              <input type="checkbox" :id="'b' + index" :name="'b' + index" value="b" @change="selectAnswer(index, 'b')">
              <label :for="'b' + index"> b) {{ testQuestion.option_b }} </label>
            </div>
            <div class="modal__eng-test-answers-input">
              <input type="checkbox" :id="'c' + index" :name="'c' + index" value="c" @change="selectAnswer(index, 'c')">
              <label :for="'c' + index"> c) {{ testQuestion.option_c }}</label>
            </div>
            <div class="modal__eng-test-answers-input">
              <input type="checkbox" :id="'d' + index" :name="'d' + index" value="d" @change="selectAnswer(index, 'd')">
              <label :for="'d' + index"> d) {{ testQuestion.option_d }}</label>
            </div>
          </div>
        </div>
        <div class="modal__eng-test-buttons">
          <div class="modal__eng-test-buttons-prev" v-if="questionIndex > 0" v-on:click="prev">
            <img src="@/assets/img/arrow-left.svg" alt="arrow">
            <p class="modal__eng-test-buttons-prev-text">Предыдущий вопрос</p>
          </div>
          <div class="modal__eng-test-buttons-next" v-on:click="next" v-if="questionIndex != testQuestions.length - 1">
            <p class="modal__eng-test-buttons-next-text">Следующий вопрос</p>
            <img src="@/assets/img/arrow-right.svg" alt="arrow">
          </div>
          <div class="modal__eng-test-buttons-next" v-if="questionIndex == testQuestions.length - 1"
            @click="resultsReady">
            <p class="modal__eng-test-buttons-next-text">Завершить тест</p>
            <img src="@/assets/img/arrow-right.svg" alt="arrow">
          </div>
        </div>
      </div>
    </template>

    <template #header v-if="isMobile">
      <div class="modal__eng-test_mb">
        <img src="@/assets/img/school.svg" alt="logo">
        <p class="modal__eng-test_mb-topic">Выберите правильный ответ</p>
        <div class="modal__eng-test_mb-question">
          <p class="modal__eng-test_mb-question-text">2. I ...... 25 years old.</p>
        </div>
        <div class="modal__eng-test_mb-answers">
          <div class="modal__eng-test_mb-answers-input">
            <input type="checkbox" id="a" name="a" value="have">
            <label for="a"> a) have</label>
          </div>
          <div class="modal__eng-test_mb-answers-input">
            <input type="checkbox" id="a" name="a" value="have">
            <label for="a"> b) am </label>
          </div>
          <div class="modal__eng-test_mb-answers-input">
            <input type="checkbox" id="a" name="a" value="have">
            <label for="a"> c) has</label>
          </div>
          <div class="modal__eng-test_mb-answers-input">
            <input type="checkbox" id="a" name="a" value="have">
            <label for="a"> d) is</label>
          </div>
        </div>
        <div class="modal__eng-test_mb-buttons">
          <div class="modal__eng-test_mb-buttons-prev">
            <img src="@/assets/img/arrow-left.svg" alt="arrow">
          </div>
          <div class="modal__eng-test_mb-buttons-next">
            <img src="@/assets/img/arrow-right.svg" alt="arrow">
          </div>
        </div>
      </div>
    </template>
  </Modal>

  <Modal v-show="isResultsReady" @close="cancelresultsReady">
    <template #header>
      <div class="modal__request-form">
        <div class="modal__request">
          <img src="@/assets/img/school2.svg" alt="logo">
          <p class="modal__request-topic_test">Результаты готовы!</p>
        </div>
        <div class="modal__form">
          <p class="modal__form_results-text">Оставьте свои данные, и мы отправим Ваши результаты на e-mail</p>
          <div class="banner__programs-form-name">
            <label>Ваше имя</label>
            <input type="text" class="banner__programs-form-name-input" placeholder="Введите имя" v-model="nameForTest">
          </div>
          <div class="banner__programs-form-telephone">
            <label>Номер телефона</label>
            <input type="text" class="banner__programs-form-name-input" placeholder="+7" v-model="telephoneForTest">
          </div>
          <div class="banner__programs-form-comment">
            <label>Ваш e-mail</label>
            <div class="banner__programs-form-comment-input-wrapper">
              <input type="text" class="banner__programs-form-name-input" placeholder="Укажите Вашу почту"
                v-model="emailForTest">
            </div>
          </div>
          <div class="banner__programs-form-btn">
            <button class="banner__programs-form-button" @click="finishTest">Получить результаты</button>
          </div>
          <div class="modal__form-terms">
            <p class="modal__form-terms-text" v-if="!isMobile">Нажимая на “Получить консультацию”, я даю согласие на
              обработку персональных данных</p>
          </div>
        </div>
      </div>
    </template>
  </Modal>

  <Modal v-show="isFinishedTestVisible" @close="closeTest" :showWhiteCloseIcon="showWhiteCloseIcon"
    :showDefaultCloseIcon="showDefaultCloseIcon" :applyHeaderNewStyle="applyHeaderNewStyle">
    <template #header>
      <div class="modal__application">
        <img src="@/assets/img/school2.svg" alt="logo">
        <p class="modal__application-topic">Всё готово!</p>
        <p class="modal__application-text">Проверьте свою эл. почту, мы уже отправили Ваши результаты :)</p>
        <button class="modal__application-button" @click="closeTest">На главную</button>
      </div>
    </template>
  </Modal>

  <div class="banner__company" id="company">
    <div class="banner__company-text-details">
      <div class="banner__company-text">
        <img src="@/assets/img/people.svg" alt="people" class="banner__company-text-img">
        <p class="banner__company-text-topic">{{ this.abouts.text }}</p>
        <p class="banner__company-text-info">{{ this.abouts.description }}</p>
        <p class="banner__company-text-info">{{ this.abouts.description2 }}</p>
        <p class="banner__company-text-info">{{ this.abouts.description3 }}</p>
      </div>
      <div class="banner__company-details">
        <div class="banner__company-details-year">
          <h4>{{ this.abouts.number1 }}</h4>
          <p class="banner__company-details-text">{{ this.abouts.text1 }}</p>
        </div>
        <div class="banner__company-details-certification">
          <h4>{{ this.abouts.number2 }}</h4>
          <p class="banner__company-details-text">{{ this.abouts.text2 }}</p>
        </div>
        <div class="banner__company-details-certification">
          <h4>{{ this.abouts.number3 }}</h4>
          <p class="banner__company-details-text">{{ this.abouts.text3 }}</p>
        </div>
        <div class="banner__company-details-join">
          <p class="banner__company-details-join-text">Присоединяйтесь!</p>
          <p class="banner__company-details-text">Станьте следующим выпускником нашей школы “SoLo English”</p>
        </div>
        <button class="banner__company-details-button" @click="showModal">Хочу обучаться тут!</button>
      </div>
    </div>
  </div>

  <div class="banner__price" id="price">
    <p class="banner__price-topic">{{ this.course_block.text }}</p>
    <div class="banner__price-wrap">
      <p class="banner__price-text">{{ this.course_block.description }}</p>
    </div>
    <div class="banner__price-blocks" v-show="!isMobile">
      <div class="banner__price-blocks_chosen">
        <div class="banner__price-blocks_chosen-adults-base" @click="chooseBlock('adults-base')"
          :class="{ active: chosenBlock === 'adults-base' }">
          <p class="banner__price-blocks_chosen-text" :style="{ color: chosenBlock === 'adults-base' ? 'white' : '' }">
            {{ this.course_detail1.detail }}</p>
        </div>
        <div class="banner__price-blocks_chosen-adults-advanced" @click="chooseBlock('adults-advanced')"
          :class="{ active: chosenBlock === 'adults-advanced' }">
          <p class="banner__price-blocks_chosen-text"
            :style="{ color: chosenBlock === 'adults-advanced' ? 'white' : '' }">{{ this.course_detail.detail }}</p>
        </div>
        <div class="banner__price-blocks_chosen-business-base" @click="chooseBlock('business-base')"
          :class="{ active: chosenBlock === 'business-base' }">
          <p class="banner__price-blocks_chosen-text"
            :style="{ color: chosenBlock === 'business-base' ? 'white' : '' }">
            {{ this.course_detail3.detail }}</p>
        </div>
        <div class="banner__price-blocks_chosen-business-advanced" @click="chooseBlock('business-advanced')"
          :class="{ active: chosenBlock === 'business-advanced' }">
          <p class="banner__price-blocks_chosen-text"
            :style="{ color: chosenBlock === 'business-advanced' ? 'white' : '' }">{{ this.course_detail2.detail }}</p>
        </div>
      </div>
      <div class="banner__price-blocks_detailed">
        <DetailedInfo :selectedBlock="chosenBlock" :course="course" :course1="course1" :course2="course2"
          :course3="course3" />
      </div>
    </div>

    <div class="banner__price-blocks-mobile" v-show="isMobile">
      <swiper ref="{swiperRef}" :slidesPerView="1" :pagination="{
        type: 'fraction',
      }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
          <div class="banner__price-blocks_detailed">
            <div class="banner__price-blocks_detailed-topic">
              <p class="banner__price-blocks_detailed-topic-eng">Английский для взрослых</p>
              <img src="@/assets/img/base.svg" alt="base" style="margin-bottom: 45px;">
            </div>
            <div class="banner__price-blocks_detailed-options">
              <ul>
                <li>Обучение с нуля</li>
                <li>Базовая грамматика</li>
                <li>Необходимые материалы</li>
                <li>Разговорная практика</li>
                <li>2 месяца обучения</li>
              </ul>
            </div>
            <div class="banner__price-blocks_detailed-prices">
              <div class="banner__price-blocks_detailed-prices-row">
                <p class="banner__price-blocks_detailed-price">1 урок:</p>
                <p class="banner__price-blocks_detailed-price-bold">600 ₽</p>
              </div>
              <div class="banner__price-blocks_detailed-prices-row">
                <p class="banner__price-blocks_detailed-price">Полный курс:</p>
                <p class="banner__price-blocks_detailed-price-bold">2 600 ₽</p>
              </div>
            </div>
            <button class="banner__price-blocks_detailed-button" @click="showModal">Записаться на пробный урок</button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner__price-blocks_detailed">
            <div class="banner__price-blocks_detailed-topic">
              <p class="banner__price-blocks_detailed-topic-eng">Английский для взрослых</p>
              <img src="@/assets/img/top.svg" alt="base" style="margin-bottom: 45px;">
            </div>
            <div class="banner__price-blocks_detailed-options">
              <ul>
                <li>Обучение с нуля</li>
                <li>Базовая грамматика</li>
                <li>Необходимые материалы</li>
                <li>Разговорная практика</li>
                <li>4 месяца обучения</li>
              </ul>
            </div>
            <div class="banner__price-blocks_detailed-prices">
              <div class="banner__price-blocks_detailed-prices-row">
                <p class="banner__price-blocks_detailed-price">1 урок:</p>
                <p class="banner__price-blocks_detailed-price-bold">800 ₽</p>
              </div>
              <div class="banner__price-blocks_detailed-prices-row">
                <p class="banner__price-blocks_detailed-price">Полный курс:</p>
                <p class="banner__price-blocks_detailed-price-bold">5 600 ₽</p>
              </div>
            </div>
            <button class="banner__price-blocks_detailed-button" @click="showModal">Записаться на пробный урок</button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner__price-blocks_detailed">
            <div class="banner__price-blocks_detailed-topic">
              <p class="banner__price-blocks_detailed-topic-eng">Английский для маленьких</p>
              <img src="@/assets/img/base.svg" alt="base" style="margin-bottom: 45px;">
            </div>
            <div class="banner__price-blocks_detailed-options">
              <ul>
                <li>Обучение с нуля</li>
                <li>Базовая грамматика</li>
                <li>Необходимые материалы</li>
                <li>Разговорная практика</li>
                <li>2 месяца обучения</li>
              </ul>
            </div>
            <div class="banner__price-blocks_detailed-prices">
              <div class="banner__price-blocks_detailed-prices-row">
                <p class="banner__price-blocks_detailed-price">1 урок:</p>
                <p class="banner__price-blocks_detailed-price-bold">500 ₽</p>
              </div>
              <div class="banner__price-blocks_detailed-prices-row">
                <p class="banner__price-blocks_detailed-price">Полный курс:</p>
                <p class="banner__price-blocks_detailed-price-bold">3 600 ₽</p>
              </div>
            </div>
            <button class="banner__price-blocks_detailed-button" @click="showModal">Записаться на пробный урок</button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>

  <div class="banner__videos">
    <p class="banner__videos-topic">{{ video_review_blocks.text }}</p>
    <p class="banner__videos-info-wrapped">{{ video_review_blocks.description }}</p>
    <div class="banner__videos-slider">
      <swiper ref="{swiperRef}" :slidesPerView="3" :spaceBetween="30" :pagination="{
        type: 'fraction',
      }" :navigation="true" :modules="modules" class="mySwiper"
        :breakpoints="{ 300: { slidesPerView: 1, spaceBetween: 0 }, 1920: { slidesPerView: 3, spaceBetween: 800 }, 1440: { slidesPerView: 3, spaceBetween: 700 } }">
        <swiper-slide>
          <div class="banner__videos-slider-text">
            <iframe width="848px" height="490" src="https://www.youtube.com/embed/MjvtVbU4Hm0"
              title="BTS (방탄소년단) - Dimple 보조개 &amp; Pied Piper 파이드파이퍼 - Live Performance HD 4K - English Lyrics"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p class="banner__videos-slider-text-name">{{ video_reviews.title }}</p>
            <p class="banner__videos-slider-text-year">{{ video_reviews.description }}</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner__videos-slider-text">
            <iframe width="848px" height="490" src="https://www.youtube.com/embed/gdZLi9oWNZg"
              title="BTS (방탄소년단) &#39;Dynamite&#39; Official MV" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p class="banner__videos-slider-text-name">{{ video_reviews1.title }}</p>
            <p class="banner__videos-slider-text-year">{{ video_reviews1.description }}</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner__videos-slider-text">
            <iframe width="848px" height="490" src="https://www.youtube.com/embed/0lapF4DQPKQ"
              title="BTS (방탄소년단) &#39;Black Swan&#39; Official MV" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p class="banner__videos-slider-text-name">Иванов Иван</p>
            <p class="banner__videos-slider-text-year">Выпуск январь 2022</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner__videos-slider-text">
            <iframe width="848px" height="490" src="https://www.youtube.com/embed/MjvtVbU4Hm0"
              title="BTS (방탄소년단) - Dimple 보조개 &amp; Pied Piper 파이드파이퍼 - Live Performance HD 4K - English Lyrics"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p class="banner__videos-slider-text-name">Максимова Светлана</p>
            <p class="banner__videos-slider-text-year">Выпуск январь 2024</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner__videos-slider-text">
            <iframe width="848px" height="490" src="https://www.youtube.com/embed/gdZLi9oWNZg"
              title="BTS (방탄소년단) &#39;Dynamite&#39; Official MV" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p class="banner__videos-slider-text-name">Максимова Екатерина</p>
            <p class="banner__videos-slider-text-year">Выпуск январь 2023</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="banner__review" id="review">
    <p class="banner__review-topic">{{ text_review_blocks.text }}</p>
    <swiper ref="{swiperRef}" :slidesPerView="1" :spaceBetween="300" :pagination="{
      type: 'fraction',
    }" :navigation="true" :modules="modules" :breakpoints="{ 300: { slidesPerView: 1, spaceBetween: 0 } }"
      class="mySwiper">
      <swiper-slide>
        <div class="banner__review-item">
          <div class="banner__review-item-name-date">
            <p class="banner__review-item-name">{{ text_reviews.name }}</p>
            <p class="banner__review-item-date">{{ text_reviews.created_at }}</p>
          </div>
          <p class="banner__review-item-text">{{ text_reviews.text }}</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner__review-item">
          <div class="banner__review-item-name-date">
            <p class="banner__review-item-name">Кенжегалиева Альбина</p>
            <p class="banner__review-item-date">12.05.2024</p>
          </div>
          <p class="banner__review-item-text">Я очень устала. Just kill me ❤️</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner__review-item">
          <div class="banner__review-item-name-date">
            <p class="banner__review-item-name">Абу́ Наср Муха́ммед ибн Муха́ммед аль-Фараби́</p>
            <p class="banner__review-item-date">12.05.950</p>
          </div>
          <p class="banner__review-item-text">Отлично! Теперь я знаю английский ❤️</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner__review-item">
          <div class="banner__review-item-name-date">
            <p class="banner__review-item-name">Чон Чонгук</p>
            <p class="banner__review-item-date">12.05.2023</p>
          </div>
          <p class="banner__review-item-text">나는 아무것도 배우지 못했다</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="banner__questions" id="questions">
    <p class="banner__questions-topic">{{ question_blocks.text }}</p>
    <div class="banner__questions-collapse-ask">

      <!-- My version without backend!!!! -->
      <!-- <div class="banner__questions-collapse">
        <div v-for="(qa, index) in qas" :key="index" class="accordion-container">
          <div class="accordion" @click="toggleAccordion(index)" :class="{ active: qa.open }">
            <span>{{ qa.question }}</span>
            <div class="arrow" :class="arrowClass(qa.open)"></div>
          </div>
          <div class="panel" :class="{ show: qa.open }">
            <p class="panel_answer">
              {{ qa.answer }}
            </p>
          </div>
        </div>
      </div> -->

      <div class="banner__questions-collapse">
        <div class="accordion-container" v-for="(q, index) in questions" :key="index">
          <div class="accordion" @click="toggleAccordion(index)">
            <span>{{ q.question }}</span>
            <div class="arrow" :class="arrowClass(q.answerVisible)"></div>
            <div class="arrow"></div>
          </div>
          <div>
            <div v-show="q.answerVisible">
              <p class="panel_answer_backend">
                {{ q.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="banner__questions-ask">
        <p class="banner__questions-ask-topic">Остались вопросы?</p>
        <p class="banner__questions-ask-text">Если Вы не нашли ответа на свой вопрос, то просим оставить заявку вместе с
          интересющим Вас вопросом и мы обязательно на него ответим!</p>
        <button class="banner__questions-ask-btn" @click="showModal">Задать вопрос</button>
      </div>
    </div>
  </div>

  <div class="banner__contacts" id="contacts">
    <div class="banner__contacts-map-info">
      <img src="@/assets/img/map.svg" alt="map" class="banner__contacts-map-info-img">
      <div class="banner__contacts-info">
        <p class="banner__contacts-info-topic">Как с нами связаться</p>
        <div class="banner__contacts-info-location">
          <img src="@/assets/img/spot.svg" alt="map">
          <div class="banner__contacts-info-location-address">
            <p class="banner__contacts-info-location-address-text">{{ this.contact_headers.address }}</p>
            <!-- <p class="banner__contacts-info-location-address-text">ул. Садовая, д. 53, офис 1121</p> -->
          </div>
        </div>
        <div class="banner__contacts-info-telephone">
          <img src="@/assets/img/hola.svg" alt="telephone">
          <div class="banner__contacts-info-location-address">
            <p class="banner__contacts-info-location-address-text">{{ this.contact_headers.contact_phone }}</p>
            <p class="banner__contacts-info-location-address-text">{{ this.contact_headers.contact_email }}</p>
          </div>
        </div>
        <div class="banner__contacts-info-whatsapp">
          <img src="@/assets/img/whatsapp.svg" alt="whatsapp">
          <div class="banner__contacts-info-location-address">
            <p class="banner__contacts-info-location-address-text">{{ this.contact_headers.contact_phone2 }}</p>
            <p class="banner__contacts-info-location-address-text">{{ this.contact_headers.contact_name }}</p>
          </div>
        </div>
        <button class="banner__contacts-map-info-button" @click="showModal">Заказать звонок</button>
      </div>
    </div>
  </div>
  <footer>
    <div class="footer">
      <div class="footer-options">
        <div class="footer-options__logo">
          <img src="@/assets/img/school2.svg" alt="logo" class="footer-options__logo-school">
          <img :src="'https://komatech.online' + social_media.logo" alt="social" class="footer-options__logo-socials">
        </div>
        <div class="footer-options__navigation">
          <p class="footer-options__navigation-text-bold">НАВИГАЦИЯ</p>
          <a href="#why" class="footer-options__navigation-text">Почему мы?</a>
          <a href="#programs" class="footer-options__navigation-text">Наши услуги</a>
          <a href="#teachers" class="footer-options__navigation-text">Преподаватели</a>
          <a href="#test" class="footer-options__navigation-text">Пройти тест</a>
          <a href="#company" class="footer-options__navigation-text">О компании</a>
          <a href="#price" class="footer-options__navigation-text">Стоимость</a>
          <a href="#review" class="footer-options__navigation-text">Отзывы</a>
          <a href="#questions" class="footer-options__navigation-text">Вопросы-Ответ</a>
          <a href="#contacts" class="footer-options__navigation-text">Контакты</a>
        </div>
        <div class="footer-options__programs">
          <p class="footer-options__navigation-text-bold">ПРОГРАММЫ</p>
          <a href="#programs" class="footer-options__navigation-text">{{ this.course_detail1.detail }}</a>
          <a href="#programs" class="footer-options__navigation-text">{{ this.course_detail.detail }}</a>
          <a href="#programs" class="footer-options__navigation-text">{{ this.course_detail3.detail }}</a>
          <a href="#programs" class="footer-options__navigation-text">{{ this.course_detail2.detail }}</a>
        </div>
        <div class="footer-options__contacts">
          <button class="footer-options__contacts-button" @click="showModal">Связаться с нами</button>
          <div class="footer-options__contacts-info-location">
            <img src="@/assets/img/here.svg" alt="location">
            <div class="footer-options__contacts-info-location-address">
              <p class="footer-options__contacts-text">{{ this.contact_headers.address }}</p>
            </div>
          </div>
          <div class="footer-options__contacts-info-location">
            <img src="@/assets/img/trubka.svg" alt="telephone">
            <div class="footer-options__contacts-info-location-address">
              <p class="footer-options__contacts-text">{{ this.contact_headers.contact_phone }}</p>
              <p class="footer-options__contacts-text">{{ this.contact_headers.contact_email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__child">
      <div class="footer__child-terms">
        <p class="footer__child-terms-rights">© 2009–2022 “Solo English”. Все права защищены</p>
        <p class="footer__child-terms-text">Разработано в Neutron Agency</p>
      </div>
    </div>
  </footer>
</template>


<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import DetailedInfo from '@/components/DetailedInfo.vue';
import Modal from '~/components/Modal.vue';
import SideBar from '~/components/SideBar.vue';

export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      chosenBlock: 'adults-advanced',
      isModalVisible: false,
      showAnswer: false,
      isFirstModalVisible: false,
      isScrolled: false,
      isMobileModelVisible: false,
      menuActive: false,
      isModalTestVisible: false,
      isTestVisible: false,
      isModalApplicationVisible: false,
      showWhiteCloseIcon: false,
      showDefaultCloseIcon: false,
      applyHeaderNewStyle: false,
      showTestCloseIcon: false,
      isFinishedTestVisible: false,
      isResultsReady: false,
      data: null,
      contact_headers: {},
      main_texts: {},
      advantage_blocks: {},
      advantages: {},
      advantages1: {},
      advantages2: {},
      advantages3: {},
      advantages4: {},
      advantages5: {},
      programs: {},
      program_types: {},
      program_types1: {},
      program_types2: {},
      program_types3: {},
      teacher_blocks: {},
      teachers: {},
      teachers1: {},
      teachers2: {},
      teachers3: {},
      abouts: {},
      course_block: {},
      course_detail: {},
      course_detail1: {},
      course_detail2: {},
      course_detail3: {},
      course: {},
      course1: {},
      course2: {},
      course3: {},
      video_review_blocks: {},
      video_reviews: {},
      video_reviews1: {},
      text_review_blocks: {},
      text_reviews: {},
      question_blocks: {},
      questions: {},
      questions1: {},
      questions2: {},
      social_media: {},
      name: '',
      telephone: '',
      comment: '',
      testQuestions: [],
      questionIndex: 0,
      nameForTest: '',
      telephoneForTest: '',
      emailForTest: '',
      tests: [1, 2, 3, 4, 5, 6],
      answers: [],
      qas: [
        { question: 'Как я могу записаться на занятия с преподавателем?', answer: 'Свяжитесь с нами с помошью формы на сайте и наш менеджер перезвонит Вам в самое ближайшее время. Приходите к нам в офис в г. Санкт-Петербурге и наши специалисты проконсультируют Вас по всем вопросам Позвоните нам по нашему номеру +7 (921) 320 74 06', open: false },
        { question: 'Сколько длится одно занятие?', answer: 'Вечность', open: false },
        { question: 'Что делать, если я не могу найти занятия в удобное время?', answer: 'Это твои проблемы', open: false },
        { question: 'Могу ли я записаться на занятия другого уровня?', answer: 'Конечно', open: false },
        { question: 'Кто мой личный преподаватель?', answer: 'Шрэк', open: false },
        { question: 'Могу я задать вопросы по учебнику?', answer: 'Нет', open: false }
      ],
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
      console.log(this.isMobile)
    });
    this.getData();
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.isModalVisible = false;
      document.body.style.overflow = '';
    },
    openApplication() {
      this.isModalApplicationVisible = true;
      this.showWhiteCloseIcon = true;
      this.showDefaultCloseIcon = true;
      this.applyHeaderNewStyle = true;
      this.isModalVisible = false;
      document.body.style.overflow = 'hidden';
    },
    closeApplication() {
      this.isModalApplicationVisible = false;
      this.isModalVisible = false;
      document.body.style.overflow = '';
      this.name = '';
      this.telephone = '';
      this.comment = '';
      this.emailForTest = '';
      this.nameForTest = '';
      this.telephoneForTest = '';
      this.answers = '';
    },
    resultsReady() {
      this.isResultsReady = true;
    },
    cancelresultsReady() {
      this.isResultsReady = false;
      this.isTestVisible = false;
      this.isModalTestVisible = false;
    },
    selectAnswer(index, answer) {
      // Проверяем, нужно ли увеличить длину массива
      if (this.answers.length <= index) {
        // Заполняем массив значениями '-' до нужного индекса
        for (let i = this.answers.length; i <= index; i++) {
          this.answers.push('-');
        }
      }
      // Устанавливаем ответ на соответствующий индекс
      this.answers[index] = answer;
    },
    startTest() {
      this.isTestVisible = true;
      document.body.style.overflow = 'hidden';
      let url = `https://komatech.online/test/`;
      axios
        .get(url)
        .then(response => {
          console.log(response.data);
          this.data = response.data;
          this.testQuestions = response.data[0].questions;
          console.log(this.testQuestions.length)
        })
        .catch(error => {
          console.error(error);
        });
    },
    finishTest() {
      this.isTestVisible = false;
      this.isModalTestVisible = false;
      this.showWhiteCloseIcon = true;
      this.showDefaultCloseIcon = true;
      this.applyHeaderNewStyle = true;
      document.body.style.overflow = '';
      for (let i = 0; i < this.testQuestions.length; i++) {
        if (!this.answers[i]) {
          this.answers[i] = '-';
        }
      }
      console.log(this.answers);

      let url = `https://komatech.online/test/`;
      this.isModalTestVisible = true;
      this.showTestCloseIcon = true;
      axios
        .post(url, {
          email: this.emailForTest,
          name: this.nameForTest,
          phone: this.telephoneForTest,
          questions: this.tests,
          answers: this.answers,
        })
        .then(response => {
          console.log(response.data);
          this.isFinishedTestVisible = true;
          this.isResultsReady = false;
        })
        .catch(error => {
          console.error(error);
        });
    },
    next() {
      this.questionIndex++;
    },
    prev() {
      this.questionIndex--;
    },
    openTest() {
      this.isModalTestVisible = true;
      this.showTestCloseIcon = true;
      document.body.style.overflow = 'hidden';
    },
    closeTest() {
      this.isModalTestVisible = false;
      this.isFinishedTestVisible = false;
      document.body.style.overflow = '';
    },
    openMenu() {
      this.isMobileModelVisible = true;
      document.body.style.overflow = 'hidden';
    },
    closeMenu() {
      this.isMobileModelVisible = false;
      document.body.style.overflow = '';
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    chooseBlock(block) {
      console.log('Selected block:', block);
      this.chosenBlock = block;
    },
    // toggleAccordion(index) {
    //   this.qas[index].open = !this.qas[index].open; 
    // },
    toggleAccordion(index) {
      this.questions[index].answerVisible = !this.questions[index].answerVisible;
    },
    arrowClass(isOpen) {
      return isOpen ? 'arrow down' : 'arrow up';
    },
    showFirstModal() {
      this.isFirstModalVisible = true;
      document.body.style.overflow = 'hidden';
    },
    closeFirstModal() {
      this.isFirstModalVisible = false;
      document.body.style.overflow = '';
    },
    getData() {
      let url = `https://komatech.online/all-data/`;
      axios
        .get(url)
        .then(response => {
          console.log(response.data);
          this.data = response.data;
          this.contact_headers = response.data.contact_headers[0];
          this.main_texts = response.data.main_texts[0];
          this.advantage_blocks = response.data.advantage_blocks[0];
          this.advantages = response.data.advantages[0];
          this.advantages1 = response.data.advantages[1];
          this.advantages2 = response.data.advantages[2];
          this.advantages3 = response.data.advantages[3];
          this.advantages4 = response.data.advantages[4];
          this.advantages5 = response.data.advantages[5];
          this.programs = response.data.programs[0];
          this.program_types = response.data.program_types[0];
          this.program_types1 = response.data.program_types[1];
          this.program_types2 = response.data.program_types[2];
          this.program_types3 = response.data.program_types[3];
          this.teacher_blocks = response.data.teacher_blocks[0];
          this.teachers = response.data.teachers[0];
          this.teachers1 = response.data.teachers[1];
          this.teachers2 = response.data.teachers[2];
          this.teachers3 = response.data.teachers[3];
          this.abouts = response.data.abouts[0];
          this.course_block = response.data.course_block[0];
          this.course_detail = response.data.course_detail[0];
          this.course_detail1 = response.data.course_detail[1];
          this.course_detail2 = response.data.course_detail[2];
          this.course_detail3 = response.data.course_detail[3];
          this.course = response.data.course[0];
          this.course1 = response.data.course[1];
          this.course2 = response.data.course[2];
          this.course3 = response.data.course[3];
          this.video_review_blocks = response.data.video_review_blocks[0];
          this.video_reviews = response.data.video_reviews[0];
          this.video_reviews1 = response.data.video_reviews[1];
          this.text_review_blocks = response.data.text_review_blocks[0];
          this.text_reviews = response.data.text_reviews[0];
          this.question_blocks = response.data.question_blocks[0];
          this.questions = response.data.questions;
          this.social_media = response.data.social_media[0];
        })
        .catch(error => {
          console.error(error);
        });
    },
    createConsultation() {
      let url = `https://komatech.online/consultation-create/`;
      this.openApplication();
      axios
        .post(url, {
          name: this.name,
          phone: this.telephone,
          comments: this.comment,
        })
        .then(response => {
          console.log(response.data);
          this.isModalApplicationVisible = true;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    DetailedInfo,
    Modal,
    SideBar,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

.header__close_test-mb {
  display: none;
}

.newClose {
  display: block;
  position: absolute;
  right: 20px;
  top: 20px;
}

.secondary-header__show {
  text-align: center;
  padding: 24px 100px 17px 100px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 1000;

  &-options {
    display: flex;
    gap: 50px;
  }

  &-options-text {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
    color: #333;
    text-decoration: none;
    margin-top: 20px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  background: #1D3062;
  padding: 16px 100px;

  &__address {
    display: flex;
    gap: 16px;
  }

  &__contacts {
    display: flex;
    gap: 50px;
  }
}

.header__address-text,
.header__contacts-telepone-text,
.header__contacts-mail-text {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: #fff;
  margin: 0;
}

.header__contacts-telephone,
.header__contacts-mail {
  display: flex;
  gap: 16px;
}

.secondary-header {
  padding: 0 100px;
  display: flex;
  background-color: #fff;

  &__school {
    display: flex;
    gap: 16px;
    padding: 23px 40px 18px 0;
  }

  &__school-text {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    line-height: 140%;
    color: #333;
    margin: 0;
  }

  &__options {
    padding: 50px 0 50px 0;
    display: flex;
    gap: 20px;
    white-space: nowrap;

    &-text {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 18px;
      text-transform: uppercase;
      color: #333;
      text-decoration: none;
    }

    @media (max-width: 500px) {
      display: none;
    }
  }

  &__button {
    padding: 36px 0 29px 100px;
    cursor: pointer;
  }

  &__btn {
    border-radius: 10px;
    width: 219px;
    height: 60px;
    background: #051d65;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    line-height: 140%;
    color: #fff;
    border: none;
    cursor: pointer;
  }
}

.burger-menu-icon {
  display: none;
}

.banner__learn-eng {
  background: #051d65;
  display: flex;
  justify-content: space-between;
  padding: 0 63px 71px 100px;

  &-info {
    display: flex;
    flex-direction: column;
    padding-top: 235px;
  }

  &-info-text {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    line-height: 140%;
    color: #fff;
    margin: 24px 0 0 0;
  }

  &-info-btns {
    display: flex;
    gap: 24px;
    margin: 50px 0 0 0;
    cursor: pointer;
  }

  &-info-btns_red {
    width: 370px;
    height: 80px;
    border-radius: 10px;
    background: #b92831;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  &-info-btns_blue {
    border: 2px solid #fff;
    border-radius: 10px;
    width: 371px;
    height: 80px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #fff;
    background: none;
    cursor: pointer;
  }
}

h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 60px;
  line-height: 120%;
  color: #fff;
  margin: 0;
}

.banner__learn-eng-info-benefits {
  display: flex;
  gap: 8px;
  margin: 125px 0 0 0;

  &_row {
    display: flex;
  }
}

.banner__learn-eng-info-benefits_scheduled-text,
.banner__learn-eng-info-benefits_results-text,
.banner__learn-eng-info-benefits_literature-text,
.banner__learn-eng-info-benefits_learning-text {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 120%;
  color: #fff;
  margin: 16px 0 0 0;
}

.banner__learn-eng-pic {
  position: relative;

  &-lesson {
    position: absolute;
    top: 100px;
  }

  &-test {
    position: absolute;
    top: 706px;
    right: 12px;
  }
}

.banner__advantages {
  margin: 140px 297px 150px 267px;
  background-color: #fff;

  &_first-row {
    margin-top: 120px;
    display: flex;
    gap: 220px;
  }

  &_first-row-col1 {
    display: flex;
  }

  &_first-row-col1-info {
    padding-left: 31px;
  }

  &_first-row-col1-text {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    line-height: 140%;
    color: #333;
    margin: 0;
  }
}

h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 120%;
  text-align: center;
  color: #051d65;
  margin: 140px 0 0 0;
}

.banner__advantages_second-row {
  margin-top: 110px;
  display: flex;
  gap: 350px;
}

.banner__advantages_third-row {
  margin-top: 110px;
  display: flex;
  gap: 200px;
}

h3 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  color: #333;
  margin: 0 0 16px 0;
}

.banner__programs {
  padding: 90px 100px 100px 100px;
  background: #f7f7fa;
  cursor: pointer;

  &-first {
    background: #051d65;
    border-radius: 10px;
    width: 558px;
    height: 400px;
  }

  &-second {
    border-radius: 10px;
    width: 558px;
    height: 400px;
    background: #fff;
  }

  &-second-topic {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 60px;
    line-height: 120%;
    color: #051d65;
    padding: 20px 0 0 24px;
    margin: 0;
  }

  &-first-base {
    display: flex;
    gap: 265px;
  }

  &-second-top {
    display: flex;
    gap: 249px;
  }

  &-first-info {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    line-height: 120%;
    color: #fff;
    padding: 16px 89px 0 24px;
    margin: 0;
  }

  &-first-link {
    display: flex;
    gap: 16px;
  }

  &-first-link-info-more {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    line-height: 120%;
    color: #fff;
    padding: 40px 0 24px 306px;
    margin: 0;
  }

  &-first-link-arrow {
    padding-top: 17px;
  }

  &_row-one {
    display: flex;
    gap: 23px;
    margin-top: 60px;
  }

  &-second-eng {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    color: #051d65;
    margin: 0;
    padding: 108px 0 0 24px;
  }

  &-second-eng-info {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    line-height: 120%;
    color: #051d65;
    padding: 16px 89px 0 24px;
    margin: 0;
  }

  &-second-link {
    display: flex;
    gap: 16px;
  }

  &-second-link-info-more {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    line-height: 120%;
    color: #051d65;
    padding: 40px 0 24px 306px;
    margin: 0;
  }

  &_row-two {
    display: flex;
    gap: 23px;
    margin-top: 24px;
  }

  &-fourth-base {
    display: flex;
    gap: 245px;
  }

  &-all {
    display: flex;
    gap: 60px;
  }

  &-form-level {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    color: #051d65;
    margin: 84px 0 0 0;
  }

  &-form-name {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 40px;

    &-input {
      border: 1px solid #051d65;
      border-radius: 10px;
      width: 100%;
      height: 65px;
      background: #fff;
    }
  }

  &-form-comment-input-wrapper {
    position: relative;
  }

  input[type="text"] {
    font-size: 22px;
    padding: 0 20px;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  &-form-comment-input {
    border: 1px solid #051d65;
    border-radius: 10px;
    width: 100%;
    height: 130px;
    background: #fff;
    padding: 0;
  }

  &-form-comment-input::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    line-height: 101%;
    color: #333;
    opacity: 0.3;
    position: absolute;
    //top: 16px;
    left: 16px;
    padding: 0 70px 0 0;
  }

  &-form-name-input::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    line-height: 101%;
    color: #333;
    opacity: 0.3;
    padding: 23px 0 23px 0;
  }

  &-form-button {
    border-radius: 10px;
    width: 100%;
    height: 80px;
    background: #b92831;
    border: none;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    color: #fff;
    margin-top: 24px;
    cursor: pointer;
  }

  &-form-personal {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: rgb(176, 175, 175);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    margin: 24px 36px 0 32px;
    opacity: 0.5;
  }
}

h4,
.banner__company-text-topic {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 120%;
  text-align: center;
  color: #051d65;
  text-align: left;
  margin: 0;
}

h5 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 60px;
  line-height: 120%;
  color: #fff;
  padding: 20px 0 0 24px;
  margin: 0;
}

h6 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;
  color: #fff;
  margin: 0;
  padding: 108px 0 0 24px;
}

label {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 101%;
  color: #051d65;
}

.banner__programs-form-telephone,
.banner__programs-form-comment {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
}

.banner__programs-form {
  &-name-input {
    padding: 0 20px;
    font-size: 22px;
  }
}


.banner__teachers {
  margin: 150px 100px;

  &_about {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    line-height: 140%;
    color: #333;
    margin: 16px 800px 0 0;
  }

  &-name {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    color: #051d65;
    text-align: left;
    margin-top: 24px;
  }

  &-info {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    line-height: 120%;
    color: #333;
    text-align: left;
    margin-top: 8px;
  }
}

.swiper {
  width: 100%;
  height: 100%;
  margin: 70px auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.append-buttons {
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
}

.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #007aff;
  color: #007aff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
  cursor: pointer;
}

.banner__level {
  background: #051d65;
  padding: 90px 0 90px 100px;
  background-image: url('@/assets/img/vopros.svg');
  background-repeat: no-repeat;
  background-position: right;

  &-bar-question {
    display: flex;
    gap: 61px;
  }

  &-text {
    display: flex;
    margin: 156px 0 0 43px;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    line-height: 140%;
    color: #333;
    text-align: left;
  }

  &-text1 {
    margin-right: 45px;
  }

  &-text2 {
    margin-right: 25px;
  }

  &-text3 {
    margin-left: 10px;
  }

  &-text4 {
    margin-left: 10px;
  }

  &-text5 {
    margin-right: 35px;
  }

  &-text6 {
    margin-right: 20px;
  }

  &-bar {
    border-radius: 20px;
    width: 993px;
    height: 657px;
    background: #fff;
  }

  &-question-more {
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    line-height: 140%;
    color: #fff;
    margin: 24px 0 0 0;
  }

  &-question-topic {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 120%;
    color: #fff;
    margin: 305px 0 0 0;
  }

  &-question-button {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 140%;
    color: #fff;
    border-radius: 10px;
    width: 370px;
    height: 80px;
    background: #b92831;
    border: none;
    margin: 50px 0 0 0;
    cursor: pointer;
  }
}

.container {
  height: 400px;
  position: relative;
  margin: 24px 0 0 43px;
}

.barcontainer {
  position: relative;
  margin-right: 60px;
  float: left;
  border-radius: 10px;
  width: 100px;
  height: 497px;
  background-color: #f2f2f2;
}

.bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  animation: grow 2s ease-out forwards;
  transform-origin: bottom;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.bar_red {
  background: #eb5757;
}

.bar_red .hide,
.bar_orange .hide,
.bar_yellow .hide,
.bar_green .hide,
.bar_blue .hide,
.bar_violet .hide {
  display: none;
}

.bar_red:hover .hide {
  display: block;
  position: absolute;
  left: 980px;
  bottom: 290px;
}

.bar_orange:hover .hide {
  display: block;
  position: absolute;
  left: 820px;
  bottom: 290px;
}

.bar_yellow:hover .hide {
  display: block;
  position: absolute;
  left: 650px;
  bottom: 290px;
}

.bar_green:hover .hide {
  display: block;
  position: absolute;
  left: 530px;
  bottom: 290px;
}

.bar_blue:hover .hide {
  display: block;
  position: absolute;
  left: 350px;
  bottom: 290px;
}

.bar_violet:hover .hide {
  display: block;
  position: absolute;
  left: 200px;
  bottom: 290px;
}

.bar_orange {
  background: #f2994a;
}

.bar_yellow {
  background: #f2c94c;
}

.bar_green {
  background: #6fcf97;
}

.bar_blue {
  background: #56ccf2;
}

.bar_violet {
  background: #9b51e0;
}

@keyframes grow {
  from {
    transform: scaleY(0);
  }
}

.bar_level {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
  text-align: left;
  color: #333;
  padding: 0 0 0 0;
}

.container_line {
  display: flex;
  gap: 60px;
}

.container_line-wrap1,
.container_line-wrap2,
.container_line-wrap3,
.container_line-wrap4,
.container_line-wrap5,
.container_line-wrap6 {
  display: flex;
  gap: 46px;
}

.modal__application {
  margin: 5px 0 40px 0;
  padding: 24px 0 0 24px;
  background: #051d65;
  font-family: "Poppins", sans-serif;
  border-radius: 16px;

  &-topic {
    font-weight: 700;
    font-size: 50px;
    line-height: 120%;
    text-align: center;
    color: #fff;
    margin: 94px 100px 24px 100px;
  }

  &-text {
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #fff;
    margin: 0 200px 50px 200px;
  }

  &-button {
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    width: 488px;
    height: 80px;
    background: #b92831;
    border: none;
    margin: 0 100px 200px 300px;
    cursor: pointer;
  }
}

.modal__test {
  margin: 5px 0 40px 0;
  font-family: "Poppins", sans-serif;

  &-topic {
    font-weight: 700;
    font-size: 50px;
    line-height: 120%;
    text-align: center;
    color: #051d65;
    margin: 94px 100px 24px 100px;
  }

  &-text {
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #333;
    margin: 0 200px 50px 200px;
  }

  &-button {
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    width: 488px;
    height: 80px;
    background: #b92831;
    border: none;
    margin: 0 100px 0 300px;
    cursor: pointer;
  }
}

.modal__test_mb {
  padding: 16px;
  font-family: "Poppins", sans-serif;

  img {
    width: 171px;
    height: 48px;
  }
}

.modal__test-topic_mb {
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  color: #051d65;
  margin: 53px 0 16px 0;
}

.modal__test-text_mb {
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #333;
  margin: 0 0 65px 0;
}

.modal__test-button_mb {
  border-radius: 5px;
  width: 100%;
  height: 51px;
  background: #b92831;
  border: none;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  color: #fff;
}

.modal__eng-test {
  margin: 51px 0 0 50px;
  font-family: "Poppins", sans-serif;

  &-topic {
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    color: #051d65;
    margin-bottom: 29px;
  }

  &-question {
    border-radius: 10px;
    width: 860px;
    height: 94px;
    background: #dff1f8;
    margin-bottom: 32px;

    &-text {
      font-weight: 500;
      font-size: 28px;
      line-height: 120%;
      color: #051d65;
      padding: 30px 0 30px 32px;
    }
  }

  &-answers {
    display: flex;
    flex-direction: column;
    gap: 24px;

    label {
      font-size: 24px;
      font-weight: 400;
      padding-top: 5px;
    }

    input[type=checkbox] {
      width: 32px;
      height: 32px;
      accent-color: #b92831;
    }

    &-input {
      display: flex;
      gap: 16px;
    }
  }

  &-buttons {
    display: flex;
    justify-content: space-between;
    margin: 118px 0 0 0;
    cursor: pointer;

    &-prev {
      display: flex;
      gap: 32px;
      height: 16px;
      align-items: center;

      &-text {
        font-weight: 500;
        font-size: 24px;
        color: #051d65;
      }
    }

    &-next {
      display: flex;
      gap: 32px;
      border: 1px solid #051d65;
      border-radius: 10px;
      width: 367px;
      height: 70px;
      background: #051d65;
      align-items: center;

      img {
        height: 16px;
      }

      &-text {
        font-weight: 500;
        font-size: 24px;
        line-height: 140%;
        text-align: center;
        color: #fff;
        padding: 19px 0 17px 50px;
      }
    }
  }
}

.modal__eng-test_mb {
  padding: 16px;
  font-family: "Poppins", sans-serif;

  img {
    width: 171px;
    height: 48px;
  }

  &-topic {
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    color: #051d65;
    margin: 41px 0 8px 0;
  }

  &-question {
    border-radius: 5px;
    width: 311px;
    height: 45px;
    background: #dff1f8;
    margin-bottom: 24px;

    &-text {
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      color: #051d65;
      padding: 14px 0 12px 8px;
    }
  }

  &-answers {
    display: flex;
    flex-direction: column;
    gap: 24px;

    label {
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      color: #051d65;
    }

    input[type=checkbox] {
      width: 24px;
      height: 24px;
      accent-color: #b92831;
    }

    &-input {
      display: flex;
      gap: 16px;
    }
  }

  &-buttons {
    display: flex;
    justify-content: space-between;
    margin: 40px 0 0 0;
    cursor: pointer;

    &-prev {
      border: 1px solid #051d65;
      border-radius: 5px;
      width: 89px;
      height: 51px;
      display: flex;
      align-items: center;

      img {
        height: 16px;
      }
    }

    &-next {
      border-radius: 5px;
      width: 89px;
      height: 51px;
      background: #051d65;
      display: flex;
      align-items: center;

      img {
        height: 16px;
      }
    }
  }
}

.banner__company {
  padding: 170px 102px 166px 100px;
  background-color: #fff;

  &-text-details {
    display: flex;
    gap: 337px;
  }

  &-details {
    display: flex;
    flex-direction: column;
    gap: 50px;
    border-radius: 20px;
    width: 100%;
    background: #dff1f8;
    padding: 65px 65px 0 60px;
  }

  &-text-img {
    margin: 0 0 57px 0;
  }

  &-text-info {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    line-height: 160%;
    color: #333;
    margin: 50px 0 0 0;
    text-align: left;
  }

  &-details-text {
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    line-height: 140%;
    color: #333;
    margin: 4px 0 0 0;
  }

  &-details-join {
    margin: 60px 0 0 0;
  }

  &-details-join-text {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 140%;
    color: #051d65;
  }

  &-details-button {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    width: 435px;
    height: 80px;
    background: #b92831;
    border: none;
    cursor: pointer;
  }
}

.banner__price {
  padding: 70px 354px 70px 353px;
  background: #f7f7fa;

  &-topic {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 60px;
    line-height: 120%;
    color: #051d65;
    text-align: center;
  }

  &-wrap {
    padding: 0 300px;
  }

  &-text {
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    line-height: 140%;
    text-align: center;
    color: #333;
    margin: 10px 0 0 0;
  }

  &-blocks {
    display: flex;
    gap: 50px;
    margin: 50px 0 0 0;
  }

  &-blocks_chosen {
    border: 1px solid #051d65;
    border-radius: 10px;
    width: 460px;
    height: 583px;
    background: #fff;
    display: flex;
    flex-direction: column;
  }

  &-blocks_detailed {
    border-radius: 10px;
    width: 703px;
    height: 583px;
    background: #051d65;
  }

  &-blocks_chosen-text {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    line-height: 120%;
    color: #051d65;
  }
}

.banner__price-blocks_chosen-adults-advanced,
.banner__price-blocks_chosen-adults-base,
.banner__price-blocks_chosen-business-advanced,
.banner__price-blocks_chosen-business-base {
  padding: 24px;
}

.banner__price-blocks_chosen>div {
  cursor: pointer;
  color: #fff;
}

.banner__price-blocks_chosen>div.active {
  background-color: #051d65;
}

.banner__videos {
  padding: 150px 0 0 0;
  background-color: #fff;

  &-topic {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 120%;
    color: #051d65;
    padding-left: 100px;
  }

  &-info-wrapped {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    line-height: 140%;
    color: #333;
    margin: 16px 0 0 0;
    padding: 0 850px 0 0;
    text-align: left;
    padding-left: 100px;
  }

  &-slider-text-name {
    font-family: "Poppins", sans-serif;
    font-style: italic;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    color: #333;
  }

  &-slider-text-year {
    font-style: italic;
    font-family: "Poppins", sans-serif;
  }
}

iframe {
  border-radius: 20px;
}

.banner__review {
  padding: 90px 289px 80px 289px;
  background: #051d65;
  background-image: url('@/assets/img/quote.svg');
  background-repeat: no-repeat;
  background-position: right 23% bottom 70%;

  &-topic {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 120%;
    text-align: center;
    color: #fff;
    margin: 0;
  }
}

.banner__review-item {
  border-radius: 20px;
  width: 848px;
  height: 417px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.4);
  background: #fff;
  padding: 40px;
  font-family: "Poppins", sans-serif;

  &-name-date {
    display: flex;
    justify-content: space-between;
  }

  &-name {
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    color: #333;
    text-align: left;
  }

  &-date {
    font-size: 24px;
    line-height: 120%;
    text-align: right;
    color: #333;
    opacity: 0.3;
  }

  &-text {
    font-size: 24px;
    line-height: 160%;
    color: #333;
    margin: 34px 0 0 0;
    text-align: left;
  }
}

.banner__questions {
  padding: 200px 169px 200px 100px;
  background-color: #fff;

  &-topic {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 120%;
    color: #051d65;
    margin-bottom: 60px;
  }

  &-ask-topic {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: #051d65;
    margin-bottom: 16px;
  }

  &-ask-text {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    line-height: 140%;
    color: #333;
    margin: 0 0 40px 0;
  }

  &-ask-btn {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    width: 435px;
    height: 80px;
    background: #b92831;
    border: none;
    cursor: pointer;
  }
}

.banner__questions-collapse-ask {
  display: flex;
  gap: 200px;
}

.accordion-container {
  position: relative;
}

.accordion {
  cursor: pointer;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 120%;
  color: #051d65;
  padding: 34px 200px 32px 32px;
  white-space: nowrap;
}

.arrow {
  position: absolute;
  top: 50px;
  right: 40px;
  bottom: 34px;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.arrow.down {
  background-image: url('@/assets/img/down.svg');
}

.arrow.up {
  background-image: url('@/assets/img/up.svg');
}

.panel {
  overflow: hidden;
  max-height: 0;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 140%;
  color: #333;
  padding: 0 32px;
  transition: max-height 0.3s ease-out;
}

.panel.show {
  max-height: 300px;
}

.panel_answer {
  padding: 32px 0;
  margin: 0;
}

.panel_answer_backend {
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  padding: 0 32px;
  color: #333;
}

.accordion.active {
  background-color: #dff1f8;
  border-radius: 10px;
}

.banner__contacts {
  background: #f7f7fa;
  padding: 0 100px;

  &-map-info {
    display: flex;
    gap: 90px;
  }

  &-info {
    padding-top: 100px;
  }

  &-info-topic {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 120%;
    color: #051d65;
    margin: 0 0 30px 0;
  }

  &-info-location {
    display: flex;
    gap: 16px;
    text-align: center;
    margin-bottom: 40px;
  }

  &-info-telephone {
    display: flex;
    gap: 16px;
    text-align: center;
    margin-bottom: 40px;
  }

  &-info-whatsapp {
    display: flex;
    gap: 16px;
    text-align: center;
  }

  &-info-location-address-text {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    line-height: 140%;
    color: #333;
    margin: 0;
    text-align: left;
  }

  &-map-info-button {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: #fff;
    background: #b92831;
    border-radius: 10px;
    width: 328px;
    height: 60px;
    border: none;
    margin-top: 80px;
    cursor: pointer;
  }
}

.footer {
  background: #00022f;
  padding: 70px 100px 100px 100px;

  &-options {
    display: flex;
    gap: 137px;

    &__logo {
      display: flex;
      flex-direction: column;
      gap: 49px;
    }

    &__navigation {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &__programs {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &__contacts {
      display: flex;
      flex-direction: column;
      gap: 36px;
    }

    &__navigation-text-bold {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: 28px;
      line-height: 140%;
      color: #fff;
      margin: 0 0 24px 0;
    }

    &__navigation-text {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      line-height: 140%;
      color: #fff;
      margin: 0;
      cursor: pointer;
      text-decoration: none;
    }

    &__navigation-text:hover {
      color: #b92831;
    }

    &__contacts-button {
      border-radius: 10px;
      width: 328px;
      height: 60px;
      background: #b92831;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
      text-align: center;
      color: #fff;
      border: none;
      cursor: pointer;
    }

    &__contacts-text {
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      line-height: 140%;
      color: #fff;
      margin: 0;
      text-align: left;
    }

    &__contacts-info-location {
      display: flex;
      gap: 16px;
      text-align: center;
      margin-bottom: 4px;
    }
  }

  &__child {
    background-color: #00022f;
    padding: 50px 100px 64px 100px;

    &-terms {
      display: flex;
      gap: 700px;
    }
  }
}

.footer__child-terms-text,
.footer__child-terms-rights {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.2);
  margin: 0;
}

.modal__request-form {
  display: flex;
  gap: 32px;
}

.modal__request {
  background: #051d65;
  border-radius: 16px 0 0 16px;
  width: 489px;
  padding: 24px 39px 0 24px;
}

.modal__request-topic {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 100%;
  color: #fff;
  margin: 310px 0 30px 0;
}

.modal__request-topic_test {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 100%;
  color: #fff;
  margin: 500px 0 44px 0;
}

.modal__form_results-text {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  color: #051d65;
  margin: 39px 0 0 0;
}

.modal__request-text {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 140%;
  color: #fff;
}

.modal__form-terms {
  margin: 24px 0 0 0;
}

.modal__form-terms-text {
  font-family: "Poppins", sans-serif;
  opacity: 0.2;
  line-height: 140%;
  color: #333;
  text-decoration: underline;
  text-align: center;
}

.modal__english {
  display: flex;
  gap: 42px;
  padding: 24px 0 0 24px;
}

.modal__english-adults-topic {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  color: #051d65;
  margin: 0 0 16px 0;
}

.modal__english-adults-text {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  line-height: 140%;
  color: #333;
  margin: 24px 0 0 0;
}

@media (max-width: 1440px) {

  .header__address-text,
  .header__contacts-telepone-text,
  .header__contacts-mail-text {
    font-size: 16px;
  }

  .header {
    padding: 16px 50px;
  }

  .secondary-header__show {
    padding: 24px 50px 17px 50px;

    &-options {
      gap: 20px;
      white-space: nowrap;
    }
  }

  .secondary-header {
    padding: 0 50px;

    &__school-logo {
      width: 230px;
    }

    &__options {
      gap: 10px;
    }

    &__school {
      padding: 23px 30px 18px 0;
    }

    &__options-text {
      font-size: 16px;
    }

    &__button {
      padding: 36px 0 29px 20px;
    }

    &__btn {
      width: 15.21vw;
    }
  }

  .banner__learn-eng {
    padding: 0 63px 71px 50px;

    &-pic-london {
      width: 650px;
    }

    &-pic-lesson {
      width: 27.64vw;
      top: 80px;
      right: 310px;
    }

    &-pic-test {
      width: 27.64vw;
      top: 580px;
      right: 5px;
    }

    h1 {
      font-size: 50px;
    }

    &-info-text {
      font-size: 25px;
    }

    &-info-btns_red,
    &-info-btns_blue {
      width: 280px;
      font-size: 20px;
    }
  }

  .banner__advantages {
    margin: 140px 100px 150px 100px;

    &_first-row {
      gap: 60px;
    }

    &_second-row {
      gap: 200px;
    }

    &_third-row {
      gap: 50px;
    }
  }

  .banner__programs {
    padding: 90px 50px 100px 50px;

    h6 {
      font-size: 30px
    }

    &-second-eng {
      font-size: 30px
    }

    &-all {
      gap: 50px;
    }

    &-first {
      width: 450px;

      &-link-arrow {
        padding-top: 0;
      }

      &-link-info-more {
        padding: 20px 0 24px 200px
      }

      &-info {
        font-size: 22px;
      }
    }

    &-second {
      width: 450px;

      &-link-info-more {
        padding: 20px 0 24px 200px
      }

      &-eng-info {
        font-size: 22px;
      }
    }

    &-first-base {
      gap: 170px;
    }

    &-second-top {
      gap: 150px;
    }

    &-fourth-base {
      gap: 145px;
    }

    &-form-level {
      font-size: 30px;
    }

    &-form-name-input {
      width: 100%;
    }

    &-form-comment-input {
      width: 100%;
    }

    &-form-button {
      width: 100%;
      font-size: 20px;
      cursor: pointer;
    }

    &-form-personal {
      font-size: 16px;
    }
  }

  .banner__teachers {
    margin: 150px 50px;
    background-color: #fff;

    &_about {
      font-size: 28px;
      margin: 16px 0 0 0;
    }
  }

  .banner__level {
    padding: 90px 0 90px 50px;

    &-bar-question {
      gap: 50px;
    }

    &-bar {
      width: 800px;
    }

    &-question-topic {
      margin: 200px 0 0 0;
      padding-right: 30px;
    }

    &-text {
      font-size: 18px;
    }

    &-text1 {
      margin-right: 45px;
    }

    &-text2 {
      margin-right: 25px;
    }

    &-text3 {
      margin-left: 10px;
    }

    &-text4 {
      margin-left: 20px;
    }

    &-text5 {
      margin-right: 35px;
    }

    &-text6 {
      margin-right: 20px;
    }

    .barcontainer {
      width: 70px;
    }

    .container_line {
      gap: 40px;
    }

    .container_line-wrap1,
    .container_line-wrap2,
    .container_line-wrap3,
    .container_line-wrap4,
    .container_line-wrap5,
    .container_line-wrap6 {
      gap: 35px;
    }
  }

  .banner__company {
    padding: 170px 102px 166px 50px;

    &-text-details {
      gap: 120px;
    }

    &-details {
      width: 430px;
    }

    &-details-button {
      width: 330px;
      cursor: pointer;
    }
  }

  .banner__price {
    padding: 70px 120px 70px 120px;

    &-topic {
      font-size: 50px;
    }

    &-wrap {
      padding: 0 200px;
    }
  }

  .banner__videos-topic {
    padding-left: 50px;
  }

  .banner__videos-info-wrapped {
    padding-left: 50px;
  }

  iframe {
    width: 700px;
  }

  .banner__questions {
    padding: 200px 50px;

    &-collapse-ask {
      gap: 50px;
    }

    &-ask-topic {
      font-size: 38px;
    }

    &-ask-text {
      font-size: 24px;
    }

    &-ask-btn {
      width: 100%;
    }
  }

  .accordion {
    padding: 34px 150px 32px 32px;
  }

  .footer {
    padding: 70px 50px 100px 50px;

    &-options {
      gap: 50px;
    }
  }
}

@media (max-width: 1366px) {
  .secondary-header__btn {
    width: 150px !important;
    font-size: 16px;
  }

  .banner__programs-form-name-input {
    width: 320px !important;
  }

  .banner__programs-form-comment-input {
    width: 320px !important;
  }

  .banner__programs-form-button {
    width: 320px !important;
    cursor: pointer;
  }

  .banner__level-question-topic {
    margin: 150px 0 0 0;
  }
}

@media (max-width: 1200px) {
  .secondary-header__show {
    padding: 24px 30px 17px 30px;

    &-options {
      gap: 10px;
      white-space: nowrap;

      a {
        padding-top: 10px;
        font-size: 17px;
      }
    }
  }

  .secondary-header__options-text {
    font-size: 12px !important;
  }

  .banner__learn-eng-pic-london {
    width: 550px !important;
  }

  .banner__learn-eng h1 {
    font-size: 40px;
    margin-top: 50px;
  }

  .banner__learn-eng-info-text {
    font-size: 20px !important;
  }

  .banner__learn-eng-info-btns_red,
  .banner__learn-eng-info-btns_blue {
    width: 250px !important;
  }

  .banner__learn-eng-info-benefits {
    gap: 20px;
  }

  .banner__learn-eng-info-benefits_row {
    gap: 20px;
  }

  .banner__learn-eng-pic-test {
    top: 500px !important;
  }

  .banner__learn-eng-pic-lesson {
    top: 90px !important;
  }

  .banner__learn-eng-pic {
    padding-top: 30px;
  }

  .banner__advantages {
    margin: 140px 100px 150px 100px;
  }

  .banner__programs-second {
    width: 400px !important;
  }

  .banner__programs-first {
    width: 400px !important;
  }

  .banner__programs-first-base {
    gap: 100px !important;
  }

  .banner__programs-second-top {
    gap: 100px !important;
  }

  .banner__programs-fourth-base {
    gap: 90px !important;
  }

  .banner__programs-first-info {
    font-size: 18px !important
  }

  .banner__programs-second-eng-info {
    font-size: 18px !important
  }

  .banner__programs-second-link-info-more,
  .banner__programs-first-link-info-more {
    font-size: 16px !important;
    padding: 50px 0 0 180px !important;
  }

  .banner__programs-first-link-arrow {
    padding-top: 50px !important;
  }

  h6,
  .banner__programs-second-eng {
    padding: 80px 0 0 24px;
  }

  .banner__programs-form-level {
    font-size: 26px !important;
    padding-right: 60px;
  }

  .banner__programs-form-name-input,
  .banner__programs-form-comment-input,
  .banner__programs-form-button {
    width: 250px !important;
    cursor: pointer;
  }

  .banner__programs-form-personal {
    font-size: 12px !important;
  }

  .banner__advantages_first-row {
    gap: 100px;
  }

  .banner__level-question-topic {
    font-size: 40px;
  }

  .banner__level-question-more {
    font-size: 18px;
    margin: 24px 50px 0 0;
  }

  .banner__level-question-button {
    width: 200px;
    height: 60px;
    font-size: 20px;
  }

  .banner__company-text-img {
    width: 550px;
  }

  .banner__price {
    padding: 70px 100px !important;
  }

  .banner__videos-info-wrapped {
    font-size: 26px;
    padding: 0 0 0 50px;
  }

  .banner__questions-collapse-ask {
    gap: 40px;
  }

  .banner__questions-ask-topic {
    font-size: 33px;
    white-space: nowrap;
  }

  .banner__questions-ask-text {
    font-size: 20px;
  }

  .accordion {
    padding: 34px 100px 32px 32px;

    span {
      font-size: 25px;
    }
  }

  .banner__contacts-map-info-img {
    width: 600px;
  }

  .banner__contacts-info {
    padding-top: 50px;
  }

  .banner__contacts-info-topic {
    font-size: 40px;
  }

  .banner__contacts-map-info-button {
    margin: 50px 0 50px 0;
  }

  .footer-options__contacts-button {
    width: 300px;
  }

  .footer__child-terms-text,
  .footer__child-terms-rights {
    font-size: 20px;
  }
}

@media (max-width: 1024px) {
  .secondary-header__show {
    padding: 24px 10px 17px 10px;

    &-options {
      gap: 20px;
      white-space: nowrap;

      a {
        padding-top: 10px;
        font-size: 12px;
      }

      .secondary-header__btn {
        margin: 20px 0 0 20px;
      }
    }
  }

  .banner__learn-eng-info-btns_red,
  .banner__learn-eng-info-btns_blue {
    font-size: 16px;
    width: 190px !important;
  }

  .banner__learn-eng-info-benefits_scheduled-text,
  .banner__learn-eng-info-benefits_results-text,
  .banner__learn-eng-info-benefits_literature-text,
  .banner__learn-eng-info-benefits_learning-text {
    font-size: 16px;
  }

  .header__address-text,
  .header__contacts-telepone-text,
  .header__contacts-mail-text {
    font-size: 12px;
  }

  .header__contacts {
    gap: 20px;
  }

  .secondary-header__school-logo {
    width: 200px;
  }

  .secondary-header__btn {
    width: 120px !important;
    height: 40px !important;
    font-size: 12px !important;
  }

  .secondary-header__options-text {
    font-size: 10px !important;
  }

  .banner__learn-eng-info {
    padding-top: 200px;
  }

  .banner__learn-eng h1 {
    font-size: 35px;
    margin-top: 0;
  }

  .banner__learn-eng-pic-london {
    width: 400px !important;
  }

  .banner__learn-eng-pic-lesson {
    right: 200px !important;
  }

  .banner__learn-eng-pic-test {
    top: 380px !important;
  }

  .banner__advantages {
    h2 {
      font-size: 40px;
    }

    h3 {
      font-size: 24px;
    }

    &_first-row-col1-text {
      font-size: 20px;
    }
  }

  .banner__programs {
    h4 {
      font-size: 40px;
    }

    &-form-personal {
      font-size: 16px !important;
    }
  }

  .banner__advantages_second-row {
    gap: 170px;
  }

  .banner__advantages_third-row {
    gap: 100px;
  }

  .banner__programs_row-one {
    margin: 60px 0 0 50px;
  }

  .banner__programs_row-two {
    margin: 24px 0 0 50px;
  }

  .banner__programs-all {
    flex-direction: column;
  }

  .banner__programs-form-level {
    font-size: 30px !important;
  }

  .banner__programs-form {
    padding: 0 50px 0 50px;
    align-items: center;
  }

  .banner__programs-form-name-input,
  .banner__programs-form-comment-input,
  .banner__programs-form-button {
    width: 100% !important;
  }

  .banner__teachers {
    h4 {
      font-size: 40px;
    }

    &_about {
      font-size: 22px;
    }

    &-name {
      font-size: 24px;
    }

    &-info {
      font-size: 20px;
    }
  }

  .banner__level {
    &-bar {
      width: 500px;
      height: auto;
    }

    &-text {
      font-size: 12px;
      margin: 20px 0 0 20px;
    }

    &-text1 {
      margin-right: 25px;
    }

    &-text2 {
      margin-right: 15px;
    }

    &-text3 {
      margin-left: 5px;
    }

    &-text4 {
      margin-left: 5px;
    }

    &-text5 {
      margin-right: 15px;
    }

    &-text6 {
      margin-right: 20px;
    }

  }

  .container_line-wrap {
    flex-direction: column;
  }

  .container {
    height: 343px;
    width: 450px;
    margin: 100px 0 0 30px;
  }

  .barcontainer {
    border-radius: 7px;
    width: 47px !important;
    height: 317px;
    margin-right: 31px;
  }

  .banner__level .container_line-wrap1,
  .banner__level .container_line-wrap2,
  .banner__level .container_line-wrap3,
  .banner__level .container_line-wrap4,
  .banner__level .container_line-wrap5,
  .banner__level .container_line-wrap6 {
    gap: 5px;
  }

  .banner__level .container_line {
    gap: 20px;
  }

  .modal__application {
    margin: 5px 0 0 0;
  }

  .modal__test-button {
    margin: 0 100px 0 230px;
  }

  .modal__application-button {
    margin: 0 100px 200px 230px;
  }

  .banner__company-text-details {
    flex-direction: column;
  }

  .banner__company-details {
    width: 100%;
  }

  .banner__company-text-topic {
    font-size: 40px;
  }

  .banner__company-details-text {
    font-size: 20px;
  }

  .banner__company-text-info {
    font-size: 20px;
  }

  .banner__company-details-button {
    margin-bottom: 30px;
    width: 100%;
  }

  .banner__price {
    padding: 70px 30px !important;

    &-topic {
      font-size: 40px;
    }

    &-text {
      font-size: 22px;
    }
  }

  .banner__videos-topic {
    font-size: 40px;
  }

  .banner__videos-info-wrapped {
    padding-left: 50px;
    font-size: 22px;
  }

  .banner__review {
    padding: 90px 150px 80px 150px;

    &-topic {
      font-size: 40px;
    }
  }

  .banner__questions {
    padding: 150px 30px;

    &-topic {
      font-size: 40px;
    }

    &-ask-topic {
      font-size: 33px;
    }

    &-collapse-ask {
      flex-direction: column;
      gap: 70px;
    }
  }

  .accordion span {
    font-size: 23px;
  }

  .panel_answer_backend {
    font-size: 20px;
  }

  .banner__contacts {
    padding: 0 30px;
  }

  .banner__contacts-map-info {
    gap: 50px;
  }

  .footer {
    padding: 70px 50px 100px 30px;
  }

  .footer-options__logo-school {
    width: 200px;
  }

  .footer-options__navigation-text-bold {
    font-size: 25px;
  }

  .footer-options__navigation-text {
    font-size: 20px;
  }

  .footer-options__contacts-text {
    font-size: 16px;
  }

  .footer-options__contacts-button {
    width: 250px;
  }

  .footer__child-terms {
    gap: 500px;
  }

}

@media (max-width: 475px) {
  .header {
    display: none;
  }

  .header__close_test-mb {
    display: block;
  }

  .secondary-header {
    display: block;
    padding: 15px 16px 12px 15px;
  }

  .secondary-header__school {
    justify-content: space-between;
    padding: 0;
  }

  .secondary-header__school-logo {
    width: 165px;
    height: 49px;
  }

  .secondary-header__show {
    display: none;
  }

  .burger-menu-icon {
    display: block;
    cursor: pointer;
  }

  .secondary-header__button {
    display: none;
  }

  .banner__learn-eng {
    flex-direction: column;
    padding: 37.18px 16px 60px 16px;
  }

  .banner__learn-eng-pic {
    position: absolute;
    right: 10%;
    top: 10%;
  }

  .banner__learn-eng-pic-london {
    width: 298px !important;
    height: 334px !important;
  }

  .banner__learn-eng-pic-lesson {
    width: 214px;
    top: 10% !important;
    right: 35% !important;
  }

  .banner__learn-eng-pic-test {
    width: 214px;
    top: 68% !important;
    right: 0;
    left: 38%;
  }

  h1 {
    font-size: 6.74vw !important;
    margin-top: 50px !important;
  }

  .banner__learn-eng-info {
    padding-top: 320px;
    text-align: center;
  }

  .banner__learn-eng-info-text {
    font-size: 18px;
    margin: 8px 0 0 0;
  }

  .banner__learn-eng-info-btns {
    flex-direction: column;
    gap: 8px;
    margin: 51px 0 0 0;
    align-items: center;
  }

  .banner__learn-eng-info-btns_red,
  .banner__learn-eng-info-btns_blue {
    width: 100% !important;
    height: 60px !important;
    font-size: 18px;
  }

  .banner__learn-eng-info-benefits {
    margin: 80px 0 0 0;
    flex-direction: column;
    gap: 51px;
    align-items: center;
  }

  .banner__learn-eng-info-benefits_row {
    gap: 16px;
  }

  .banner__learn-eng-info-benefits_learning {
    margin-right: 13px;
  }

  .banner__learn-eng-info-benefits_scheduled-text,
  .banner__learn-eng-info-benefits_results-text,
  .banner__learn-eng-info-benefits_literature-text,
  .banner__learn-eng-info-benefits_learning-text {
    font-size: 18px;
    text-align: center;
  }

  .banner__advantages {
    margin: 100px 16px;
  }

  h2 {
    margin: 0;
    font-size: 28px !important;
  }

  .banner__advantages_first-row,
  .banner__advantages_second-row,
  .banner__advantages_third-row {
    flex-direction: column;
    margin-top: 40px;
    gap: 40px;
  }

  h3 {
    font-size: 20px !important;
    margin: 0 0 8px 0;
  }

  .banner__advantages_first-row-col1-info {
    padding-left: 16px;
  }

  .banner__advantages_first-row-col1-text {
    font-size: 16px;
  }

  .banner__advantages_first-row-col1-img {
    width: 70px;
    height: 70px;
  }

  .banner__programs {
    padding: 50px 16px 0 16px;
  }

  .banner__programs-all {
    flex-direction: column;
    gap: 0;
    align-items: center;
  }

  h4 {
    font-size: 28px !important;
  }

  .banner__programs_row-one {
    flex-direction: column;
    gap: 16px;
    margin: 32px 0 0 0;
    align-items: center;
  }

  .banner__programs_row-two {
    flex-direction: column;
    gap: 16px;
    align-items: center;
    margin: 16px 0 0 0;
  }

  .banner__programs-first,
  .banner__programs-second {
    width: 343px !important;
    height: 278px;
  }

  .banner__programs-first-base,
  .banner__programs-second-top,
  .banner__programs-fourth-base {
    gap: 0;
    justify-content: space-between;
    padding: 16px;
  }

  h5,
  .banner__programs-second-topic {
    font-size: 32px;
    padding: 0;
  }

  .banner__programs-first-base-img {
    width: 113px;
    height: 34px;
  }

  h6,
  .banner__programs-second-eng {
    font-size: 24px !important;
    padding: 70px 8px 0 16px;
  }

  .banner__programs-first-info,
  .banner__programs-second-eng-info {
    font-size: 16px;
    padding: 8px 16px 0 16px;
  }

  .banner__programs-first-link-info-more,
  .banner__programs-second-link-info-more {
    font-size: 16px !important;
    padding: 24px 0 24px 125px !important;
  }

  .banner__programs-first-link-arrow {
    padding-top: 0 !important;
  }

  .banner__programs-form {
    padding: 0;
  }

  .banner__programs-form-level {
    font-weight: 700;
    font-size: 24px !important;
    margin: 90px 0 0 0;
    padding: 0;
  }

  label {
    font-size: 20px;
  }

  .banner__programs-form-name-input {
    width: 100% !important;
  }

  .banner__programs-form-name-input::placeholder {
    font-size: 18px;
  }

  .banner__programs-form-comment-input {
    width: 100% !important;
    padding-right: 30px;
  }

  .banner__programs-form-comment-input::placeholder {
    font-size: 18px;
    right: 16px;
  }

  .banner__programs-form-button {
    width: 100% !important;
    height: 60px;
    font-weight: 400;
    font-size: 18px;
  }

  .banner__programs-form-personal {
    margin: 16px 0 62px 0;
    font-size: 16px;
  }

  .banner__teachers {
    margin: 100px 16px 0 16px;
  }

  .banner__teachers_about {
    font-size: 16px;
    margin: 16px 0 0 0;
  }

  .banner__teachers-name {
    font-size: 24px;
    margin: 32px 0 0 90px;
  }

  .banner__teachers-info {
    font-size: 18px;
    text-align: center;
    padding: 0 40px 0 40px;
  }

  .swiper {
    border-radius: 10px;
    margin-bottom: 100px;
  }

  .banner__level {
    background-image: none;
    padding: 50px 0 150px 0;
  }

  .banner__level-bar-question {
    flex-direction: column;
    gap: 0;
  }

  .banner__level-bar {
    border-radius: 0;
    width: 100%;
    height: 508px;
    margin-top: 180px;
    position: relative;
  }

  .banner__guestion {
    position: absolute;
    margin: 0 0 0 16px;
  }

  .banner__level-question-button {
    position: absolute;
    top: 700px;
    left: 40px;
    width: 310px;
    height: 54px;
    font-size: 16px;
  }

  .banner__level-question-topic {
    margin: 0;
    font-size: 28px;
  }

  .banner__level-question-more {
    font-size: 16px;
    margin: 16px 16px 0 0;
  }

  .container {
    transform: rotate(90deg);
    height: 343px;
    width: 112.50vw;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 90px;
  }

  .barcontainer {
    border-radius: 7px;
    width: 47px !important;
    height: 317px;
    margin-right: 31px;
    margin-top: 20px;
  }

  .bar_level {
    transform: rotate(-90deg);
    position: absolute;
    top: 320px;
    padding-top: 5px;
  }

  .more-info {
    width: 16px;
    height: 16px;
    transform: rotate(-90deg);
    position: absolute;
    top: 10px;
    right: 15px;
  }

  .bar_level-text1 {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 120%;
    color: #333;
    transform: rotate(-90deg);
    position: absolute;
    top: 280px;
    left: 30px;
  }

  .bar_level-text2 {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 120%;
    color: #333;
    transform: rotate(-90deg);
    position: absolute;
    top: 270px;
    left: 20px;
  }

  .bar_level-text3 {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 120%;
    color: #333;
    transform: rotate(-90deg);
    position: absolute;
    top: 250px;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
  }

  .bar_level-text4 {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 120%;
    color: #333;
    transform: rotate(-90deg);
    position: absolute;
    top: 230px;
    bottom: 50px;
    white-space: nowrap;
    overflow: hidden;
  }

  .bar_level-text5 {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 120%;
    color: #333;
    transform: rotate(-90deg);
    position: absolute;
    top: 270px;
    left: 20px;
    white-space: nowrap;
    overflow: hidden;
  }

  .bar_level-text6 {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 120%;
    color: #333;
    transform: rotate(-90deg);
    position: absolute;
    top: 270px;
    left: 20px;
    white-space: nowrap;
    overflow: hidden;
  }

  .banner__company {
    padding: 100px 16px;
  }

  .banner__company-text {
    position: relative;
  }

  .banner__company-text-details {
    flex-direction: column;
    gap: 60px;
  }

  .banner__company-text-img {
    width: 343px;
    height: 196px;
    margin: 60px 0 0 0;
  }

  .banner__company-text-info {
    font-size: 16px;
    margin: 24px 0 0 0;
  }

  .banner__company-text-topic {
    font-size: 28px;
    position: absolute;
    top: 0;
  }

  .banner__company-details {
    text-align: center;
    gap: 40px;
    padding: 32px 0 16px 0;
    width: auto;
    margin-left: 0;

    h4 {
      text-align: center;
    }
  }

  .banner__company-details-text {
    font-size: 16px;
    padding: 0 48px;
    margin: 8px 0 0 0;
  }

  .banner__company-details-join {
    margin: 30px 0 0 0;
  }

  .banner__company-details-join-text {
    font-size: 24px;
  }

  .banner__company-details-button {
    width: 310px;
    height: 60px;
    font-size: 18px;
    margin-left: 30px;
  }

  .banner__price {
    padding: 50px 0 !important;
  }

  .banner__price-topic {
    font-size: 28px;
  }

  .banner__price-wrap {
    padding: 0 50px;
  }

  .banner__price-text {
    font-size: 16px;
    margin: 8px 0 0 0;
  }

  .banner__videos {
    padding: 100px 0 100px 0;
  }

  .banner__videos-topic {
    font-size: 28px;
    padding-left: 16px;
  }

  .banner__videos-info-wrapped {
    font-size: 16px;
    padding: 0 16px 0 16px;
    text-align: center;
  }

  iframe {
    border-radius: 10px;
    width: 343px;
    height: 198px;
  }

  .banner__review {
    padding: 70px 0;
    background-image: none;

    .swiper {
      margin: 0 auto;

      img {
        border-radius: 20px;
        width: 343px !important;
      }
    }
  }

  .banner__review-topic {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .banner__review-item {
    width: 343px;
    height: 360px;
    padding: 24px 16px;

    &-name-date {
      display: flex;
      justify-content: space-between;
      position: relative;
    }

    &-name {
      font-size: 24px;
    }

    &-date {
      font-size: 16px;
      position: absolute;
      right: 10px;
      top: 300px;
    }

    &-text {
      font-size: 16px;
    }
  }

  .banner__questions {
    padding: 100px 16px;

    &-topic {
      font-size: 28px;
      margin-bottom: 24px;
    }
  }

  .banner__questions-collapse-ask {
    flex-direction: column;
    gap: 0;
  }

  .banner__questions-ask {
    display: none;
  }

  .accordion {
    padding: 32px 30px 32px 0;
    font-size: 18px;
    text-align: left;
    white-space: normal;
  }

  .accordion span {
    font-size: 18px;
    text-align: left;
  }

  .panel_answer_backend {
    font-size: 16px;
  }

  .arrow {
    width: 20px;
    height: 20px;
    top: 45px;
    right: 10px;
  }

  .panel_answer {
    padding: 16px 0;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    line-height: 140%;
    color: #333;
  }

  .banner__contacts {
    padding: 0 0 70px 0;
  }

  .banner__contacts-map-info {
    flex-direction: column;
    gap: 32px;
  }

  .banner__contacts-info {
    padding: 0;
    margin: 0 0 0 16px;

    &-topic {
      font-size: 28px;
      margin: 0 0 24px 0;
    }
  }

  .banner__contacts-info-location {
    margin-bottom: 32px;

    &-address-text {
      font-size: 18px;
    }
  }

  .banner__contacts-info-telephone {
    margin-bottom: 32px;
  }

  .banner__contacts-map-info-button {
    margin: 51px 16px 0 16px;
    width: 343px;
    height: 60px;
    font-size: 18px;
  }

  .banner__contacts-map-info-img {
    width: 100%;
  }

  .footer {
    padding: 32px 16px 100px 16px;

    &__child {
      padding: 24px 70px 31px 70px;

      &-terms {
        display: block;
        position: relative;
      }

      &-terms-text {
        font-size: 16px;
      }
    }
  }

  .footer-options {
    flex-direction: column;
    gap: 41px;

    &__logo {
      display: block;
      position: relative;
    }

    &__logo-school {
      width: 171px;
      height: 48px;
    }

    &__logo-socials {
      width: 224px;
      height: 38px;
      position: absolute;
      top: 810px;
      left: 0;
    }

    &__navigation-text-bold {
      font-size: 20px;
      margin: 0;
    }

    &__navigation-text {
      font-size: 18px;
    }

    &__programs {
      margin: 0 0 60px 0;

    }

    &__contacts {
      display: none;
    }
  }

  .footer__child-terms-rights {
    font-size: 14px;
    position: absolute;
    bottom: 900px;
    left: 140px;
    text-align: right;
    height: auto;
    width: 160px;
  }

  .banner__price-blocks_detailed {
    width: 343px;
    height: 430px;

    &-topic {
      padding: 18px 16px 0 16px;
      text-align: left;

      &-eng {
        font-size: 24px;
      }

      img {
        width: 113px;
        height: 34px;
        border-radius: 5px;
      }
    }

    &-options {
      font-size: 16px;
      text-align: left;
      margin: 16px 0 0 32px;
    }

    &-prices {
      margin: 24px 16px 0 0;
    }

    &-price {
      font-size: 18px;

      &-bold {
        font-size: 24px;
      }
    }

    &-button {
      margin: 16px 0 16px 0;
      width: 310px;
      height: 54px;
      font-size: 16px;
    }
  }

  .secondary-header__school_model {
    width: 100%;
    border-radius: 0;
    width: 338px;
    height: 812px;
    background: #fff;
    z-index: 10000000;
  }

  .modal {
    width: 100%;
  }

  .modal-header {
    padding: 0;
  }

  .modal__english-img {
    position: relative;
  }

  .modal__english {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;

    &-img-family {
      width: 100%;
      position: relative;
    }
  }

  .modal__english-adults-topic {
    font-size: 20px;
    margin: 27px 0 14px 16px;
  }

  .modal__english-adults-text {
    font-size: 14px;
    margin: 0 16px 29px 16px;
  }

  .modal__english-adults {
    position: relative;
  }

  .modal__english-adults-base {
    position: absolute;
    top: -5%;
    bottom: 0;
    right: 10%;
    width: 113px;
    height: 34px;
  }

  .modal__request-form {
    flex-direction: column;
    gap: 0;
    width: 100%;
    max-height: 750px;
    padding: 8px 8px 16px 8px;
  }

  .modal__request {
    width: 100%;
    height: 220px;
    border-radius: 10px;
    padding: 8px 0 16px 8px;

    img {
      width: 171px;
      height: 48px;
    }

    &-topic {
      font-size: 24px;
      margin: 63px 0 8px 0;
      text-align: left;
    }

    &-text {
      font-size: 14px;
      padding: 0 8px 0 0;
    }
  }

  .modal__form {
    margin: 29px 0 0 0;
    text-align: left;

    .banner__programs-form-name {
      margin-top: 0;
    }

    label {
      padding-left: 0;
    }

    .banner__programs-form-comment-input {
      margin-left: 0;
    }

    .banner__programs-form-button {
      margin-left: 0;
    }
  }
}
</style>