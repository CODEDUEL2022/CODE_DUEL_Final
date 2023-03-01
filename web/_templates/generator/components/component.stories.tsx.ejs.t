---
to: src/components/parts/<%= name %>/<%= name %>.stories.tsx
---
<% camelizedName = h.inflection.camelize(name) -%>

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import <%= camelizedName %>Template from './<%= name %>.html';

export default {
    title: '<%= camelizedName %>s',
    component: '<%= camelizedName %>s'
} as ComponentMeta<typeof <%= camelizedName %>>

const Template: ComponentStory<typeof <%= camelizedName %>> = (args) => <<%= camelizedName %> {...args} />;

export const Default: ComponentStory<typeof <%= camelizedName %>> = Template.bind({});

Default.args = {

};
Default.storyName = 'デフォルト';
