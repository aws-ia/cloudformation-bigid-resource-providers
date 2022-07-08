import {ConnectionResponse, ResourceModel, TypeConfigurationModel} from './models';
import {AbstractBigIdResource} from "../../BigID-Common/src/abstract-bigid-resource"
import axios from "axios";

type SessionToken = {
    "auth_token": string
}

type ConnectionResponses = {
    "ds_connections": ConnectionResponse[]
}

class Resource extends AbstractBigIdResource<ResourceModel, ConnectionResponse, ConnectionResponse, ConnectionResponse, TypeConfigurationModel> {

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ConnectionResponse> {
        const sessionToken = await this.getSessionToken(typeConfiguration);

        const {data} = await axios.post<ConnectionResponse>(`https://${typeConfiguration.bigIdAccess.domain}/api/v1/ds_connections`,
            {'ds_connection': {
                    "name": model.name,
                    "type": "s3",
                    // "owners": model.owners,
                    // "differential": model.differential,
                    // "numberofparsingthreads": model.numberOfParsingThreads,
                    // "rdb_is_sample_data": model.rdbIsSampleData,
                    // "include_file_types": model.includeFileTypes,
                    // "iscredentialsauth": model.isCredentialsAuth,
                    // "password": model.password,
                    // "documentordossiername": null,
                    // "attributename": null,
                    // "promptname": null,
                    // "metricname": null,
                    // "stylename": null,
                    // "consolidationname": null,
                    // "metadataaclscanenabled": model.metadataAclScanEnabled,
                    // "dsaclscanenabled": model.dsAclScanEnabled,
                    // "enable_acl": null,
                    // "scanwindowname": "none",
                    // "isstsauth": model.isStsAuth,
                    // "iscrossaccountauth": model.isCrossaccountAuth,
                    // "isiamroleauth": model.isIamroleAuth,
                    // "isanonymousauth": model.isAnonymousAuth,
                    // "updatedpasswords": [],
                    // "security_tier": model.securityTier,
                    // "ocr_languages": model.ocrLanguages,
                    // "scanner_strategy": model.scannerStrategy,
                    // "enabled": model.enabled,
                    // "keydeserializer": "string",
                    // "valuedeserializer": "string",
                    // "credential_id": model.credentialId,
                    // "certificate_id": model.certificateId,
                    // "custom_fields": model.customFields
                }},
            {headers: {
                    'Authorization': sessionToken,
                    'Accept': 'application/json'
                }});

        return data;
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        const sessionToken = await this.getSessionToken(typeConfiguration);

        await axios.delete<void>(`https://${typeConfiguration.bigIdAccess.domain}/api/v1/ds_connections/${model.name}`,
            {headers: {
                    'Authorization': sessionToken,
                    'Accept': 'application/json'
                }});
    }

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ConnectionResponse> {
        const sessionToken = await this.getSessionToken(typeConfiguration);

        const {data} = await axios.get<ConnectionResponse>(`https://${typeConfiguration.bigIdAccess.domain}/api/v1/ds_connections/${model.name}`,
            {headers: {
                    'Authorization': sessionToken,
                    'Accept': 'application/json'
                }});


        return data;
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        const sessionToken = await this.getSessionToken(typeConfiguration);

        const {data} = await axios.get<ConnectionResponses>(`https://${typeConfiguration.bigIdAccess.domain}/api/v1/ds_connections/`,
            {headers: {
                    'Authorization': sessionToken,
                    'Accept': 'application/json'
                }});

        return data.ds_connections.map(connection => this.setModelFrom(new ResourceModel(), new ConnectionResponse(connection)));
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: ConnectionResponse | undefined): ResourceModel {
        if (!from) {
            return model;
        }
        if (from.id) {
            model.id = from.id;
        }
        if (from.certificateId) {
            model.certificateId = from.certificateId;
        }
        if (from.isIamroleAuth) {
            model.isIamroleAuth = from.isIamroleAuth;
        }

        if (from.name) {
            model.name = from.name;
        }

        if (from.owners) {
            model.owners = from.owners;
        }

        if (from.differential) {
            model.differential = from.differential;
        }

        if (from.numberOfParsingThreads) {
            model.numberOfParsingThreads = from.numberOfParsingThreads;
        }

        if (from.rdbIsSampleData) {
            model.rdbIsSampleData = from.rdbIsSampleData;
        }

        if (from.includeFileTypes) {
            model.includeFileTypes = from.includeFileTypes;
        }

        if (from.isCredentialsAuth) {
            model.isCredentialsAuth = from.isCredentialsAuth;
        }

        if (from.password) {
            model.password = from.password;
        }

        if (from.metadataAclScanEnabled) {
            model.metadataAclScanEnabled = from.metadataAclScanEnabled;
        }

        if (from.dsAclScanEnabled) {
            model.dsAclScanEnabled = from.dsAclScanEnabled;
        }

        if (from.isStsAuth) {
            model.isStsAuth = from.isStsAuth;
        }
        if (from.isCrossaccountAuth) {
            model.isCrossaccountAuth = from.isCrossaccountAuth;
        }

        if (from.isAnonymousAuth) {
            model.isAnonymousAuth = from.isAnonymousAuth;
        }

        if (from.securityTier) {
            model.securityTier = from.securityTier;
        }

        if (from.ocrLanguages) {
            model.ocrLanguages = from.ocrLanguages;
        }
        if (from.scannerStrategy) {
            model.scannerStrategy = from.scannerStrategy;
        }

        if (from.enabled) {
            model.enabled = from.enabled;
        }
        if (from.credentialId) {
            model.credentialId = from.credentialId;
        }

        if (from.customFields) {
            model.customFields = from.customFields;
        }
        return model;
    }

    update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ConnectionResponse> {
        // I'm not totally sure I understand what to do here - example uses a GET but I think that's wrong
        // see https://api.bigid.com/paths/ds_connections-connection_id/put

        return Promise.resolve(undefined);
    }

    protected async getSessionToken(typeConfiguration: TypeConfigurationModel): Promise<string> {
        const {data} = await axios.post<SessionToken>(`https://${typeConfiguration.bigIdAccess.domain}/api/v1/sessions`,
            {username: typeConfiguration.bigIdAccess.username, password: typeConfiguration.bigIdAccess.password},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        return data.auth_token;
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
