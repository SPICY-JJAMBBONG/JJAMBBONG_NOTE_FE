import axios from "axios";

export const METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const BASE_URL = {
  COMMON: String(process.env.REACT_APP_API_COMMOM_API),
};

export function restApiSvcCall(props) {
  const headers = {
    "Content-type": "application/json",
    Accept: "*/*",
  };

  if (props.method === "GET") {
    axios
      .get(props.baseUrl + props.url, { headers, params: props.data })
      .then(function (response) {
        const result = {
          svcId: props.svcId,
          data: response.data.result,
          errorMsg: response.data.error_msg,
        };
        if (props.callback) {
          props.callback(result);
        }
      })
      .catch(function (err) {
        if (err.response) {
          const result = {
            svcId: props.svcId,
            data: err.data,
            status: err.data.error_msg,
            errorCode: 0,
          };
          props.callback(result);
        } else {
          const result = {
            svcId: props.svcId,
            data: err.data,
            status: err.data.error_msg,
            errorCode: 0,
          };
          props.callback(result);
        }
      });
  } else if (props.method === "POST") {
    axios
      .post(props.baseUrl + props.url, props.data, { headers })
      .then(function (response) {
        const result = {
          svcId: props.svcId,
          data: response.data.result,
          errorMsg: response.data.error_msg,
        };
        if (props.callback) {
          props.callback(result);
        }
      })
      .catch(function (err) {
        if (err.response) {
          const result = {
            svcId: props.svcId,
            data: err.data,
            status: err.data.error_msg,
            errorCode: 0,
          };
          props.callback(result);
        } else {
          const result = {
            svcId: props.svcId,
            data: err.data,
            status: err.data.error_msg,
            errorCode: 0,
          };
          props.callback(result);
        }
      });
  } else if (props.method === "PUT") {
    axios
      .put(props.baseUrl + props.url, props.data, { headers })
      .then(function (response) {
        const result = {
          svcId: props.svcId,
          data: response.data.result,
          errorMsg: response.data.error_msg,
        };
        if (props.callback) {
          props.callback(result);
        }
      })
      .catch(function (err) {
        if (err.response) {
          const result = {
            svcId: props.svcId,
            data: err.data,
            status: err.data.error_msg,
            errorCode: 0,
          };
          props.callback(result);
        } else {
          const result = {
            svcId: props.svcId,
            data: err.data,
            status: err.data.error_msg,
            errorCode: 0,
          };
          props.callback(result);
        }
      });
  } else if (props.method === "DELETE") {
    axios
      .delete(props.baseUrl + props.url, { headers, params: props.data })
      .then(function (response) {
        const result = {
          svcId: props.svcId,
          data: response.data.result,
          errorMsg: response.data.error_msg,
        };
        if (props.callback) {
          props.callback(result);
        }
      })
      .catch(function (err) {
        if (err.response) {
          const result = {
            svcId: props.svcId,
            data: err.data,
            status: err.data.error_msg,
            errorCode: 0,
          };
          props.callback(result);
        } else {
          const result = {
            svcId: props.svcId,
            data: err.data,
            status: err.data.error_msg,
            errorCode: 0,
          };
          props.callback(result);
        }
      });
  }
}
