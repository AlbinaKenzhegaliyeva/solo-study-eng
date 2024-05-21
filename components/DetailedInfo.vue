<template>
  <div v-if="selectedBlock === 'adults-base'">
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
    <button class="banner__price-blocks_detailed-button">Записаться на пробный урок</button>
  </div>
  <div v-else-if="selectedBlock === 'adults-advanced'">
    <div class="banner__price-blocks_detailed-topic">
      <p class="banner__price-blocks_detailed-topic-eng">Английский для взрослых</p>
      <img src="@/assets/img/top.svg" alt="top" style="margin-bottom: 45px;">
    </div>
    <div class="banner__price-blocks_detailed-options">
      <ul>
        <li>Необходимые материалы</li>
        <li>Разговорная практика</li>
        <li>2 месяца обучения</li>
      </ul>
    </div>
    <div class="banner__price-blocks_detailed-prices">
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">1 урок:</p>
        <p class="banner__price-blocks_detailed-price-bold">1000 ₽</p>
      </div>
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">Полный курс:</p>
        <p class="banner__price-blocks_detailed-price-bold">30600 ₽</p>
      </div>
    </div>
    <button class="banner__price-blocks_detailed-button">Записаться на пробный урок</button>
  </div>
  <div v-else-if="selectedBlock === 'business-base'">
    <div class="banner__price-blocks_detailed-topic">
      <p class="banner__price-blocks_detailed-topic-eng">Деловой английский</p>
      <img src="@/assets/img/base.svg" alt="base" style="margin-bottom: 45px;">
    </div>
    <div class="banner__price-blocks_detailed-options">
      <ul>
        <li>Необходимые материалы</li>
        <li>Разговорная практика</li>
        <li>4 месяца обучения</li>
      </ul>
    </div>
    <div class="banner__price-blocks_detailed-prices">
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">1 урок:</p>
        <p class="banner__price-blocks_detailed-price-bold">2000 ₽</p>
      </div>
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">Полный курс:</p>
        <p class="banner__price-blocks_detailed-price-bold">33600 ₽</p>
      </div>
    </div>
    <button class="banner__price-blocks_detailed-button">Записаться на пробный урок</button>
  </div>
  <div v-else-if="selectedBlock === 'business-advanced'">
    <div class="banner__price-blocks_detailed-topic">
      <p class="banner__price-blocks_detailed-topic-eng">Деловой английский</p>
      <img src="@/assets/img/top.svg" alt="top" style="margin-bottom: 45px;">
    </div>
    <div class="banner__price-blocks_detailed-options">
      <ul>
        <li>Необходимые материалы</li>
        <li>Разговорная практика</li>
        <li>6 месяцев обучения</li>
        <li>Омериканец</li>
      </ul>
    </div>
    <div class="banner__price-blocks_detailed-prices">
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">1 урок:</p>
        <p class="banner__price-blocks_detailed-price-bold">2500 ₽</p>
      </div>
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">Полный курс:</p>
        <p class="banner__price-blocks_detailed-price-bold">50600 ₽</p>
      </div>
    </div>
    <button class="banner__price-blocks_detailed-button">Записаться на пробный урок</button>
  </div>

</template>


<script>
export default {
  props: ['selectedBlock']
}
</script>


<style lang="scss">
.banner__price-blocks_detailed {
  border-radius: 10px;
  width: 703px;
  height: 583px;
  background: #051d65;
}

.banner__price-blocks_chosen-text {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 120%;
  color: #051d65;
}

.banner__price-blocks_detailed-topic {
  display: flex;
  gap: 36px;
  padding: 34px 40px 0 40px;
}

.banner__price-blocks_detailed-topic-eng {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  color: #fff;
}

.banner__price-blocks_detailed-options {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 153%;
  color: #fff;
  margin: 24px 0 0 75px;
}

.banner__price-blocks_detailed-prices {
  margin: 16px 40px 0 355px;
}

.banner__price-blocks_detailed-prices-row {
  display: flex;
  gap: 7px;
  justify-content: flex-end;
  align-items: center;
}

.banner__price-blocks_detailed-price {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 153%;
  color: #fff;

  &-bold {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    line-height: 153%;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
  }
}

.banner__price-blocks_detailed-button {
  border-radius: 10px;
  width: 623px;
  height: 70px;
  background: #b92831;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  text-align: center;
  color: #fff;
  border: none;
  margin: 20px 40px 0 40px;
  cursor: pointer;
}
</style>