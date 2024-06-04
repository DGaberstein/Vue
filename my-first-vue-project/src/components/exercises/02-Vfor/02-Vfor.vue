<!-- iteration exercise:

Create a reactive object that contains information:

String - Name
Number- Age
Array - Favorite Music Bands
Object - 3 Keys
favoritePizzaType - String
favoriteDrinks -Array (multiple)
favoriteBurgertypes - Array (multiples)
Create a component andd. store this info aduse the v-for directive to loop through and display theinfo withinn the template -->

<!-- HTML -->
<template>
    <div>
      <h1>{{ person.name }}</h1>
      <p>Age: {{ person.age }}</p>
      
      <h2>Favorite Music Bands</h2>
      <ul>
        <li v-for="band in person.favoriteMusicBands" :key="band">{{ band }}</li>
      </ul>
      
      <h2>Favorite Pizza Type</h2>
      <p>{{ person.favoritePizzaType }}</p>
      
      <h2>Favorite Drinks</h2>
      <ul>
        <li v-for="drink in person.favoriteDrinks" :key="drink">{{ drink }}</li>
      </ul>
      
      <h2>Favorite Burger Types</h2>
      <ul>
        <li v-for="burger in person.favoriteBurgerTypes" :key="burger">{{ burger }}</li>
      </ul>
      
      <h2>Additional Info</h2>
      <ul>
        <li>Favorite Color: {{ person.additionalInfo.favoriteColor }}</li>
        <li>Hobby: {{ person.additionalInfo.hobby }}</li>
        <li>Country: {{ person.additionalInfo.country }}</li>
      </ul>
    </div>
  </template>
  

<!-- JS  -->
<script setup>
import { reactive } from 'vue';

const person = reactive({
  name: "Daniel Gaberstein",
  age: 26,
  favoriteMusicBands: ["Cream", "Genesis", "Led Zeppelin"],
  additionalInfo: {
    favoriteColor: "Green",
    hobby: "Reading",
    country: "Germany"
  },
  favoritePizzaType: "Pepperoni",
  favoriteDrinks: ["Coke", "Japan Sport Water", "Water"],
  favoriteBurgerTypes: ["Cheeseburger", "Chicken Burger", "Bacon Burger"]
});
</script>

<!-- CSS -->
<style scoped>
h1, h2 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
