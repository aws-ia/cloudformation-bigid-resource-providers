import axios, {AxiosResponse} from "axios";

export type ApiErrorResponse = {
    message: string
    status?: number
    detail?: string
}

export type PaginatedResponseType = {
    totalCount: number
    pageSize: number
    nextPageKey: string
}

type SessionToken = {
    auth_token: string
}

export class BigIdClient {
    private readonly baseUrl: string;
    private readonly username: string;
    private readonly password: string;

    constructor(baseUrl: string, username: string, password: string) {
        this.baseUrl = baseUrl;
        this.username = username;
        this.password = password;
    }

    public async doRequest<ResponseType>(method: 'get' | 'put' | 'post' | 'delete', path: string, params: any = {}, body?: {}): Promise<AxiosResponse<ResponseType>> {
        const token = await this.getSessionToken();

        return await axios.request<ResponseType>({
            url: `https://${this.baseUrl}${path}`,
            params: params,
            method: method,
            data: body,
            headers: {
                'Authorization': token,
                'Content-type': 'application/json'
            }
        });
    }

    public async paginate<ResponseType extends PaginatedResponseType, ResultType>(method: 'get' | 'put' | 'post' | 'delete', path: string, transform: (response: AxiosResponse<ResponseType>) => ResultType[], params: any = {}, body?: {}): Promise<ResultType[]> {
        const results: ResultType[] = [];

        let page = 1;
        let delegateParams = {...params};
        delete delegateParams.nextPageToken;

        while (delegateParams.nextPageToken || page === 1) {
            const response = await this.doRequest<ResponseType>(method, path, delegateParams, body);
            results.push(...transform(response))
            delegateParams = {
                ...delegateParams,
                nextPageToken: response.data ? response.data.nextPageKey : undefined
            };
            page++;
        }

        return results;
    }

    private async getSessionToken(): Promise<string> {
        const {data} = await axios.post<SessionToken>(`https://${this.baseUrl}/api/v1/sessions`,
            {
                username: this.username,
                password: this.password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        return data.auth_token;
    }
}