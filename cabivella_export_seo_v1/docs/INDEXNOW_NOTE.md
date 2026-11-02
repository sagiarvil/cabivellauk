# IndexNow: use after genuinely new/updated URLs are live

IndexNow is for participating search engines (Bing and others), **not** a Google Indexing API substitute.

1. Generate a random alphanumeric key with a secure RNG.
2. Publish `<key>.txt` at `https://cabivella.co.uk/<key>.txt` containing only that key.
3. Submit changed/added URLs only to `https://api.indexnow.org/indexnow` using the official JSON API.
4. Verify statuses and check in Bing Webmaster Tools. Do not ping 164 unchanged pages repeatedly.
5. Do not ship a real key inside source control or this package.

Example request after verified publication (replace KEY and URL; actual publishing must be done from authorized infrastructure):

```bash
curl -sS -X POST https://api.indexnow.org/indexnow \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d '{"host":"cabivella.co.uk","key":"KEY","keyLocation":"https://cabivella.co.uk/KEY.txt","urlList":["https://cabivella.co.uk/trade/europe/"]}'
```
