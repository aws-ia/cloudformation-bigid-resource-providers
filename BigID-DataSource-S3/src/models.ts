// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'BigID::DataSource::S3';

    @Exclude()
    protected readonly IDENTIFIER_KEY_NAME: string = '/properties/Name';

    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'FriendlyName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'friendlyName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    friendlyName?: Optional<string>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Owners' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'owners', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    owners?: Optional<Set<string>>;
    @Expose({ name: 'AwsAuthenticationType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsAuthenticationType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsAuthenticationType?: Optional<string>;
    @Expose({ name: 'AwsRoleSessionName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsRoleSessionName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsRoleSessionName?: Optional<string>;
    @Expose({ name: 'AwsRoleArn' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsRoleArn', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsRoleArn?: Optional<string>;
    @Expose({ name: 'AwsAccessKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsAccessKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsAccessKey?: Optional<string>;
    @Expose({ name: 'AwsSecretKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsSecretKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsSecretKey?: Optional<string>;
    @Expose({ name: 'AwsSessionToken' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsSessionToken', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsSessionToken?: Optional<string>;
    @Expose({ name: 'AwsRegion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsRegion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsRegion?: Optional<string>;
    @Expose({ name: 'BucketName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'bucketName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    bucketName?: Optional<string>;
    @Expose({ name: 'IncludeExcludeFiles' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'includeExcludeFiles', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    includeExcludeFiles?: Optional<boolean>;
    @Expose({ name: 'FileTypesToExclude' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'fileTypesToExclude', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    fileTypesToExclude?: Optional<string>;
    @Expose({ name: 'FolderToScan' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'folderToScan', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    folderToScan?: Optional<string>;
    @Expose({ name: 'ScannerGroup' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'scannerGroup', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scannerGroup?: Optional<string>;
    @Expose({ name: 'TestConnectionTimeoutInSeconds' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'testConnectionTimeoutInSeconds', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    testConnectionTimeoutInSeconds?: Optional<number>;
    @Expose({ name: 'CustomFields' })
    @Type(() => CustomField)
    customFields?: Optional<Array<CustomField>>;
    @Expose({ name: 'BusinessOwners' })
    @Type(() => User)
    businessOwners?: Optional<Array<User>>;
    @Expose({ name: 'ItOwners' })
    @Type(() => User)
    itOwners?: Optional<Array<User>>;
    @Expose({ name: 'Location' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'location', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    location?: Optional<string>;
    @Expose({ name: 'Scope' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'scope', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scope?: Optional<string>;
    @Expose({ name: 'SecurityTier' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'securityTier', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    securityTier?: Optional<string>;
    @Expose({ name: 'Comments' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'comments', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    comments?: Optional<string>;
    @Expose({ name: 'NumberOfParsingThreads' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'numberOfParsingThreads', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    numberOfParsingThreads?: Optional<string>;
    @Expose({ name: 'MetadataAclScanEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'metadataAclScanEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    metadataAclScanEnabled?: Optional<boolean>;
    @Expose({ name: 'DsAclScanEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'dsAclScanEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dsAclScanEnabled?: Optional<boolean>;
    @Expose({ name: 'EnabledOcr' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabledOcr', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabledOcr?: Optional<boolean>;
    @Expose({ name: 'OcrTimeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'ocrTimeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ocrTimeout?: Optional<number>;
    @Expose({ name: 'OcrLanguages' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'ocrLanguages', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ocrLanguages?: Optional<string>;
    @Expose({ name: 'EnableClustering' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableClustering', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableClustering?: Optional<boolean>;
    @Expose({ name: 'EnableClassifiers' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableClassifiers', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableClassifiers?: Optional<boolean>;
    @Expose({ name: 'EnableAdvanceClassifiers' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableAdvanceClassifiers', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableAdvanceClassifiers?: Optional<boolean>;
    @Expose({ name: 'SampleFolders' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'sampleFolders', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sampleFolders?: Optional<boolean>;
    @Expose({ name: 'SamplePercentage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'samplePercentage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    samplePercentage?: Optional<string>;
    @Expose({ name: 'SampleFileContent' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'sampleFileContent', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sampleFileContent?: Optional<boolean>;
    @Expose({ name: 'DifferentialScan' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'differentialScan', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    differentialScan?: Optional<boolean>;
    @Expose({ name: 'IsModifiedInXDays' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isModifiedInXDays', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isModifiedInXDays?: Optional<boolean>;
    @Expose({ name: 'XLastDays' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'xLastDays', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    xLastDays?: Optional<number>;
    @Expose({ name: 'ScanWindowName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'scanWindowName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scanWindowName?: Optional<string>;
    @Expose({ name: 'ParquetFileRegex' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'parquetFileRegex', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    parquetFileRegex?: Optional<string>;
    @Expose({ name: 'Connection' })
    @Type(() => Connection)
    connection?: Optional<Connection>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.name != null) {
            identifier[this.IDENTIFIER_KEY_NAME] = this.name;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class CustomField extends BaseModel {
    ['constructor']: typeof CustomField;


    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;

}

export class User extends BaseModel {
    ['constructor']: typeof User;


    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Origin' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'origin', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    origin?: Optional<string>;
    @Expose({ name: 'Email' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'email', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    email?: Optional<string>;

}

export class Connection extends BaseModel {
    ['constructor']: typeof Connection;


    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'FriendlyName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'friendlyName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    friendlyName?: Optional<string>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Owners' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'owners', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    owners?: Optional<Set<string>>;
    @Expose({ name: 'AwsAuthenticationType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsAuthenticationType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsAuthenticationType?: Optional<string>;
    @Expose({ name: 'AwsRoleSessionName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsRoleSessionName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsRoleSessionName?: Optional<string>;
    @Expose({ name: 'AwsRoleArn' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsRoleArn', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsRoleArn?: Optional<string>;
    @Expose({ name: 'AwsAccessKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsAccessKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsAccessKey?: Optional<string>;
    @Expose({ name: 'AwsSecretKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsSecretKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsSecretKey?: Optional<string>;
    @Expose({ name: 'AwsSessionToken' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsSessionToken', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsSessionToken?: Optional<string>;
    @Expose({ name: 'AwsRegion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsRegion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsRegion?: Optional<string>;
    @Expose({ name: 'BucketName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'bucketName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    bucketName?: Optional<string>;
    @Expose({ name: 'IncludeExcludeFiles' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'includeExcludeFiles', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    includeExcludeFiles?: Optional<boolean>;
    @Expose({ name: 'FileTypesToExclude' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'fileTypesToExclude', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    fileTypesToExclude?: Optional<string>;
    @Expose({ name: 'FolderToScan' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'folderToScan', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    folderToScan?: Optional<string>;
    @Expose({ name: 'ScannerGroup' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'scannerGroup', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scannerGroup?: Optional<string>;
    @Expose({ name: 'TestConnectionTimeoutInSeconds' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'testConnectionTimeoutInSeconds', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    testConnectionTimeoutInSeconds?: Optional<number>;
    @Expose({ name: 'CustomFields' })
    @Type(() => CustomField)
    customFields?: Optional<Array<CustomField>>;
    @Expose({ name: 'BusinessOwners' })
    @Type(() => User)
    businessOwners?: Optional<Array<User>>;
    @Expose({ name: 'ItOwners' })
    @Type(() => User)
    itOwners?: Optional<Array<User>>;
    @Expose({ name: 'Location' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'location', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    location?: Optional<string>;
    @Expose({ name: 'Scope' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'scope', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scope?: Optional<string>;
    @Expose({ name: 'SecurityTier' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'securityTier', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    securityTier?: Optional<string>;
    @Expose({ name: 'Comments' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'comments', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    comments?: Optional<string>;
    @Expose({ name: 'NumberOfParsingThreads' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'numberOfParsingThreads', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    numberOfParsingThreads?: Optional<string>;
    @Expose({ name: 'MetadataAclScanEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'metadataAclScanEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    metadataAclScanEnabled?: Optional<boolean>;
    @Expose({ name: 'DsAclScanEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'dsAclScanEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dsAclScanEnabled?: Optional<boolean>;
    @Expose({ name: 'EnabledOcr' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabledOcr', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabledOcr?: Optional<boolean>;
    @Expose({ name: 'OcrTimeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'ocrTimeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ocrTimeout?: Optional<number>;
    @Expose({ name: 'OcrLanguages' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'ocrLanguages', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ocrLanguages?: Optional<string>;
    @Expose({ name: 'EnableClustering' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableClustering', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableClustering?: Optional<boolean>;
    @Expose({ name: 'EnableClassifiers' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableClassifiers', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableClassifiers?: Optional<boolean>;
    @Expose({ name: 'EnableAdvanceClassifiers' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableAdvanceClassifiers', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableAdvanceClassifiers?: Optional<boolean>;
    @Expose({ name: 'SampleFolders' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'sampleFolders', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sampleFolders?: Optional<boolean>;
    @Expose({ name: 'SamplePercentage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'samplePercentage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    samplePercentage?: Optional<string>;
    @Expose({ name: 'SampleFileContent' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'sampleFileContent', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sampleFileContent?: Optional<boolean>;
    @Expose({ name: 'DifferentialScan' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'differentialScan', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    differentialScan?: Optional<boolean>;
    @Expose({ name: 'IsModifiedInXDays' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isModifiedInXDays', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isModifiedInXDays?: Optional<boolean>;
    @Expose({ name: 'XLastDays' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'xLastDays', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    xLastDays?: Optional<number>;
    @Expose({ name: 'ScanWindowName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'scanWindowName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scanWindowName?: Optional<string>;
    @Expose({ name: 'ParquetFileRegex' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'parquetFileRegex', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    parquetFileRegex?: Optional<string>;

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'BigIdAccess' })
    @Type(() => BigIdAccess)
    bigIdAccess?: Optional<BigIdAccess>;

}

export class BigIdAccess extends BaseModel {
    ['constructor']: typeof BigIdAccess;


    @Expose({ name: 'Domain' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'domain', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    domain?: Optional<string>;
    @Expose({ name: 'Username' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'username', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    username?: Optional<string>;
    @Expose({ name: 'Password' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'password', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    password?: Optional<string>;

}

