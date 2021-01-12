exports.handler = async (event) => {
    console.log(event)
    // TODO implement
    const response = await {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return JSON.stringify(response);
};
