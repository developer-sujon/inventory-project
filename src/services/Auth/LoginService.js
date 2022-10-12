//Internal Lib Import
const CreateToken = require("../../utility/CreateToken");
const { CreateError } = require("../../helper/ErrorHandler");
const { VerifyPassword } = require("../../utility/BcryptHelper");

const LoginService = async (Request, DataModel) => {
  const { Email, Password } = Request.body;

  if (!Email || !Password) {
    throw CreateError("Invalid Data", 400);
  }
  const User = await DataModel.aggregate([{ $match: { Email } }]);

  if (!User.length > 0) {
    throw CreateError("User Not found", 404);
  }

  const userActive = await DataModel.aggregate([
    {
      $match: { Email: Email, AccountStatus: "PENDING" },
    },
  ]);

  if (userActive.length > 0) {
    throw CreateError("Your Account Not Active", 401);
  }

  const userBlock = await DataModel.aggregate([
    {
      $match: { Email: Email, AccountStatus: "REJECTED" },
    },
  ]);

  if (userBlock.length > 0) {
    throw CreateError("Your Account Rejected", 401);
  }

  const verifyPassword = await VerifyPassword(Password, User[0].Password);
  if (!verifyPassword) {
    throw CreateError("Unauthorized Credentials", 401);
  }

  const payLoad = {
    id: User[0]._id,
  };

  delete User[0].Password;

  const token = await CreateToken(payLoad);

  return { accessToken: token, userDetails: User[0] };
};

module.exports = LoginService;
