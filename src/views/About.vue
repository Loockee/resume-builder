<template>
  <div>
    <a-row>
      <a-col :span="6" :offset="6">
        <a-card style="width: 40pc">
          <img
            alt="example"
            src="https://cuelogic.com/wp-content/uploads/2017/06/SMACK-Architecture.jpg"
            slot="cover"
          />
          <a-card-meta title="Smack - Fast Data">
            <template slot="description"
            >www.instagram.com</template
            >
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col class="gutter-row" span="12">
        <a-card :loading="true" title="How to use the simulator">
          work in progress1
        </a-card>
      </a-col>
      <a-col class="gutter-row" span="12">
        <a-card
          style="width:100%"
          title="Usage"
          :tabList="tabList"
          :activeTabKey="key"
          @tabChange="key => onTabChange(key, 'key')"
        >
          {{contentList[key]}}
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
  export default {
    name: "About",
    data() {
      return {
        tabList: [
          {
            key: 'tab1',
            tab: 'Infrastructure',
          },
          {
            key: 'tab2',
            tab: 'Development',
          },
          {
            key: 'tab3',
            tab: 'Documentation',
          },
        ],
        contentList: {
          tab1: 'content1',
          tab2: 'content2',
          tab3: 'content2',
        },
        tabListNoTitle: [
          {
            key: 'article',
            tab: 'article',
          },
          {
            key: 'app',
            tab: 'app',
          },
          {
            key: 'project',
            tab: 'project',
          },
        ],
        key: 'tab1',
        noTitleKey: 'app',
      };
    },
    methods: {
      onTabChange(key, type) {
        this[type] = key;
      },
    },
  };
</script>
