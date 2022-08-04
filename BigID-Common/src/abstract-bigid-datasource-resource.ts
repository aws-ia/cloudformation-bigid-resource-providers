import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AxiosError} from "axios";
import {ApiErrorResponse} from "./bigid-client";
import {AbstractBigIdResource} from "./abstract-bigid-resource";
import {InvalidRequest} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";


export abstract class AbstractBigIdDatasourceResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationM> extends AbstractBigIdResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationM> {

    // We override the default exception handler because this CRUD API specifically returns a 400 with the message
    // containing `Unable to locate ...` instead of a classic 404 when we are getting an item that does not exist.
    processRequestException(e: AxiosError<ApiErrorResponse>, request: ResourceHandlerRequest<ResourceModelType>) {
        try {
            super.processRequestException(e, request);
        } catch (e) {
            if (e instanceof InvalidRequest && e.message.includes('Unable to locate')) {
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            }
            throw e;
        }
    }
}