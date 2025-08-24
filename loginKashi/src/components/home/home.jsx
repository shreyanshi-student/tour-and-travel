import Banner from './banner/banner';
import About from './about-section/about'
import VaranasiHighlight from './VaranasiHighlight/Varanasihighlight'
import AyodhyaHighlight from './AyodhyaHighlight/ayodhyahighlight';
import Prayagrajhighlight from './PrayagrajHighlight/prayagrajHighlight';
import Blogs from './BlogsSection/blogs';
import Services from './services/services'
import EnquiryPopup from '../EnquiryForm/enquiryform'

const Home = () => {
  return (
    <>
      <Banner />
       <EnquiryPopup />
      <Services/>
      <About/>
      <VaranasiHighlight/>
      {/* <AyodhyaHighlight/> */}
      {/* <Prayagrajhighlight/> */}
      <Blogs/>
    </>
  );
};

export default Home;
