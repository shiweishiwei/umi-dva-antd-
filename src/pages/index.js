import { connect } from 'dva';
import { Form } from 'antd';
import 'antd/dist/antd.css';
import styles from './index.css';
import NormalLoginForm from '../components/Login.js';

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

function App({ isUser, dispatch }) {
  const handleConfirm = (val) => {
    dispatch({ type: 'users/judgeLink', payload: val })
  }
  return (
    <div>
      <div className={styles.welcome}></div>
      <WrappedNormalLoginForm
        onSubmit={handleConfirm}
        isCorrect={isUser}
        firstInputID='username'
        firstInputInitial='admin'
        firstInputMessage='用户名不能为空'
        secondInputID='password'
        secondInputInitial='admin'
        secondInputMessage='密码不能为空'
        alertMessage='用户名密码错误'
        alertType='error'
      />
    </div>
  );

}

function mapStateToProps(state) {
  return {
    isUser: state.users.isUser
  };
}

export default connect(mapStateToProps)(App);
