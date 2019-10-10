<template>
  <div id="components-form-demo-advanced-search">
    <div class="search-mode-selector">
      <a-switch  @change='onModeChange'/>
      <span> Advanced search </span>
    </div>
    <a-form
        v-if="mode === 'simple'"
        class="ant-advanced-search-form"
        :form="form"
        @submit="handleSearch"
    >
      <a-input-search
          v-model="searchInput"
          placeholder="input search text"
          @search="handleSearch"
          enterButton
      />
    </a-form>
    <a-form
        v-if="mode === 'advanced'"
        class="ant-advanced-search-form"
        :form="form"
        @submit="handleSearch"
    >
      <a-row :gutter="24">
        <a-col
            v-for="i in 10"
            :key="i"
            :span="8"
            :style="{ display: i < count ? 'block' : 'none' }"
        >
          <a-form-item :label="`Field ${i}`">
            <a-input
                v-model="textFields[`field-${i}`]"
                @change="onValueChange(`field-${i}`)"
                v-decorator="[
                `field-${i}`,
                {
                  rules: [{
                    required: false,
                    message: 'Input something!',
                  }],
                }
              ]"
                placeholder="placeholder"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col
            :span="24"
            :style="{ textAlign: 'right' }"
        >
          <a-button
              type="primary"
              html-type="submit"
          >
            Search
          </a-button>
          <a-button
              :style="{ marginLeft: '8px' }"
              @click="handleReset"
          >
            Clear
          </a-button>
          <a
              :style="{ marginLeft: '8px', fontSize: '12px' }"
              @click="toggle"
          >
            Collapse <a-icon :type="expand ? 'up' : 'down'" />
          </a>
        </a-col>
      </a-row>
    </a-form>
    <div class="search-result-list">
      Search Result List
    </div>
  </div>
</template>

<style>
  .ant-advanced-search-form {
    padding: 24px;
    background: #fbfbfb;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
  }

  .ant-advanced-search-form .ant-form-item {
    display: flex;
  }

  .ant-advanced-search-form .ant-form-item-control-wrapper {
    flex: 1;
  }

  #components-form-demo-advanced-search .ant-form {
    max-width: none;
  }
  #components-form-demo-advanced-search .search-result-list {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .search-mode-selector {
    margin-bottom: 20px;
  }
</style>

<script>
    export default {
        name: 'Search',
        data () {
            return {
                mode:'simple', // advanced | simple
                textFields: {
                    'fields-1': '',
                    'fields-2': '',
                    'fields-3': '',
                    'fields-4': '',
                    'fields-5': '',
                    'fields-6': '',
                    'fields-7': '',
                    'fields-8': '',
                    'fields-9': '',
                    'fields-10': '',
                },
                searchInput: '',
                expand: false,
                form: this.$form.createForm(this),
            };
        },
        computed: {
            count () {
                return this.expand ? 11 : 7;
            },
        },
        methods: {
            handleSearch  (e) {
                e.preventDefault();
                this.form.validateFields((error, values) => {
                    console.log('error', error);
                    console.log('Received values of form: ', values);
                });
            },

            handleReset () {
                this.form.resetFields();
                this.searchInput = '';
            },

            toggle  () {
                this.expand = !this.expand;
            },
            onModeChange(checked) {
                this.mode = checked ? 'advanced' : 'simple';
            },
            // eslint-disable-next-line no-unused-vars
            onValueChange(index) {
                this.refreshSearchText();
            },
            refreshSearchText() {
                const a = [];
                Object.keys(this.textFields)
                      .filter(b => (this.textFields[b] !== ''))
                      .forEach(b => {
                    a.push(`${b}:${this.textFields[b]}`);
                });
                this.searchInput = a.join(' + ');
            }
        },
    };
</script>
