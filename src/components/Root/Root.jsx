import MainContent from "../MainContent/MainContent"
import SiteHeader from "../SiteHeader/SiteHeader"
import SiteFooter from "../SiteFooter/SiteFooter"

function Root() {
  return (
    <div>
      <SiteHeader />
      <MainContent />
      <SiteFooter/>
    </div>
  )
}

export default Root
