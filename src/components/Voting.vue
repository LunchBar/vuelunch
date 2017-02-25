<template>
  <div class="voting">
    <ul>
      <li is="choice-item" v-for="choiceItem in choiceItems" :choiceItem="choiceItem"></li>
    </ul>
    <button type="button" @click="vote">Vote</button>
  </div>
</template>

<script>
import api from '../api'
import router from '../router'
import ChoiceItem from './ChoiceItem'

const MAX_VOTES = 5

export default {
  name: 'Voting',
  components: {
    'choice-item': ChoiceItem
  },
  props: ['questionId'],
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  data () {
    return {
      choiceItems: []
    }
  },
  methods: {
    confirmVote () {
      return confirm('Proceed with voting?')
    },
    fetchData () {
      api
      .then(client => client.questions.questions_choices_list({question_pk: this.questionId}))
        .then(respond => JSON.parse(respond.data))
        .then(list => {
          this.choiceItems = list
        })
    },
    votable () {
      let voteCount = this.$children.filter(it => it.$refs.checkbox.checked === true).length
      return voteCount <= MAX_VOTES
    },
    vote () {
      if (!this.confirmVote()) {
        return
      }
      this.voteAllChecked()
        .then(() => alert('Voting Sucess!'))
        .then(() => router.push('/questions'))
    },
    voteAllChecked () {
      let itemsToVote = this.$children
        .filter(it => it.$refs.checkbox.checked === true)
        .map(it => it.choiceItem.id)
      return Promise
        .all(
          itemsToVote.map(choiceId => {
            api.then(client => client.choices.choices_vote({id: choiceId}))
          }))
    }
  }
}
</script>

<style></style>
