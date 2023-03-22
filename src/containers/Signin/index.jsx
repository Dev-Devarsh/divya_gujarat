import React, { useEffect } from "react";
import styled from "styled-components";
import { Input, Button, Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { googleIcon, githubIcon } from "../../helper/constant";
import { useLoginMutation } from "../../redux/services/auth";
import { BeatLoader } from "react-spinners";

const SigninWrapper = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
  .form-div {
    width: 60%;
  }
  .header_div {
    height: 200px;
  }
  .container {
    width: 80%;
    margin-inline: auto;
  }
  .title {
    height: 66px;
    font-size: 50px;
    font-weight: 800;
    line-height: 1.3;
    color: rgb(9, 23, 71);
  }
  .description {
    height: 75px;
    font-size: 20px;
    font-weight: 600;
    color: rgb(3, 180, 198);
    line-height: 1.5;
    margin-left: 15px;
  }
  .button {
    width: 215px;
    height: 45px;
    cursor: pointer;
    background: none rgb(3, 180, 198);
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: 2px;
    border-radius: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }

  .right_part {
    width: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    /* border-left: 2px solid rgb(58, 77, 143); */
    .ant-form-item {
      margin-bottom: 0px !important;
    }
    .ant-form-item-label {
      padding: 0px !important;
    }
  }
  .left_part {
    width: 50%;
  }
  .signup_div {
    width: 100%;
  }
  .bottom_side {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-form-item-label > label.ant-form-item-required:before {
    content: unset;
  }
  @media (max-width: 1000px) {
    overflow: hidden;
    .bottom_side {
      flex-direction: column-reverse;
    }
    .right_part {
      width: 100%;
      border-left: none;
    }
    .form-div {
      width: 100%;
    }
    .ant-col-offset-1 {
      margin-left: 0;
    }
    .button {
      width: 100%;
    }
    .left_part {
      width: 100%;
      border-top: 1px solid rgb(58, 77, 143);
      margin-top: 25px;
      padding-top: 25px;
    }
    .title {
      width: 380px;
      text-align: center;
      font-size: 34px;
    }
    .description {
      width: 100%;
      text-align: center;
    }
  }
`;

const Signin = ({name}) => {
  const [formtwo] = Form.useForm();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  console.log(isLoading, "loadong");

  useEffect(() => {
    let news = document.getElementById("root");
    news.style.backgroundColor = "#e8f9fe";
  }, []);

  const submitSigninDetailsHandler = async () => {
    const formData = formtwo.getFieldValue();

    const response = await login({
      email: formData.email,
      password: formData.password,
    });

    if (!response?.error) {
      navigate("/cluster-list");
      message.success("Login successful !!");
    } else {
      message.error("Login failed !!");
      message.error("Check your email and password");
      formtwo.resetFields();
    }   
  };
  return (
    <SigninWrapper>
      <div className="container">
        <header className="flex justify-center items-center flex-col header_div">
          <div className="title">Welcome to KREA8LABS </div>
          <div className="description">
            Login to your console and start creating Kubernetes clusters.
          </div>
        </header>
        <section className="bottom_side">
          {/* <div className="flex flex-col gap10 items-center left_part ">
            <a href="https://accounts.google.com/o/oauth2/auth?client_id=1021461364949-ogdj4imofjhh4npdb1qbicne80rj0te4.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fapi.krea8labs.com%2Fauth%2Fgoogle%2Flogin&amp;response_type=code&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&amp;state=1vUebOXeZwi6QKuh2ukv30xYK%2FuVlJ%2FSlQnKNwjLI8c%3D">
              <Button className="button">
                <img src={googleIcon} alt="Google" />
                Sign in with Google
              </Button>
            </a>
            <a href="https://github.com/login/oauth/authorize?client_id=8f19affe890d92ac38ad&amp;redirect_uri=https%3A%2F%2Fapi.krea8labs.com%2Fauth%2Fgithub%2Flogin&amp;response_type=code&amp;scope=repo&amp;state=1vUebOXeZwi6QKuh2ukv30xYK%2FuVlJ%2FSlQnKNwjLI8c%3D">
              <Button className="button">
                <img src={githubIcon} alt="Github" />
                Sign in with Github
              </Button>
            </a>
          </div> */}
          <div className="right_part">
            <Form
            
              layout="vertical"
              autoComplete="off"
              size="large"
              name="login form"
              form={formtwo}
              className="form-div"
              onFinish={submitSigninDetailsHandler}
              initialValues={{
                email: "",
                password: "",
              }}
            >
              <Form.Item
                wrapperCol={{
                  span: 24,
                  offset: 0,
                }}
                label="Username/Email*"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  span: 24,
                  offset: 0,
                }}
                label="Password*"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              {/* <div className="text-center ml100"> Forgot Password ?</div> */}

              <Form.Item wrapperCol={{ span: 24 }}>
                <div className="flex justify-center items-center flex-col ">
                  <Button htmlType="submit" className="button mt40 ">
                    Sign in
                  </Button>
                  <div className="signup_div text-center">
                    Don't have an account ?<Link to="/signup"> Sign up</Link>
                  </div>
                  <div className="text-center">
                    {isLoading ? (
                      <BeatLoader color="rgb(3, 180, 198)" />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    </SigninWrapper>
  );
};

export default Signin;
