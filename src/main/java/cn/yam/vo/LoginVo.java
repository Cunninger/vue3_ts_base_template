package cn.yam.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
 * 功能：
 * 日期：2024/8/3 下午2:59
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginVo {
    private String username;
    private String password;

}