<script setup lang="ts">
import { FormKit } from "@formkit/vue";
import {
  reset as resetForm,
  getNode,
  setErrors,
  type FormKitGroupValue,
} from "@formkit/core";
import TextInput from "@/components/TextInput.vue";
import SubmitButton from "@/components/SubmitButton.vue";
import { useTagsStore } from "@/stores/tags";
import { computed, reactive } from "vue";
import AlertDSVue from "@/components/AlertDS.vue";

const formId = "create-tag-form";
const tagsStore = useTagsStore();

const state = reactive<{
  successMessages: Record<string, string>;
  error?: string;
}>({
  successMessages: {},
});

const loading = computed(() => {
  return getNode(formId)?.context?.state.loading;
});

const onSubmitNormal = async ({ tag }: FormKitGroupValue) => {
  if (typeof tag === "string") {
    await tagsStore.createTag({ name: tag });
    resetForm(formId);
    const timeoutId = setTimeout(() => {
      delete state.successMessages[timeoutId];
    }, 3000);
    state.successMessages[timeoutId] = `Tag ${tag} was successfully created.`;
  } else {
    throw new Error("Failed to submit form because the tag was not a string.");
  }
};

// Use this to test whether there was an error in submitting
// eslint-disable-next-line
const onSubmitThrowError = () => {
  const promise = new Promise((res, reject) => {
    setTimeout(() => {
      reject(new Error("Failed (testing)"));
    }, 3000);
  });
  return promise;
};

// Use this to look at the loading state for a bit longer
// eslint-disable-next-line
const onSubmitLongWait = ({ tag }: FormKitGroupValue) => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(async () => {
      await onSubmitNormal({ tag });
      resolve();
    }, 3000);
  });
  return promise;
};

const onSubmit = async ({ tag }: FormKitGroupValue) => {
  if (!loading.value) {
    try {
      setErrors(formId, []);
      // await onSubmitThrowError();
      await onSubmitNormal({ tag });
      // await onSubmitLongWait({ tag });
    } catch (error) {
      console.error(error);
      setErrors(formId, "Sorry, there was an issue submitting.");
    }
  }
};

const value = {
  tag: "",
};
</script>

<template>
  <FormKit
    :id="formId"
    type="form"
    :value="value"
    submit-label="Create Tag"
    :actions="false"
    @submit="onSubmit"
  >
    <TextInput
      label="Tag"
      name="tag"
      validation="required|length:1,64"
    ></TextInput>
    <SubmitButton id="create-tag-form-submit-button" :formId="formId" />
  </FormKit>
  <span v-for="(value, key) in state.successMessages" :key="key">
    <AlertDSVue type="success">{{ value }}</AlertDSVue>
  </span>
</template>
