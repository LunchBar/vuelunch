<template>
  <div class="questions">
    <h1>Questions</h1>
    <ul>
      <li v-for="question in questions">
        <router-link :to="{name: 'Voting', params: {questionId: question.id}}">
          <span v-text="question.question_text"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'Question',
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  data () {
    return {
      questions: []
    }
  },
  methods: {
    fetchData () {
      api
        .then(client => client.questions.questions_list())
        .then(respond => JSON.parse(respond.data))
        .then(data => data.results)
        .then(list => {
          this.questions = list
        })
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>
