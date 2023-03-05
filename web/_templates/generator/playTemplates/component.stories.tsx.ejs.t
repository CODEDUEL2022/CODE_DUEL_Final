---
to: src/features/play/templates/<%= name %>/<%= name %>.stories.tsx
---
<% camelizedName = h.inflection.camelize(name) -%>

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { <%= camelizedName %> } from './<%= name %>';

export default {
    title: '<%= camelizedName %>',
    component: <%= camelizedName %>,
} as ComponentMeta<typeof <%= camelizedName %>>

const Template: ComponentStory<typeof <%= camelizedName %>> = (args) => <<%= camelizedName %> {...args} />;

export const Default: ComponentStory<typeof <%= camelizedName %>> = Template.bind({});

Default.args = {

};
Default.storyName = 'デフォルト';
