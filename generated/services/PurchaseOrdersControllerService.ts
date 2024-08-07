/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PurchaseOrders } from '../models/PurchaseOrders';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PurchaseOrdersControllerService {
    /**
     * 增加采购订单
     * @param purchaseOrders purchaseOrders
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUsingPost2(
        purchaseOrders: PurchaseOrders,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/purchase_orders/add',
            body: purchaseOrders,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 删除采购订单
     * @param id id
     * @returns number OK
     * @throws ApiError
     */
    public static deleteUsingDelete2(
        id?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/purchase_orders/delete',
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
     * 查找采购订单
     * @returns PurchaseOrders OK
     * @throws ApiError
     */
    public static findAllUsingGet2(): CancelablePromise<Array<PurchaseOrders>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/purchase_orders/selectAll',
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
     * @returns PurchaseOrders OK
     * @throws ApiError
     */
    public static selectByOrderDateBetweenUsingGet(
        end?: string,
        start?: string,
    ): CancelablePromise<Array<PurchaseOrders>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/purchase_orders/selectByOrderDateBetween',
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
     * @returns PurchaseOrders OK
     * @throws ApiError
     */
    public static selectByOrderIdOrProductIdUsingGet(
        orderIdOrProductId?: number,
    ): CancelablePromise<Array<PurchaseOrders>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/purchase_orders/selectByOrderIdOrProductId',
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
     * selectOne
     * @param id id
     * @returns PurchaseOrders OK
     * @throws ApiError
     */
    public static selectOneUsingGet2(
        id?: number,
    ): CancelablePromise<PurchaseOrders> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/purchase_orders/selectOne',
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
     * 更新采购订单
     * @param purchaseOrders purchaseOrders
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUsingPut2(
        purchaseOrders: PurchaseOrders,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/purchase_orders/update',
            body: purchaseOrders,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
