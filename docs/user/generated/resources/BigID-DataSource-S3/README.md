# BigID::DataSource::S3

Manage a BigID S3 data source

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "BigID::DataSource::S3",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Boolean</i>,
        "<a href="#friendlyname" title="FriendlyName">FriendlyName</a>" : <i>String</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#owners" title="Owners">Owners</a>" : <i>[ String, ... ]</i>,
        "<a href="#awsauthenticationtype" title="AwsAuthenticationType">AwsAuthenticationType</a>" : <i>String</i>,
        "<a href="#awsrolesessionname" title="AwsRoleSessionName">AwsRoleSessionName</a>" : <i>String</i>,
        "<a href="#awsrolearn" title="AwsRoleArn">AwsRoleArn</a>" : <i>String</i>,
        "<a href="#awsaccesskey" title="AwsAccessKey">AwsAccessKey</a>" : <i>String</i>,
        "<a href="#awssecretkey" title="AwsSecretKey">AwsSecretKey</a>" : <i>String</i>,
        "<a href="#awssessiontoken" title="AwsSessionToken">AwsSessionToken</a>" : <i>String</i>,
        "<a href="#awsregion" title="AwsRegion">AwsRegion</a>" : <i>String</i>,
        "<a href="#bucketname" title="BucketName">BucketName</a>" : <i>String</i>,
        "<a href="#includeexcludefiles" title="IncludeExcludeFiles">IncludeExcludeFiles</a>" : <i>Boolean</i>,
        "<a href="#filetypestoexclude" title="FileTypesToExclude">FileTypesToExclude</a>" : <i>String</i>,
        "<a href="#foldertoscan" title="FolderToScan">FolderToScan</a>" : <i>String</i>,
        "<a href="#scannergroup" title="ScannerGroup">ScannerGroup</a>" : <i>String</i>,
        "<a href="#testconnectiontimeoutinseconds" title="TestConnectionTimeoutInSeconds">TestConnectionTimeoutInSeconds</a>" : <i>Double</i>,
        "<a href="#customfields" title="CustomFields">CustomFields</a>" : <i>[ <a href="customfield.md">CustomField</a>, ... ]</i>,
        "<a href="#businessowners" title="BusinessOwners">BusinessOwners</a>" : <i>[ <a href="user.md">User</a>, ... ]</i>,
        "<a href="#itowners" title="ItOwners">ItOwners</a>" : <i>[ <a href="user.md">User</a>, ... ]</i>,
        "<a href="#location" title="Location">Location</a>" : <i>String</i>,
        "<a href="#scope" title="Scope">Scope</a>" : <i>String</i>,
        "<a href="#securitytier" title="SecurityTier">SecurityTier</a>" : <i>String</i>,
        "<a href="#comments" title="Comments">Comments</a>" : <i>String</i>,
        "<a href="#numberofparsingthreads" title="NumberOfParsingThreads">NumberOfParsingThreads</a>" : <i>String</i>,
        "<a href="#metadataaclscanenabled" title="MetadataAclScanEnabled">MetadataAclScanEnabled</a>" : <i>Boolean</i>,
        "<a href="#dsaclscanenabled" title="DsAclScanEnabled">DsAclScanEnabled</a>" : <i>Boolean</i>,
        "<a href="#enabledocr" title="EnabledOcr">EnabledOcr</a>" : <i>Boolean</i>,
        "<a href="#ocrtimeout" title="OcrTimeout">OcrTimeout</a>" : <i>Double</i>,
        "<a href="#ocrlanguages" title="OcrLanguages">OcrLanguages</a>" : <i>String</i>,
        "<a href="#enableclustering" title="EnableClustering">EnableClustering</a>" : <i>Boolean</i>,
        "<a href="#enableclassifiers" title="EnableClassifiers">EnableClassifiers</a>" : <i>Boolean</i>,
        "<a href="#enableadvanceclassifiers" title="EnableAdvanceClassifiers">EnableAdvanceClassifiers</a>" : <i>Boolean</i>,
        "<a href="#samplefolders" title="SampleFolders">SampleFolders</a>" : <i>Boolean</i>,
        "<a href="#samplepercentage" title="SamplePercentage">SamplePercentage</a>" : <i>String</i>,
        "<a href="#samplefilecontent" title="SampleFileContent">SampleFileContent</a>" : <i>Boolean</i>,
        "<a href="#differentialscan" title="DifferentialScan">DifferentialScan</a>" : <i>Boolean</i>,
        "<a href="#ismodifiedinxdays" title="IsModifiedInXDays">IsModifiedInXDays</a>" : <i>Boolean</i>,
        "<a href="#xlastdays" title="XLastDays">XLastDays</a>" : <i>Double</i>,
        "<a href="#scanwindowname" title="ScanWindowName">ScanWindowName</a>" : <i>String</i>,
        "<a href="#parquetfileregex" title="ParquetFileRegex">ParquetFileRegex</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: BigID::DataSource::S3
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#enabled" title="Enabled">Enabled</a>: <i>Boolean</i>
    <a href="#friendlyname" title="FriendlyName">FriendlyName</a>: <i>String</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#owners" title="Owners">Owners</a>: <i>
      - String</i>
    <a href="#awsauthenticationtype" title="AwsAuthenticationType">AwsAuthenticationType</a>: <i>String</i>
    <a href="#awsrolesessionname" title="AwsRoleSessionName">AwsRoleSessionName</a>: <i>String</i>
    <a href="#awsrolearn" title="AwsRoleArn">AwsRoleArn</a>: <i>String</i>
    <a href="#awsaccesskey" title="AwsAccessKey">AwsAccessKey</a>: <i>String</i>
    <a href="#awssecretkey" title="AwsSecretKey">AwsSecretKey</a>: <i>String</i>
    <a href="#awssessiontoken" title="AwsSessionToken">AwsSessionToken</a>: <i>String</i>
    <a href="#awsregion" title="AwsRegion">AwsRegion</a>: <i>String</i>
    <a href="#bucketname" title="BucketName">BucketName</a>: <i>String</i>
    <a href="#includeexcludefiles" title="IncludeExcludeFiles">IncludeExcludeFiles</a>: <i>Boolean</i>
    <a href="#filetypestoexclude" title="FileTypesToExclude">FileTypesToExclude</a>: <i>String</i>
    <a href="#foldertoscan" title="FolderToScan">FolderToScan</a>: <i>String</i>
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
    <a href="#numberofparsingthreads" title="NumberOfParsingThreads">NumberOfParsingThreads</a>: <i>String</i>
    <a href="#metadataaclscanenabled" title="MetadataAclScanEnabled">MetadataAclScanEnabled</a>: <i>Boolean</i>
    <a href="#dsaclscanenabled" title="DsAclScanEnabled">DsAclScanEnabled</a>: <i>Boolean</i>
    <a href="#enabledocr" title="EnabledOcr">EnabledOcr</a>: <i>Boolean</i>
    <a href="#ocrtimeout" title="OcrTimeout">OcrTimeout</a>: <i>Double</i>
    <a href="#ocrlanguages" title="OcrLanguages">OcrLanguages</a>: <i>String</i>
    <a href="#enableclustering" title="EnableClustering">EnableClustering</a>: <i>Boolean</i>
    <a href="#enableclassifiers" title="EnableClassifiers">EnableClassifiers</a>: <i>Boolean</i>
    <a href="#enableadvanceclassifiers" title="EnableAdvanceClassifiers">EnableAdvanceClassifiers</a>: <i>Boolean</i>
    <a href="#samplefolders" title="SampleFolders">SampleFolders</a>: <i>Boolean</i>
    <a href="#samplepercentage" title="SamplePercentage">SamplePercentage</a>: <i>String</i>
    <a href="#samplefilecontent" title="SampleFileContent">SampleFileContent</a>: <i>Boolean</i>
    <a href="#differentialscan" title="DifferentialScan">DifferentialScan</a>: <i>Boolean</i>
    <a href="#ismodifiedinxdays" title="IsModifiedInXDays">IsModifiedInXDays</a>: <i>Boolean</i>
    <a href="#xlastdays" title="XLastDays">XLastDays</a>: <i>Double</i>
    <a href="#scanwindowname" title="ScanWindowName">ScanWindowName</a>: <i>String</i>
    <a href="#parquetfileregex" title="ParquetFileRegex">ParquetFileRegex</a>: <i>String</i>
