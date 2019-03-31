const axios = require('axios')

exports.getCourseDetail = async (req, res, next) => {
  const { id } = req.params

  const { data } = await axios.get(
    `https://www.udemy.com/api-2.0/courses/${id}?fields[course]=title,instructional_level,content_info,description,headline,visible_instructors,image_480x270&fields[user]=display_name,job_title,image_200_H,description`
  )
  res.send(data)
}

exports.getCourseCurriculum = async (req, res, next) => {
  const { id } = req.params
  const { page = 1, size = 1400 } = req.query

  const { data } = await axios.get(
    `https://www.udemy.com/api-2.0/courses/${id}/subscriber-curriculum-items/?page=${page}&page_size=${size}&fields[lecture]=@min,object_index,asset,supplementary_assets&fields[chapter]=@min,object_index,title&fields[asset]=@min,title,filename,asset_type,external_url,length`
  )

  let chapterId = -1
  const formattedResults = data.results.reduce((acc, cur, index, self) => {
    if (index === 0 && self[index]._class === 'lecture') {
      chapterId = index
      acc.push({
        id: index,
        object_index: index,
        title: '',
        _class: 'chapter',
        lectures: []
      })
    }

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

exports.getCourseTitle = async (req, res, next) => {
  const { id } = req.params
  const { data } = await axios.get(
    `https://www.udemy.com/api-2.0/courses/${id}?fields[course]=title`
  )

  res.send(data)
}

exports.getSource = async (req, res, next) => {
  const { idCourse, idLecture } = req.params
  const { data } = await axios.get(
    `https://www.udemy.com/api-2.0/users/me/subscribed-courses/${idCourse}/lectures/${idLecture}?fields[asset]=@min,captions,thumbnail_url,stream_urls&fields[caption]=@default`
  )

  res.send(data)
}

exports.downloadAssetFile = async (req, res) => {
  const { idCourse, idLecture, idAsset } = req.params
  const {
    data: { download_urls }
  } = await axios.get(
    `https://www.udemy.com/api-2.0/users/me/subscribed-courses/${idCourse}/lectures/${idLecture}/supplementary-assets/${idAsset}?fields[asset]=download_urls`
  )

  const asset = download_urls['File'] || download_urls['SourceCode']

  res.json({ url: asset[0].file })
}
