import { Hono } from 'hono'
import { env } from 'hono/adapter'
import { getVideoCaptionsFromCaptionExtractor } from './youtube-transcript'

export interface Response<T> {
  code: number
  message: string
  data: T
}

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue }

interface JSONObject {
  [k: string]: JSONValue
}

export type ScrapeResponse = string | string[] | JSONObject

const app = new Hono()

app.get('/', async (c) => {
  const { API_TOKEN: apiToken } = env<{ API_TOKEN: string }>(c)
  let url = c.req.query('url')

  const Authorization = c.req.header('Authorization')
  if (apiToken) {
    if (!Authorization) {
      return c.json({
        code: 401,
        message: 'Unauthorized',
      } as Response<null>)
    }

    if (Authorization !== `Bearer ${apiToken}`) {
      return c.json({
        code: 401,
        message: 'Unauthorized',
      } as Response<null>)
    }
  }

  if (!url) {
    return c.json({
      code: 400,
      message: 'Bad Request',
      data: 'Please provide a `url` query parameter, e.g. ?url=https://example.com',
    } as Response<string>)
  }

  if (url && !url.match(/^[a-zA-Z]+:\/\//)) {
    url = 'https://' + url
  }

  // Get video captions from @/youtube-transcript.ts
  const youtubeRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  const youtubeMatch = url.match(youtubeRegex)

  if (youtubeMatch) {
    const videoId = youtubeMatch[1]
    const lang = c.req.query('lang') || 'en'

    try {
      console.log(
        `[Caption Extractor] Fetching transcript for video ${videoId}`
      )

      const response = await getVideoCaptionsFromCaptionExtractor(videoId, lang)

      return c.json(response)
    } catch (error) {
      console.error('[Caption Extractor] Error:', error)
      return c.json({
        code: 500,
        message: 'Failed to fetch transcript',
        data: {
          error: error instanceof Error ? error.message : String(error),
        },
      } as Response<{ error: string }>)
    }
  }

  // If not a YouTube URL, return error
  return c.json({
    code: 400,
    message: 'Bad Request',
    data: 'Only YouTube URLs are supported',
  } as Response<string>)
})

export default app
