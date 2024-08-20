<script setup lang="ts">
import { toRefs, computed } from "vue";
const props: any = defineProps({
  cols: { type: [String, Number] },
  xl: { type: [String, Number] },
  md: { type: [String, Number] },
  sm: { type: [String, Number] },
  xs: { type: [String, Number] },
  offsetmd: { type: [String, Number] },
  offsetsm: { type: [String, Number] },
  title: { type: String, default: "" },
  text: { type: [String, Number], default: "" },
  classTitle: { type: String, default: "" },
  classText: { type: String, default: "" },
  defaultText: { type: String, default: "N/A" },
  currencyFormat: { type: Boolean, default: false },
  color: { type: String, default: "" },
  clipBoard: { type: Boolean, default: false },
  caption: { type: Boolean, default: true },
});
const { text, defaultText } = toRefs(props);
const defaultValue = computed(() => (text ? text.value : defaultText.value));
</script>

<template>
  <v-col :md="md" :sm="sm" :xs="xs" :offset-md="offsetmd" :offset-sm="offsetsm">
    <span
      :class="{
        'text-caption': caption,
      }"
    >
      <span
        class="font-weight-bold"
        :class="classTitle?.length > 0 && classTitle"
      >
        {{ title }}
      </span>
      <v-tooltip top>
        <template v-slot:activator="{ props }">
          <span v-bind="props">
            {{ defaultValue }}
          </span>
        </template>
        {{ defaultValue }}
      </v-tooltip>
    </span>
    <btn-clipboard v-if="clipBoard" :value="text" />
  </v-col>
</template>

