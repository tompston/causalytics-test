<script setup lang="ts">
import { Doughnut } from "vue-chartjs";
// import { defineProps } from "vue";
import { generateArrayOfHexColors } from "@/assets/ts";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

defineProps<{
  graph_labels: Array<string>;
  graph_data: Array<number>;
}>();

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<template>
  <div class="flex-center mt-3 w-full">
    <div class="relative w-[22vw] md:w-[45vw] xs:w-[60vw]">
      <Doughnut
        :chartData="{
          labels: graph_labels,
          datasets: [
            {
              backgroundColor: generateArrayOfHexColors(graph_data.length),
              data: graph_data,
              hoverOffset: 4,
            },
          ],
        }"
        :chart-options="chartOptions"
      />
    </div>
  </div>
</template>
