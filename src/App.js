import NavBar from "./NavBar";
import Home from "./Home";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Details from "./Details";
import NewBlog from "./NewBlog";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {
  let [blogs, setBlogs] = useState([
    {
      title: "The first Avenger",
      body: "I can do this all day! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl ligula, luctus ut placerat eu, ornare id diam. Nam nisi lorem, tincidunt eget orci sed, egestas tincidunt metus. Donec gravida turpis quis cursus pretium. Cras tortor nisl, porta quis magna a, placerat rhoncus nibh. Phasellus cursus vitae nunc quis vestibulum. Mauris in lacus consequat, pulvinar ipsum nec, volutpat massa. Quisque sed eros ut nisl mollis vehicula. Nunc interdum dignissim ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque euismod, nibh ac dapibus congue, neque nibh scelerisque tellus, sit amet pellentesque purus enim quis mi. Suspendisse mattis odio eget sem laoreet, at pharetra est blandit. Nunc commodo est a nibh semper elementum. Nullam eleifend varius est vitae lobortis. Proin vitae luctus odio.",
      author: "Steve Rogers",
      id: 1,
    },
    {
      title: "There was no other way.",
      body: "I am the Sorcerer Supreme Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl ligula, luctus ut placerat eu, ornare id diam. Nam nisi lorem, tincidunt eget orci sed, egestas tincidunt metus. Donec gravida turpis quis cursus pretium. Cras tortor nisl, porta quis magna a, placerat rhoncus nibh. Phasellus cursus vitae nunc quis vestibulum. Mauris in lacus consequat, pulvinar ipsum nec, volutpat massa. Quisque sed eros ut nisl mollis vehicula. Nunc interdum dignissim ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque euismod, nibh ac dapibus congue, neque nibh scelerisque tellus, sit amet pellentesque purus enim quis mi. Suspendisse mattis odio eget sem laoreet, at pharetra est blandit. Nunc commodo est a nibh semper elementum. Nullam eleifend varius est vitae lobortis. Proin vitae luctus odio.",
      author: "Doctor Stephen Strange",
      id: 2,
    },
    {
      title: "The Amazing Spiderman",
      body: "With great power, there also must come great responsibility. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl ligula, luctus ut placerat eu, ornare id diam. Nam nisi lorem, tincidunt eget orci sed, egestas tincidunt metus. Donec gravida turpis quis cursus pretium. Cras tortor nisl, porta quis magna a, placerat rhoncus nibh. Phasellus cursus vitae nunc quis vestibulum. Mauris in lacus consequat, pulvinar ipsum nec, volutpat massa. Quisque sed eros ut nisl mollis vehicula. Nunc interdum dignissim ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque euismod, nibh ac dapibus congue, neque nibh scelerisque tellus, sit amet pellentesque purus enim quis mi. Suspendisse mattis odio eget sem laoreet, at pharetra est blandit. Nunc commodo est a nibh semper elementum. Nullam eleifend varius est vitae lobortis. Proin vitae luctus odio.",
      author: "Peter Parker",
      id: 3,
    },

    {
      title: "I Lost Everything.",
      body: "This is me being reasonable Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl ligula, luctus ut placerat eu, ornare id diam. Nam nisi lorem, tincidunt eget orci sed, egestas tincidunt metus. Donec gravida turpis quis cursus pretium. Cras tortor nisl, porta quis magna a, placerat rhoncus nibh. Phasellus cursus vitae nunc quis vestibulum. Mauris in lacus consequat, pulvinar ipsum nec, volutpat massa. Quisque sed eros ut nisl mollis vehicula. Nunc interdum dignissim ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque euismod, nibh ac dapibus congue, neque nibh scelerisque tellus, sit amet pellentesque purus enim quis mi. Suspendisse mattis odio eget sem laoreet, at pharetra est blandit. Nunc commodo est a nibh semper elementum. Nullam eleifend varius est vitae lobortis. Proin vitae luctus odio.",
      author: "Scarlett Witch",
      id: 4,
    },
    {
      title: "The Mad Titan",
      body: "The hardest choices require the strongest wills. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl ligula, luctus ut placerat eu, ornare id diam. Nam nisi lorem, tincidunt eget orci sed, egestas tincidunt metus. Donec gravida turpis quis cursus pretium. Cras tortor nisl, porta quis magna a, placerat rhoncus nibh. Phasellus cursus vitae nunc quis vestibulum. Mauris in lacus consequat, pulvinar ipsum nec, volutpat massa. Quisque sed eros ut nisl mollis vehicula. Nunc interdum dignissim ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque euismod, nibh ac dapibus congue, neque nibh scelerisque tellus, sit amet pellentesque purus enim quis mi. Suspendisse mattis odio eget sem laoreet, at pharetra est blandit. Nunc commodo est a nibh semper elementum. Nullam eleifend varius est vitae lobortis. Proin vitae luctus odio.",
      author: "Thanos",
      id: 5,
    },
  ]);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home blogs={blogs} setBlogs={setBlogs} />}
          />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/blogs/:id"
            element={<Details blogs={blogs} title={"Blog Details"} />}
          />

          <Route
            path="/new-blog"
            element={<NewBlog blogs={blogs} setBlogs={setBlogs} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
