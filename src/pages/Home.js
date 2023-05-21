import React from 'react';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import Tips from '../components/Tips/Tips';
import Review from '../components/Reviews/Review';

export default function Home() {
  return (
    <>
      <Hero>
        <Card />
      </Hero>
      <Tips />
      <Review />
    </>
  )
}
