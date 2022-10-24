import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState('true');

  const contextValue = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    submitDisabled,
    setSubmitDisabled,
  }), [email, password, submitDisabled]);

  useEffect(() => {
    const RegEx = /\S+@\S+\.\S+/;

    const passwordLength = 6;
    if (RegEx.test(email) && password.length > passwordLength) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [email, password]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
