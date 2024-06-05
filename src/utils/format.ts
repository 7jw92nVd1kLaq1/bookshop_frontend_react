export const formatNumber = (num: number) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
}