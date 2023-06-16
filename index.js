const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "<userpool_id>";


const getUserEmail = async (event) => {
  const params = {
    UserPoolId: USER_POOL_ID,
    Username: event.identity.claims.username
  };
  const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === "email") {
      return attr.Value;
    }
  });
  return email;
};
