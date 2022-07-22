import React, { useState } from "react";
import "../../Design.css";
import { BASE_URL, METHOD, restApiSvcCall } from "src/lib/common/restApi";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onPassword2Handler = (event) => {
    setPassword2(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onClickRegister = (e) => {
    if (password !== password2) {
      alert("비밀번호가 다릅니다.");
      return;
    } else
      onSubmit({
        email: email,
        password1: password,
        password2: password2,
        name: name,
      });
  };

  const onSubmit = (data) => {
    console.log(email, password, password2, name);
    let res = {
      serviceId: "register",
      baseUrl: "http://localhost:8080",
      url: "/api/auth/registration",
      method: METHOD.POST,
      data: data,
      callback: useCallback,
    };
    restApiSvcCall(res);
  };

  const useCallback = (res) => {
    if (res.serviceId === "register") {
      console.log(res.data);
      //페이지 이동
    }
  };

  return (
      <form className="w-5/6 h-4/6 m-20 flex flex-col justify-center items-center">
        <div>
          <input
            name="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onEmailHandler}
            id="loginregister__input"
            className="m-4 input input-bordered"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onPasswordHandler}
            id="loginregister__input"
            className="my-2 input input-bordered"
          />
        </div>
        <div>
          <input
            name="password2"
            type="password"
            placeholder="비밀번호 확인"
            value={password2}
            onChange={onPassword2Handler}
            id="loginregister__input"
            className="my-2 input input-bordered"
          />
        </div>
        <div>
          <input
            name="name"
            type="name"
            placeholder="이름"
            value={name}
            onChange={onNameHandler}
            id="loginregister__input"
            className="my-2 input input-bordered"
          />
        </div>
        <div>
          <button
            type="button"
            // onSubmit={onSubmit}
            onClick={onClickRegister}
            id="loginregister__button"
            className="my-2 btn btn-primary"
          >
            회원가입
          </button>
        </div>
      </form>
  );
};

export default Register;
