# Big Id CloudFormation Resource Types

This collection of [AWS CloudFormation resource types][1] allow BigID to be controlled using [AWS CloudFormation][2].

| Resource | Description | Documentation |
| --- | --- | --- |
| BigID::DataSource::DynamoDB | This resource type manages a [Big Id DynamoDB Data Source Configuration][3] | [/BigID-DataSource-DynamoDB][4] |
| BigID::Datasource::S3 | This resource type manages a [Big Id S3 Data Source Configuration][5] | [/BigID-DataSource-S3][6] |

## Prerequisites
* [AWS Account][14]
* [AWS CLI][15]
* [BigID account][16] and [Domain, Username and Password][17]
## AWS Management Console

To get started:

1. Sign in to the [AWS Management Console][11] with your account and navigate to CloudFormation.

2. Select "Public extensions" from the left hand pane and filter Publisher by "Third Party".

3. Use the search bar to filter by the "BigID" prefix.

  Note: All official  BigID resources begin with `BigID::` and specify that they are `Published by BigID`.

4. Select the desired resource name to view more information about its schema, and click **Activate**.

5. On the **Extension details** page, specify:
  - Extension name
  - Execution role ARN
  - Automatic updates for minor version releases
  - Configuration

6. In your terminal, specify the configuration data for the registered BigID CloudFormation resource type, in the given account and region by using the **SetTypeConfiguration** operation:


  For example:

  ```Bash
  $ aws cloudformation set-type-configuration \
  --region us-west-2 --type RESOURCE \
  --type-name BigID::DataSource::S3 \
  --configuration-alias default \
  --configuration "{ \"BigIdAccess\":{\"Domain\":\"https://api123.bigId.com\",\"Username\":\"User123\",\"Password\":\"Pass123\" }}"
  ```

7. After you have your resource configured, [create your AWS stack][12] that includes any of the activated BigID resources.

For more information about available commands and workflows, see the official [AWS documentation][13].

## Supported regions

The BigID CloudFormation resources are available on the CloudFormation Public Registry in the following regions:

| Code            | Name                      |
|-----------------|---------------------------|
| us-east-1       | US East (N. Virginia)     |
| us-east-2       | US East (Ohio)            |
| us-west-1       | US West (N. California)   |
| us-west-2       | US West (Oregon)          |
| ap-south-1      | Asia Pacific (Mumbai)     |
| ap-northeast-1  | Asia Pacific (Tokyo)      |
| ap-northeast-2  | Asia Pacific (Seoul)      |
| ap-southeast-1  | Asia Pacific (Singapore)  |
| ap-southeast-2  | Asia Pacific (Sydney)     |
| ca-central-1    | Canada (Central)          |
| eu-central-1    | Europe (Frankfurt)        |
| eu-west-1       | Europe (Ireland)          |
| eu-west-2       | Europe (London)           |
| eu-west-3       | Europe (Paris)            |
| eu-north-1      | Europe (Stockholm)        |
| sa-east-1       | South America (São Paulo) |

**Note**: To privately register a resource in any other region, use the provided packages.

## Examples
### Shows how to set S3 Data Source configuration in BigID.
```yaml
---
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to set S3 Data Source configuration in BigID.
Resources:
  AgentConfigurationSample:
    Type: BigID::DataSource::S3
    Properties:
        ParquetFileRegex: *
        Name: CTv2TestName
        AwsAuthenticationType: isCredentialsAuth
        AwsAccessKey: 123abc
        AwsSecretKey: 123abc
        AwsRegion: eu-west-2
        FolderToScan: /
        IncludeExcludeFiles: true
        ScannerGroup: default
        CustomFields: 
          - Name: Username
            Value: Foo
            Type: clear
          - Name: Password
            Value: Bar
            Type: encrypted
        BusinessOwners: 
          - Id: john@acme.com
            Origin: local
            Email: john@acme.com
        Location: France
        SecurityTier: 1
        SamplePercentage: 10
        ScanWindowName: ScanWindow
        BucketName: Bukcet
        FriendlyName: Hello
        Description: Hello
        NumberOfParsingThreads: 5
        OcrTimeout: 60
        XLastDays: 7
```


[1]: https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html
[2]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
[3]: https://developer.bigid.com/wiki/BigID_API/Add_Data_Source_Tutorial
[4]: ./BigID-DataSource-DynamoDB/
[5]: https://developer.bigid.com/wiki/BigID_API/Add_Data_Source_Tutorial
[6]: ./BigID-DataSource-S3/
[11]: https://aws.amazon.com/console/
[12]: https://console.aws.amazon.com/cloudformation/home
[13]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html
[14]: https://aws.amazon.com/account/
[15]: https://aws.amazon.com/cli/
[16]: https://bigid.com/
[17]: https://developer.bigid.com/wiki/BigID_API/API_Tutorial#User_Authentication