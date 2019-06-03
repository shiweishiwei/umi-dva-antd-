import React from 'react';
import { Form, Icon, Input, Button, Alert } from 'antd';
import 'antd/dist/antd.css';
import styles from './Login.css';
import FormItem from 'antd/lib/form/FormItem';

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const {
            onSubmit,
            isCorrect,
            firstInputID,
            firstInputInitial,
            firstInputMessage,
            secondInputID,
            secondInputInitial,
            secondInputMessage,
            alertMessage,
            alertType,
        } = this.props;
        return (
            <Form onSubmit={this.handleSubmit} className={styles.loginform}>
                <Form.Item>
                    {getFieldDecorator(firstInputID, {
                        initialValue: firstInputInitial,
                        rules: [{ required: true, message: firstInputMessage }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator(secondInputID, {
                        initialValue: secondInputInitial,
                        rules: [{ required: true, message: secondInputMessage }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                        />,
                    )}
                </Form.Item>
                <FormItem>
                    {isCorrect ? <div></div> : <Alert message={alertMessage} type={alertType} />}
                </FormItem>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default NormalLoginForm;
