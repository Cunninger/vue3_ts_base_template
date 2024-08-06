/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse_SysUser_ } from '../models/ApiResponse_SysUser_';
import type { LoginVo } from '../models/LoginVo';
import type { SysUser } from '../models/SysUser';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SysUserControllerService {
    /**
     * 增加用户
     * @param sysUser sysUser
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUsingPost4(
        sysUser: SysUser,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sys_user/add',
            body: sysUser,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 删除用户
     * @param id id
     * @returns number OK
     * @throws ApiError
     */
    public static deleteUsingDelete4(
        id?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sys_user/delete',
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
     * 登录
     * @param loginVo loginVo
     * @returns ApiResponse_SysUser_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static loginUsingPost(
        loginVo: LoginVo,
    ): CancelablePromise<ApiResponse_SysUser_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sys_user/login',
            body: loginVo,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 注册
     * @param sysUser sysUser
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static registerUsingPost(
        sysUser: SysUser,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sys_user/register',
            body: sysUser,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 查找所有用户
     * @returns SysUser OK
     * @throws ApiError
     */
    public static findAllUsingGet4(): CancelablePromise<Array<SysUser>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sys_user/selectAll',
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
     * @returns SysUser OK
     * @throws ApiError
     */
    public static selectOneUsingGet4(
        id?: number,
    ): CancelablePromise<SysUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sys_user/selectOne',
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
     * 更新用户
     * @param sysUser sysUser
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUsingPut4(
        sysUser: SysUser,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sys_user/update',
            body: sysUser,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
