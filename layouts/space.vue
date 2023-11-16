<template>
  <div>
    <ul class="flex gap-10">
      <li><NuxtLink to="/space-tourism/home">Home</NuxtLink></li>
      <li><NuxtLink to="/space-tourism/destination">destination</NuxtLink></li>
      <li><NuxtLink to="/space-tourism/crew">crew</NuxtLink></li>
      <li><NuxtLink to="/space-tourism/technology">technology</NuxtLink></li>
    </ul>
    <main>
      <slot />
    </main>
  </div>
</template>
