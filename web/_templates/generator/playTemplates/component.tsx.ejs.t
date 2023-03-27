---
to: src/features/play/templates/<%= name %>/<%= name %>.tsx
---

import React from 'react';

interface <%= camelizedName %>Props {

}

export const <%= camelizedName %>: React.FC<<%= camelizedName %>Props> = (props) => {
  const {} = props;

  return (
    <div>hello component!</div>
  );
};