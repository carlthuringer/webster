var path = require("path");

/**
 * GET /wiki/Testing
 *
 * host: en.wikipedia.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 301;

  res.setHeader("date", "Sun, 11 Sep 2016 14:59:58 GMT");
  res.setHeader("content-type", "text/html; charset=iso-8859-1");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("server", "mw1254.eqiad.wmnet");
  res.setHeader("x-powered-by", "HHVM/3.3.0-static");
  res.setHeader("location", "https://en.wikipedia.org/wiki/Testing");
  res.setHeader("expires", "Tue, 11 Oct 2016 14:29:40 GMT");
  res.setHeader("vary", "X-Forwarded-Proto");
  res.setHeader("x-varnish", "218784580, 3570149382 3563945685");
  res.setHeader("via", "1.1 varnish, 1.1 varnish");
  res.setHeader("age", "1818");
  res.setHeader("x-cache", "cp1065 miss, cp1065 hit/1");
  res.setHeader("x-cache-status", "hit");
  res.setHeader("set-cookie", ["WMF-Last-Access=11-Sep-2016;Path=/;HttpOnly;secure;Expires=Thu, 13 Oct 2016 12:00:00 GMT","GeoIP=US:MI:Troy:42.60:-83.18:v4; Path=/; secure; Domain=.wikipedia.com"]);
  res.setHeader("x-analytics", "https=1;nocookies=1");
  res.setHeader("x-client-ip", "68.55.137.129");
  res.setHeader("cache-control", "private, s-maxage=0, max-age=0, must-revalidate");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("PCFET0NUWVBFIEhUTUwgUFVCTElDICItLy9JRVRGLy9EVEQgSFRNTCAyLjAvL0VOIj4KPGh0bWw+PGhlYWQ+Cjx0aXRsZT4zMDEgTW92ZWQgUGVybWFuZW50bHk8L3RpdGxlPgo8L2hlYWQ+PGJvZHk+CjxoMT5Nb3ZlZCBQZXJtYW5lbnRseTwvaDE+CjxwPlRoZSBkb2N1bWVudCBoYXMgbW92ZWQgPGEgaHJlZj0iaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGVzdGluZyI+aGVyZTwvYT4uPC9wPgo8L2JvZHk+PC9odG1sPgo=", "base64"));
  res.end();

  return __filename;
};
