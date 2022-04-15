<template>
  <div class="navbar">
        <div class="navbar__logo">
            <img src="@/img/logo.png" alt="sleepy logo" @click="$router.push('/main')">
        </div>

        <div class="navbar__links">
            <router-link
            to="/main" 
            class-active="active"
            class="link__diagram">
                <svg viewBox="0 0 24 24" class="img__diagram">
                    <path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z" />
                </svg>
                <p>Диаграмма</p>
            </router-link>

            <router-link
            to="/statistics" 
            class-active="active"
            class="link__statistics">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="img__statistics">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z"/>
                </svg>
                <p>Статистика</p>
            </router-link>
                
            <router-link 
            to="/user"
            class-active="active"
            class="link__profile">
                <svg viewBox="0 0 24 24" class="img__profile">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
                <p>Профиль</p>
            </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "nav-bar",
}
</script>

<style>
:root {
    --backgroundColor:#4F67DC;
    --backgroundColorHover:#F8CD19;
}

.navbar__logo img{
    width: 90px; 
    height: 90px; 
    object-fit: cover;
    margin-left: 30px;
    margin-top: 0px;
}
.navbar__logo, .navbar__logo img, .img__statistics, .img__profile, .img__diagram,
.navbar, .navbar__links, p {
    background-color: var(--backgroundColor);
    background-size: cover;
}
.img__statistics, .img__profile, .img__diagram {
    fill: white;
    height: 50px;
    width: 50px;
}
.navbar {
    display: flex;
    width: 100%;
    min-width: 1000px;
    height: 100px;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0;
}
.navbar__links {
    display: flex;
}
.link__statistics, .link__profile, .link__diagram {
    margin-right: 30px;
    text-decoration: none;
    background-color: var(--backgroundColor);
}
.link__statistics:hover .img__statistics,.link__profile:hover .img__profile,.link__diagram:hover .img__diagram {
    fill: var(--backgroundColorHover);
}
.link__statistics:hover p,.link__profile:hover p,.link__diagram:hover p {
    color: var(--backgroundColorHover);
}
.active p{
  color: var(--backgroundColorHover);
}
.active svg{
  fill: var(--backgroundColorHover);
}
</style>