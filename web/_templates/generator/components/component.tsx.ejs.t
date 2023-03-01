---
to: src/components/parts/<%= name %>/<%= name %>.html
---

import React from 'react';

interface <%= camelizedName %>Props {

}

export const Button: React.FC<<%= camelizedName %>Props> = (props) => {
  const {} = props;

  return (
    <div>hello component!</div>
  );
};