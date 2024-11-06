export const fetchUtil = async <T>(url: string, httpConfig?: RequestInit): Promise<T> => {
    const response = await fetch(url, httpConfig);
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    try {
        const data: T = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(`Error parsing JSON: ${error}`);
        throw error; // Rethrow error so caller can handle it
    }
};
