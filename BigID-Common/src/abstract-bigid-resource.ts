import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AxiosError} from "axios";
import {AbstractBaseResource} from "./abstract-base-resource";
import {ApiErrorResponse} from "./bigid-client";

export abstract class AbstractBigIdResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationM> extends AbstractBaseResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, AxiosError<ApiErrorResponse>, TypeConfigurationM> {

    processRequestException(e: AxiosError<ApiErrorResponse>, request: ResourceHandlerRequest<ResourceModelType>) {
        const errors = [e.message];
        const apiErrorResponse = e.response?.data;
        if (apiErrorResponse?.message) {
            errors.push(`[API message] ${apiErrorResponse.message}`);
        }
        if (apiErrorResponse?.detail) {
            errors.push(`[API detail] ${apiErrorResponse.detail}`);
        }
        const errorMessage = errors.join('\n');

        const status = e.status
            ? parseInt(e.status)
            : e.response
                ? e.response.status
                : null;
        switch (status) {
            case 400:
                throw new exceptions.InvalidRequest(errorMessage);
            case 401:
                throw new exceptions.InvalidCredentials(errorMessage);
            case 402:
                throw new exceptions.ServiceInternalError(errorMessage);
            case 403:
                throw new exceptions.AccessDenied(`Access denied, please check your API domain, username and password: ${errorMessage}`);
            case 404:
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            case 409:
                throw new exceptions.ResourceConflict(errorMessage);
            case 429:
                throw new exceptions.ServiceLimitExceeded(errorMessage);
            default:
                throw new exceptions.InternalFailure(`Unexpected error occurred while talking to the BigId API (HTTP status ${status}) => ${errorMessage}`);
        }
    }

}