</pre>

## Properties

#### Name

Type data source name.

_Required_: Yes

_Type_: String

_Pattern_: <code>^[\w\-\s\(\):]+$</code>

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

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

#### Owners

owners

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AwsAuthenticationType

AWS Authentication Type

_Required_: No

_Type_: String

_Allowed Values_: <code>isCredentialsAuth</code> | <code>isIamRoleAuth</code> | <code>isAnonymousAuth</code> | <code>isCrossAccountAuth</code> | <code>isSTSAuth</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AwsRoleSessionName

Aws Role Session Name. Leave blank for default (only used when the "AwsAuthenticationType" is set to "isCrossAccountAuth")

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AwsRoleArn

Aws Role Arn (only used when the "AwsAuthenticationType" is set to "isCrossAccountAuth")

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AwsAccessKey

AWS Access Key (only used when the "AwsAuthenticationType" is set to "isSTSAuth" or "isCredentialsAuth")

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AwsSecretKey

AWS Secret Key (only used when the "AwsAuthenticationType" is set to "isSTSAuth" or "isCredentialsAuth")

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AwsSessionToken

AWS Session Token (only used when the "AwsAuthenticationType" is set to "isSTSAuth")

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AwsRegion

AWS Region. Example: us-west-2. If empty, search buckets in all regions

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BucketName

