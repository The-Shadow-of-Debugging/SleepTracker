<template>
  <div class="mainscreen">
      <div class="navbar">
          <nav-bar></nav-bar>
      </div> 
      <div class="inputs">
        <span>Вы спали с</span>
        <my-input-2 
                    v-model="user.data1"/>
        <span>до</span>
        <my-input-2
          v-model="user.data2"/>
      </div>
      <div class="chart">
        <div class="chart__history">
            <p class="chart__paragraph">Количество сна</p>
            <p class="chart__paragraph">День</p>
        </div>
        <img class="chart__img" src="@/img/Chart.png" alt="chart">
      </div>
  </div>
</template>

<script>
export default {
     data() {
        return {
            user: {
                data1: '',
                data2: ''
            }
        }
    }
}
</script>
<style scoped>
.chart {
  display: flex;

}
.navbar {
  margin-bottom: 50px;
}
.chart__history {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 20px;
  padding: 0px 30px;
}
.chart__img {
  width: auto;
  height: 600px;
}
.chart__paragraph {
  background-color: #7183E2;
}
.inputs span {
  margin: 0px 20px;
  font-size: 20px;
}
.inputs{
  text-align: center;
  padding: 35px;
  margin-bottom: 50px;
}
</style>
