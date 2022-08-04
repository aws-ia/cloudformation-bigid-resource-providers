# BigID::DataSource::DynamoDB Connection

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#id" title="Id">Id</a>" : <i>String</i>,
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Boolean</i>,
    "<a href="#friendlyname" title="FriendlyName">FriendlyName</a>" : <i>String</i>,
    "<a href="#description" title="Description">Description</a>" : <i>String</i>,
    "<a href="#authenticationmethod" title="AuthenticationMethod">AuthenticationMethod</a>" : <i>String</i>,
    "<a href="#awsaccesskey" title="AwsAccessKey">AwsAccessKey</a>" : <i>String</i>,
    "<a href="#awssecretkey" title="AwsSecretKey">AwsSecretKey</a>" : <i>String</i>,
    "<a href="#awssessiontoken" title="AwsSessionToken">AwsSessionToken</a>" : <i>String</i>,
    "<a href="#credentialid" title="CredentialId">CredentialId</a>" : <i>String</i>,
    "<a href="#dynamodbtablenames" title="DynamodbTableNames">DynamodbTableNames</a>" : <i>[ String, ... ]</i>,
    "<a href="#awsregion" title="AwsRegion">AwsRegion</a>" : <i>String</i>,
    "<a href="#scannergroup" title="ScannerGroup">ScannerGroup</a>" : <i>String</i>,
    "<a href="#testconnectiontimeoutinseconds" title="TestConnectionTimeoutInSeconds">TestConnectionTimeoutInSeconds</a>" : <i>Double</i>,
    "<a href="#customfields" title="CustomFields">CustomFields</a>" : <i>[ <a href="customfield.md">CustomField</a>, ... ]</i>,
    "<a href="#businessowners" title="BusinessOwners">BusinessOwners</a>" : <i>[ <a href="user.md">User</a>, ... ]</i>,
    "<a href="#itowners" title="ItOwners">ItOwners</a>" : <i>[ <a href="user.md">User</a>, ... ]</i>,
    "<a href="#location" title="Location">Location</a>" : <i>String</i>,
    "<a href="#scope" title="Scope">Scope</a>" : <i>String</i>,
    "<a href="#securitytier" title="SecurityTier">SecurityTier</a>" : <i>String</i>,
    "<a href="#comments" title="Comments">Comments</a>" : <i>String</i>,
    "<a href="#scantimeoutinseconds" title="ScanTimeoutInSeconds">ScanTimeoutInSeconds</a>" : <i>Double</i>,
    "<a href="#numberofparsingthreads" title="NumberOfParsingThreads">NumberOfParsingThreads</a>" : <i>String</i>,
    "<a href="#enablestructuredclustering" title="EnableStructuredClustering">EnableStructuredClustering</a>" : <i>Boolean</i>,
    "<a href="#enableclassifiers" title="EnableClassifiers">EnableClassifiers</a>" : <i>Boolean</i>,
    "<a href="#samplescanonly" title="SampleScanOnly">SampleScanOnly</a>" : <i>Boolean</i>,
    "<a href="#enableadvanceclassifiers" title="EnableAdvanceClassifiers">EnableAdvanceClassifiers</a>" : <i>Boolean</i>,
    "<a href="#rdbsampledatamaxsize" title="RdbSampleDataMaxSize">RdbSampleDataMaxSize</a>" : <i>String</i>,
    "<a href="#scanwindowname" title="ScanWindowName">ScanWindowName</a>" : <i>String</i>,
    "<a href="#iscorrelationsetsupported" title="IsCorrelationSetSupported">IsCorrelationSetSupported</a>" : <i>Boolean</i>
}
</pre>

### YAML

<pre>
<a href="#id" title="Id">Id</a>: <i>String</i>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#enabled" title="Enabled">Enabled</a>: <i>Boolean</i>
<a href="#friendlyname" title="FriendlyName">FriendlyName</a>: <i>String</i>
<a href="#description" title="Description">Description</a>: <i>String</i>
<a href="#authenticationmethod" title="AuthenticationMethod">AuthenticationMethod</a>: <i>String</i>
<a href="#awsaccesskey" title="AwsAccessKey">AwsAccessKey</a>: <i>String</i>
<a href="#awssecretkey" title="AwsSecretKey">AwsSecretKey</a>: <i>String</i>
<a href="#awssessiontoken" title="AwsSessionToken">AwsSessionToken</a>: <i>String</i>
<a href="#credentialid" title="CredentialId">CredentialId</a>: <i>String</i>
<a href="#dynamodbtablenames" title="DynamodbTableNames">DynamodbTableNames</a>: <i>
      - String</i>
