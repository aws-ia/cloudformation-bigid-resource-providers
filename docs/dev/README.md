# cloudformation-bigid

## Set up local type configuration

This project uses the CloudFormation type configuration (JSON) to set the credentials used to communicate with the BigID API.

This type configuration should have the following schema:
```json
{
  "BigIdAccess": {
    "Domain": "<DOMAIN eg. 0-2345.mybigid.com>",
    "Username": "<USERNAME>",
    "Password": "<PASSWORD>"
  }
}
```

To run the contract tests locally, you will need this type configuration to be saved into the file `~/.cfn-cli/typeConfiguration.json`