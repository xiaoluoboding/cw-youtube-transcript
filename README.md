# Metafy on Cloudflare

> Easily scrape metadata from websites as a service.

## Usage

Enter a valid `$URL` as params

```bash
curl https://metafy.indiehacker.workers.dev/?url=$URL
```

## Example

### Input

```bash
curl https://metafy.indiehacker.workers.dev/?url=https://sidespace.app
```

### Output

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "title": "Side Space | Your AI Agent for Smart Browsing. | sidespace.app",
    "description": "Research, summarize, and organize, less talk, more action . Side Space’s contextual AI works inside your side panel to automate your workflow.",
    "author": "",
    "publisher": "Side Space",
    "image": "https://www.sidespace.app/preview.webp",
    "feeds": [],
    "date": "",
    "lang": "en",
    "logo": "https://www.sidespace.app/favicon.svg",
    "video": "",
    "keywords": "",
    "jsonld": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@id": "https://www.sidespace.app/#website",
          "@type": "WebSite",
          "description": "Research, summarize, and organize, less talk, more action . Side Space’s contextual AI works inside your side panel to automate your workflow.",
          "inLanguage": "en",
          "name": "sidespace.app",
          "url": "https://www.sidespace.app/"
        },
        {
          "@id": "https://www.sidespace.app/#webpage",
          "@type": "WebPage",
          "description": "Research, summarize, and organize, less talk, more action . Side Space’s contextual AI works inside your side panel to automate your workflow.",
          "url": "https://www.sidespace.app/",
          "isPartOf": {
            "@id": "https://www.sidespace.app/#website"
          },
          "potentialAction": [
            {
              "@type": "ReadAction",
              "target": [
                "https://www.sidespace.app/"
              ]
            }
          ]
        }
      ]
    },
    "link": "https://www.sidespace.app/",
    "domain": "https://www.sidespace.app",
    "type": "link"
  }
}
```

## Deploy your own instance

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/xiaoluoboding/cw-metafy)

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
