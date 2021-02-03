import React from 'react';
import {mountWithApp} from 'test-utilities';

import {IndexProvider} from '../IndexProvider';
import {IndexRowContext} from '../utilities/context';

describe('<IndexProvider />', () => {
  const defaultProps = {
    itemCount: 0,
    selectedItemsCount: 0,
  };

  it('renders a IndexRowContextProvider', () => {
    const indexProvider = mountWithApp(<IndexProvider {...defaultProps} />);

    expect(indexProvider).toContainReactComponent(IndexRowContext.Provider);
  });
});
