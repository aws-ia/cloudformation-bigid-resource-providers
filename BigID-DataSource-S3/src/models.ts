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
    @Expose({ name: 'Owners' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'owners', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    owners?: Optional<Set<string>>;
    @Expose({ name: 'Differential' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'differential', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    differential?: Optional<boolean>;
    @Expose({ name: 'NumberOfParsingThreads' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'numberOfParsingThreads', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    numberOfParsingThreads?: Optional<string>;
    @Expose({ name: 'RdbIsSampleData' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'rdbIsSampleData', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rdbIsSampleData?: Optional<boolean>;
    @Expose({ name: 'IncludeFileTypes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'includeFileTypes', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    includeFileTypes?: Optional<boolean>;
    @Expose({ name: 'Password' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'password', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    password?: Optional<string>;
    @Expose({ name: 'MetadataAclScanEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'metadataAclScanEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    metadataAclScanEnabled?: Optional<string>;
    @Expose({ name: 'DsAclScanEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dsAclScanEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dsAclScanEnabled?: Optional<string>;
    @Expose({ name: 'IsStsAuth' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isStsAuth', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isStsAuth?: Optional<boolean>;
    @Expose({ name: 'IsCrossaccountAuth' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isCrossaccountAuth', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isCrossaccountAuth?: Optional<boolean>;
    @Expose({ name: 'IsIamroleAuth' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isIamroleAuth', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isIamroleAuth?: Optional<boolean>;
    @Expose({ name: 'IsAnonymousAuth' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isAnonymousAuth', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isAnonymousAuth?: Optional<boolean>;
    @Expose({ name: 'IsCredentialsAuth' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isCredentialsAuth', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isCredentialsAuth?: Optional<boolean>;
    @Expose({ name: 'SecurityTier' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'securityTier', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    securityTier?: Optional<string>;
    @Expose({ name: 'OcrLanguages' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'ocrLanguages', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ocrLanguages?: Optional<string>;
    @Expose({ name: 'ScannerStrategy' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'scannerStrategy', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scannerStrategy?: Optional<string>;
    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<string>;
    @Expose({ name: 'CredentialId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'credentialId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    credentialId?: Optional<string>;
    @Expose({ name: 'CertificateId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'certificateId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    certificateId?: Optional<string>;
    @Expose({ name: 'CustomFields' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'customFields', value, obj, [Set, Map]),
        {
            toClassOnly: true,
        }
    )
    customFields?: Optional<Set<Map<string, object>>>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'ConnectionResponse' })
    @Type(() => ConnectionResponse)
    connectionResponse?: Optional<ConnectionResponse>;

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

export class ConnectionResponse extends BaseModel {
    ['constructor']: typeof ConnectionResponse;


    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Owners' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'owners', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    owners?: Optional<Set<string>>;
    @Expose({ name: 'Differential' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'differential', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    differential?: Optional<boolean>;
    @Expose({ name: 'NumberOfParsingThreads' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'numberOfParsingThreads', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    numberOfParsingThreads?: Optional<string>;
    @Expose({ name: 'RdbIsSampleData' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'rdbIsSampleData', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rdbIsSampleData?: Optional<boolean>;
    @Expose({ name: 'IncludeFileTypes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'includeFileTypes', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    includeFileTypes?: Optional<boolean>;
    @Expose({ name: 'Password' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'password', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    password?: Optional<string>;
    @Expose({ name: 'MetadataAclScanEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'metadataAclScanEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    metadataAclScanEnabled?: Optional<string>;
    @Expose({ name: 'DsAclScanEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dsAclScanEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dsAclScanEnabled?: Optional<string>;
    @Expose({ name: 'IsStsAuth' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isStsAuth', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isStsAuth?: Optional<boolean>;
    @Expose({ name: 'IsCrossaccountAuth' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isCrossaccountAuth', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isCrossaccountAuth?: Optional<boolean>;
    @Expose({ name: 'IsIamroleAuth' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isIamroleAuth', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isIamroleAuth?: Optional<boolean>;
    @Expose({ name: 'IsAnonymousAuth' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isAnonymousAuth', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isAnonymousAuth?: Optional<boolean>;
    @Expose({ name: 'IsCredentialsAuth' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isCredentialsAuth', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isCredentialsAuth?: Optional<boolean>;
    @Expose({ name: 'SecurityTier' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'securityTier', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    securityTier?: Optional<string>;
    @Expose({ name: 'OcrLanguages' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'ocrLanguages', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ocrLanguages?: Optional<string>;
    @Expose({ name: 'ScannerStrategy' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'scannerStrategy', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scannerStrategy?: Optional<string>;
    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<string>;
    @Expose({ name: 'CredentialId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'credentialId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    credentialId?: Optional<string>;
    @Expose({ name: 'CertificateId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'certificateId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    certificateId?: Optional<string>;
    @Expose({ name: 'CustomFields' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'customFields', value, obj, [Set, Map]),
        {
            toClassOnly: true,
        }
    )
    customFields?: Optional<Set<Map<string, object>>>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;

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

