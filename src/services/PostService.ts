import { ApiResponse } from "../types";
import { Post } from "../types/Post";

async function getAllPosts(): Promise<ApiResponse<Post[]>> {
    console.log("A0");
    try {
        const response = await fetch('http://localhost/post/all');
        
        if (!response.ok) {
            console.log("A1");
            // 即使响应不 ok，也尝试打印响应体（可能有错误提示）
            let errorBody = '';
            try {
                errorBody = await response.text(); // 先尝试解析为文本（避免 JSON 解析失败）
            } catch (e) {
                errorBody = '无法解析响应体';
            }
            throw new Error(`HTTP错误：状态码=${response.status}，响应体=${errorBody}`);
        }
            console.log("A2");
            const data = await response.json();
        return {
            success: true,
            data: data as Post[]
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : '获取帖子列表失败';
        console.error("获取帖子错误详情:", errorMessage); // 打印完整错误
        return {
            success: false,
            msg: errorMessage,
            code: error instanceof Error && error.message.includes('HTTP错误：状态码=') 
               ? parseInt(error.message.split('=')[1]) // 尝试解析 HTTP 错误状态码
                : undefined
        };
    }
}

export default getAllPosts;
