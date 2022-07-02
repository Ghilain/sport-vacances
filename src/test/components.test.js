import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Sports from '../pages/HomePage';
import Footer from '../component/Footer';
import Header from '../component/header';

describe('Test Compontests', () => {
  test('test Sports', () => {
    const tree = renderer
      .create(<Provider store={store}><BrowserRouter><Sports /></BrowserRouter></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test Header', () => {
    const tree = renderer
      .create(<Provider store={store}><BrowserRouter><Header /></BrowserRouter></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test Footer', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
