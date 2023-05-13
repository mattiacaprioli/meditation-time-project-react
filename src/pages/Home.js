import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Tips from '../components/Tips';
import Review from '../components/Review';

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
