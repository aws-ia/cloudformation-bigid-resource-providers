// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'BigID::DataSource::DynamoDB';

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
    @Expose({ name: 'AuthenticationMethod' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'authenticationMethod', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    authenticationMethod?: Optional<string>;
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
    @Expose({ name: 'CredentialId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'credentialId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    credentialId?: Optional<string>;
    @Expose({ name: 'DynamodbTableNames' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dynamodbTableNames', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    dynamodbTableNames?: Optional<Array<string>>;
    @Expose({ name: 'AwsRegion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsRegion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsRegion?: Optional<string>;
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
    @Expose({ name: 'ScanTimeoutInSeconds' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'scanTimeoutInSeconds', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scanTimeoutInSeconds?: Optional<number>;
    @Expose({ name: 'NumberOfParsingThreads' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'numberOfParsingThreads', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    numberOfParsingThreads?: Optional<string>;
    @Expose({ name: 'EnableStructuredClustering' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableStructuredClustering', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableStructuredClustering?: Optional<boolean>;
    @Expose({ name: 'EnableClassifiers' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableClassifiers', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableClassifiers?: Optional<boolean>;
    @Expose({ name: 'SampleScanOnly' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'sampleScanOnly', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sampleScanOnly?: Optional<boolean>;
    @Expose({ name: 'EnableAdvanceClassifiers' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableAdvanceClassifiers', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableAdvanceClassifiers?: Optional<boolean>;
    @Expose({ name: 'RdbSampleDataMaxSize' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'rdbSampleDataMaxSize', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rdbSampleDataMaxSize?: Optional<string>;
    @Expose({ name: 'ScanWindowName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'scanWindowName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scanWindowName?: Optional<string>;
    @Expose({ name: 'IsCorrelationSetSupported' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isCorrelationSetSupported', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isCorrelationSetSupported?: Optional<boolean>;
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
    @Expose({ name: 'AuthenticationMethod' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'authenticationMethod', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    authenticationMethod?: Optional<string>;
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
    @Expose({ name: 'CredentialId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'credentialId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    credentialId?: Optional<string>;
    @Expose({ name: 'DynamodbTableNames' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dynamodbTableNames', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    dynamodbTableNames?: Optional<Array<string>>;
    @Expose({ name: 'AwsRegion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'awsRegion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    awsRegion?: Optional<string>;
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
    @Expose({ name: 'ScanTimeoutInSeconds' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'scanTimeoutInSeconds', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scanTimeoutInSeconds?: Optional<number>;
    @Expose({ name: 'NumberOfParsingThreads' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'numberOfParsingThreads', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    numberOfParsingThreads?: Optional<string>;
    @Expose({ name: 'EnableStructuredClustering' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableStructuredClustering', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableStructuredClustering?: Optional<boolean>;
    @Expose({ name: 'EnableClassifiers' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableClassifiers', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableClassifiers?: Optional<boolean>;
    @Expose({ name: 'SampleScanOnly' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'sampleScanOnly', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sampleScanOnly?: Optional<boolean>;
    @Expose({ name: 'EnableAdvanceClassifiers' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableAdvanceClassifiers', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableAdvanceClassifiers?: Optional<boolean>;
    @Expose({ name: 'RdbSampleDataMaxSize' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'rdbSampleDataMaxSize', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rdbSampleDataMaxSize?: Optional<string>;
    @Expose({ name: 'ScanWindowName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'scanWindowName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scanWindowName?: Optional<string>;
    @Expose({ name: 'IsCorrelationSetSupported' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isCorrelationSetSupported', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isCorrelationSetSupported?: Optional<boolean>;

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

