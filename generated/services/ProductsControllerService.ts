/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Products } from '../models/Products';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsControllerService {
    /**
     * 增加产品
     * @param products products
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUsingPost1(
        products: Products,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products/add',
            body: products,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 删除产品
     * @param id id
     * @returns number OK
     * @throws ApiError
     */
    public static deleteUsingDelete1(
        id?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/products/delete',
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
     * 查找所有产品
     * @returns Products OK
     * @throws ApiError
     */
    public static findAllUsingGet1(): CancelablePromise<Array<Products>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/selectAll',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 查找产品
     * @param id id
     * @returns Products OK
     * @throws ApiError
     */
    public static selectOneUsingGet1(
        id?: number,
    ): CancelablePromise<Products> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/selectOne',
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
     * 更新产品
     * @param products products
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUsingPut1(
        products: Products,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/products/update',
            body: products,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
