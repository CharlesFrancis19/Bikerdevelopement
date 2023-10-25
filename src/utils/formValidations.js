var formValidations = {
  validateMobile: function (value) {
    let error;
    var wrg_num = [
      "9999999999",
      "9090909090",
      "8989898989",
      "9898989898",
      "7878787878",
      "6767676767",
      "8888888888",
      "9876543210",
      "6868688668",
      "9999999998",
      "9999999988",
      "9999998888",
      "7777777777",
      "6666666666",
      "9090909998",
      "6868686868",
      "6666677777",
      "9696966999",
    ];
    if (value.length == 10 && wrg_num.includes(value)) {
      error = "Please enter a valid mobile number";
      return error;
    }
    if (value.length == 10 && value < 6000000000) {
      error = "Please enter a valid mobile number";
      return error;
    } else if (value.length < 10) {
      return "Please enter a valid mobile number";
    } else {
      return "";
    }
  },

  validateEmail: async function (value) {
    let error;

    if (!value) {
      error = {
        msg: "Please enter your email address",
        status: "error",
      };
      return error;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,12}$/i.test(value)) {
      error = {
        msg: "Please enter a valid email address",
        status: "error",
      };
      return error;
    } else {
      return error;
    }
  },
};
export default formValidations;