Bucket name

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IncludeExcludeFiles

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FileTypesToExclude

File Type(s). Example: type1,type2,type3

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FolderToScan

Folder to Scan

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

Custom Parameters

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

#### NumberOfParsingThreads

Number of Threads

_Required_: No

_Type_: String

_Pattern_: <code>^[0-9]*$</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MetadataAclScanEnabled

Will enable ACL for both Data Source and enumdata scans

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DsAclScanEnabled

Will enable ACL for both Data Source and Metadata scans

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EnabledOcr

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OcrTimeout

OCR Timeout in Seconds (only used when "EnabledOcr" is set to "true")

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OcrLanguages

OCR Languages (only used when "EnabledOcr" is set to "true")

_Required_: No

_Type_: String

_Allowed Values_: <code>eng</code> | <code>chi_sim+chi_tra</code> | <code>ind</code> | <code>jpn</code> | <code>kor</code> | <code>tha</code> | <code>vie</code> | <code>deu</code> | <code>fra</code> | <code>bul</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EnableClustering

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EnableClassifiers

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EnableAdvanceClassifiers

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SampleFolders

Sample Files within Folders

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SamplePercentage

Sample Percentage. Example: 20, for scanning 20% of the folder (used only when "SampleFolders" is set to "true")

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SampleFileContent

Sample File Content

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DifferentialScan

For structured data sources, new objects or objects with structural changes (e.g., new columns) will be scanned.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IsModifiedInXDays

Used only when "DifferentialScan" is set to "true"

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### XLastDays

Used only when "DifferentialScan" and "IsModifiedInXDays" is set to "true"

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ScanWindowName

Scannable Window

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ParquetFileRegex

Parquet File Regex. (Use regex to identify which parquet files will be scanned.)

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Name.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Connection

Returns the <code>Connection</code> value.

