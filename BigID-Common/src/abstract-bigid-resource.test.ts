import {AbstractBigIdResource} from "./abstract-bigid-resource";
import {BaseModel, ResourceHandlerRequest} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AxiosError, AxiosResponse} from "axios";
import {
    AccessDenied,
    InternalFailure,
    NotFound,
    ServiceLimitExceeded
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";
import {ApiErrorResponse} from "./bigid-client";

class TestAbstractBigIdResource extends AbstractBigIdResource<BaseModel, {}, {}, {}, {}> {
    create(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    delete(model: BaseModel): Promise<void> {
        return Promise.resolve(undefined);
    }

    get(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    list(model: BaseModel): Promise<BaseModel[]> {
        return Promise.resolve([]);
    }

    newModel(partial: any): BaseModel {
        return undefined;
    }

    setModelFrom(model: BaseModel, from: {} | undefined): BaseModel {
        return undefined;
    }

    update(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }
}

describe('AbstractBigIdResource', () => {
    describe('processRequestException', () => {
        let testInstance: TestAbstractBigIdResource;

        beforeAll(() => {
            testInstance = new TestAbstractBigIdResource('foo', BaseModel, BaseModel);
        });

        it.each([
            [AccessDenied, '401'],
            [NotFound, '400'],
            [NotFound, '404'],
            [ServiceLimitExceeded, '429'],
            [InternalFailure, '500'],
            [InternalFailure, null],
            [InternalFailure, undefined]
        ])('throws a %p if the request has a HTTP %s status code', (errorType, statusCode) => {
            const error = 'Forced error';
            let axiosError = new AxiosError<ApiErrorResponse>(error);
            axiosError.status = statusCode;

            try {
                testInstance.processRequestException(axiosError, {logicalResourceIdentifier: 'foo'} as ResourceHandlerRequest<BaseModel>);
                fail('This should have thrown');
            } catch (e) {
                expect(e).toBeInstanceOf(errorType);
                if (e instanceof NotFound) {
                    expect(e.message).not.toContain(error);
                } else {
                    expect(e.message).toContain(error);
                }
            }
        });

        it('returns the message and details from the API, if any', () => {
            const error = 'Forced error';
            let response: ApiErrorResponse = {
                message: 'API error'
            };
            const axiosError = new AxiosError<ApiErrorResponse>(error, undefined, undefined, undefined, {
                data: response
            } as AxiosResponse);
            axiosError.status = '500';

            try {
                testInstance.processRequestException(axiosError, {logicalResourceIdentifier: 'foo'} as ResourceHandlerRequest<BaseModel>);
                fail('This should have thrown');
            } catch (e) {
                expect(e.message).toContain(error);
                expect(e.message).toContain(response.message);
            }
        });
    });
});
