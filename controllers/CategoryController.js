
const categories = require("../models/Category")

module.exports.index = (request,response) => {
    response.status(200).json({
        "status":200,
        "message":"categories fetched successfully",
        "data": categories,
    });
}

module.exports.store = (request,response) => {
    const { name, status } = request.body
    let course_id = categories.length + 1;

    categories.push({
        course_id,
        name,
        status,
    })
    response.status(200).json({
        "status":200,
        "message":"categories saved successfully",
        "data": categories,
    });
}


module.exports.edit = (request,response) => {
    let category = categories.find(data => data.course_id === parseInt(request.params.course_id))
    response.status(200).json({
        "status":200,
        "message":"category edited successfully",
        "data": category ? category : [],
    });
}

module.exports.destroy = (request,response) => {
    let categoryIndex = categories.findIndex(data => data.course_id === parseInt(request.params.course_id))
    categories.splice(categoryIndex,1);
    response.status(200).json({
        "status":200,
        "message":"category deleted successfully",
        "data": categories
    });
}