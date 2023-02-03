import Search from "../../features/search";
import Theme from "../../features/site_theme";
import BlogCategories from "../../features/blog_categories";
import Button from "../../components/ui/Button";
import Social from "../../components/global/Social";
import LikedByOthers from "../../features/liked_by_others/index";
import { useLocation } from "react-router-dom";

const HomePageAside: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <aside>
      <Search />
      <Theme />
      {path === "/" && <BlogCategories />}
      <div id="service-modal">
        <h3>Want to get your two wheeler serviced?</h3>
        <Button
          id="book-service-aside"
          className="solid-btn"
          onClick={() => {
            console.log("book a service");
          }}
        >
          Book a Service
        </Button>
      </div>
      <Social text="Follow us on Social Media" />
      <LikedByOthers />
    </aside>
  );
};

export default HomePageAside;
