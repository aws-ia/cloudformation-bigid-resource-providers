import {BaseModel, ResourceHandlerRequest} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AxiosError} from "axios";
import {
    AccessDenied,
    InternalFailure,
    InvalidCredentials,
    InvalidRequest,
    NotFound,
    ResourceConflict,
    ServiceInternalError,
    ServiceLimitExceeded
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";
import {ApiErrorResponse} from "./bigid-client";
import {AbstractBigIdDatasourceResource} from "./abstract-bigid-datasource-resource";

class TestAbstractBigIdDatasourceResource extends AbstractBigIdDatasourceResource<BaseModel, {}, {}, {}, {}> {
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

describe('AbstractBigIdDatasourceResource', () => {
    describe('processRequestException', () => {
        let testInstance: TestAbstractBigIdDatasourceResource;

        beforeAll(() => {
            testInstance = new TestAbstractBigIdDatasourceResource('foo', BaseModel, BaseModel);
        });

        it('throws a "NotFound" exception if the response is a 400 and contains "Unable to locate"', () => {
            const error = 'Forced error - Unable to locate the data source';
            let axiosError = new AxiosError<ApiErrorResponse>(error);
            axiosError.status = '400';

            try {
                testInstance.processRequestException(axiosError, {logicalResourceIdentifier: 'foo'} as ResourceHandlerRequest<BaseModel>);
                fail('This should have thrown');
            } catch (e) {
                expect(e).toBeInstanceOf(NotFound);
            }
        });

        it.each([
            [InvalidRequest, '400'],
            [InvalidCredentials, '401'],
            [ServiceInternalError, '402'],
            [AccessDenied, '403'],
            [NotFound, '404'],
            [ResourceConflict, '409'],
            [ServiceLimitExceeded, '429'],
            [InternalFailure, '500'],
            [InternalFailure, null],
            [InternalFailure, undefined]
        ])('rethrows original exception %p (with HTTP %s status code) otherwise', (errorType, statusCode) => {
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
    });
});
