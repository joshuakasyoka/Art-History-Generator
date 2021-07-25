<template>
  <div class="hello">
    <h1>{{ currentQuestion[index].painting }}</h1>
    <div class="container">
    <img :src="currentQuestion[index].img" alt="Questions Image">
      <div class="answer-container">
    <input type="text" v-model="answer" placeholder="Pablo Picasso">
    <button @keydown.enter="checkAnswer" @click="checkAnswer" class="btn btn-primary">Submit</button>
        <button @click="Help" class="btn btn-primary">?</button>
      </div>
      <h2 v-if="error">Oh no, Try Again!</h2>
      <h2 v-if="showAnswer">{{currentQuestion[index].questionAnswer}}</h2>
      <p v-if="showAnswer">{{currentQuestion[index].info}}</p>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import questions from '../../src/data.js'
export default {
  name: 'WhichArtist',
  data () {
    return {
      index: 0,
      answer: [],
      currentQuestion: _.shuffle(questions),
      showAnswer: false,
      error: false
    }
  },
  methods: {

    checkAnswer () {
      if (this.answer === this.currentQuestion[this.index].questionAnswer) {
        this.index++
        this.answer = []
        this.showAnswer = false
      } else if (this.answer !== this.currentQuestion[this.index].questionAnswer) {
        this.error = true
      }
    },
    Help () {
      if (this.showAnswer === false) {
       this.showAnswer = true;
        this.error = false
      }
    }
  }
}

</script>


<style scoped>

h3 {
  margin: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input {
  padding: 3px;
  margin-top: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  margin-top: 5px;
  margin-left: 5px;
  border: 0;
  color: white;
  background-color: #e57272;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

button:hover {
  opacity: 80%;
}

h3 {
color: #e57272;
}

p {
  text-align: center;
  padding: 10px;

}

@media screen and (min-width: 320px) {

  img {
    width: 80%;
    height: 80%;
  }
}

@media screen and (min-width: 481px) {
  img {
    width: 30%;
    height: 30%;
  }

  p {
    text-align: center;
    margin-left: 300px;
    margin-right: 300px;
  }
}
</style>