<a href="#awsregion" title="AwsRegion">AwsRegion</a>: <i>String</i>
<a href="#scannergroup" title="ScannerGroup">ScannerGroup</a>: <i>String</i>
<a href="#testconnectiontimeoutinseconds" title="TestConnectionTimeoutInSeconds">TestConnectionTimeoutInSeconds</a>: <i>Double</i>
<a href="#customfields" title="CustomFields">CustomFields</a>: <i>
      - <a href="customfield.md">CustomField</a></i>
<a href="#businessowners" title="BusinessOwners">BusinessOwners</a>: <i>
      - <a href="user.md">User</a></i>
<a href="#itowners" title="ItOwners">ItOwners</a>: <i>
      - <a href="user.md">User</a></i>
<a href="#location" title="Location">Location</a>: <i>String</i>
<a href="#scope" title="Scope">Scope</a>: <i>String</i>
<a href="#securitytier" title="SecurityTier">SecurityTier</a>: <i>String</i>
<a href="#comments" title="Comments">Comments</a>: <i>String</i>
<a href="#scantimeoutinseconds" title="ScanTimeoutInSeconds">ScanTimeoutInSeconds</a>: <i>Double</i>
<a href="#numberofparsingthreads" title="NumberOfParsingThreads">NumberOfParsingThreads</a>: <i>String</i>
<a href="#enablestructuredclustering" title="EnableStructuredClustering">EnableStructuredClustering</a>: <i>Boolean</i>
<a href="#enableclassifiers" title="EnableClassifiers">EnableClassifiers</a>: <i>Boolean</i>
<a href="#samplescanonly" title="SampleScanOnly">SampleScanOnly</a>: <i>Boolean</i>
<a href="#enableadvanceclassifiers" title="EnableAdvanceClassifiers">EnableAdvanceClassifiers</a>: <i>Boolean</i>
<a href="#rdbsampledatamaxsize" title="RdbSampleDataMaxSize">RdbSampleDataMaxSize</a>: <i>String</i>
<a href="#scanwindowname" title="ScanWindowName">ScanWindowName</a>: <i>String</i>
<a href="#iscorrelationsetsupported" title="IsCorrelationSetSupported">IsCorrelationSetSupported</a>: <i>Boolean</i>
</pre>

## Properties

#### Id

Connection Id

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

Type data source name.

_Required_: No

_Type_: String

_Pattern_: <code>^[\w\-\s\(\):]+$</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Enabled

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FriendlyName

Type data source friendly Name

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

Add a short description (optional)

_Required_: No

_Type_: String

_Maximum_: <code>100</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AuthenticationMethod

Authentication Method

_Required_: No

_Type_: String

_Allowed Values_: <code>Default</code> | <code>BigID</code> | <code>IAMRole</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AwsAccessKey

AWS Access Key (only used when "AuthenticationMethod" is set to "Default")

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AwsSecretKey

AWS Secret Key (only used when "AuthenticationMethod" is set to "Default")

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AwsSessionToken

AWS Session Token (only used when "AuthenticationMethod" is set to "Default")

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CredentialId

Credential to use to connect to DynamoDB (only used when "AuthenticationMethod" is set to "BigID")

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DynamodbTableNames

Table Name(s) (Example: table1,table2)

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AwsRegion

AWS Region. Example: us-west-2. If empty, search buckets in all regions

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ScannerGroup

This data source will be scanned only by scanner instances that are included under this Scanner Group. Used primarily when remote scans are configured.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TestConnectionTimeoutInSeconds

Test Connection Timeout

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CustomFields

_Required_: No

_Type_: List of <a href="customfield.md">CustomField</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BusinessOwners

_Required_: No

_Type_: List of <a href="user.md">User</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ItOwners

_Required_: No

_Type_: List of <a href="user.md">User</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Location

Select the country, state, province or territory where the Data Source is located.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Scope

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SecurityTier

Security Tier

_Required_: No

_Type_: String

_Allowed Values_: <code>1</code> | <code>2</code> | <code>3</code> | <code>4</code> | <code>5</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Comments

_Required_: No

_Type_: String

_Maximum_: <code>150</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ScanTimeoutInSeconds

Scan Connection Timeout

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NumberOfParsingThreads

Number of Threads

_Required_: No

_Type_: String

_Pattern_: <code>^[0-9]*$</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EnableStructuredClustering

Enable Structured Clustering

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EnableClassifiers

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SampleScanOnly

Sample Scan Only

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EnableAdvanceClassifiers

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RdbSampleDataMaxSize

Sample Scan Data Max Size (Default 100000 - Only used when "SampleScanOnly" is set to "true")

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ScanWindowName

Scannable Window

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IsCorrelationSetSupported

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

