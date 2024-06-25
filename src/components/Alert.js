import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { hideAlert } from '../redux/actions/alertActions';

const Alert = ({ message, hideAlert }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        hideAlert();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, hideAlert]);

  if (!message) return null;

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow-md">
      {message}
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.alert.message,
});

const mapDispatchToProps = {
  hideAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
