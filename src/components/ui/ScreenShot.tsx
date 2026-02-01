export default function getScreenshotUrl(url: string) {
  const microlinkApi = 'https://api.microlink.io';
  const params = new URLSearchParams({
    url: url,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    waitFor: '2000',
    viewport: '1200x800',
  });

  return `${microlinkApi}?${params.toString()}`;
}
