import React, { Fragment } from 'react';
import LoaderButton from './LoaderButton';
import { ToolTip } from './ToolTip';

export default function App (props) {
  return (
    <Fragment>
      <h1>Components</h1>
      <LoaderButton />
      <ToolTip />
    </Fragment>
  );
}
