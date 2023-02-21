import React from "react";
import styles from "./blog.module.css";
import InputComponent from "./../../components/Input/input";
import Posts from "./../Posts/Posts";
import SinglePost from "./../SinglePost/SinglePost";
import { Routes, Route } from "react-router-dom";
const Blog = () => {
  return (
    <section className={styles.blog}>
      <main>
        <h1 className={styles.blog__text}>The EcoVanguard Blog</h1>
        <div className={styles.blog__list}>
          <ul>
            <li>Top News</li>
            <li>Featured Articles</li>
            <li>Popular News</li>
          </ul>
          <div>
            <InputComponent
              placeholder="Search news"
              bgImage="blog-search.svg"
            />
          </div>
        </div>
        <Posts />
        <Routes>
          <Route exact path="/blog/:slug" element={<SinglePost />} />
        </Routes>
      </main>
    </section>
  );
};

export default Blog;
