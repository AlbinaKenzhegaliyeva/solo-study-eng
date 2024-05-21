<template>
  <div class="menu">
    <div class="menu__header">
      <img src="@/assets/img/school.svg" alt="logo" style="width: 165px; height: 49px;">
      <img src="@/assets/img/close_mob.svg" alt="close" @click="close" class="header__close_black">
    </div>
    <div class="menu__body">
      <a href="#why">Почему мы?</a>
      <a href="#programs">Услуги</a>
      <a href="#teachers">Преподаватели</a>
      <a href="#test">Пройти тест</a>
      <a href="#company">О компании</a>
      <a href="#price">Стоимость</a>
      <a href="#review">Отзывы</a>
      <a href="#questions">Вопросы</a>
    </div>
    <div class="banner__contacts-info-location">
      <img src="@/assets/img/spot.svg" alt="map">
      <div class="banner__contacts-info-location-address">
        <p class="banner__contacts-info-location-address-text">197375, Санкт-Петербург,</p>
        <p class="banner__contacts-info-location-address-text">ул. Садовая, д. 53, офис 1121</p>
      </div>
    </div>
    <div class="banner__contacts-info-telephone">
      <img src="@/assets/img/hola.svg" alt="telephone">
      <div class="banner__contacts-info-location-address">
        <p class="banner__contacts-info-location-address-text">+7 (921) 320 74 06</p>
        <p class="banner__contacts-info-location-address-text">solo.english@gmail.com</p>
      </div>
    </div>
    <div class="banner__contacts-info-whatsapp">
      <img src="@/assets/img/whatsapp.svg" alt="whatsapp">
      <div class="banner__contacts-info-location-address">
        <p class="banner__contacts-info-location-address-text">+7 (921) 320 74 06</p>
        <p class="banner__contacts-info-location-address-text">Юлия Витальевна</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    close() {
      this.$emit('close');
    },
  },
}
</script>

<style scoped lang="scss">
.menu {
  position: fixed;
  width: 100%;
  background: #fff;
  padding: 50px 16px 32px 15px;
  z-index: 99;
  animation: my-animation 1s linear forwards;
}

@keyframes my-animation {
  0% {
    transform: translateX(100%) translateY(0) scale(1);
  }
  20% {
    transform: translateX(40%) translateY(0) scale(1);
  }
  100% {
    transform: translateX(0) translateY(0) scale(1);
  }
}

.menu__header {
  display: flex;
  justify-content: space-between;
}

.header__close_black {
  margin-bottom: 0;
}

.menu__body {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 37px 0 60px 4px;

  a {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    text-align: left;
    color: #082151;
    text-decoration: none;
  }
}
</style>