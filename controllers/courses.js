const axios = require('axios')

exports.getCourses = async (req, res, next) => {
  const { page = 1, size = 12, search, id } = req.query
  let endpoint = `https://www.udemy.com/api-2.0/users/me/subscribed-courses?fields[course]=@min,visible_instructors,image_240x135&fields[user]=@min,job_title&ordering=-enroll_time&page=${page}&page_size=${size}`

  if (search) {
    endpoint = `${endpoint}&search=${search}`
  }

  if (id) {
    endpoint = `${endpoint}&category_id=${id}`
  }

  const { data } = await axios.get(endpoint)
  res.json({
    next: !!data.next,
    courses: data.results
  })
}
