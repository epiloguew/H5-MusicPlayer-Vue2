const getLoginStatus = () => {
    return sessionStorage.getItem("h5-vue2");
};

export { getLoginStatus };
