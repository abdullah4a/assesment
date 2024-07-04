<template>
  <Bar :data="chartData" :options="options" />
</template>

<script>
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    points: Object,
    chartOption: Object,
  },
  data() {
    return {
      chartData: this.points,
      options: this.chartOption,
    };
  },
};
</script>
