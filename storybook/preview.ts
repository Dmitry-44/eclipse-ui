import { setup } from '@storybook/vue3';
import ecButton from '../src/components/button'

setup((app) => {
  app.component('ec-button', ecButton);
  app.mixin({
    // My mixin
  });
});