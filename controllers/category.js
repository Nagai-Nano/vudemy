const axios = require('axios')

exports.getCategory = async (req, res, next) => {
  const { data } = await axios.get(
    'https://www.udemy.com/api-2.0/users/me/subscribed-courses-categories?fields[course_category]=id,title&previewing=false'
  )
  res.json({
    categories: data.results
  })
}
