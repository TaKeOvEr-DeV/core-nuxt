<script setup lang="ts">
import { toRefs } from "vue";
const props: any = defineProps({
  value: { type: [String, Number], default: "" },
});
const { value } = toRefs(props);

const copiarAlPortapapeles = () => {
  let aux = document.createElement("input");
  aux.setAttribute("value", value.value);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
};
</script>

<template>
  <v-tooltip location="top" origin="left">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        @click.stop="copiarAlPortapapeles"
        icon
        size="x-small"
      >
        <v-icon size="x-small">mdi-content-copy</v-icon>
      </v-btn>
    </template>
    <span> Copiar al portapapeles </span>
  </v-tooltip>
</template>
