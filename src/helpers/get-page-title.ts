// eslint-disable-next-line max-len
const getPageTitle = (pageContext: { pageExports: { documentProps?: { title: string } }; documentProps?: { title: string } }): string => (pageContext.pageExports.documentProps || {}).title
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    || (pageContext.documentProps || {}).title
    || "Demo";

export default getPageTitle;
