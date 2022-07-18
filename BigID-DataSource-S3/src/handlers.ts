import {Connection, ResourceModel, TypeConfigurationModel} from './models';
import {AbstractBigIdResource} from "../../BigID-Common/src/abstract-bigid-resource"
import {BigIdClient} from "../../BigID-Common/src/bigid-client"

type ConnectionResponse = {
    ds_connection: any
}

type ConnectionResponses = {
    ds_connections: any[]
}

class Resource extends AbstractBigIdResource<ResourceModel, Connection, Connection, Connection, TypeConfigurationModel> {

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<Connection> {
        const response = await new BigIdClient(typeConfiguration.bigIdAccess.domain, typeConfiguration.bigIdAccess.username, typeConfiguration.bigIdAccess.password).doRequest<ConnectionResponse>(
            'get',
            `/api/v1/ds_connections/${model.name}`
        );

        return this.payloadToConnection(response.data);
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new BigIdClient(typeConfiguration.bigIdAccess.domain, typeConfiguration.bigIdAccess.username, typeConfiguration.bigIdAccess.password).doRequest<ConnectionResponses>(
            'get',
            '/api/v1/ds_connections'
        );

        return response.data.ds_connections.map(connectionPayload => new ResourceModel({
            id: connectionPayload.id_,
            connection: this.payloadToConnection(connectionPayload)
        }));
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<Connection> {
        const response = await new BigIdClient(typeConfiguration.bigIdAccess.domain, typeConfiguration.bigIdAccess.username, typeConfiguration.bigIdAccess.password).doRequest<ConnectionResponse>(
            'post',
            `/api/v1/ds_connections`,
            undefined,
            JSON.stringify(this.modelToPayload(model))
        );

        return this.payloadToConnection(response.data.ds_connection);
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<Connection> {
        const response = await new BigIdClient(typeConfiguration.bigIdAccess.domain, typeConfiguration.bigIdAccess.username, typeConfiguration.bigIdAccess.password).doRequest<ConnectionResponse>(
            'put',
            `/api/v1/ds_connections/${model.name}`,
            undefined,
            JSON.stringify(this.modelToPayload(model))
        );

        return this.payloadToConnection(response.data.ds_connection)
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

    private modelToPayload(model: ResourceModel) {
        const ownersV2 = Array.of(...model.businessOwners || []).concat(...model.itOwners || []);

        return {
            type: 'S3',
            parquetFileRegex: model.parquetFileRegex || null,
            name: model.name || null,
            enabled: model.enabled === true ? 'yes' : 'no',
            friendly_name: model.friendlyName || null,
            description: model.description || null,
            awsAuthStrategy: model.awsAuthenticationType || null,
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
            owners_v2: ownersV2.map(businessOwner => ({
                id: businessOwner.id,
                origin: businessOwner.origin,
                email: businessOwner.email,
                type: businessOwner.type_
            })),
            location: model.location || null,
            scope: model.scope || null,
            security_tier: model.securityTier || '1',
            comment: model.comments || null,
            numberOfParsingThreads: model.numberOfParsingThreads || 5,
            metadataAclScanEnabled: model.metadataAclScanEnabled === true ? 'true' : 'false',
            dsAclScanEnabled: model.dsAclScanEnabled === true ? 'true' : 'false',
            is_ocr_enabled: model.enabledOcr === true ? 'true' : 'false',
            ocr_timeout_in_seconds: model.ocrTimeout || 60,
            ocr_languages: model.ocrLanguages || 'eng',
            doc2vec_is_enabled: model.enableClustering || false,
            classification_is_enabled: model.enableClustering || false,
            ner_classification_is_enabled: model.enableAdvanceClassifiers || false,
            Is_sample_folders: model.sampleFolders === true ? 'true' : 'false',
            folder_percent_to_sample: model.samplePercentage || 5,
            Is_sample_files: model.sampleFileContent === true ? 'true' : 'false',
            differential: model.differentialScan || false,
            is_modified_in_x_days: model.isModifiedInXDays || false,
            x_last_days: model.xLastDays || 7,
            scanWindowName: model.scanWindowName || null
        }
    }

    private payloadToConnection(payload: any) {
        return new Connection({});
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
