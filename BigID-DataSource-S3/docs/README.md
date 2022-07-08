# BigID::DataSource::S3

An example resource schema demonstrating some basic constructs and validation rules.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "BigID::DataSource::S3",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#owners" title="Owners">Owners</a>" : <i>[ String, ... ]</i>,
        "<a href="#differential" title="Differential">Differential</a>" : <i>Boolean</i>,
        "<a href="#numberofparsingthreads" title="NumberOfParsingThreads">NumberOfParsingThreads</a>" : <i>String</i>,
        "<a href="#rdbissampledata" title="RdbIsSampleData">RdbIsSampleData</a>" : <i>Boolean</i>,
        "<a href="#includefiletypes" title="IncludeFileTypes">IncludeFileTypes</a>" : <i>Boolean</i>,
        "<a href="#password" title="Password">Password</a>" : <i>String</i>,
        "<a href="#metadataaclscanenabled" title="MetadataAclScanEnabled">MetadataAclScanEnabled</a>" : <i>String</i>,
        "<a href="#dsaclscanenabled" title="DsAclScanEnabled">DsAclScanEnabled</a>" : <i>String</i>,
        "<a href="#isstsauth" title="IsStsAuth">IsStsAuth</a>" : <i>Boolean</i>,
        "<a href="#iscrossaccountauth" title="IsCrossaccountAuth">IsCrossaccountAuth</a>" : <i>Boolean</i>,
        "<a href="#isiamroleauth" title="IsIamroleAuth">IsIamroleAuth</a>" : <i>Boolean</i>,
        "<a href="#isanonymousauth" title="IsAnonymousAuth">IsAnonymousAuth</a>" : <i>Boolean</i>,
        "<a href="#iscredentialsauth" title="IsCredentialsAuth">IsCredentialsAuth</a>" : <i>Boolean</i>,
        "<a href="#securitytier" title="SecurityTier">SecurityTier</a>" : <i>String</i>,
        "<a href="#ocrlanguages" title="OcrLanguages">OcrLanguages</a>" : <i>String</i>,
        "<a href="#scannerstrategy" title="ScannerStrategy">ScannerStrategy</a>" : <i>String</i>,
        "<a href="#enabled" title="Enabled">Enabled</a>" : <i>String</i>,
        "<a href="#credentialid" title="CredentialId">CredentialId</a>" : <i>String</i>,
        "<a href="#certificateid" title="CertificateId">CertificateId</a>" : <i>String</i>,
        "<a href="#customfields" title="CustomFields">CustomFields</a>" : <i>[ Map, ... ]</i>,
        "<a href="#connectionresponse" title="ConnectionResponse">ConnectionResponse</a>" : <i><a href="connectionresponse.md">ConnectionResponse</a></i>
    }
}
</pre>

### YAML

<pre>
Type: BigID::DataSource::S3
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#owners" title="Owners">Owners</a>: <i>
      - String</i>
    <a href="#differential" title="Differential">Differential</a>: <i>Boolean</i>
    <a href="#numberofparsingthreads" title="NumberOfParsingThreads">NumberOfParsingThreads</a>: <i>String</i>
    <a href="#rdbissampledata" title="RdbIsSampleData">RdbIsSampleData</a>: <i>Boolean</i>
    <a href="#includefiletypes" title="IncludeFileTypes">IncludeFileTypes</a>: <i>Boolean</i>
    <a href="#password" title="Password">Password</a>: <i>String</i>
    <a href="#metadataaclscanenabled" title="MetadataAclScanEnabled">MetadataAclScanEnabled</a>: <i>String</i>
    <a href="#dsaclscanenabled" title="DsAclScanEnabled">DsAclScanEnabled</a>: <i>String</i>
    <a href="#isstsauth" title="IsStsAuth">IsStsAuth</a>: <i>Boolean</i>
    <a href="#iscrossaccountauth" title="IsCrossaccountAuth">IsCrossaccountAuth</a>: <i>Boolean</i>
    <a href="#isiamroleauth" title="IsIamroleAuth">IsIamroleAuth</a>: <i>Boolean</i>
    <a href="#isanonymousauth" title="IsAnonymousAuth">IsAnonymousAuth</a>: <i>Boolean</i>
    <a href="#iscredentialsauth" title="IsCredentialsAuth">IsCredentialsAuth</a>: <i>Boolean</i>
    <a href="#securitytier" title="SecurityTier">SecurityTier</a>: <i>String</i>
    <a href="#ocrlanguages" title="OcrLanguages">OcrLanguages</a>: <i>String</i>
    <a href="#scannerstrategy" title="ScannerStrategy">ScannerStrategy</a>: <i>String</i>
    <a href="#enabled" title="Enabled">Enabled</a>: <i>String</i>
    <a href="#credentialid" title="CredentialId">CredentialId</a>: <i>String</i>
    <a href="#certificateid" title="CertificateId">CertificateId</a>: <i>String</i>
    <a href="#customfields" title="CustomFields">CustomFields</a>: <i>
      - Map</i>
    <a href="#connectionresponse" title="ConnectionResponse">ConnectionResponse</a>: <i><a href="connectionresponse.md">ConnectionResponse</a></i>
</pre>

## Properties

#### Name

A TPS Code is automatically generated on creation and assigned as the unique identifier.

_Required_: Yes

_Type_: String

_Pattern_: <code>^[\w\-\s\(\):]+$</code>

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Owners

owners

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Differential

Differential Scan

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NumberOfParsingThreads

Number of Threads

_Required_: No

_Type_: String

_Pattern_: <code>^[0-9]*$</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RdbIsSampleData

Sample Scan Only

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IncludeFileTypes

includeExcludeFiles

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Password

AWS Secret Key

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MetadataAclScanEnabled

Will enable ACL for both Data Source and enumdata scans

_Required_: No

_Type_: String

_Allowed Values_: <code>true</code> | <code>false</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DsAclScanEnabled

Will enable ACL for both Data Source and Metadata scans

_Required_: No

_Type_: String

_Allowed Values_: <code>true</code> | <code>false</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IsStsAuth

AWS Authentication Type

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IsCrossaccountAuth

AWS Authentication Type

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IsIamroleAuth

AWS Authentication Type

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IsAnonymousAuth

AWS Authentication Type

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IsCredentialsAuth

AWS Authentication Type

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SecurityTier

Security Tier

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OcrLanguages

_Required_: No

_Type_: String

_Allowed Values_: <code>eng</code> | <code>chi_sim+chi_tra</code> | <code>ind</code> | <code>jpn</code> | <code>kor</code> | <code>tha</code> | <code>vie</code> | <code>deu</code> | <code>fra</code> | <code>bul</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ScannerStrategy

scan_all

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Enabled

_Required_: No

_Type_: String

_Allowed Values_: <code>yes</code> | <code>no</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CredentialId

Credentials ID

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CertificateId

Credentials ID

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CustomFields

_Required_: No

_Type_: List of Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ConnectionResponse

Response returned from BigId

_Required_: No

_Type_: <a href="connectionresponse.md">ConnectionResponse</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Name.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

Connection Id

#### Connection

Returns the <code>Connection</code> value.

