export type StringBoolean = 'true' | 'false'

export type SecurityTierPayload = '1' | '2' | '3' | '4' | '5'

export type CustomFieldPayload = {
    field_name: string;
    field_value: string;
    field_type: string;
}

export type UserPayload = {
    id: string
    origin: string
    email: string | null
    type: 'business' | 'it'
}

export enum AwsRegionToLocation {
    'us-east-2' = 'Ohio',
    'us-east-1' = 'Virginia',
    'us-west-1' = 'California',
    'us-west-2' = 'Oregon',
    'af-south-1' = 'South Africa',
    'ap-east-1' = 'Hong Kong',
    'ap-south-1' = 'India',
    'ap-northeast-1' = 'Japan',
    'ap-northeast-2' = 'South Korea',
    'ap-northeast-3' = 'Japan',
    'ap-southeast-1' = 'Singapore',
    'ap-southeast-2' = 'Australia',
    'ap-southeast-3' = 'Indonesia',
    'ca-central-1' = 'Canada',
    'eu-central-1' = 'Germany',
    'eu-west-1' = 'Ireland',
    'eu-west-2' = 'United Kingdom',
    'eu-west-3' = 'France',
    'eu-south-1' = 'Italy',
    'eu-north-1' = 'Sweden',
    'me-south-1' = 'Bahrain',
    'sa-east-1' = 'Brazil',
    'us-gov-east-1' = 'United States of America',
    'us-gov-west-1' = 'United States of America',
    'cn-north-1' = 'China',
    'cn-northwest-1' = 'China'
}