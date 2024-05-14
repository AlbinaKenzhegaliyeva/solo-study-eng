<template>
    <div class="menu">
        <div class="menu__header">
            <img src="@/assets/img/school.svg" alt="logo" style="width: 165px; height: 49px;">
            <img src="@/assets/img/close_mob.svg" alt="close" @click="close" class="header__close">
        </div>
        <div class="menu__body">
            <p>Почему мы?</p>
            <p>Услуги</p>
            <p>Преподаватели</p>
            <p>Пройти тест</p>
            <p>О компании</p>
            <p>Стоимость</p>
            <p>Отзывы</p>
            <p>Вопросы</p>
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
    width: 100%;
    height: 812px;
    background: #fff;
    padding: 50px 16px 32px 15px;
    z-index: 99;
}

.menu__header {
    display: flex;
    justify-content: space-between;
}

.header__close {
    margin-bottom: 0;
}

.menu__body {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 37px 0 102px 4px;

    p {
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        text-align: left;
        color: #082151;
    }
}
</style>