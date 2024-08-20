<script lang="ts" setup>
import { ref, onMounted } from "vue";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
const clock = ref<HTMLElement>();

onMounted(() => {
  console.log(clock.value);
});

const getCanvas = () => {
  // clock.value.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
  return html2canvas(clock.value as HTMLElement, {
    imageTimeout: 2000,
    removeContainer: true,
  });
};
const getpdf = async () => {
  const canvas = await getCanvas();
  const img = canvas.toDataURL("image/png");
  let doc = new jsPDF({
    unit: "px",
    format: "a4",
  });
  doc.addImage(img, "JPEG", 20, 20);
  doc.save("techsolutionstuff-html-to-pdf.pdf");

  // console.log(img);
};
</script>
<template>
  <div class="clock-analog" ref="clock">
    <div class="">
      <div class="info date"></div>
      <div class="info day"></div>
    </div>
    <div class="dot"></div>
    <div class="hand">
      <div class="hour-hand"></div>
      <div class="minute-hand"></div>
      <div class="second-hand"></div>
    </div>
    <div class="number">
      <span class="h3">3</span>
      <span class="h6">6</span>
      <span class="h9">9</span>
      <span class="h12">12</span>
    </div>
    <div class="diallines"></div>

    <v-btn @click="getpdf"> pdf </v-btn>
  </div>
</template>
<style>
.clock-analog {
  background: rgb(var(--v-theme-secondary));
  width: 300px;
  height: 300px;
  margin: 8% auto 0;
  border-radius: 50%;
  border: 14px solid rgb(var(--v-theme-primary));
  position: relative;
  /* box-shadow: 0 2vw 4vw -1vw rgba(var(--v-theme-success), 0.8); */
  z-index: 10;
}

.dot {
  /* width: 14px;
  height: 14px; */
  width: 6%;
  height: 6%;
  border-radius: 50%;
  background: #ccc;
  top: 47%;
  left: 47%;
  /* top: 0;
  left: 0; */
  /* right: 0;
  bottom: 0; */
  /* margin: auto; */

  position: absolute;
  z-index: 10;
  box-shadow: 0 2px 4px -1px black;
}

.hour-hand {
  position: absolute;
  z-index: 5;
  width: 4px;
  height: 65px;
  background: #333;
  top: 79px;
  transform-origin: 50% 72px;
  left: 50%;
  margin-left: -2px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

.minute-hand {
  position: absolute;
  z-index: 6;
  width: 4px;
  height: 100px;
  background: #666;
  top: 46px;
  left: 50%;
  margin-left: -2px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transform-origin: 50% 105px;
}

.second-hand {
  position: absolute;
  z-index: 7;
  width: 2px;
  height: 120px;
  background: gold;
  top: 26px;
  left: 50%;
  margin-left: -1px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transform-origin: 50% 125px;
}

span {
  display: inline-block;
  position: absolute;
  color: #333;
  font-size: var(--font-size-hour);
  font-family: "Poiret One";
  font-weight: 700;
  z-index: 4;
}

.h12 {
  top: 5%;
  left: calc(50% - (var(--font-size-hour) / 2));
}

.h3 {
  top: calc(50% - (var(--font-size-hour) / 2));
  right: 5%;
}

.h6 {
  bottom: 5%;
  left: calc(50% - (var(--font-size-hour) / 4));
}

.h9 {
  left: 5%;
  top: calc(50% - (var(--font-size-hour) / 2));
}

.diallines {
  position: absolute;
  z-index: 2;
  width: 2px;
  height: 15px;
  background: #666;
  left: 50%;
  margin-left: -1px;
  transform-origin: 50% 150px;
}

.diallines:nth-of-type(5n) {
  position: absolute;
  z-index: 2;
  width: 4px;
  height: 25px;
  background: #666;
  left: 50%;
  margin-left: -1px;
  transform-origin: 50% 150px;
}

.info {
  position: absolute;
  width: 120px;
  height: 20px;
  border-radius: 7px;
  background: #ccc;
  text-align: center;
  line-height: 20px;
  color: #000;
  font-size: 11px;
  top: 200px;
  left: 50%;
  margin-left: -60px;
  font-family: "Poiret One";
  font-weight: 700;
  z-index: 3;
  letter-spacing: 3px;
  margin-left: -60px;
  left: 50%;
}

.date {
  top: 80px;
}

.day {
  top: 200px;
}
</style>