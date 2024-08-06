/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Inventory } from '../models/Inventory';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InventoryControllerService {
    /**
     * 增加库存
     * @param inventory inventory
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUsingPost(
        inventory: Inventory,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/inventory/add',
            body: inventory,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 删除库存
     * @param id id
     * @returns number OK
     * @throws ApiError
     */
    public static deleteUsingDelete(
        id?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/inventory/delete',
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
     * 查找所有库存
     * @returns Inventory OK
     * @throws ApiError
     */
    public static findAllUsingGet(): CancelablePromise<Array<Inventory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/inventory/selectAll',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 查找库存
     * @param id id
     * @returns Inventory OK
     * @throws ApiError
     */
    public static selectOneUsingGet(
        id?: number,
    ): CancelablePromise<Inventory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/inventory/selectOne',
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
     * 更新库存
     * @param inventory inventory
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUsingPut(
        inventory: Inventory,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/inventory/update',
            body: inventory,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
