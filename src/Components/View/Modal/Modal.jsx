import React from 'react';
import PropTypes from 'prop-types';
import { Modal as SemannticModal, Button, Image, Divider, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoginComponent from '../LoginForm/LoginForm';
import SignUpComponent from '../SignUp/SignUp';

const Modal = ({ triggerEl, type }) => {
  if (type === 'login') {
    return (
      <SemannticModal size="large" trigger={triggerEl} closeIcon centered={false}>
        <div className="site-modal">
          <div className="site-modal__details">
            <Image centered src="https://res.cloudinary.com/jesseinit/image/upload/v1549611110/neon-ah/Logo.svg" />
            <h2 className="site-modal__header">Log in into Authors Haven</h2>
            <p className="site-modal__subheader">Fill the form to create an account and get started</p>
            <LoginComponent />
            <Link to="/forgotpassword">
              <span className="site-modal__link">Forgot Password?</span>
            </Link>

            <Divider horizontal>Or</Divider>

            <p style={{ textAlign: 'center' }}>Connect with your social accounts.</p>
            <Grid columns="2">
              <Grid.Row>
                <Grid.Column>
                  <Button fluid as="a" href="https://ahv-backend.herokuapp.com/api/v1/auth/google" color="google plus">
                    <Icon name="google" />
                    Google
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button fluid as="a" href="https://ahv-backend.herokuapp.com/api/v1/auth/facebook" color="facebook">
                    <Icon name="facebook" />
                    Facebook
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Button fluid as="a" href="https://ahv-backend.herokuapp.com/api/v1/auth/twitter" color="twitter">
                    <Icon name="twitter" />
                    Twitter
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button fluid as="a" href="https://ahv-backend.herokuapp.com/api/v1/auth/linkedin" color="linkedin">
                    <Icon name="linkedin" />
                    LinkedIn
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <p style={{ textAlign: 'center', marginTop: '15px' }}>
              Dont have an account?
              <a style={{ paddingLeft: '4px' }} href="/">
                Create one
              </a>
            </p>
          </div>

          <div className="site-modal__image">
            <Image src="https://res.cloudinary.com/jesseinit/image/upload/v1549610632/neon-ah/login.svg" />
          </div>
        </div>
      </SemannticModal>
    );
  }
  return <SignUpComponent triggerEl={triggerEl} />;
};

Modal.propTypes = {
  triggerEl: PropTypes.oneOfType([PropTypes.node]),
  type: PropTypes.string
};

Modal.defaultProps = {
  type: '',
  triggerEl: null
};

export default Modal;
