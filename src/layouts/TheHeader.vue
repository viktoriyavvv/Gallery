<template>
  <div class="bg-blue z-1 w-full">
    <div class="xl:container mx-auto p-2.5 xl:p-0">
      <div class="flex text-center w-full justify-center">
        <router-link class="block text-[40px] px-3 py-2" :to="{ name: 'MainPage' }"
          >Главная</router-link
        >
        <router-link class="block text-[40px] px-3 py-2" :to="{ name: 'ProfilePage' }">Профиль</router-link>
      </div>
    </div>
  </div>
</template>
