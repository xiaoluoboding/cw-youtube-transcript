# YouTube Transcript on Cloudflare

> Easily scrape metadata from websites as a service.

## Usage

Enter a valid `$URL` as params

```bash
curl GET https://youtube-transcript.indiehacker.workers.dev/?url=$URL&lang=en
```

## Example

### Input

```bash
curl GET https://youtube-transcript.indiehacker.workers.dev/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch?v%3D5MWT_doo68k&lang=en
```

### Output

```json
{
  "videoDetails": {
    "title": "OpenAI’s Sam Altman Talks ChatGPT, AI Agents and Superintelligence — Live at TED2025",
    "description": "The AI revolution is here to stay, says Sam Altman, the CEO of OpenAI. In a probing, live conversation with head of TED Chris Anderson, Altman discusses the astonishing growth of AI and shows how models like ChatGPT could soon become extensions of ourselves. He also addresses questions of safety, power and moral authority, reflecting on the world he envisions — where AI will almost certainly outpace human intelligence. (Recorded live at TED2025 on April 11, 2025)\n\nIf you love watching TED Talks like this one, become a TED Member to support our mission of spreading ideas: https://ted.com/membership\n\nFollow TED! \nX: https://www.twitter.com/TEDTalks\nInstagram: https://www.instagram.com/ted\nFacebook: https://facebook.com/TED\nLinkedIn: https://www.linkedin.com/company/ted-conferences\nTikTok: https://www.tiktok.com/@tedtoks\n\nThe TED Talks channel features talks, performances and original series from the world's leading thinkers and doers. Subscribe to our channel for videos on Technology, Entertainment and Design — plus science, business, global issues, the arts and more. Visit https://TED.com to get our entire library of TED Talks, transcripts, translations, personalized talk recommendations and more.\n\nhttps://youtube.com/live/5MWT_doo68k\n\nTED's videos may be used for non-commercial purposes under a Creative Commons License, Attribution–Non Commercial–No Derivatives (or the CC BY – NC – ND 4.0 International) and in accordance with our TED Talks Usage Policy: https://www.ted.com/about/our-organization/our-policies-terms/ted-talks-usage-policy. For more information on using TED for commercial purposes (e.g. employee learning, in a film or online course), please submit a Media Request at https://media-requests.ted.com\n\n#TED #TEDTalks #AI #OpenAI",
    "subtitles": [
      {
        "start": "4.268",
        "dur": "1.735",
        "text": "Chris Anderson: Sam, welcome to TED."
      },
      {
        "start": "6.003",
        "dur": "1.402",
        "text": "Thank you so much for coming."
      },
      ...
    ]
  }
}
```

## Deploy your own instance

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/xiaoluoboding/cw-youtube-transcript)

## Tech Stack

- [Cloudflare Workers](https://workers.cloudflare.com/) - Deploy serverless code instantly across the globe
- [Hono](https://hono.dev/) - Ultrafast web framework for the Edges
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
- [Vitest](https://vitest.dev/) - Next generation testing framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [lodash-es](https://lodash.com/) - Modern JavaScript utility library
- [DayJS](https://day.js.org/) - Fast 2kB alternative to Moment.js

## License

MIT [xiaoluoboding](https://github.com/xiaoluoboding)
