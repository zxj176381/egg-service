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

module.exports = {
  successMsg,
  errorMsg,
};
