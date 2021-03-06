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
    NotFoundResponse,
    NotFoundResponseFromJSON,
    NotFoundResponseToJSON,
} from '../models';

export interface GetCdnOrdersReportsShippedFacilityStatusClientidStartdateEnddateRequest {
    facility: number;
    status: string;
    clientid: number;
    startdate: string;
    enddate: string;
}

export interface GetCdnOrdersReportsShortFacilityTypeSkuClientidDaysoutRequest {
    facility: string;
    type: string;
    sku: string;
    clientid: string;
    daysout: string;
}

/**
 * 
 */
export class CdnApi extends runtime.BaseAPI {

    /**
     * Cadence
     * Shipped Orders Report
     */
    async getCdnOrdersReportsShippedFacilityStatusClientidStartdateEnddateRaw(requestParameters: GetCdnOrdersReportsShippedFacilityStatusClientidStartdateEnddateRequest): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.facility === null || requestParameters.facility === undefined) {
            throw new runtime.RequiredError('facility','Required parameter requestParameters.facility was null or undefined when calling getCdnOrdersReportsShippedFacilityStatusClientidStartdateEnddate.');
        }

        if (requestParameters.status === null || requestParameters.status === undefined) {
            throw new runtime.RequiredError('status','Required parameter requestParameters.status was null or undefined when calling getCdnOrdersReportsShippedFacilityStatusClientidStartdateEnddate.');
        }

        if (requestParameters.clientid === null || requestParameters.clientid === undefined) {
            throw new runtime.RequiredError('clientid','Required parameter requestParameters.clientid was null or undefined when calling getCdnOrdersReportsShippedFacilityStatusClientidStartdateEnddate.');
        }

        if (requestParameters.startdate === null || requestParameters.startdate === undefined) {
            throw new runtime.RequiredError('startdate','Required parameter requestParameters.startdate was null or undefined when calling getCdnOrdersReportsShippedFacilityStatusClientidStartdateEnddate.');
        }

        if (requestParameters.enddate === null || requestParameters.enddate === undefined) {
            throw new runtime.RequiredError('enddate','Required parameter requestParameters.enddate was null or undefined when calling getCdnOrdersReportsShippedFacilityStatusClientidStartdateEnddate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // jwt authentication
        }

        const response = await this.request({
            path: `/cdn/orders/reports/shipped/{facility}/{status}/{clientid}/{startdate}/{enddate}`.replace(`{${"facility"}}`, encodeURIComponent(String(requestParameters.facility))).replace(`{${"status"}}`, encodeURIComponent(String(requestParameters.status))).replace(`{${"clientid"}}`, encodeURIComponent(String(requestParameters.clientid))).replace(`{${"startdate"}}`, encodeURIComponent(String(requestParameters.startdate))).replace(`{${"enddate"}}`, encodeURIComponent(String(requestParameters.enddate))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Cadence
     * Shipped Orders Report
     */
    async getCdnOrdersReportsShippedFacilityStatusClientidStartdateEnddate(requestParameters: GetCdnOrdersReportsShippedFacilityStatusClientidStartdateEnddateRequest): Promise<Array<object>> {
        const response = await this.getCdnOrdersReportsShippedFacilityStatusClientidStartdateEnddateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Cadence
     * Short Orders Report
     */
    async getCdnOrdersReportsShortFacilityTypeSkuClientidDaysoutRaw(requestParameters: GetCdnOrdersReportsShortFacilityTypeSkuClientidDaysoutRequest): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.facility === null || requestParameters.facility === undefined) {
            throw new runtime.RequiredError('facility','Required parameter requestParameters.facility was null or undefined when calling getCdnOrdersReportsShortFacilityTypeSkuClientidDaysout.');
        }

        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling getCdnOrdersReportsShortFacilityTypeSkuClientidDaysout.');
        }

        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling getCdnOrdersReportsShortFacilityTypeSkuClientidDaysout.');
        }

        if (requestParameters.clientid === null || requestParameters.clientid === undefined) {
            throw new runtime.RequiredError('clientid','Required parameter requestParameters.clientid was null or undefined when calling getCdnOrdersReportsShortFacilityTypeSkuClientidDaysout.');
        }

        if (requestParameters.daysout === null || requestParameters.daysout === undefined) {
            throw new runtime.RequiredError('daysout','Required parameter requestParameters.daysout was null or undefined when calling getCdnOrdersReportsShortFacilityTypeSkuClientidDaysout.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // jwt authentication
        }

        const response = await this.request({
            path: `/cdn/orders/reports/short/{facility}/{type}/{sku}/{clientid}/{daysout}`.replace(`{${"facility"}}`, encodeURIComponent(String(requestParameters.facility))).replace(`{${"type"}}`, encodeURIComponent(String(requestParameters.type))).replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))).replace(`{${"clientid"}}`, encodeURIComponent(String(requestParameters.clientid))).replace(`{${"daysout"}}`, encodeURIComponent(String(requestParameters.daysout))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Cadence
     * Short Orders Report
     */
    async getCdnOrdersReportsShortFacilityTypeSkuClientidDaysout(requestParameters: GetCdnOrdersReportsShortFacilityTypeSkuClientidDaysoutRequest): Promise<Array<object>> {
        const response = await this.getCdnOrdersReportsShortFacilityTypeSkuClientidDaysoutRaw(requestParameters);
        return await response.value();
    }

}
