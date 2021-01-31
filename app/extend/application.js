const SUCCESS_CODE = 200;
const ERROR_CODE = 500;

function successMsg(data, msg) {
  return {
    data,
    msg,
    code: SUCCESS_CODE,
  };
}

function errorMsg(data, msg) {
  return {
    data,
    msg,
    code: ERROR_CODE,
  };
}

function getCurrentTimestamp() {
  return Date.parse(new Date()) / 1000;
}

module.exports = {
  successMsg,
  errorMsg,
  getCurrentTimestamp,
};
