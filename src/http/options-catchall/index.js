exports.handler = (event) => {
    return {
        statusCode: 204,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Methods': 'OPTIONS,POST',
            'Access-Control-Allow-Origin': '*'
        }
    }
}
