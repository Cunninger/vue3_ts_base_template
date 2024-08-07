/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SalesOrders } from '../models/SalesOrders';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SalesOrdersControllerService {
    /**
     * 增加销售订单
     * @param salesOrders salesOrders
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUsingPost3(
        salesOrders: SalesOrders,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sales_orders/add',
            body: salesOrders,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 删除销售订单
     * @param id id
     * @returns number OK
     * @throws ApiError
     */
    public static deleteUsingDelete3(
        id?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sales_orders/delete',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * 查找所有销售订单
     * @returns SalesOrders OK
     * @throws ApiError
     */
    public static findAllUsingGet3(): CancelablePromise<Array<SalesOrders>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sales_orders/selectAll',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 根据订单日期范围查询
     * @param end end
     * @param start start
     * @returns SalesOrders OK
     * @throws ApiError
     */
    public static selectByOrderDateBetweenUsingGet1(
        end?: string,
        start?: string,
    ): CancelablePromise<Array<SalesOrders>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sales_orders/selectByOrderDateRange',
            query: {
                'end': end,
                'start': start,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 根据order_id 或者 product_id查询
     * @param orderIdOrProductId orderIdOrProductId
     * @returns SalesOrders OK
     * @throws ApiError
     */
    public static selectByOrderIdOrProductIdUsingGet1(
        orderIdOrProductId?: number,
    ): CancelablePromise<Array<SalesOrders>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sales_orders/selectByOrderIdOrProductId',
            query: {
                'orderIdOrProductId': orderIdOrProductId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 查找销售订单
     * @param id id
     * @returns SalesOrders OK
     * @throws ApiError
     */
    public static selectOneUsingGet3(
        id?: number,
    ): CancelablePromise<SalesOrders> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sales_orders/selectOne',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 更新销售订单
     * @param salesOrders salesOrders
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUsingPut3(
        salesOrders: SalesOrders,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sales_orders/update',
            body: salesOrders,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
