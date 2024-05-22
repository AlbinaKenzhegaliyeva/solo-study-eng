<template>
  <div v-if="selectedBlock === 'adults-base'">
    <div class="banner__price-blocks_detailed-topic">
      <p class="banner__price-blocks_detailed-topic-eng">{{ course2.name }}</p>
      <img src="@/assets/img/base.svg" alt="base" style="margin-bottom: 45px;">
    </div>
    <div class="banner__price-blocks_detailed-options">
      <ul>
        <li>{{ part11 }}</li>
        <li>{{ part12 }}</li>
        <li>{{ part13 }}</li>
        <li>{{ part14 }}</li>
        <li>{{ part15 }}</li>
      </ul>
    </div>
    <div class="banner__price-blocks_detailed-prices">
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">1 урок:</p>
        <p class="banner__price-blocks_detailed-price-bold">{{ course2.lesson_price }}₽</p>
      </div>
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">Полный курс:</p>
        <p class="banner__price-blocks_detailed-price-bold">{{ course2.full_course_price }}₽</p>
      </div>
    </div>
    <button class="banner__price-blocks_detailed-button">Записаться на пробный урок</button>
  </div>
  <div v-else-if="selectedBlock === 'adults-advanced'">
    <div class="banner__price-blocks_detailed-topic">
      <p class="banner__price-blocks_detailed-topic-eng">{{ course.name }}</p>
      <img src="@/assets/img/top.svg" alt="top" style="margin-bottom: 45px;">
    </div>
    <div class="banner__price-blocks_detailed-options">
      <ul>
        <li>{{ part1 }}</li>
        <li>{{ part2 }}</li>
        <li>{{ part3 }}</li>
        <li>{{ part4 }}</li>
        <li>{{ part5 }}</li>
      </ul>
    </div>
    <div class="banner__price-blocks_detailed-prices">
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">1 урок:</p>
        <p class="banner__price-blocks_detailed-price-bold">{{ course.lesson_price }}₽</p>
      </div>
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">Полный курс:</p>
        <p class="banner__price-blocks_detailed-price-bold">{{ course.full_course_price }}₽</p>
      </div>
    </div>
    <button class="banner__price-blocks_detailed-button">Записаться на пробный урок</button>
  </div>
  <div v-else-if="selectedBlock === 'business-base'">
    <div class="banner__price-blocks_detailed-topic">
      <p class="banner__price-blocks_detailed-topic-eng">{{ course1.name }}</p>
      <img src="@/assets/img/base.svg" alt="base" style="margin-bottom: 45px;">
    </div>
    <div class="banner__price-blocks_detailed-options">
      <ul>
        <li>{{ part6 }}</li>
        <li>{{ part7 }}</li>
        <li>{{ part8 }}</li>
        <li>{{ part9 }}</li>
        <li>{{ part10 }}</li>

      </ul>
    </div>
    <div class="banner__price-blocks_detailed-prices">
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">1 урок:</p>
        <p class="banner__price-blocks_detailed-price-bold">{{ course1.lesson_price }}₽</p>
      </div>
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">Полный курс:</p>
        <p class="banner__price-blocks_detailed-price-bold">{{ course1.full_course_price }}₽</p>
      </div>
    </div>
    <button class="banner__price-blocks_detailed-button">Записаться на пробный урок</button>
  </div>
  <div v-else-if="selectedBlock === 'business-advanced'">
    <div class="banner__price-blocks_detailed-topic">
      <p class="banner__price-blocks_detailed-topic-eng">{{ course3.name }}</p>
      <img src="@/assets/img/top.svg" alt="top" style="margin-bottom: 45px;">
    </div>
    <div class="banner__price-blocks_detailed-options">
      <ul>
        <li>{{ part16 }}</li>
        <li>{{ part17 }}</li>
        <li>{{ part18 }}</li>
        <li>{{ part19 }}</li>
        <li>{{ part20 }}</li>
      </ul>
    </div>
    <div class="banner__price-blocks_detailed-prices">
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">1 урок:</p>
        <p class="banner__price-blocks_detailed-price-bold">{{ course3.lesson_price }}₽</p>
      </div>
      <div class="banner__price-blocks_detailed-prices-row">
        <p class="banner__price-blocks_detailed-price">Полный курс:</p>
        <p class="banner__price-blocks_detailed-price-bold">{{ course3.full_course_price }}₽</p>
      </div>
    </div>
    <button class="banner__price-blocks_detailed-button">Записаться на пробный урок</button>
  </div>
</template>


<script>
export default {
  props: { selectedBlock: String, course: Object, course1: Object, course2: Object, course3: Object },
  data() {
    return {
      part1: '',
      part2: '',
      part3: '',
      part4: '',
      part5: '',
      part6: '',
      part7: '',
      part8: '',
      part9: '',
      part10: '',
      part11: '',
      part12: '',
      part13: '',
      part14: '',
      part15: '',
      part16: '',
      part17: '',
      part18: '',
      part19: '',
      part20: '',
    };
  },
  methods: {
    splitString() {
      if (this.course.description && this.course.description !== '') {
        let words = this.course.description.split(' ');

        this.part1 = words.slice(0, 3).join(' '); // "Обучение с нуля"
        this.part2 = words.slice(3, 5).join(' '); // "Базовая грамматика"
        this.part3 = words.slice(5, 7).join(' '); // "Необходимые материалы"
        this.part4 = words.slice(7, 9).join(' '); // "Разговорная практика"
        this.part5 = words.slice(9).join(' ');    // "2 месяца обучения"
      }
      if (this.course1.description && this.course1.description !== '') {
        let lines = this.course1.description.split('\n');

        if (lines.length >= 5) {
          this.part6 = lines[0]; 
          this.part7 = lines[1]; 
          this.part8 = lines[2]; 
          this.part9 = lines[3]; 
          this.part10 = lines[4];
        }
      }
      if (this.course2.description && this.course2.description !== '') {
        let lines = this.course2.description.split('\n');

        if (lines.length >= 5) {
          this.part11 = lines[0]; 
          this.part12 = lines[1];
          this.part13 = lines[2]; 
          this.part14 = lines[3];
          this.part15 = lines[4];
        }
      }
      if (this.course3.description && this.course3.description !== '') {
        let lines = this.course3.description.split('\n');

        if (lines.length >= 5) {
          this.part16 = lines[0];
          this.part17 = lines[1]; 
          this.part18 = lines[2]; 
          this.part19 = lines[3]; 
          this.part20 = lines[4];
        }
      }
    }
  },
  watch: {
    course: {
      immediate: true,
      handler() {
        this.splitString();
      }
    },
    course1: {
      immediate: true,
      handler() {
        this.splitString();
      }
    }
  }

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
  white-space: nowrap;

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