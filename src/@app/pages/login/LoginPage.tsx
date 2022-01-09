import { Col, Row } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import { loginAction } from "../../redux/actions/auth-action";
import { unwrapResult } from "@reduxjs/toolkit";
import useDispatch from "../../hooks/use-dispatch";
const LoginPage: React.FC = () => {
  let navigate = useNavigate();
  const dispatch=useDispatch();
  const onFinish = async(values: any) => {
    const data=unwrapResult(await dispatch(loginAction({ email: "phamlong992k@gmail.com", password: "Goboi123" })));
    console.log(data)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col>
        <Form
            className="admin-login-form"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Row justify="center" align="middle">
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
export default LoginPage;
