<template>
  <div class="data-injecter">
    <h1>Here will be the data injector</h1>
    <a-card title="Card title" :bordered="false" style="width: 300px">
    <ul v-for="f in fields" v-bind:key="f.id">
      <li><span>{{f.key}}</span>&nbsp;<span>{{f.value}}</span></li>
    </ul>
    <a-button type="primary" @click="addField">OK</a-button>
    </a-card>
  </div>
</template>

<script>
  export default {
      name: 'DataInjecter',
      data() {
          return {
              fields: [
                  {
                      id: 1,
                      key: 'key',
                      value: 'value'
                  }
              ]
          }
      },
      methods: {
          addField() {
              const id = this.fields.length + 1;
              this.fields.push({id, key: 'key', value: 'value'})
          }
      }
  }
</script>