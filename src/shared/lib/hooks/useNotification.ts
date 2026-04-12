import { message } from 'antd';

export const useNotification = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const showSuccess = (text: string) => {
        messageApi.success(text);
    };

    const showError = (text: string) => {
        messageApi.error(text);
    };

    const showInfo = (text: string) => {
        messageApi.info(text);
    };

    return {
        showSuccess,
        showError,
        showInfo,
        contextHolder,
    };
};