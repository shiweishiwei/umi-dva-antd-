import styles from './index.css';
import { connect } from 'dva';

//不论路由怎么跳转，页面都会有的东西
function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>{`犹豫，就会败北；果断，就会白给`}</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
