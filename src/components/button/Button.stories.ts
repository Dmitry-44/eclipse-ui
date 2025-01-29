// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success'], // Добавьте все доступные типы
      description: 'Тип кнопки',
    },
    disabled: {
      control: 'boolean',
      description: 'Кнопка заблокирована',
    },
    onClick: { action: 'clicked', description: 'Событие клика' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultButtonSetup = (args): Story => {
    return {

    render: (args) =>( {
        components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Нажми меня</Button>`, // шаблон для основного варианта
    args
    })
}
}

// export const Primary: Story = {
//     render: (args) =>( {
//         components: { Button },
//     setup() {
//       return { args };
//     },
//         args: {
//             type: 'primary',
//             disabled: false,
//           },
//           template: `<Button v-bind="args">Нажми меня</Button>`, // шаблон для основного варианта
//     })
// };

// export const Secondary: Story = defaultButtonSetup({
//     type: 'secondary',
// })


export const Ghost: Story = {
    render: (args) =>( {
        components: { Button },
    setup() {
      return { args };
    },
        args: {
            type: 'ghost',
          },
          template: `<Button v-bind="args">Нажми меня</Button>`, // шаблон для основного варианта
    })
};

export const DisabledButton: Story = {
    render: (args) => ({
      components: { Button },
      setup() {
        return { args };
      },
      template: `<Button v-bind="args">Нажми меня</Button>`,
    }),
    args: {
      disabled: true
    },
  };