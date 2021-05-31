let arc = require('@architect/functions')

exports.handler = arc.http.async(route)


async function route(req) {
    if (req.body.fileName != "") {
        return {
            cors: true,
            status: 200,
            json: {
                message: `hello world from post api /hello ENV-${process.env.API_KEY}`,
            }
        }
    } else
        return {
            cors: true,
            status: 422,
            json: {
                message: 'Unprocessable Entity'
            }
        }
}