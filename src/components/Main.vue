<script setup lang="ts">
import ImpressionsChart from "./ImpressionsChart.vue";
import {
  filteredArrayBasedOnKeyOfObject,
  FacebookAnalyticsEndpoint,
  dateOfToday,
  startDateAndEndDatesAreValid,
} from "@/assets/ts";
import LoadingSpinner from "./LoadingSpinner.vue";
import { ref, onMounted } from "vue";

// state variables
const facebookAnalyticsData = ref([]);
const is_fetching = ref(false);
const fetch_failed = ref(false);
const start_date = ref("2021-01-01"); // default start date = some old date, preferrably called as a const var
const end_date = ref(dateOfToday()); // default end date = today

/**
 * Flow of fetching data converted into a single function
 * that changes the value of ref variables based on the
 * flow of the fetch request.
 */
async function FetchFacebookAnalyticsData(start_date: string, end_date: string) {
  // reset array of data to be empty on each fetch request to not miss out on bugs
  facebookAnalyticsData.value = [];
  fetch_failed.value = false;
  is_fetching.value = true;
  let res = await FacebookAnalyticsEndpoint(start_date, end_date);

  if (res.status !== 200) {
    fetch_failed.value = true;
    is_fetching.value = false;
  } else {
    let data = await res.json();
    is_fetching.value = false;
    facebookAnalyticsData.value = data.data;
  }
}

onMounted(async () => {
  // fetch a long period on initial load to return the main summary of data
  FetchFacebookAnalyticsData(start_date.value, end_date.value);
  // uncomment lower line to test error state
  // FetchFacebookAnalyticsData(start_date.value, "qwe");
});
</script>

<template>
  <div class="flex-center mt-10">
    <div class="max-width-6">
      <h5 class="italic fw-600 mb-6 font-mono">causalytics.ai</h5>
      <div class="grid gap-2">

        <!-- Start Date input -->
        <div class="grid">
          <label for="start_date" class="input__1_label">START DATE</label>
          <input
            name="start_date"
            type="text"
            class="input__1"
            placeholder="YYYY-MM-DD"
            v-model="start_date"
          />
        </div>

        <!-- End Date input -->
        <div class="grid">
          <label for="end_date" class="input__1_label">END DATE</label>
          <input
            name="end_date"
            type="text"
            class="input__1"
            placeholder="YYYY-MM-DD"
            v-model="end_date"
          />
        </div>
        <button
          class="input__1 bg-black text-white fw-600"
          :disabled="!startDateAndEndDatesAreValid(start_date, end_date)"
          @click="FetchFacebookAnalyticsData(start_date, end_date)"
        >
          FETCH DATA
        </button>

        <!-- Header for graph -->
        <div class="w-full h-full grid border-1-2 border-rad-5 py-6 px-8">
          <div class="">
            <h5 class="fw-600 mb-2 opacity-90">Facebook Analytics</h5>
            <hr class="hr-1-3" />
          </div>

          <!-- If currently fetching data, return a loading spinner -->
          <div v-if="is_fetching">
            <LoadingSpinner />
          </div>

          <!-- If currently not fetching data and the array that holds the data is not empyty, return the grid of info -->
          <div v-if="!is_fetching && facebookAnalyticsData.length !== 0">
            <ImpressionsChart
              :graph_labels="
                filteredArrayBasedOnKeyOfObject(facebookAnalyticsData, 'campaign_name')
              "
              :graph_data="
                filteredArrayBasedOnKeyOfObject(facebookAnalyticsData, 'impressions')
              "
            />
          </div>

          <!-- If the fetch request failed, return error message -->
          <div v-if="fetch_failed">
            <div
              class="flex-center bg-red-700 text-white border-rad-5 fs-9 py-1.5 fw-600"
            >
              Whoops, something went wrong!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
