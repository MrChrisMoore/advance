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

export interface GetReportsTmwAccessorialIdRequest {
    id: number;
}

export interface GetReportsTmwOrderHeaderIdRequest {
    id: number;
}

export interface PostReportsTmwAccessorialsRequest {
    body?: Model2;
}

export interface PostReportsTmwOrdersRequest {
    body?: Model3;
}

export interface PostReportsTmwOtdssRequest {
    body?: Model2;
}

/**
 * 
 */
export class ReportsApi extends runtime.BaseAPI {

    /**
     * Accessorials by Detail Line ID
     * Returns Accessorials for the order associated with the Detail Line ID
     */
    async getReportsTmwAccessorialIdRaw(requestParameters: GetReportsTmwAccessorialIdRequest): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getReportsTmwAccessorialId.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // jwt authentication
        }

        const response = await this.request({
            path: `/reports/tmw/accessorial/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
    async getReportsTmwAccessorialId(requestParameters: GetReportsTmwAccessorialIdRequest): Promise<Array<object>> {
        const response = await this.getReportsTmwAccessorialIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Cadence Order Header
     * Return an order header
     */
    async getReportsTmwOrderHeaderIdRaw(requestParameters: GetReportsTmwOrderHeaderIdRequest): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getReportsTmwOrderHeaderId.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // jwt authentication
        }

        const response = await this.request({
            path: `/reports/tmw/order/header/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
    async getReportsTmwOrderHeaderId(requestParameters: GetReportsTmwOrderHeaderIdRequest): Promise<Array<object>> {
        const response = await this.getReportsTmwOrderHeaderIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Filtered to the company baseed on the BILL_TO_CODE
     * Returns Accessorials for the comapany associated with this login
     */
    async postReportsTmwAccessorialsRaw(requestParameters: PostReportsTmwAccessorialsRequest): Promise<runtime.ApiResponse<Array<object>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // jwt authentication
        }

        const response = await this.request({
            path: `/reports/tmw/accessorials`,
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
    async postReportsTmwAccessorials(requestParameters: PostReportsTmwAccessorialsRequest): Promise<Array<object>> {
        const response = await this.postReportsTmwAccessorialsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Filtered to the company baseed on the BILL_TO_CODE
     * Returns Order history for the comapany associated with this login
     */
    async postReportsTmwOrdersRaw(requestParameters: PostReportsTmwOrdersRequest): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // jwt authentication
        }

        const response = await this.request({
            path: `/reports/tmw/orders`,
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
    async postReportsTmwOrders(requestParameters: PostReportsTmwOrdersRequest): Promise<Array<string>> {
        const response = await this.postReportsTmwOrdersRaw(requestParameters);
        return await response.value();
    }

    /**
     * Filtered to the company baseed on the BILL_TO_CODE
     * Returns On Time Delivery Info and Sailing Schedule for the comapany associated with this login
     */
    async postReportsTmwOtdssRaw(requestParameters: PostReportsTmwOtdssRequest): Promise<runtime.ApiResponse<Array<object>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // jwt authentication
        }

        const response = await this.request({
            path: `/reports/tmw/otd-ss`,
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
    async postReportsTmwOtdss(requestParameters: PostReportsTmwOtdssRequest): Promise<Array<object>> {
        const response = await this.postReportsTmwOtdssRaw(requestParameters);
        return await response.value();
    }

}
