<template>
  <div class="user">
    <div class="navbar">
        <nav-bar></nav-bar>
    </div>
    <div class="content">
        <div class="user__photo">
            <img src="@/img/user.jpg" alt="user photo">
        </div>
        <div class="user__info">
            <div class="info__item">
                <label for="name">Имя</label>
                <my-input-1 id="name" value="Beatrice" class="item__input"></my-input-1>
            </div>
            <div class="info__item">
                <label for="surname">Фамилия</label>
                <my-input-1 id="surname" value="Brooks"></my-input-1>
            </div>
            <div class="info__item">
                <label for="birthday">День рождения</label>
                <my-input-1 id="birthday" value="2001-02-02" type="date"></my-input-1>
            </div>
            <div class="info__item">
                <label for="gender">Пол</label>
                <my-input-1 id="birthday" value="Женский"></my-input-1>
            </div>
            <div class="info__item">
                <label for="phone">Номер телефона</label>
                <my-input-1 id="phone" value="+7 987 654 32 10" type="tel"></my-input-1>
            </div>
            <div class="info__item">
                <label for="email">E-mail</label>
                <my-input-1 id="email" value="example@gmail.com" type="email"></my-input-1>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.navbar {
    margin-bottom: 30px;
}
.user__photo {
    margin-left: 30px;
}
.user__photo img{
    height: 500px !;
    width: 500px;
}
.user__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 100px;
    max-width: 700px;
}
.info__item {
    display: flex;
    justify-content: flex-end;
    padding: .5em;
}
label {
    font-size: 24px;
    flex: 1;
}
.form-row > input,
.form-row > button {
  padding: .5em;
}
</style>