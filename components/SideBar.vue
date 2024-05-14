<template>
    <div class="menu">
        <div class="menu__header">
            <img src="@/assets/img/school.svg" alt="logo">
            <img src="@/assets/img/close_mob.svg" alt="close" @click="close" class="header__close">
        </div>

    </div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style scoped lang="scss">
.menu {
    width: 338px;
    height: 812px;
    background: #fff;
    padding: 50px 16px 32px 15px;
}

.menu__header {
    display: flex;
    justify-content: space-between;
}
</style>