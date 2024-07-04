<template>
  <app-page-content title="Investments">
    <template #default>
      <v-row>
        <v-col>
          <v-card class="pa-6">
            <div class="d-flex flex-wrap">
              <v-btn color="#16dbcc" variant="text" icon class="ms-4">
                <v-icon class="align-self-center"> fas fa-sack-dollar </v-icon>
              </v-btn>
              <div class="d-flex flex-column justify-start ms-5">
                <span>Total Invested Amount</span>
                <h1>$150,000</h1>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-6">
            <div class="d-flex flex-wrap">
              <v-btn color="#ff82ac" variant="text" icon class="ms-4">
                <v-icon class="align-self-center"> fas fa-chart-pie </v-icon>
              </v-btn>
              <div class="d-flex flex-column justify-start ms-5">
                <span>Number of Investments</span>
                <h1>1250</h1>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-6">
            <div class="d-flex flex-wrap">
              <v-btn color="#396aff" variant="text" icon class="ms-4">
                <v-icon class="align-self-center"> fas fa-repeat </v-icon>
              </v-btn>
              <div class="d-flex flex-column justify-start ms-5">
                <span>Rate of Return</span>
                <h1>5.80%</h1>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>Debit and Credit Overview</h2>
          <v-card>
            <v-card-item>
              <BarChart :points="chartData" :chartOption="chartOptions" />
            </v-card-item>
          </v-card>
        </v-col>
        <v-col>
          <h2>Monthly Revenue</h2>
          <v-card>
            <v-card-text>
              <LineChart :points="chartData" :chartOption="chartOptions" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>Contact Form</h2>
          <v-card>
            <v-card-item>
              <v-form v-model="valid">
                <v-container>
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Card Type"
                        hide-details
                        typ="email"
                        required
                        variant="solo-filled"
                        rounded
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Name on Card"
                        hide-details
                        required
                        rounded
                        variant="solo-filled"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <div class="d-flex justify-end">
                  <v-btn color="primary" rounded>Submit</v-btn>
                </div>
              </v-form>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col>
          <h2>Trending Stock</h2>
          <v-card>
            <v-data-table
              :headers="headers"
              :items="items"
              item-key="name"
              items-per-page="2"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </app-page-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { chartData, chartOptions } from "../../utils/chat-config";

export default defineComponent({
  name: "AppInvestments",
  computed: {
    chartOptions() {
      return chartOptions;
    },
    chartData() {
      return chartData;
    },
  },
  data() {
    return {
      valid: false,
      password: "",
      passwordRules: [
        (value) => {
          if (value) return true;

          return "Name is required.";
        },
        (value) => {
          if (value?.length <= 10) return true;

          return "Name must be less than 10 characters.";
        },
      ],
      email: "",
      emailRules: [
        (value) => {
          if (value) return true;

          return "E-mail is requred.";
        },
        (value) => {
          if (/.+@.+\..+/.test(value)) return true;

          return "E-mail must be valid.";
        },
      ],
      headers: [
        { title: "Pyramid", value: "name" },
        { title: "Location", value: "location" },
        { title: "Construction Date", value: "constructionDate" },
        {
          title: "Dimensions",
          align: "center",
          children: [
            { title: "Height (m)", value: "height" },
            { title: "Base (m)", value: "base" },
            { title: "Volume (m³)", value: "volume" },
          ],
        },
      ],
      items: [
        {
          name: "Great Pyramid of Giza",
          location: "Egypt",
          height: "146.6",
          base: "230.4",
          volume: "2583285",
          constructionDate: "c. 2580–2560 BC",
        },
        {
          name: "Pyramid of Khafre",
          location: "Egypt",
          height: "136.4",
          base: "215.3",
          volume: "1477485",
          constructionDate: "c. 2570 BC",
        },
        {
          name: "Red Pyramid",
          location: "Egypt",
          height: "104",
          base: "220",
          volume: "1602895",
          constructionDate: "c. 2590 BC",
        },
        {
          name: "Bent Pyramid",
          location: "Egypt",
          height: "101.1",
          base: "188.6",
          volume: "1200690",
          constructionDate: "c. 2600 BC",
        },
        {
          name: "Pyramid of the Sun",
          location: "Mexico",
          height: "65",
          base: "225",
          volume: "1237097",
          constructionDate: "c. 200 CE",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
