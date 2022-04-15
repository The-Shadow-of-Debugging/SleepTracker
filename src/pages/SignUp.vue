<template>
  <div class="signup">
        <div class="main">
            <div class="head">
                <h1>Регистрация</h1>
            </div>
            <form class="middle" name="signUp">
                <my-input-1
                    class="field" 
                    placeholder="Имя"
                    v-model="user.name"/>
                    <my-input-1 
                    class="field" 
                    placeholder="E-mail"
                    type="email"
                    v-model="user.email"/>
                    <my-input-1 
                    class="field" 
                    placeholder="Пароль"
                    type="password"
                    v-model="user.password"/>
                <my-input-1 
                    class="field" 
                    placeholder="Подтвердите пароль"
                    type="password"/>
            </form>
            <div class="bottom">
                <my-button 
                class="enter"
                @click="$router.push('/main')"
                >Войти</my-button>
            </div>            
        </div>
        <div class="pic"></div>
    </div>
</template>

<script>
export default {
     data() {
        return {
            user: {
                name: '',
                email:'',
                password: ''
            }
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.signup {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.middle {
    display: flex;
    flex-direction: column;
}
.field  {
    margin-bottom: 18px;
}
.signup {
    align-self: flex-end;
    text-decoration: none;
}
.bottom {
    display: flex;
    flex-direction: column;
    margin-bottom: 21px;
}
.enter {
    margin-bottom: 26px;
}
.bottom a {
    align-self: center;
}
h1 {
    font-size: 48px;
    margin: 51px 34px 0px;
}
.pic {
    background: url('@/img/pic.jpg') center; 
    background-size: cover; 
    height: 100vh;
    background-repeat: no-repeat;
}
</style>