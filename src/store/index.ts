import { defineStore } from 'pinia';
import { ref } from 'vue';
import { User } from '../types';

// 极简版：仅在内存中维护登录状态，页面刷新后恢复初始状态
export const useUserStore = defineStore('user', () => {
    // 登录状态变量：true为已登录，false为未登录（初始未登录）
    const isLoggedIn = ref(false);
    const user = ref<User | null>(null);
    // 登录函数：将状态改为已登录
    const login = (muser: User) => {
        isLoggedIn.value = true;
        user.value = muser;
    };

    // 登出函数：将状态改为未登录
    const logout = () => {
        isLoggedIn.value = false;
        user.value = null;
    };

    return {
        isLoggedIn,
        login,
        logout
    };
});
