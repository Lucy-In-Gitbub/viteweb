import { ApiResponse, User } from '../types';

async function getUserById(uid: number): Promise<ApiResponse<User>> {
    try {
        const response = await fetch(`http://localhost/user?uid=${uid}`);
        
        if (!response.ok) {
            throw new Error(`HTTP错误，状态码: ${ response.status}`);
        }
        
        // 尝试解析JSON响应
        const data = await response.json();
        
        // 返回标准化的成功响应
        return {
            success: true,
            data: data as User
        };
    } catch (error) {
        // 处理错误情况
        const errorMessage = error instanceof Error ? error.message : '获取用户信息失败';
        return {
            success: false,
            msg: errorMessage,
            code: 500
        };
    }
}
async function getUserByName(name: string): Promise<ApiResponse<User>> {
    try {
        // 对用户名进行URL编码，处理特殊字符（如空格、中文等）
        const encodedName = encodeURIComponent(name);
        // 发起GET请求到按名字查询的接口
        const response = await fetch(`http://localhost/user/name?name=${encodedName}`);
        
        // 检查响应状态是否正常
        if (!response.ok) {
            throw new Error(`HTTP错误，状态码: ${response.status}`);
        }
        
        // 解析JSON响应数据
        const data = await response.json();
        
        // 返回标准化的成功响应
        return {
            success: true,
            data: data as User
        };
    } catch (error) {
        // 处理错误情况（网络错误、解析错误等）
        const errorMessage = error instanceof Error ? error.message : '获取用户信息失败';
        return {
            success: false,
            msg: errorMessage,
            code: 500
        };
    }
}

export { getUserById, getUserByName }