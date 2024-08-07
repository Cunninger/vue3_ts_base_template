package cn.yam.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 功能：
 * 日期：2024/8/3 下午5:01
 */
@Data
@NoArgsConstructor
@AllArgsConstructor

public class ApiResponse<T> {
    private int code;
    private String message;
    private T data;

}
