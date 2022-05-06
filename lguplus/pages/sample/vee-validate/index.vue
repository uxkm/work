<template>
  <div>
    <h1>vee-vaildate 샘플{{ $config.asset.imgURL }}</h1>
    <ValidationObserver ref="observer">
      <form slot-scope="{ validate }" @submit.prevent="validate().then(onSubmit)" @reset="resetForm">
        <ValidationProvider v-slot="{ errors }" rules="required">
          <input v-model="value" type="text" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required" vid="password">
          <input v-model="password" type="text" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required|confirmed:password">
          <input v-model="confirmation" type="text" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <!-- <button type="submit" variant="primary" :disabled="invalid">Submit</button> -->
        <button type="submit" variant="primary">Submit</button>
        <button type="reset" variant="danger">Reset</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  name: 'VeeValidate',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      value: '',
      email: '',
      password: '',
      confirmation: '',
      subject: '',
      choices: [],
    };
  },
  mounted() {
    console.info('[mounted]', this.$config.asset.imgURL);
  },
  methods: {
    onSubmit() {
      console.log('Form submitted yay!');
    },
    resetForm() {
      this.value = '';
      this.email = '';
      this.password = '';
      this.confirmation = '';
      this.subject = '';
      this.choices = [];
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
