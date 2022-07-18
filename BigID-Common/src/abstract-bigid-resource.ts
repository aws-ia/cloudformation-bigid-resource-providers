import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import axios, {AxiosError} from "axios";
import {AbstractBaseResource} from "./abstract-base-resource";

type ApiErrorResponse = {
    message: string,
    status: number,
    detail: string
}

export abstract class AbstractBigIdResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationM> extends AbstractBaseResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, AxiosError<ApiErrorResponse>, TypeConfigurationM> {

    processRequestException(e: AxiosError<ApiErrorResponse>, request: ResourceHandlerRequest<ResourceModelType>) {
        const apiErrorResponse = e.response?.data;
        let errorMessage = apiErrorResponse?.message || e.message;

        const status = e.status
            ? parseInt(e.status)
            : e.response
                ? e.response.status
                : null;
        switch (status) {
            case 400:
            case 404:
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            case 401:
                throw new exceptions.AccessDenied(`Access denied, please check your API token: ${errorMessage}`);
            case 429:
                throw new exceptions.ServiceLimitExceeded(errorMessage);
            default:
                throw new exceptions.InternalFailure(`Unexpected error occurred while talking to the BigId API (HTTP status ${status}) => ${errorMessage}`);
        }
    }

}