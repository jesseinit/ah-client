import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import AuthorCard from './AuthorCard';

describe('<AuthorCard  />', () => {
  const props = {
    image: 'https://res.cloudinary.com/jesseinit/image/upload/v1549618838/neon-ah/search.svg',
    fullName: 'jesse',
    isFollowing: 'follow',
    userName: 'jesseinit',
    handleFollowButtonSubmit: jest.fn(() => {}),
    isAuthenticated: true
  };
  const store = {
    getState: () => {
      return {
        sendEmailReducer: {
          isEmailSent: false
        },
        signUpReducer: {
          isLoading: false,
          signUpCompleted: false,
          hasSignUpError: false,
          signUpError: null,
          message: null
        },
        searchFunctionalityReducer: {
          statusCode: 200,
          articleTagOrAuthorDatas: [],
          bookmarks: [],
          isBookmark: 'bookmark',
          following: []
        }
      };
    },
    subscribe: () => {
      return store.getState();
    },
    dispatch: () => {}
  };
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <AuthorCard {...props} />
      </MemoryRouter>
    </Provider>
  );

  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate handling button click', () => {
    const onClick = jest.fn();
    wrapper.setProps({ handleFollowButtonSubmit: onClick });
    wrapper.find('button.upload-btn').simulate('click');
    expect(onClick.mock.calls.length).toEqual(0);
  });
});
