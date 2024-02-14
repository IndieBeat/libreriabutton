import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primmary: Story = {
	render: () => <Button label='Mi boton' />,
};

export const Secondary: Story = {
	render: () => <Button label='Algun boten' />,
};

//const Template: StoryObj<typeof Button> = (args) => <Button {...args} />;
