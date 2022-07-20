import {Connection, CustomField, ResourceModel, TypeConfigurationModel, User} from './models';
import {AbstractBigIdDatasourceResource} from "../../BigID-Common/src/abstract-bigid-datasource-resource"
import {BigIdClient} from "../../BigID-Common/src/bigid-client"

type StringBoolean = 'true' | 'false'

type SecurityTierPayload = '1' | '2' | '3' | '4' | '5'

type CustomFieldPayload = {
    field_name: string;
    field_value: string;
    field_type: string;
}

type UserPayload = {
    id: string
    origin: string
    email: string | null
    type: 'business' | 'it'
}

type ConnectionPayload = {
    id?: string
    type: 's3'
    parquetFileRegex: string
    name: string
    enabled: 'yes' | 'no'
    friendly_name: string
    description: string
    isCredentialsAuth?: boolean
    isIamRoleAuth?: boolean
    isAnonymousAuth?: boolean
    isCrossAccountAuth?: boolean
    isSTSAuth?: boolean
    aws_role_session_name: string
    aws_role_arn: string
    aws_access_key: string
    aws_secret_key: string
    aws_session_token: string
    aws_region: string
    bucket_name: string
    include_file_types: boolean
    fileTypesToExclude: string
    folder_to_scan: string
    scanner_group: string
    testConnectionTimeoutInSeconds: number
    custom_fields: CustomFieldPayload[]
    owners: string[]
    owners_v2: UserPayload[]
    location: string
    scope: string
    security_tier: SecurityTierPayload
    comment: string
    numberOfParsingThreads: string
    metadataAclScanEnabled: StringBoolean
    dsAclScanEnabled: StringBoolean
    is_ocr_enabled: StringBoolean
    ocr_timeout_in_seconds: number
    ocr_languages: string
    doc2vec_is_enabled: boolean
    classification_is_enabled: boolean
    ner_classification_is_enabled: boolean
    Is_sample_folders: StringBoolean
    folder_percent_to_sample: string
    Is_sample_files: StringBoolean
    differential: boolean
    is_modified_in_x_days: boolean
    x_last_days: number
    scanWindowName: string
}

type ConnectionResponse = {
    ds_connection: ConnectionPayload
}

type ConnectionResponses = {
    ds_connections: ConnectionPayload[]
}

