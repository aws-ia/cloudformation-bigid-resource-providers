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
    create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ConnectionResponse> {
        const sessionToken = await this.getSessionToken(typeConfiguration);

        const {data} = await axios.post<ConnectionResponse>(`https://${typeConfiguration.bigIdAccess.domain}/api/v1/ds_connections`,
            {'ds_connection': {
                    "name": model.name,
                    "owners": model.owners,
                    "differential": model.differential,
                    "numberofparsingthreads": model.numberOfParsingThreads,
                    "rdb_is_sample_data": model.rdbIsSampleData,
                    "include_file_types": model.includeFileTypes,
                    "iscredentialsauth": model.isCredentialsAuth,
                    "password": model.password,
                    "documentordossiername": null,
                    "attributename": null,
                    "promptname": null,
                    "metricname": null,
                    "stylename": null,
                    "consolidationname": null,
                    "metadataaclscanenabled": model.metadataAclScanEnabled,
                    "dsaclscanenabled": model.dsAclScanEnabled,
                    "enable_acl": null,
                    "scanwindowname": "none",
                    "isstsauth": model.isStsAuth,
                    "iscrossaccountauth": model.isCrossaccountAuth,
                    "isiamroleauth": model.isIamroleAuth,
                    "isanonymousauth": model.isAnonymousAuth,
                    "updatedpasswords": [],
                    "type": "s3",
                    "security_tier": model.securityTier,
                    "ocr_languages": model.ocrLanguages,
                    "scanner_strategy": model.scannerStrategy,
                    "enabled": model.enabled,
                    "keydeserializer": "string",
                    "valuedeserializer": "string",
                    "credential_id": model.credentialId,
                    "certificate_id": model.certificateId,
                    "custom_fields": model.customFields
                }},
            {headers: {
                    'Authorization': sessionToken,
                    'Accept': 'application/json'
                }});

        return data;
    }

    delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        return Promise.resolve(undefined);
    }

    get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ConnectionResponse> {
        return Promise.resolve(undefined);
    }

    list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        return Promise.resolve([]);
    }

    newModel(partial: any): ResourceModel {
        return undefined;
    }

    setModelFrom(model: ResourceModel, from: ConnectionResponse | undefined): ResourceModel {
        return undefined;
    }

    update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ConnectionResponse> {
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
