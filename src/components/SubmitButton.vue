<script setup lang="ts">
import { FormKit } from "@formkit/vue";
import { getNode } from "@formkit/core";
import { computed } from "vue";

const props = defineProps<{ id: string; formId: string }>();
const loading = computed(() => {
  return getNode(props.formId)?.context?.state.loading;
});
</script>

<template>
  <FormKit
    type="submit"
    input-class="button-common"
    :label="loading ? 'Pending' : 'Submit'"
  >
  </FormKit>
</template>
