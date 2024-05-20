<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header :class="{'modal-header': true, 'modal-header-new-style': applyHeaderNewStyle}">
          <slot name="header"></slot>
          <img src="@/assets/img/close.svg" alt="close" @click="close" class="header__close" v-if="!showWhiteCloseIcon">
          <img src="@/assets/img/close-white.svg" alt="close" @click="close" class="header__close_white" v-if="!showTestCloseIcon">
          <img src="@/assets/img/close_white_lg.svg" alt="close" @click="close" class="header__close_white-lg" v-if="showWhiteCloseIcon">
          <img src="@/assets/img/close-test.svg" alt="close" @click="close" class="header__close_test-mb" v-if="showTestCloseIcon">
        </header>
        <section class="modal-body">
          <slot name="body"></slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    showWhiteCloseIcon: {
      type: Boolean,
      default: false
    },
    applyHeaderNewStyle: {
      type: Boolean,
      default: false
    },
    showTestCloseIcon: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 1111px;
  margin: 0 20px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  justify-content: space-between;
  padding: 16px 30px 0 16px;
}

.modal-footer {
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
}

.header__close {
  margin: 14px 0 700px 0;

  @media (max-width: 500px) {
    display: none;
  }
}

.header__close_white {
  display: none;

  @media (max-width: 500px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
  }
}

.header__close_white-lg {
  position: absolute;
  top: 40px;
  right: 40px;
}

.modal-header-new-style {
  padding: 16px 16px 0 16px;
}

.header__close_test-mb {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>