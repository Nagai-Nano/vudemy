const axios = require('axios')

exports.getCourseDetail = async (req, res, next) => {
  const { id } = req.params

  const { data } = await axios.get(
    `https://www.udemy.com/api-2.0/courses/${id}?fields[course]=num_subscribers,num_published_lectures,instructional_level,content_info,description,headline,visible_instructors,image_750x422&fields[user]=display_name,job_title,image_200_H,description`
  )
  res.send(data)
}

exports.getCourseCurriculum = async (req, res, next) => {
  const { id } = req.params
  const { page = 1, size = 1400 } = req.query

  const { data } = await axios.get(
    `https://www.udemy.com/api-2.0/courses/${id}/subscriber-curriculum-items/?page=${page}&page_size=${size}&fields[lecture]=@min,object_index,asset,supplementary_assets&fields[chapter]=@min,description,object_index,title&fields[asset]=@min,title,filename,asset_type,external_url,length,status`
  )

  let chapterId = -1
  const formattedResults = data.results.reduce((acc, cur) => {
    if (cur._class === 'chapter') {
      chapterId += 1
      acc.push({ ...cur, lectures: [] })
    } else {
      acc[chapterId].lectures.push(cur)
    }

    return acc
  }, [])

  res.json({
    next: !!data.next,
    results: formattedResults
  })
}
