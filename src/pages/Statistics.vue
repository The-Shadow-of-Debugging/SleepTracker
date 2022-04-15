<template>
<div class="statistics">
  <div>
    <nav-bar></nav-bar>
  </div>

    <div class="main">
      <div class="st__img">
        <select class="list">
          <option>По дням</option>
          <option>По неделям</option>
          <option>По месяцам</option>
          <option>По годам</option>
        </select>
      </div>
      <div class="chart">
        <div class="chart__history">
          <p class="chart__paragraph">Качество сна</p>
          <p class="chart__paragraph">День</p>
        </div>
        <img class="chart__img" src="@/img/Chart.png" alt="chart">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  methods() {
    
  }
}
</script>

<style scoped>
.list {
  padding: 25px 100px;
  border: 3px solid #00189F;
  border-radius: 5px;
  font-size: 20px;
  box-sizing: border-box;
}
.list:active, .list:focus {
  outline:none;
}


.st__img {
  text-align: end;
  margin-bottom: 50px;
  margin-right: 50px;
  margin-top: 50px;
}
.icon {
  font-size: 48px;
}
.chart {
  display: flex;
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
</style>