class Resource extends AbstractBigIdDatasourceResource<ResourceModel, Connection, Connection, Connection, TypeConfigurationModel> {

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<Connection> {
        const response = await new BigIdClient(typeConfiguration.bigIdAccess.domain, typeConfiguration.bigIdAccess.username, typeConfiguration.bigIdAccess.password).doRequest<ConnectionResponse>(
            'get',
            `/api/v1/ds_connections/${model.name}`
        );

        return this.connectionPayloadToConnection(response.data.ds_connection);
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new BigIdClient(typeConfiguration.bigIdAccess.domain, typeConfiguration.bigIdAccess.username, typeConfiguration.bigIdAccess.password).doRequest<ConnectionResponses>(
            'get',
            '/api/v1/ds_connections'
        );

        return response.data.ds_connections.map(connectionPayload => new ResourceModel({
            name: connectionPayload.name,
            connection: this.connectionPayloadToConnection(connectionPayload)
        }));
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<Connection> {
        const response = await new BigIdClient(typeConfiguration.bigIdAccess.domain, typeConfiguration.bigIdAccess.username, typeConfiguration.bigIdAccess.password).doRequest<ConnectionPayload>(
            'post',
            `/api/v1/ds_connections`,
            undefined,
            {
                ds_connection: this.modelToConnectionPayload(model)
            }
        );

        return this.connectionPayloadToConnection(response.data);
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<Connection> {
        const response = await new BigIdClient(typeConfiguration.bigIdAccess.domain, typeConfiguration.bigIdAccess.username, typeConfiguration.bigIdAccess.password).doRequest<ConnectionPayload>(
            'put',
            `/api/v1/ds_connections/${model.name}`,
            undefined,
            {
                ds_connection: this.modelToConnectionPayload(model)
            }
        );

        return this.connectionPayloadToConnection(response.data)
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        await new BigIdClient(typeConfiguration.bigIdAccess.domain, typeConfiguration.bigIdAccess.username, typeConfiguration.bigIdAccess.password).doRequest(
            'delete',
            `/api/v1/ds_connections/${model.name}`
        );
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Connection): ResourceModel {
        if (!from) {
            return model;
        }
        model.connection = from;
        return model;
    }

    private modelToConnectionPayload(model: ResourceModel): ConnectionPayload {
        const ownersV2: UserPayload[] = [];
        if (model.businessOwners) {
            ownersV2.concat(Array.of(...model.businessOwners || []).map(businessOwner => ({
                id: businessOwner.id,
                origin: businessOwner.origin,
                email: businessOwner.email,
                type: 'business'
            })));
        }
        if (model.itOwners) {
            ownersV2.concat(Array.of(...model.itOwners || []).map(itOwners => ({
                id: itOwners.id,
                origin: itOwners.origin,
                email: itOwners.email,
                type: 'it'
            })));
        }

        return {
            type: 's3',
            parquetFileRegex: model.parquetFileRegex || null,
            name: model.name || null,
            enabled: model.enabled === true ? 'yes' : 'no',
            friendly_name: model.friendlyName || null,
            description: model.description || null,
            [model.awsAuthenticationType]: true,
            aws_role_session_name: model.awsRoleSessionName || null,
            aws_role_arn: model.awsRoleArn || null,
            aws_access_key: model.awsAccessKey || null,
            aws_secret_key: model.awsSecretKey || null,
            aws_session_token: model.awsSessionToken || null,
            aws_region: model.awsRegion || null,
            bucket_name: model.bucketName || null,
            include_file_types: model.includeExcludeFiles || true,
            fileTypesToExclude: model.fileTypesToExclude || null,
            folder_to_scan: model.folderToScan || null,
            scanner_group: model.scannerGroup || null,
            testConnectionTimeoutInSeconds: model.testConnectionTimeoutInSeconds,
            custom_fields: model.customFields ? Array.of(...model.customFields).map(customField => ({
                field_name: customField.name,
                field_value: customField.value_,
                field_type: customField.type_
            })) : [],
            owners: model.owners ? Array.of(...model.owners) : [],
            owners_v2: ownersV2,
            location: model.location || null,
            scope: model.scope || null,
            security_tier: (model.securityTier || '1') as SecurityTierPayload,
            comment: model.comments || null,
            numberOfParsingThreads: `${model.numberOfParsingThreads || 5}`,
            metadataAclScanEnabled: model.metadataAclScanEnabled === true ? 'true' : 'false',
            dsAclScanEnabled: model.dsAclScanEnabled === true ? 'true' : 'false',
            is_ocr_enabled: model.enabledOcr === true ? 'true' : 'false',
            ocr_timeout_in_seconds: model.ocrTimeout || 60,
            ocr_languages: model.ocrLanguages || 'eng',
            doc2vec_is_enabled: model.enableClustering || false,
            classification_is_enabled: model.enableClassifiers || false,
            ner_classification_is_enabled: model.enableAdvanceClassifiers || false,
            Is_sample_folders: model.sampleFolders === true ? 'true' : 'false',
            folder_percent_to_sample: `${model.samplePercentage || 5}`,
            Is_sample_files: model.sampleFileContent === true ? 'true' : 'false',
            differential: model.differentialScan || false,
            is_modified_in_x_days: model.isModifiedInXDays || false,
            x_last_days: model.xLastDays || 7,
            scanWindowName: model.scanWindowName || null
        };
    }

    private connectionPayloadToConnection(payload: ConnectionPayload): Connection {
        let awsAuthenticationType = 'isCredentialsAuth'
        if (payload.isIamRoleAuth) {
            awsAuthenticationType = 'isIamRoleAuth'
        }
        if (payload.isAnonymousAuth) {
            awsAuthenticationType = 'isAnonymousAuth'
        }
        if (payload.isCrossAccountAuth) {
            awsAuthenticationType = 'isCrossAccountAuth'
        }
        if (payload.isSTSAuth) {
            awsAuthenticationType = 'isSTSAuth'
        }

        return new Connection({
            id: payload.id,
            type: payload.type,
            parquetFileRegex: payload.parquetFileRegex,
            name: payload.name,
            enabled: payload.enabled === 'yes',
            friendlyName: payload.friendly_name,
            description: payload.description,
            awsAuthenticationType: awsAuthenticationType,
            awsRoleSessionName: payload.aws_role_session_name,
            awsRoleArn: payload.aws_role_arn,
            awsAccessKey: payload.aws_access_key,
            awsSecretKey: payload.aws_secret_key,
            awsSessionToken: payload.aws_session_token,
            awsRegion: payload.aws_region,
            bucketName: payload.bucket_name,
            includeExcludeFiles: payload.include_file_types,
            fileTypesToExclude: payload.fileTypesToExclude,
            folderToScan: payload.folder_to_scan,
            scannerGroup: payload.scanner_group,
            testConnectionTimeoutInSeconds: payload.testConnectionTimeoutInSeconds,
            customFields: Array.isArray(payload.custom_fields)
                ? (payload.custom_fields as CustomFieldPayload[])
                    .map(customFieldPayload => new CustomField({
                        name: customFieldPayload.field_name,
                        value_: customFieldPayload.field_value,
                        type_: customFieldPayload.field_type
                    }))
                : [],
            businessOwners: Array.isArray(payload.owners_v2)
                ? (payload.owners_v2 as UserPayload[])
                    .filter(user => user.type === 'business')
                    .map(userPayload => new User({
                        id: userPayload.id,
                        email: userPayload.email,
                        origin: userPayload.origin
                    }))
                : [],
            itOwners: Array.isArray(payload.owners_v2)
                ? (payload.owners_v2 as UserPayload[])
                    .filter(user => user.type === 'it')
                    .map(userPayload => new User({
                        id: userPayload.id,
                        email: userPayload.email,
                        origin: userPayload.origin
                    }))
                : [],
            location: payload.location,
            scope: payload.scope,
            securityTier: payload.security_tier,
            comments: payload.comment,
            numberOfParsingThreads: payload.numberOfParsingThreads || 5,
            metadataAclScanEnabled: payload.metadataAclScanEnabled === 'true',
            dsAclScanEnabled: payload.dsAclScanEnabled === 'true',
            enabledOcr: payload.is_ocr_enabled === 'true',
            ocrTimeout: payload.ocr_timeout_in_seconds,
            ocrLanguages: payload.ocr_languages,
            enableClustering: payload.doc2vec_is_enabled,
            enableClassifiers: payload.classification_is_enabled,
            enableAdvanceClassifiers: payload.ner_classification_is_enabled,
            sampleFolders: payload.Is_sample_folders === 'true',
            samplePercentage: payload.folder_percent_to_sample,
            sampleFileContent: payload.Is_sample_files === 'true',
            differentialScan: payload.differential,
            isModifiedInXDays: payload.is_modified_in_x_days,
            xLastDays: payload.x_last_days,
            scanWindowName: payload.scanWindowName
        });
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
