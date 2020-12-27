import React from 'react';
import PropTypes from 'prop-types';
import PuffLoader from 'react-spinners/PuffLoader';

export default function Loader({ loading }) {
  return <PuffLoader size={80} color="#df101b" loading={loading} />;
}

Loader.propTypes = {
  loading: PropTypes.bool,
};
