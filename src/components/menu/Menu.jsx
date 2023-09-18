/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './menu.module.css';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <MenuPosts
          category='travel'
          postTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          username='John Doe'
          date='- 10.03.2023 '
        />
        <MenuPosts
          category='culture'
          postTitle='Lorem ipsum dolor sit amet.'
          username='Leo Garza'
          date='- 10.12.2023 '
        />
        <MenuPosts
          category='food'
          postTitle='Lorem ipsum dolor sit about delicous food.'
          username='John Doe'
          date='- 10.03.2023 '
        />
        <MenuPosts
          category='fashion'
          postTitle='Lorem ipsum dolor sit about cool fashion.'
          username='John Doe'
          date='- 10.03.2023 '
        />
      </div>

      <h2 className={styles.subTitle}>Discover by topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={styles.subTitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>
        <MenuPosts
          category='travel'
          postTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          username='John Doe'
          date='- 10.03.2023 '
          image='/p1.jpeg'
        />
        <MenuPosts
          category='culture'
          postTitle='Lorem ipsum dolor sit amet.'
          username='Leo Garza'
          date='- 10.12.2023 '
          image='/p1.jpeg'
        />
        <MenuPosts
          category='food'
          postTitle='Lorem ipsum dolor sit about delicous food.'
          username='John Doe'
          date='- 10.03.2023 '
          image='/p1.jpeg'
        />
        <MenuPosts
          category='fashion'
          postTitle='Lorem ipsum dolor sit about cool fashion.'
          username='John Doe'
          date='- 10.03.2023 '
          image='/p1.jpeg'
        />
      </div>
    </div>
  );
}

export default Menu;
