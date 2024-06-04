<script setup>
import { ref } from 'vue';

const age = ref(26);
const dob = ref('1997-10-10');
const birthLocation = ref('Almaty, Kazakhstan');
const currentLocation = ref('Germany');
const favoriteFoods = ref(['Takoyaki', 'Udon', 'Ice Cream']);

const favoriteMovies = ref({
  action: 'Gravity 2013',
  drama: 'Legend 2015',
  comedy: 'Central Intelligence 2016'
});
</script>
