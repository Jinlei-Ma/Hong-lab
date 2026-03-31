import Link from "next/link";

import { navigationItems, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div className="footerIntro">
          <h2>{siteConfig.brand.primaryNameZh}</h2>
          <p>{siteConfig.brand.taglineZh}</p>
          <p className="footerMuted">
            本站内容将持续更新，研究成果、团队成员、招生信息与正式链接都可在后续继续完善。
          </p>
        </div>

        <div>
          <h3>站点导航</h3>
          <ul className="footerList footerNavList">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.titleZh}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>联系信息</h3>
          <ul className="footerList">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.addressZh}</li>
            <li>{siteConfig.contact.officeHoursZh}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
