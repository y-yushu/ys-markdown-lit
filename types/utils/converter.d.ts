import { ComplexAttributeConverter } from 'lit';
export declare const BooleanConverter: ComplexAttributeConverter<boolean>;
export declare const ObjectConverter: {
    fromAttribute: (value: string | null) => Record<string, any>;
    toAttribute: (value: Record<string, any> | string) => string;
};
