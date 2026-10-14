
function toQueryString(params) {
    return Object.entries(params)
        .map(([key, value]) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        })
        .join("&");
}
