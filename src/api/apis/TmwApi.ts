/* tslint:disable */
/* eslint-disable */
/**
 * FST Data Access API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: V1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Model2,
    Model2FromJSON,
    Model2ToJSON,
    Model3,
    Model3FromJSON,
    Model3ToJSON,
    NotFoundResponse,
    NotFoundResponseFromJSON,
    NotFoundResponseToJSON,
} from '../models';

export interface GetTmwAccessorialIdRequest {
    id: number;
}

export interface GetTmwOrderHeaderIdRequest {
    id: string;
}

export interface PostTmwAccessorialsRequest {
    body?: Model2;
}

export interface PostTmwOrdersRequest {
    body?: Model3;
}

export interface PostTmwOtdssRequest {
    body?: Model2;
}

/**
 * 
 */
export class TmwApi extends runtime.BaseAPI {

    /**
     * Accessorials by Detail Line ID
     * Returns Accessorials for the order associated with the Detail Line ID
     */
    async getTmwAccessorialIdRaw(requestParameters: GetTmwAccessorialIdRequest): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTmwAccessorialId.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // jwt authentication
        }

        const response = await this.request({
            path: `/tmw/accessorial/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Accessorials by Detail Line ID
     * Returns Accessorials for the order associated with the Detail Line ID
     */
    async getTmwAccessorialId(requestParameters: GetTmwAccessorialIdRequest): Promise<Array<object>> {
        const response = await this.getTmwAccessorialIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Cadence Order Header
     * Return an order header
     */
    async getTmwOrderHeaderIdRaw(requestParameters: GetTmwOrderHeaderIdRequest): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTmwOrderHeaderId.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // jwt authentication
        }

        const response = await this.request({
            path: `/tmw/order/header/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Cadence Order Header
     * Return an order header
     */
    async getTmwOrderHeaderId(requestParameters: GetTmwOrderHeaderIdRequest): Promise<Array<object>> {
        const response = await this.getTmwOrderHeaderIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Filtered to the company baseed on the BILL_TO_CODE
     * Returns Accessorials for the comapany associated with this login
     */
    async postTmwAccessorialsRaw(requestParameters: PostTmwAccessorialsRequest): Promise<runtime.ApiResponse<Array<object>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // jwt authentication
        }

        const response = await this.request({
            path: `/tmw/accessorials`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: Model2ToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Filtered to the company baseed on the BILL_TO_CODE
     * Returns Accessorials for the comapany associated with this login
     */
    async postTmwAccessorials(requestParameters: PostTmwAccessorialsRequest): Promise<Array<object>> {
        const response = await this.postTmwAccessorialsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Filtered to the company baseed on the BILL_TO_CODE
     * Returns Order history for the comapany associated with this login
     */
    async postTmwOrdersRaw(requestParameters: PostTmwOrdersRequest): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // jwt authentication
        }

        const response = await this.request({
            path: `/tmw/orders`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: Model3ToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Filtered to the company baseed on the BILL_TO_CODE
     * Returns Order history for the comapany associated with this login
     */
    async postTmwOrders(requestParameters: PostTmwOrdersRequest): Promise<Array<string>> {
        const response = await this.postTmwOrdersRaw(requestParameters);
        return await response.value();
    }

    /**
     * Filtered to the company baseed on the BILL_TO_CODE
     * Returns On Time Delivery Info and Sailing Schedule for the comapany associated with this login
     */
    async postTmwOtdssRaw(requestParameters: PostTmwOtdssRequest): Promise<runtime.ApiResponse<Array<object>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // jwt authentication
        }

        const response = await this.request({
            path: `/tmw/otd-ss`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: Model2ToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Filtered to the company baseed on the BILL_TO_CODE
     * Returns On Time Delivery Info and Sailing Schedule for the comapany associated with this login
     */
    async postTmwOtdss(requestParameters: PostTmwOtdssRequest): Promise<Array<object>> {
        const response = await this.postTmwOtdssRaw(requestParameters);
        return await response.value();
    }

}