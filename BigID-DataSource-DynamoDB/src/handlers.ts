import {Connection, CustomField, ResourceModel, TypeConfigurationModel, User} from './models';
import {AbstractBigIdDatasourceResource} from "../../BigID-Common/src/abstract-bigid-datasource-resource"
import {BigIdClient} from "../../BigID-Common/src/bigid-client"

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
    type: 'dynamodb'
    name: string
    enabled: 'yes' | 'no'
    friendly_name: string
    description: string
    isCredentialAuth: boolean
    isIamRoleAuth: boolean
    is_credential: boolean
    aws_access_key: string
    aws_secret_key: string
    aws_session_token: string
    credential_id: string
    aws_region: string
    dynamodbTableNames: string
    scanner_group: string
    testConnectionTimeoutInSeconds: number
    custom_fields: CustomFieldPayload[]
    owners_v2: UserPayload[]
    location: string
    scope: string
    security_tier: SecurityTierPayload
    comment: string
    scanTimeoutInSeconds: number
    numberOfParsingThreads: string
    structured_clustering_enabled: boolean
    classification_is_enabled: boolean
    rdb_is_sample_data: boolean
    ner_classification_is_enabled: boolean
    rdb_sample_data_max_size: string
    scanWindowName: string
    is_idsor_supported: boolean
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
            type: 'dynamodb',
            name: model.name || null,
            enabled: model.enabled === true ? 'yes' : 'no',
            friendly_name: model.friendlyName || null,
            description: model.description || null,
            isCredentialAuth: model.authenticationMethod === 'Default',
            isIamRoleAuth: model.authenticationMethod === 'IAMRole',
            is_credential: model.authenticationMethod === 'BigID',
            aws_access_key: model.awsAccessKey || null,
            aws_secret_key: model.awsSecretKey || null,
            aws_session_token: model.awsSessionToken || null,
            credential_id: model.credentialId || null,
            aws_region: model.awsRegion || null,
            dynamodbTableNames: Array.isArray(model.dynamodbTableNames)
                ?  model.dynamodbTableNames.join(',')
                : null,
            scanner_group: model.scannerGroup || null,
            testConnectionTimeoutInSeconds: model.testConnectionTimeoutInSeconds,
            custom_fields: model.customFields ? Array.of(...model.customFields).map(customField => ({
                field_name: customField.name,
                field_value: customField.value_,
                field_type: customField.type_
            })) : [],
            owners_v2: ownersV2,
            location: model.location || null,
            scope: model.scope || null,
            security_tier: (model.securityTier || '1') as SecurityTierPayload,
            comment: model.comments || null,
            scanTimeoutInSeconds: model.scanTimeoutInSeconds || null,
            numberOfParsingThreads: `${model.numberOfParsingThreads || 5}`,
            structured_clustering_enabled: model.enableStructuredClustering || false,
            classification_is_enabled: model.enableClassifiers || false,
            rdb_is_sample_data: model.sampleScanOnly || true,
            ner_classification_is_enabled: model.enableAdvanceClassifiers || false,
            rdb_sample_data_max_size: model.rdbSampleDataMaxSize || null,
            scanWindowName: model.scanWindowName || null,
            is_idsor_supported: model.isCorrelationSetSupported || false
        };
    }

    private connectionPayloadToConnection(payload: ConnectionPayload): Connection {
        let authenticationMethod = 'Default'
        if (payload.isIamRoleAuth) {
            authenticationMethod = 'IAMRole'
        }
        if (payload.is_credential) {
            authenticationMethod = 'BigID'
        }

        return new Connection({
            id: payload.id,
            type: payload.type,
            name: payload.name,
            enabled: payload.enabled === 'yes',
            friendlyName: payload.friendly_name,
            description: payload.description,
            authenticationMethod: authenticationMethod,
            awsAccessKey: payload.aws_access_key,
            awsSecretKey: payload.aws_secret_key,
            awsSessionToken: payload.aws_session_token,
            credentialId: payload.credential_id,
            awsRegion: payload.aws_region,
            dynamodbTableNames: Array.isArray(payload.dynamodbTableNames) ? payload.dynamodbTableNames.split(',') : '',
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
            scanTimeoutInSeconds: payload.scanTimeoutInSeconds,
            numberOfParsingThreads: payload.numberOfParsingThreads,
            enableStructuredClustering: payload.structured_clustering_enabled,
            enableClassifiers: payload.classification_is_enabled,
            sampleScanOnly: payload.rdb_is_sample_data,
            enableAdvanceClassifiers: payload.ner_classification_is_enabled,
            rdbSampleDataMaxSize: payload.rdb_sample_data_max_size,
            scanWindowName: payload.scanWindowName,
            isCorrelationSetSupported: payload.is_idsor_supported
        });
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
