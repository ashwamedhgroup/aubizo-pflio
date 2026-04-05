/**
 * Remote images (Unsplash) for marketing UI. Replace with your own assets in /public when ready.
 * License: https://unsplash.com/license — attribution encouraged (see footer).
 */

const BASE = 'https://images.unsplash.com'

export function unsplashSrc(photoId, width, height) {
  const h = height ? `&h=${height}` : ''
  return `${BASE}/${photoId}?auto=format&fit=crop&w=${width}${h}&q=80`
}

/** @param {string} photoId e.g. photo-1551288049-bebda4e38f71 */
export function unsplashSrcSet(photoId, widths = [480, 768, 1100, 1400]) {
  return widths.map((w) => `${unsplashSrc(photoId, w)} ${w}w`).join(', ')
}

/** Curated IDs — thematic match to Aubizo (operations, product, agro, trust). */
export const PHOTOS = {
  heroPrimary: 'photo-1551288049-bebda4e38f71',
  heroSecondary: 'photo-1522071820081-009f0129c71c',
  introSplit: 'photo-1552664730-d307ca884978',
  offeringErp: 'photo-1586528116311-ad8dd3c8310d',
  offeringWeb: 'photo-1498050108023-c5249f4df085',
  offeringCustom: 'photo-1555066931-4365d14bab8c',
  offeringProduct: 'photo-1460925895917-afdab827c52f',
  whyUs: 'photo-1504384308090-c894fdcc538d',
  industries: 'photo-1625246333195-78d9c38ad447',
  productDashboard: 'photo-1551288049-bebda4e38f71',
  productAnalytics: 'photo-1460925895917-afdab827c52f',
  productInventory: 'photo-1586528116311-ad8dd3c8310d',
  productReports: 'photo-1504860709740-b53d518a9366',
  productMobile: 'photo-1512941937669-90a1b58e7e9c',
  caseAssociation: 'photo-1529156069898-49953e39b3ac',
  caseAgro: 'photo-1500937386664-56d1dfef3854',
  caseManufacturing: 'photo-1581092160562-40aa08f48857',
  caseResearch: 'photo-1532094349884-543bc11b234d',
  aboutLeadership: 'photo-1560250097-0b93528c311a',
  contactMap: 'photo-1524661135-423995f22d0b',
  contactOffice: 'photo-1497366216548-37526070297c',
  insightOps: 'photo-1454165804606-c3d57bc86b40',
  insightErp: 'photo-1553877522-43269d4ea984',
  insightAuto: 'photo-1485827404703-89b55fcc595e',
  productsHero: 'photo-1551434678-e076c223a692',
  demoBanner: 'photo-1517245386807-bb43f82c33c4',
}
