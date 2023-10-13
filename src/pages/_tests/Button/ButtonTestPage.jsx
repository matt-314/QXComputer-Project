import React from 'react';

import ButtonTestSection from './ButtonTestSection';

function ButtonTestPage() {
  return (
    <div>
      <h1>Button Widget</h1>
      <ButtonTestSection title="Primary" color="primary" />
      <ButtonTestSection title="Secondary" color="secondary" />
      <ButtonTestSection title="Tertiary" color="tertiary" />
      <ButtonTestSection title="Success" color="success" />
      <ButtonTestSection title="Warning" color="warning" />
      <ButtonTestSection title="Danger" color="danger" />
      <ButtonTestSection title="Neutral" color="neutral" />
      <ButtonTestSection title="Light" color="light" />
    </div>
  );
}

export default ButtonTestPage;
