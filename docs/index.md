---
layout: home
---

<div class='fixed w-screen h-screen top-0 left-0 flex flex-col items-center justify-center'>
  <div class='mb-16'>
    <div class='text-6xl flex items-start justify-center space-x-4'>
      <span class='yellow-js-text font-bold'>OH NO! JS!</span><Badge type="info" text="alpha" /></div>
    <div class='text-xl text-center'> A functions' library that makes JS syntax easier.</div>
  </div>

  <div class='mb-16 flex space-x-2'>
    <a href='./guide/' class='rounded-full block px-4 py-2 bg-yellow-js text-xl'>Getting started</a>
    <a href='./documentation/' class='rounded-full block px-4 py-2 border text-xl'>Documentation</a>
  </div>

  <div class='flex space-x-6 items-center'>
    <a href='https://github.com/dmrompav/oh-no-js' target='_blank'>
      <img class='w-12' src='/github.svg' />
    </a>
    <a href='https://www.npmjs.com/package/oh-no-js' target='_blank'>
      <img class='w-12' src='/npm.svg' />
    </a>
  </div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

.VPImage.logo {
  transform: scale(2);
}

.yellow-js-text {
  font-family: 'Bangers', cursive;
  color: #F0DB4F;
  text-shadow:
    -2px -2px 0 #323330,
    2px -2px 0 #323330,
    -2px 2px 0 #323330,
    2px 2px 0 #323330;
}

.bg-yellow-js {
  background-color: #F0DB4F;
}
</style>
