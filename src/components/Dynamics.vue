<template>
  <div id="components-form-demo-vuex">
    <a-row>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Message">
          <a-input
            v-decorator="[
              'message',
              {
                rules: [{ required: true, message: 'Messaged!' }],
              },
            ]"
          />
        </a-form-item>
        <a-button type="primary" html-type="submit">
          Send Message
        </a-button>
      </a-form>
    </a-row>
    <a-row>
      <a-col>
        <a-list itemLayout="horizontal" :dataSource="allExchanges">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-list-item-meta
              description="message content"
            >
              <a slot="title" href="https://vue.ant.design/">{{item}}</a>
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'Home',
    data() {
      return {
        formLayout: 'horizontal',
        form: this.$form.createForm(this, { name: 'idataInjector' }),
      }
    },
    computed: {
      ...mapGetters(['allExchanges', 'message']),
    },
    watch: {
      message(val) {
        console.log('this.$store.state.message: ', val);
        this.form.setFieldsValue({ message: val });
      },
    },
    created() {
      this.form = this.$form.createForm(this, {
        onFieldsChange: (_, changedFields) => {
          this.$emit('change', changedFields);
        },
        mapPropsToFields: () => {
          return {
            message: this.$form.createFormField({
              value: this.getMessage,
            }),
          };
        },
        onValuesChange: (_, values) => {
          //console.log(values);
          // Synchronize to vuex store in real time
          // this.$store.commit('update', values)
          //this.updateMessage(values);
        },
      });
    },
    methods: {
      ...mapActions(['addExchange', 'updateMessage']),
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            //console.log('Received values of form: ', values);
            //this.$store.commit('update', values);
            this.addExchange(values.message);
          }
        });
      },
    },

  };
</script>

<style>
  #components-form-demo-vuex .language-bash {
    max-width: 400px;
    border-radius: 6px;
    margin-top: 24px;
  }
</style>
